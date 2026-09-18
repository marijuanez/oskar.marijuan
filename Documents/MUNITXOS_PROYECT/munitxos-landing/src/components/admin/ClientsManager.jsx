import React, { useState, useEffect } from 'react';
import { 
  Users, UserCheck, Search, Filter, Download, Mail, Phone, MapPin, 
  Calendar, Award, DollarSign, ExternalLink, Edit3, X, Save, RefreshCw, CheckCircle, MessageSquare, Plus, Trash2, AlertTriangle
} from 'lucide-react';
import { getStoredClients, updateClientDetails, deleteClient, createManualClient, exportClientsToCSV } from '../../services/clientService';
import { getStoredReservations } from '../../services/reservationService';

export const ClientsManager = () => {
  const [clients, setClients] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('all'); // all, repeat, new, vip, corp

  // Modal States
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientToEdit, setClientToEdit] = useState(null);
  const [clientToDelete, setClientToDelete] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    location: '',
    totalEventsCount: 1,
    completedEventsCount: 1,
    totalGuestsServed: 20,
    totalSpent: 0,
    notes: '',
    tagsStr: 'Particular'
  });

  const refreshData = () => {
    const storedClis = getStoredClients();
    const storedRes = getStoredReservations();
    setClients(storedClis);
    setReservations(storedRes);
  };

  useEffect(() => {
    refreshData();
  }, []);

  // Filter clients
  const filteredClients = clients.filter(c => {
    const matchesSearch = 
      (c.clientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.clientEmail || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.clientPhone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.location || '').toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterTag === 'repeat') return c.isRepeatCustomer;
    if (filterTag === 'new') return !c.isRepeatCustomer;
    if (filterTag === 'vip') return (c.tags || []).includes('VIP') || (c.totalSpent >= 2500);
    if (filterTag === 'corp') return (c.tags || []).includes('Corporativo');

    return true;
  });

  // Calculate summary metrics
  const totalClientsCount = clients.length;
  const repeatClientsCount = clients.filter(c => c.isRepeatCustomer).length;
  const repeatRate = totalClientsCount > 0 ? Math.round((repeatClientsCount / totalClientsCount) * 100) : 0;
  const totalGuestsServedAll = clients.reduce((sum, c) => sum + (c.totalGuestsServed || 0), 0);
  const totalSpentAll = clients.reduce((sum, c) => sum + (c.totalSpent || 0), 0);
  const avgLtv = totalClientsCount > 0 ? Math.round(totalSpentAll / totalClientsCount) : 0;

  // Handlers
  const handleOpenDetail = (client) => {
    setSelectedClient(client);
  };

  const handleOpenAddModal = () => {
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      location: 'Múnich',
      totalEventsCount: 1,
      completedEventsCount: 1,
      totalGuestsServed: 20,
      totalSpent: 0,
      notes: '',
      tagsStr: 'Particular'
    });
    setIsAddModalOpen(true);
  };

  const handleSaveNewClient = (e) => {
    e.preventDefault();
    const tags = formData.tagsStr.split(',').map(t => t.trim()).filter(Boolean);
    const updated = createManualClient({
      ...formData,
      tags
    });
    setClients(updated);
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (client) => {
    setClientToEdit(client);
    setFormData({
      clientName: client.clientName || '',
      clientEmail: client.clientEmail || '',
      clientPhone: client.clientPhone || '',
      location: client.location || 'Múnich',
      totalEventsCount: client.totalEventsCount || 0,
      completedEventsCount: client.completedEventsCount || 0,
      totalGuestsServed: client.totalGuestsServed || 0,
      totalSpent: client.totalSpent || 0,
      notes: client.notes || '',
      tagsStr: (client.tags || []).join(', ')
    });
  };

  const handleSaveEditClient = (e) => {
    e.preventDefault();
    if (!clientToEdit) return;

    const tags = formData.tagsStr.split(',').map(t => t.trim()).filter(Boolean);
    const updated = updateClientDetails(clientToEdit.id, {
      ...formData,
      totalEventsCount: parseInt(formData.totalEventsCount) || 0,
      completedEventsCount: parseInt(formData.completedEventsCount) || 0,
      totalGuestsServed: parseInt(formData.totalGuestsServed) || 0,
      totalSpent: parseFloat(formData.totalSpent) || 0,
      isRepeatCustomer: (parseInt(formData.totalEventsCount) || 0) > 1,
      tags
    });

    setClients(updated);
    setClientToEdit(null);
    if (selectedClient && selectedClient.id === clientToEdit.id) {
      setSelectedClient(updated.find(c => c.id === clientToEdit.id));
    }
  };

  const handleDeleteClientConfirm = () => {
    if (!clientToDelete) return;
    const updated = deleteClient(clientToDelete.id);
    setClients(updated);
    if (selectedClient && selectedClient.id === clientToDelete.id) {
      setSelectedClient(null);
    }
    setClientToDelete(null);
  };

  const getClientReservations = (email) => {
    if (!email) return [];
    return reservations.filter(
      r => r.clientEmail && r.clientEmail.trim().toLowerCase() === email.trim().toLowerCase()
    );
  };

  return (
    <div className="clients-manager-module">
      
      {/* Top Header */}
      <div className="crm-header">
        <div className="header-left">
          <h2 className="header-title">Base de Datos de Clientes & CRM</h2>
          <p className="header-subtitle">
            Gestión de fichas de clientes, edición, borrado, historial de solicitudes y analítica de comensales.
          </p>
        </div>

        <div className="header-actions">
          <button className="btn btn-secondary btn-sm" onClick={refreshData} title="Recargar datos">
            <RefreshCw size={16} />
            <span>Actualizar</span>
          </button>

          <button className="btn btn-primary btn-sm btn-add-client" onClick={handleOpenAddModal}>
            <Plus size={16} />
            <span>+ Nuevo Cliente</span>
          </button>

          <button className="btn btn-secondary btn-sm btn-export" onClick={exportClientsToCSV}>
            <Download size={16} />
            <span>Exportar CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="glass-card kpi-card">
          <Users className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalClientsCount}</span>
            <span className="kpi-lbl">Clientes Registrados</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <UserCheck className="icon-gold" size={26} />
          <div>
            <span className="kpi-val">{repeatClientsCount} <small>({repeatRate}%)</small></span>
            <span className="kpi-lbl">Clientes Recurrentes</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <Award className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalGuestsServedAll}</span>
            <span className="kpi-lbl">Comensales Atendidos</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <DollarSign className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{avgLtv}€</span>
            <span className="kpi-lbl">Valor Medio por Cliente (LTV)</span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="controls-bar glass-card">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder="Buscar cliente por nombre, email, teléfono o zona..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
              <X size={14} />
            </button>
          )}
        </div>

        <div className="filter-pills">
          <button 
            className={`pill-btn ${filterTag === 'all' ? 'active' : ''}`}
            onClick={() => setFilterTag('all')}
          >
            Todos ({clients.length})
          </button>
          <button 
            className={`pill-btn ${filterTag === 'repeat' ? 'active' : ''}`}
            onClick={() => setFilterTag('repeat')}
          >
            <UserCheck size={14} /> Recurrentes ({repeatClientsCount})
          </button>
          <button 
            className={`pill-btn ${filterTag === 'new' ? 'active' : ''}`}
            onClick={() => setFilterTag('new')}
          >
            Nuevos ({totalClientsCount - repeatClientsCount})
          </button>
          <button 
            className={`pill-btn ${filterTag === 'vip' ? 'active' : ''}`}
            onClick={() => setFilterTag('vip')}
          >
            VIP
          </button>
          <button 
            className={`pill-btn ${filterTag === 'corp' ? 'active' : ''}`}
            onClick={() => setFilterTag('corp')}
          >
            Corporativos
          </button>
        </div>
      </div>

      {/* Clients Table */}
      <div className="glass-card table-container">
        <table className="crm-table">
          <thead>
            <tr>
              <th>Cliente / Razón Social</th>
              <th>Contacto & Ubicación</th>
              <th>Solicitudes / Eventos</th>
              <th>Total Comensales</th>
              <th>Gasto Acumulado</th>
              <th>Recurrencia</th>
              <th>Acciones (CMS)</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-row">
                  No se encontraron clientes en la base de datos.
                </td>
              </tr>
            ) : (
              filteredClients.map((client) => (
                <tr key={client.id} className="table-row-hover">
                  <td>
                    <div className="client-name-cell">
                      <span className="client-name">{client.clientName}</span>
                      <div className="tags-row">
                        {(client.tags || []).map((t, idx) => (
                          <span key={idx} className={`tag-badge tag-${t.toLowerCase()}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="contact-cell">
                      <span className="contact-line">
                        <Mail size={13} /> {client.clientEmail}
                      </span>
                      {client.clientPhone && (
                        <span className="contact-line">
                          <Phone size={13} /> {client.clientPhone}
                        </span>
                      )}
                      {client.location && (
                        <span className="contact-line location-line">
                          <MapPin size={13} /> {client.location}
                        </span>
                      )}
                    </div>
                  </td>

                  <td>
                    <div className="stats-cell">
                      <span className="highlight-num">{client.totalEventsCount || 0} solic.</span>
                      <span className="sub-num">({client.completedEventsCount || 0} confirmados)</span>
                    </div>
                  </td>

                  <td>
                    <span className="guests-cell-val">{client.totalGuestsServed || 0} pers.</span>
                  </td>

                  <td>
                    <span className="spent-val">{client.totalSpent || 0}€</span>
                  </td>

                  <td>
                    {client.isRepeatCustomer ? (
                      <span className="badge-repeat">
                        <UserCheck size={13} /> Recurrente
                      </span>
                    ) : (
                      <span className="badge-single">Primera Reserva</span>
                    )}
                  </td>

                  <td>
                    <div className="action-buttons-cell">
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleOpenDetail(client)}
                        title="Ver Historial"
                      >
                        Ver
                      </button>

                      <button 
                        className="btn-icon btn-edit-icon"
                        onClick={() => handleOpenEditModal(client)}
                        title="Editar Datos Cliente"
                      >
                        <Edit3 size={15} />
                      </button>

                      <button 
                        className="btn-icon btn-delete-icon"
                        onClick={() => setClientToDelete(client)}
                        title="Eliminar Cliente"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Client Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-container crm-edit-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsAddModalOpen(false)}><X size={22} /></button>
            <h3 className="modal-title">+ Registrar Nuevo Cliente en la Base de Datos</h3>

            <form onSubmit={handleSaveNewClient} className="crm-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Nombre del Cliente / Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="Ej. Markus & Sofía"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Correo Electrónico *</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    placeholder="ejemplo@web.de"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Teléfono / WhatsApp</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    placeholder="+49 171 1234567"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Ubicación / Zona de Múnich</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Schwabing, Múnich"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Solicitudes Realizadas</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalEventsCount}
                    onChange={(e) => setFormData({ ...formData, totalEventsCount: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Eventos Confirmados</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.completedEventsCount}
                    onChange={(e) => setFormData({ ...formData, completedEventsCount: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Comensales Atendidos</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalGuestsServed}
                    onChange={(e) => setFormData({ ...formData, totalGuestsServed: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Gasto Acumulado (€)</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalSpent}
                    onChange={(e) => setFormData({ ...formData, totalSpent: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Etiquetas (separadas por coma)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.tagsStr}
                  onChange={(e) => setFormData({ ...formData, tagsStr: e.target.value })}
                  placeholder="Particular, Recurrente, VIP"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Notas Observaciones CRM</label>
                <textarea 
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Detalles sobre alergias, empresa, facturación..."
                />
              </div>

              <div className="form-actions-row">
                <button type="button" className="btn btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn btn-primary"><Save size={16} /> Guardar Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {clientToEdit && (
        <div className="modal-overlay" onClick={() => setClientToEdit(null)}>
          <div className="modal-container crm-edit-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setClientToEdit(null)}><X size={22} /></button>
            <h3 className="modal-title">Editar Ficha de Cliente: {clientToEdit.clientName}</h3>

            <form onSubmit={handleSaveEditClient} className="crm-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Nombre del Cliente / Empresa</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Teléfono / WhatsApp</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Ubicación / Zona</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Solicitudes</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalEventsCount}
                    onChange={(e) => setFormData({ ...formData, totalEventsCount: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Eventos Confirmados</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.completedEventsCount}
                    onChange={(e) => setFormData({ ...formData, completedEventsCount: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Comensales Atendidos</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalGuestsServed}
                    onChange={(e) => setFormData({ ...formData, totalGuestsServed: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Facturación Acumulada (€)</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={formData.totalSpent}
                    onChange={(e) => setFormData({ ...formData, totalSpent: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Etiquetas (separadas por coma)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.tagsStr}
                  onChange={(e) => setFormData({ ...formData, tagsStr: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Notas Internas CRM</label>
                <textarea 
                  className="form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="form-actions-row">
                <button type="button" className="btn btn-secondary" onClick={() => setClientToEdit(null)}>Cancelar</button>
                <button type="submit" className="btn btn-primary"><Save size={16} /> Actualizar Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {clientToDelete && (
        <div className="modal-overlay" onClick={() => setClientToDelete(null)}>
          <div className="modal-container delete-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon-box">
              <AlertTriangle size={36} className="icon-red" />
            </div>
            <h3 className="confirm-title">¿Eliminar cliente de la base de datos?</h3>
            <p className="confirm-desc">
              Estás a punto de borrar permanentemente la ficha del cliente <strong>"{clientToDelete.clientName}"</strong> ({clientToDelete.clientEmail}). Esta acción no se puede deshacer.
            </p>

            <div className="confirm-actions">
              <button className="btn btn-secondary" onClick={() => setClientToDelete(null)}>Cancelar</button>
              <button className="btn btn-danger" onClick={handleDeleteClientConfirm}>
                <Trash2 size={16} /> Sí, Eliminar Cliente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Client Detail Drawer / Modal */}
      {selectedClient && (
        <div className="modal-overlay" onClick={() => setSelectedClient(null)}>
          <div className="modal-container client-detail-modal" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close-btn" onClick={() => setSelectedClient(null)}>
              <X size={22} />
            </button>

            {/* Client Top Header */}
            <div className="modal-client-header">
              <div className="header-info">
                <h3 className="modal-client-name">{selectedClient.clientName}</h3>
                <div className="modal-tags">
                  {selectedClient.isRepeatCustomer && (
                    <span className="badge-repeat"><UserCheck size={14} /> Cliente Recurrente</span>
                  )}
                  {(selectedClient.tags || []).map((t, idx) => (
                    <span key={idx} className={`tag-badge tag-${t.toLowerCase()}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="client-contact-actions">
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleOpenEditModal(selectedClient)}
                >
                  <Edit3 size={15} /> Editar Ficha
                </button>

                <button 
                  className="btn btn-danger-outline btn-sm"
                  onClick={() => setClientToDelete(selectedClient)}
                >
                  <Trash2 size={15} /> Borrar
                </button>

                {selectedClient.clientPhone && (
                  <a 
                    href={`https://wa.me/${selectedClient.clientPhone.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-action btn-whatsapp"
                  >
                    <MessageSquare size={16} /> WhatsApp
                  </a>
                )}
                <a 
                  href={`mailto:${selectedClient.clientEmail}`} 
                  className="btn-action btn-email"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="client-quick-metrics">
              <div className="metric-box">
                <span className="metric-lbl">Total Presupuestos</span>
                <span className="metric-val">{selectedClient.totalEventsCount}</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Eventos Realizados</span>
                <span className="metric-val icon-cyan">{selectedClient.completedEventsCount}</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Total Comensales</span>
                <span className="metric-val">{selectedClient.totalGuestsServed} pers.</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Facturación Acumulada</span>
                <span className="metric-val icon-gold">{selectedClient.totalSpent}€</span>
              </div>
            </div>

            {/* Content Split: History vs Notes */}
            <div className="detail-split-grid">
              
              {/* Event Timeline History */}
              <div className="detail-timeline-block">
                <h4 className="block-title">
                  <Calendar size={18} className="icon-cyan" /> Historial de Reservas y Solicitudes
                </h4>

                <div className="timeline-list">
                  {getClientReservations(selectedClient.clientEmail).length === 0 ? (
                    <p className="no-res-msg">No hay registros de reserva asociados.</p>
                  ) : (
                    getClientReservations(selectedClient.clientEmail).map(r => (
                      <div key={r.id} className="timeline-item">
                        <div className="timeline-header">
                          <span className="res-date">{r.date}</span>
                          <span className={`res-status status-${r.status}`}>{r.status}</span>
                        </div>
                        <div className="timeline-body">
                          <span className="res-menu">{r.menuName || r.menuType}</span>
                          <span className="res-details">
                            {r.guests} invitados • {r.estimatedTotal}€ ({r.pricePerPerson || 0}€/pers)
                          </span>
                          {r.location && <span className="res-loc"><MapPin size={12} /> {r.location}</span>}
                          {r.notes && <p className="res-note">"{r.notes}"</p>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Notes */}
              <div className="detail-notes-block">
                <div className="notes-card">
                  <h4 className="block-title"><Edit3 size={16} className="icon-cyan" /> Notas Internas CRM</h4>
                  <p className="notes-display">
                    {selectedClient.notes || 'Sin observaciones registradas.'}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      <style>{`
        .clients-manager-module {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .crm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: #FFF;
        }

        .header-subtitle {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
          margin-top: 0.25rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-add-client {
          background: var(--accent-cyan);
          color: #0D0D0C;
          font-weight: 700;
        }

        .btn-export {
          background: rgba(247, 245, 240, 0.08);
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.4rem;
        }

        .kpi-val {
          font-family: var(--font-subtitles);
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .kpi-val small { font-size: 1rem; color: var(--accent-gold); }
        .kpi-lbl { font-size: 0.82rem; color: var(--text-dark-secondary); }

        .controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.4rem;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          background: rgba(13, 13, 12, 0.7);
          border: 1px solid rgba(62, 193, 201, 0.3);
          padding: 0.6rem 0.9rem;
          gap: 0.6rem;
          flex-grow: 1;
          max-width: 450px;
        }

        .search-icon { color: var(--accent-cyan); }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #FFF;
          font-size: 0.9rem;
          width: 100%;
        }

        .clear-search-btn {
          background: transparent;
          border: none;
          color: var(--text-dark-muted);
          cursor: pointer;
        }

        .filter-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .pill-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(247, 245, 240, 0.05);
          border: 1px solid rgba(247, 245, 240, 0.1);
          color: var(--text-dark-secondary);
          padding: 0.45rem 0.85rem;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .pill-btn.active, .pill-btn:hover {
          background: rgba(62, 193, 201, 0.15);
          border-color: var(--accent-cyan);
          color: #FFF;
        }

        .table-container {
          overflow-x: auto;
          padding: 0;
        }

        .crm-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .crm-table th {
          background: rgba(13, 13, 12, 0.9);
          color: var(--accent-cyan);
          padding: 1rem 1.2rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(62, 193, 201, 0.3);
        }

        .crm-table td {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
          vertical-align: middle;
        }

        .table-row-hover:hover {
          background: rgba(62, 193, 201, 0.04);
        }

        .client-name-cell {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .client-name {
          font-weight: 700;
          color: #FFF;
          font-size: 0.95rem;
        }

        .tags-row {
          display: flex;
          gap: 0.3rem;
          flex-wrap: wrap;
        }

        .tag-badge {
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid rgba(62, 193, 201, 0.3);
          color: var(--accent-cyan);
          font-size: 0.7rem;
          padding: 0.15rem 0.45rem;
          display: inline-flex;
          align-items: center;
        }

        .tag-badge.tag-vip { background: rgba(212, 175, 55, 0.2); border-color: var(--accent-gold); color: var(--accent-gold); }
        .tag-badge.tag-corporativo { background: rgba(100, 149, 237, 0.2); border-color: #6495ED; color: #6495ED; }

        .contact-cell {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.82rem;
          color: var(--text-dark-secondary);
        }

        .contact-line { display: flex; align-items: center; gap: 0.4rem; }
        .location-line { color: var(--text-dark-muted); }

        .stats-cell { display: flex; flex-direction: column; }
        .highlight-num { font-weight: 700; color: #FFF; }
        .sub-num { font-size: 0.78rem; color: var(--text-dark-muted); }

        .guests-cell-val { font-weight: 600; color: #FFF; }
        .spent-val { font-family: var(--font-subtitles); font-weight: 700; color: var(--accent-gold); font-size: 1.05rem; }

        .badge-repeat {
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .badge-single {
          background: rgba(247, 245, 240, 0.05);
          color: var(--text-dark-muted);
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
        }

        .action-buttons-cell {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 245, 240, 0.05);
          border: 1px solid rgba(247, 245, 240, 0.1);
          color: var(--text-dark-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-edit-icon:hover {
          background: rgba(62, 193, 201, 0.2);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .btn-delete-icon:hover {
          background: rgba(231, 76, 60, 0.2);
          border-color: #e74c3c;
          color: #e74c3c;
        }

        .btn-danger-outline {
          background: transparent;
          border: 1px solid #e74c3c;
          color: #e74c3c;
        }

        .btn-danger-outline:hover {
          background: #e74c3c;
          color: #FFF;
        }

        .btn-danger {
          background: #e74c3c;
          color: #FFF;
          border: none;
        }

        /* FORM & MODAL STYLES */
        .crm-edit-modal {
          max-width: 680px;
          width: 90%;
        }

        .crm-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-label {
          font-size: 0.82rem;
          color: var(--text-dark-secondary);
          font-weight: 600;
        }

        .form-input, .form-textarea {
          background: #0D0D0C;
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          padding: 0.6rem 0.8rem;
          font-size: 0.88rem;
          font-family: inherit;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent-cyan);
          outline: none;
        }

        .form-textarea {
          min-height: 80px;
          resize: vertical;
        }

        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 0.8rem;
          margin-top: 0.5rem;
        }

        /* DELETE CONFIRMATION MODAL */
        .delete-confirm-modal {
          max-width: 440px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        }

        .confirm-icon-box {
          background: rgba(231, 76, 60, 0.15);
          border: 1px solid #e74c3c;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-red { color: #e74c3c; }

        .confirm-title {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          color: #FFF;
        }

        .confirm-desc {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          line-height: 1.4;
        }

        .confirm-actions {
          display: flex;
          gap: 0.8rem;
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        /* CLIENT DETAIL MODAL */
        .client-detail-modal {
          max-width: 800px;
          width: 92%;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .modal-client-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .modal-client-name {
          font-family: var(--font-subtitles);
          font-size: 1.6rem;
          color: #FFF;
        }

        .modal-tags {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.4rem;
          flex-wrap: wrap;
        }

        .client-contact-actions {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .btn-action {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
        }

        .btn-whatsapp { background: #25D366; color: #000; }
        .btn-email { background: rgba(62, 193, 201, 0.2); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); }

        .client-quick-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.8rem;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(62, 193, 201, 0.2);
          padding: 1rem;
        }

        .metric-box { display: flex; flex-direction: column; gap: 0.2rem; }
        .metric-lbl { font-size: 0.75rem; color: var(--text-dark-secondary); }
        .metric-val { font-weight: 700; font-size: 1.2rem; color: #FFF; }

        .detail-split-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 1.2rem;
        }

        .block-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFF;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          max-height: 280px;
          overflow-y: auto;
        }

        .timeline-item {
          background: rgba(247, 245, 240, 0.03);
          border-left: 3px solid var(--accent-cyan);
          padding: 0.8rem;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 0.3rem;
        }

        .res-date { color: var(--accent-cyan); font-weight: 700; }
        .res-status { text-transform: uppercase; font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.4rem; }
        .res-status.status-confirmed { background: rgba(39, 174, 96, 0.2); color: #27ae60; }
        .res-status.status-pending { background: rgba(241, 196, 15, 0.2); color: #f1c40f; }

        .timeline-body { display: flex; flex-direction: column; gap: 0.2rem; font-size: 0.85rem; }
        .res-menu { font-weight: 700; color: #FFF; }
        .res-details { color: var(--text-dark-secondary); font-size: 0.8rem; }
        .res-loc { font-size: 0.78rem; color: var(--text-dark-muted); display: flex; align-items: center; gap: 0.2rem; }
        .res-note { font-style: italic; font-size: 0.78rem; color: var(--text-dark-muted); margin-top: 0.2rem; }

        .detail-notes-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notes-card {
          background: rgba(247, 245, 240, 0.03);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1rem;
        }

        .notes-display {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
          line-height: 1.4;
        }

        .icon-cyan { color: var(--accent-cyan); }
        .icon-gold { color: var(--accent-gold); }

        @media (max-width: 1024px) {
          .kpi-grid { grid-template-columns: 1fr 1fr; }
          .client-quick-metrics { grid-template-columns: 1fr 1fr; }
          .detail-split-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .kpi-grid { grid-template-columns: 1fr; }
          .form-grid-2 { grid-template-columns: 1fr; }
          .controls-bar { flex-direction: column; align-items: stretch; }
          .search-input-wrapper { max-width: 100%; }
        }
      `}</style>
    </div>
  );
};
