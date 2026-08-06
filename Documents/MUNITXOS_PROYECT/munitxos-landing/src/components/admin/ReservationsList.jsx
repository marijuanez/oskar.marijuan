import React, { useState } from 'react';
import { CheckCircle, Clock, XCircle, Search, Plus } from 'lucide-react';

export const ReservationsList = ({ reservations, onUpdateStatus, onOpenAddModal }) => {
  const [filterSearch, setFilterSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSource, setFilterSource] = useState('all');
  const [filterMenu, setFilterMenu] = useState('all');

  const filteredReservations = reservations.filter(r => {
    // Search matching
    if (filterSearch) {
      const q = filterSearch.toLowerCase();
      const matchName = r.clientName?.toLowerCase().includes(q);
      const matchEmail = r.clientEmail?.toLowerCase().includes(q);
      const matchLocation = r.location?.toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchLocation) return false;
    }

    // Status filter
    if (filterStatus !== 'all' && r.status !== filterStatus) return false;

    // Source filter
    if (filterSource !== 'all' && r.source !== filterSource) return false;

    // Menu filter
    if (filterMenu !== 'all' && r.menuType !== filterMenu) return false;

    return true;
  });

  return (
    <div className="reservations-list-module">
      
      {/* FULL WIDTH STACKED HEADER (As requested in Image 3) */}
      <div className="module-header">
        <div className="header-text-block">
          <h2 className="header-title">Listado de Reservas</h2>
          <p className="header-subtitle">Filtra, gestiona estados y edita solicitudes de catering públicas y presenciales.</p>
        </div>

        <button className="btn btn-primary btn-sm header-action-btn" onClick={() => onOpenAddModal(null)}>
          <Plus size={16} />
          <span>Nueva Reserva Manual</span>
        </button>
      </div>

      {/* Filter Controls Bar */}
      <div className="filter-controls-bar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar por cliente, email o zona de Múnich..."
            value={filterSearch}
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        </div>

        <div className="filter-dropdowns">
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">Todos los Estados</option>
            <option value="pending">Pendientes</option>
            <option value="confirmed">Confirmadas</option>
            <option value="cancelled">Canceladas</option>
          </select>

          <select value={filterSource} onChange={(e) => setFilterSource(e.target.value)}>
            <option value="all">Todos los Orígenes</option>
            <option value="public">Web Pública</option>
            <option value="manual">Manual (Admin)</option>
          </select>

          <select value={filterMenu} onChange={(e) => setFilterMenu(e.target.value)}>
            <option value="all">Todos los Menús</option>
            <option value="sushi-fusion">Fusión Nikkei</option>
            <option value="de-tapas">Pinchos & Tapas</option>
            <option value="full-experience">Experiencia Completa</option>
          </select>
        </div>
      </div>

      {/* Reservations Table */}
      <div className="table-responsive">
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Invitados</th>
              <th>Menú</th>
              <th>Origen</th>
              <th>Est. Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-results">
                  No se encontraron reservas con los filtros seleccionados.
                </td>
              </tr>
            ) : (
              filteredReservations.map(r => (
                <tr key={r.id} className={`table-row status-${r.status}`}>
                  <td className="font-bold">{r.date}</td>
                  <td>
                    <div className="client-cell">
                      <span className="client-name">{r.clientName}</span>
                      <span className="client-sub">{r.clientEmail} • {r.clientPhone}</span>
                    </div>
                  </td>
                  <td>{r.guests} inv.</td>
                  <td>
                    <span className="menu-pill">{r.menuName}</span>
                  </td>
                  <td>
                    <span className={`source-badge source-${r.source}`}>
                      {r.source === 'public' ? 'Web Pública' : 'Manual Admin'}
                    </span>
                  </td>
                  <td className="gold-text">{r.estimatedTotal ? `${r.estimatedTotal}€` : '—'}</td>
                  <td>
                    <span className={`status-pill status-${r.status}`}>
                      {r.status === 'confirmed' ? 'Confirmada' : r.status === 'pending' ? 'Pendiente' : 'Cancelada'}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      {r.status !== 'confirmed' && (
                        <button 
                          className="btn-action confirm" 
                          title="Confirmar Reserva"
                          onClick={() => onUpdateStatus(r.id, 'confirmed')}
                        >
                          <CheckCircle size={16} />
                        </button>
                      )}

                      {r.status !== 'pending' && (
                        <button 
                          className="btn-action pending" 
                          title="Poner en Pendiente"
                          onClick={() => onUpdateStatus(r.id, 'pending')}
                        >
                          <Clock size={16} />
                        </button>
                      )}

                      {r.status !== 'cancelled' && (
                        <button 
                          className="btn-action cancel" 
                          title="Cancelar Reserva"
                          onClick={() => onUpdateStatus(r.id, 'cancelled')}
                        >
                          <XCircle size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        .reservations-list-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .module-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .header-action-btn {
          align-self: flex-start;
        }

        .filter-controls-bar {
          display: flex;
          gap: 1rem;
          background: var(--bg-card-dark);
          padding: 1rem 1.5rem;
          border: 1px solid rgba(247, 245, 240, 0.08);
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex-grow: 1;
          min-width: 260px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dark-muted);
        }

        .search-box input {
          width: 100%;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          padding: 0.75rem 1rem 0.75rem 2.6rem;
          font-size: 0.92rem;
        }

        .filter-dropdowns {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .filter-dropdowns select {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }

        .table-responsive {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          overflow-x: auto;
        }

        .reservations-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.92rem;
        }

        .reservations-table th {
          background: rgba(13, 13, 12, 0.8);
          color: var(--accent-cyan);
          font-family: var(--font-body);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          padding: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
        }

        .reservations-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
          color: var(--text-dark-secondary);
        }

        .font-bold { font-weight: 700; color: #FFF; }
        .gold-text { color: var(--accent-cyan); font-weight: 700; }

        .client-cell {
          display: flex;
          flex-direction: column;
        }

        .client-name { font-weight: 700; color: #FFF; }
        .client-sub { font-size: 0.8rem; color: var(--text-dark-muted); }

        .menu-pill {
          font-size: 0.8rem;
          background: rgba(247, 245, 240, 0.08);
          padding: 0.2rem 0.6rem;
          color: #FFF;
        }

        .source-badge {
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          font-weight: 600;
        }

        .source-public { background: rgba(62, 193, 201, 0.15); color: var(--accent-cyan); }
        .source-manual { background: rgba(212, 175, 55, 0.15); color: var(--accent-gold); }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-pill.status-confirmed { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .status-pill.status-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .status-pill.status-cancelled { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .table-actions {
          display: flex;
          gap: 0.4rem;
        }

        .btn-action {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-action.confirm:hover { background: #275A38; color: #FFF; }
        .btn-action.pending:hover { background: var(--accent-gold); color: #0D0D0C; }
        .btn-action.cancel:hover { background: var(--accent-red); color: #FFF; }

        .no-results {
          text-align: center;
          padding: 3rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 768px) {
          .header-action-btn { width: 100%; }
          .filter-controls-bar { flex-direction: column; }
          .filter-dropdowns { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};
