/**
 * MUNCHOS Client Service (CRM & Client Analytics Engine)
 * Manages client entities, lead tracking, event metrics, and repeat customer analytics.
 * Supports Cloud Firestore sync with LocalStorage persistence fallback.
 */

import { db, isFirebaseLive } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const STORAGE_KEY_CLIENTS = 'munchos_clients_v1';

// Initial realistic pre-populated Munich clients matching initial mock reservations
const INITIAL_MOCK_CLIENTS = [
  {
    id: 'cli_elena_r',
    clientName: 'Elena R.',
    clientEmail: 'elena.r@example.de',
    clientPhone: '+49 176 9876543',
    location: 'Bogenhausen, Múnich',
    totalEventsCount: 2,
    completedEventsCount: 2,
    cancelledEventsCount: 0,
    totalGuestsServed: 50,
    totalSpent: 2960,
    isRepeatCustomer: true,
    firstEventDate: '2026-06-10',
    lastEventDate: '2026-08-15',
    notes: 'Cliente habitual. Prefiere vinos vascos y menús sin gluten para celíacos.',
    tags: ['Recurrente', 'VIP', 'Particular'],
    createdAt: '2026-06-01T10:00:00Z',
    updatedAt: '2026-08-15T18:00:00Z'
  },
  {
    id: 'cli_carlos_m',
    clientName: 'Carlos M. (Munich Law Firm)',
    clientEmail: 'carlos.firm@munich-law.de',
    clientPhone: '+49 89 5544332',
    location: 'Glockenbachviertel, Múnich',
    totalEventsCount: 1,
    completedEventsCount: 1,
    cancelledEventsCount: 0,
    totalGuestsServed: 35,
    totalSpent: 2275,
    isRepeatCustomer: false,
    firstEventDate: '2026-08-15',
    lastEventDate: '2026-08-15',
    notes: 'Cuenta corporativa. Requiere factura detallada a nombre del despacho.',
    tags: ['Corporativo'],
    createdAt: '2026-08-02T14:30:00Z',
    updatedAt: '2026-08-15T12:00:00Z'
  },
  {
    id: 'cli_sofia_m',
    clientName: 'Markus & Sofía',
    clientEmail: 'sofia.m@web.de',
    clientPhone: '+49 171 2233445',
    location: 'Schwabing, Múnich',
    totalEventsCount: 1,
    completedEventsCount: 0,
    cancelledEventsCount: 0,
    totalGuestsServed: 0,
    totalSpent: 0,
    isRepeatCustomer: false,
    firstEventDate: '2026-08-22',
    lastEventDate: '2026-08-22',
    notes: 'Cena íntima de aniversario. Pendiente de pago final.',
    tags: ['Particular', 'Pendiente'],
    createdAt: '2026-08-04T16:15:00Z',
    updatedAt: '2026-08-04T16:15:00Z'
  },
  {
    id: 'cli_thomas_b',
    clientName: 'Thomas B. (Tech Munich IO)',
    clientEmail: 'thomas.b@techmunich.io',
    clientPhone: '+49 152 8877665',
    location: 'Lehel, Múnich',
    totalEventsCount: 3,
    completedEventsCount: 2,
    cancelledEventsCount: 0,
    totalGuestsServed: 85,
    totalSpent: 5680,
    isRepeatCustomer: true,
    firstEventDate: '2026-05-12',
    lastEventDate: '2026-08-28',
    notes: 'Cliente corporativo clave. Celebración de rondas de inversión y hitos de equipo.',
    tags: ['Recurrente', 'Corporativo', 'VIP'],
    createdAt: '2026-05-01T09:00:00Z',
    updatedAt: '2026-08-05T09:20:00Z'
  },
  {
    id: 'cli_laura_h',
    clientName: 'Laura H.',
    clientEmail: 'laura.h@gmail.com',
    clientPhone: '+49 179 4455667',
    location: 'Haidhausen, Múnich',
    totalEventsCount: 1,
    completedEventsCount: 0,
    cancelledEventsCount: 0,
    totalGuestsServed: 0,
    totalSpent: 0,
    isRepeatCustomer: false,
    firstEventDate: '2026-09-05',
    lastEventDate: '2026-09-05',
    notes: 'Reserva telefónica pendiente de confirmación de menú.',
    tags: ['Particular'],
    createdAt: '2026-08-06T11:00:00Z',
    updatedAt: '2026-08-06T11:00:00Z'
  }
];

export const getStoredClients = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_CLIENTS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error("Error reading clients from storage", e);
  }
  localStorage.setItem(STORAGE_KEY_CLIENTS, JSON.stringify(INITIAL_MOCK_CLIENTS));
  return INITIAL_MOCK_CLIENTS;
};

export const saveClients = (clients) => {
  try {
    localStorage.setItem(STORAGE_KEY_CLIENTS, JSON.stringify(clients));
  } catch (e) {
    console.error("Error saving clients", e);
  }
};

/**
 * Re-aggregates a client's stats based on all their reservations
 */
