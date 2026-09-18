/**
 * MUNCHOS Reservation Service (Firestore + LocalStorage Persistence)
 */
import { DEFAULT_CAPACITY_SETTINGS } from './availabilityEngine';
import { syncClientFromReservations } from './clientService';

const STORAGE_KEY_RESERVATIONS = 'munchos_reservations_v1';
const STORAGE_KEY_SETTINGS = 'munchos_settings_v1';

// Pre-populated realistic initial reservations for demo & analytics
const INITIAL_MOCK_RESERVATIONS = [
  {
    id: 'res_001',
    date: '2026-08-15',
    guests: 25,
    menuType: 'sushi-fusion',
    menuName: 'Fusión Nikkei (Sushi + Pinchos)',
    extras: ['Chef & Showcooking en vivo', 'Maridaje Vinos Vascos'],
    status: 'confirmed',
    source: 'public',
    clientName: 'Elena R.',
    clientEmail: 'elena.r@example.de',
    clientPhone: '+49 176 9876543',
    location: 'Bogenhausen, Múnich',
    notes: 'Cumpleaños 40º. 2 comensales celíacos.',
    estimatedTotal: 1480,
    pricePerPerson: 59,
    createdAt: '2026-08-01T10:00:00Z'
  },
  {
    id: 'res_002',
    date: '2026-08-15',
    guests: 35,
    menuType: 'full-experience',
    menuName: 'Experiencia Completa MUNCHOS',
    extras: ['Mesa Dulce Vasca'],
    status: 'confirmed',
    source: 'manual',
    clientName: 'Carlos M.',
    clientEmail: 'carlos.firm@munich-law.de',
    clientPhone: '+49 89 5544332',
    location: 'Glockenbachviertel, Múnich',
    notes: 'Evento de empresa.',
    estimatedTotal: 2275,
    pricePerPerson: 65,
    createdAt: '2026-08-02T14:30:00Z'
  },
  {
    id: 'res_003',
    date: '2026-08-22',
    guests: 18,
    menuType: 'de-tapas',
    menuName: 'Experiencia Pinchos & Tapas',
    extras: ['Vajilla & Cristalería Premium'],
    status: 'pending',
    source: 'public',
    clientName: 'Markus & Sofía',
    clientEmail: 'sofia.m@web.de',
    clientPhone: '+49 171 2233445',
    location: 'Schwabing, Múnich',
    notes: 'Cena íntima de aniversario.',
    estimatedTotal: 774,
    pricePerPerson: 43,
    createdAt: '2026-08-04T16:15:00Z'
  },
  {
    id: 'res_004',
    date: '2026-08-28',
    guests: 40,
    menuType: 'sushi-fusion',
    menuName: 'Fusión Nikkei (Sushi + Pinchos)',
    extras: ['Chef & Showcooking en vivo', 'Maridaje Vinos Vascos', 'Mesa Dulce Vasca'],
    status: 'confirmed',
    source: 'public',
    clientName: 'Thomas B.',
    clientEmail: 'thomas.b@techmunich.io',
    clientPhone: '+49 152 8877665',
    location: 'Lehel, Múnich',
    notes: 'Celebración de proyecto.',
    estimatedTotal: 2840,
    pricePerPerson: 71,
    createdAt: '2026-08-05T09:20:00Z'
  },
  {
    id: 'res_005',
    date: '2026-09-05',
    guests: 15,
    menuType: 'de-tapas',
    menuName: 'Experiencia Pinchos & Tapas',
    extras: [],
    status: 'pending',
    source: 'manual',
    clientName: 'Laura H.',
    clientEmail: 'laura.h@gmail.com',
    clientPhone: '+49 179 4455667',
    location: 'Haidhausen, Múnich',
    notes: 'Reserva telefónica pendiente de confirmación de menú.',
    estimatedTotal: 570,
    pricePerPerson: 38,
    createdAt: '2026-08-06T11:00:00Z'
  }
];

export const getStoredReservations = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_RESERVATIONS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error("Error reading reservations from storage", e);
  }
  // Initialize default
  localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(INITIAL_MOCK_RESERVATIONS));
  return INITIAL_MOCK_RESERVATIONS;
};

export const saveReservations = (reservations) => {
  try {
    localStorage.setItem(STORAGE_KEY_RESERVATIONS, JSON.stringify(reservations));
  } catch (e) {
    console.error("Error saving reservations", e);
  }
};

export const createReservation = (newResData) => {
  const current = getStoredReservations();
  const newRecord = {
    id: `res_${Date.now()}`,
    status: newResData.status || 'pending',
    source: newResData.source || 'public',
    createdAt: new Date().toISOString(),
    ...newResData
  };
  const updated = [newRecord, ...current];
  saveReservations(updated);
  
  if (newRecord.clientEmail) {
    syncClientFromReservations(updated, newRecord.clientEmail);
  }

  return newRecord;
};

export const updateReservationStatus = (id, newStatus) => {
  const current = getStoredReservations();
  const updated = current.map(r => r.id === id ? { ...r, status: newStatus } : r);
  saveReservations(updated);

  const target = updated.find(r => r.id === id);
  if (target?.clientEmail) {
    syncClientFromReservations(updated, target.clientEmail);
  }

  return updated;
};

export const updateReservationDetails = (id, updates) => {
  const current = getStoredReservations();
  const updated = current.map(r => r.id === id ? { ...r, ...updates } : r);
  saveReservations(updated);

  const target = updated.find(r => r.id === id);
  if (target?.clientEmail) {
    syncClientFromReservations(updated, target.clientEmail);
  }

  return updated;
};

export const getCapacitySettings = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (data) return JSON.parse(data);
  } catch (e) {}
  return DEFAULT_CAPACITY_SETTINGS;
};

export const saveCapacitySettings = (settings) => {
  try {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  } catch (e) {}
};