export const syncClientFromReservations = (allReservations, targetEmail) => {
  if (!targetEmail) return null;
  const normalizedEmail = targetEmail.trim().toLowerCase();
  
  const clientReservations = (allReservations || []).filter(
    r => r.clientEmail && r.clientEmail.trim().toLowerCase() === normalizedEmail
  );

  if (clientReservations.length === 0) return null;

  const currentClients = getStoredClients();
  let existingClient = currentClients.find(
    c => c.clientEmail && c.clientEmail.trim().toLowerCase() === normalizedEmail
  );

  const latestRes = clientReservations[0];
  const totalEventsCount = clientReservations.length;
  
  const confirmedRes = clientReservations.filter(r => r.status === 'confirmed' || r.status === 'completed');
  const cancelledRes = clientReservations.filter(r => r.status === 'cancelled');

  const completedEventsCount = confirmedRes.length;
  const cancelledEventsCount = cancelledRes.length;

  const totalGuestsServed = confirmedRes.reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);
  const totalSpent = confirmedRes.reduce((sum, r) => sum + (parseFloat(r.estimatedTotal) || 0), 0);

  const dates = clientReservations.map(r => r.date).filter(Boolean).sort();
  const firstEventDate = dates[0] || new Date().toISOString().split('T')[0];
  const lastEventDate = dates[dates.length - 1] || firstEventDate;

  const isRepeatCustomer = totalEventsCount > 1;

  // Build tags
  const tags = [...(existingClient?.tags || [])];
  if (isRepeatCustomer && !tags.includes('Recurrente')) tags.push('Recurrente');
  if (totalSpent >= 2500 && !tags.includes('VIP')) tags.push('VIP');
  if (!tags.includes('Particular') && !tags.includes('Corporativo')) {
    const isCorp = (latestRes.notes || '').toLowerCase().includes('empresa') || 
                   (latestRes.clientName || '').toLowerCase().includes('firm') || 
                   (latestRes.clientName || '').toLowerCase().includes('gmbh') ||
                   (latestRes.clientEmail || '').includes('.de') && !(latestRes.clientEmail || '').includes('web.de') && !(latestRes.clientEmail || '').includes('gmail');
    if (isCorp) {
      tags.push('Corporativo');
    } else {
      tags.push('Particular');
    }
  }

  const updatedClient = {
    id: existingClient?.id || `cli_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    clientName: latestRes.clientName || existingClient?.clientName || 'Cliente MUNCHOS',
    clientEmail: normalizedEmail,
    clientPhone: latestRes.clientPhone || existingClient?.clientPhone || '',
    location: latestRes.location || existingClient?.location || 'Múnich',
    totalEventsCount,
    completedEventsCount,
    cancelledEventsCount,
    totalGuestsServed,
    totalSpent,
    isRepeatCustomer,
    firstEventDate,
    lastEventDate,
    notes: existingClient?.notes || latestRes.notes || '',
    tags: Array.from(new Set(tags)),
    createdAt: existingClient?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  let updatedList;
  if (existingClient) {
    updatedList = currentClients.map(c => c.clientEmail?.trim().toLowerCase() === normalizedEmail ? updatedClient : c);
  } else {
    updatedList = [updatedClient, ...currentClients];
  }

  saveClients(updatedList);

  // Firestore async backup if active
  if (isFirebaseLive && db) {
    try {
      const clientDocRef = doc(db, 'clients', updatedClient.id);
      setDoc(clientDocRef, updatedClient, { merge: true });
    } catch (err) {
      console.warn("Firestore client sync failed", err);
    }
  }

  return updatedClient;
};

/**
 * Re-aggregates ALL clients from the entire reservations list
 */
export const syncAllClientsFromReservations = (reservations) => {
  if (!Array.isArray(reservations)) return;
  const emails = Array.from(new Set(reservations.map(r => r.clientEmail).filter(Boolean)));
  emails.forEach(email => syncClientFromReservations(reservations, email));
  return getStoredClients();
};

export const updateClientDetails = (clientId, updates) => {
  const current = getStoredClients();
  const updated = current.map(c => c.id === clientId ? { ...c, ...updates, updatedAt: new Date().toISOString() } : c);
  saveClients(updated);

  if (isFirebaseLive && db) {
    try {
      const target = updated.find(c => c.id === clientId);
      if (target) {
        setDoc(doc(db, 'clients', clientId), target, { merge: true });
      }
    } catch (e) {}
  }
  return updated;
};

/**
 * Export clients database to CSV format for marketing campaigns
 */
export const exportClientsToCSV = () => {
  const clients = getStoredClients();
  if (!clients || clients.length === 0) return;

  const headers = ['Nombre', 'Email', 'Teléfono', 'Ubicación', 'Solicitudes Totales', 'Eventos Confirmados', 'Total Comensales', 'Gasto Acumulado (€)', 'Recurrente', 'Etiquetas', 'Notas'];
  
  const rows = clients.map(c => [
    `"${c.clientName || ''}"`,
    `"${c.clientEmail || ''}"`,
    `"${c.clientPhone || ''}"`,
    `"${c.location || ''}"`,
    c.totalEventsCount || 0,
    c.completedEventsCount || 0,
    c.totalGuestsServed || 0,
    c.totalSpent || 0,
    c.isRepeatCustomer ? 'Sí' : 'No',
    `"${(c.tags || []).join(', ')}"`,
    `"${(c.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `munchos_clientes_crm_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
