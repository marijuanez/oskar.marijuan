import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalIcon, Users, CheckCircle, Clock, XCircle, Plus } from 'lucide-react';
import { checkDateAvailability } from '../../services/availabilityEngine';

export const MonthlyCalendar = ({ reservations, capacitySettings, onUpdateStatus, onOpenAddModal }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1)); // August 2026 default
  const [selectedDayStr, setSelectedDayStr] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...
  const startOffset = (firstDayOfWeek + 6) % 7; // Monday-first calendar

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Helper to format date string cleanly for the side panel line 2
  const formatFriendlyDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    const monthIndex = parseInt(m, 10) - 1;
    return `${parseInt(d, 10)} de ${monthNames[monthIndex]}, ${y}`;
  };

  // Filter day's reservations
  const selectedDayReservations = selectedDayStr 
    ? reservations.filter(r => r.date === selectedDayStr)
    : [];

  return (
    <div className="monthly-calendar-module">
      
      {/* Header Controls */}
      <div className="cal-header-bar">
        <div className="cal-title-group">
          <CalIcon size={22} className="icon-cyan" />
          <h2 className="cal-month-title">{monthNames[month]} {year}</h2>
        </div>

        <div className="cal-nav-controls">
          <button className="btn btn-secondary cal-btn" onClick={prevMonth} aria-label="Mes anterior">
            <ChevronLeft size={18} />
          </button>
          <button className="btn btn-secondary cal-btn" onClick={() => setCurrentDate(new Date())}>
            Hoy
          </button>
          <button className="btn btn-secondary cal-btn" onClick={nextMonth} aria-label="Mes siguiente">
            <ChevronRight size={18} />
          </button>
          <button className="btn btn-primary cal-btn cal-btn-add" onClick={() => onOpenAddModal(selectedDayStr)}>
            <Plus size={16} />
            <span>Añadir Reserva</span>
          </button>
        </div>
      </div>

      {/* Main Grid + Side Drawer */}
      <div className="cal-layout-grid">
        
        {/* Calendar Month Grid */}
        <div className="month-grid-wrapper">
          <div className="weekdays-header">
            <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
          </div>

          <div className="days-grid">
            {/* Blank offset cells */}
            {[...Array(startOffset)].map((_, i) => (
              <div key={`blank-${i}`} className="day-cell blank-cell" />
            ))}

            {/* Month Day Cells */}
            {[...Array(daysInMonth)].map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              
              const dayRes = reservations.filter(r => r.date === dateStr && r.status !== 'cancelled');
              const totalGuests = dayRes.reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);
              const eventsCount = dayRes.length;

              const availCheck = checkDateAvailability(dateStr, 1, reservations, capacitySettings);
              const isFull = !availCheck.isAvailable;
              const isSelected = selectedDayStr === dateStr;

              return (
                <div 
                  key={dayNum} 
                  className={`day-cell ${isSelected ? 'selected' : ''} ${isFull ? 'cell-full' : eventsCount > 0 ? 'cell-busy' : 'cell-open'}`}
                  onClick={() => setSelectedDayStr(dateStr)}
                >
                  <div className="day-number-row">
                    <span className="day-num">{dayNum}</span>
                    {eventsCount > 0 && (
                      <span className={`density-badge ${isFull ? 'full' : 'partial'}`}>
                        {eventsCount} EV.
                      </span>
                    )}
                  </div>

                  {eventsCount > 0 && (
                    <div className="cell-details">
                      <div className="cell-stat">
                        <Users size={10} />
                        <span>{totalGuests} inv.</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Drawer / Details Panel */}
        <div className="day-details-panel">
          <div className="panel-header">
            <div className="panel-title-container">
              <span className="panel-title-lbl">Reservas:</span>
              <h3 className="panel-title-date">
                {selectedDayStr ? formatFriendlyDate(selectedDayStr) : 'Selecciona un día'}
              </h3>
            </div>
            {selectedDayStr && (
              <button className="btn btn-secondary btn-sm" onClick={() => onOpenAddModal(selectedDayStr)}>
                <Plus size={16} />
                <span>Nueva Reserva</span>
              </button>
            )}
          </div>

          {!selectedDayStr ? (
            <div className="panel-empty">
              <CalIcon size={40} className="empty-icon" />
              <p>Haz clic en cualquier día del calendario para examinar la ocupación y gestionar las reservas.</p>
            </div>
          ) : selectedDayReservations.length === 0 ? (
            <div className="panel-empty">
              <p>No hay reservas registradas para el {formatFriendlyDate(selectedDayStr)}.</p>
              <button className="btn btn-primary" onClick={() => onOpenAddModal(selectedDayStr)}>
                Añadir Reserva para esta Fecha
              </button>
            </div>
          ) : (
            <div className="day-reservations-list">
              {selectedDayReservations.map(res => (
                <div key={res.id} className={`res-card status-${res.status}`}>
                  <div className="res-card-header">
                    <div>
                      <h4>{res.clientName}</h4>
                      <span className="res-contact">{res.clientEmail} • {res.clientPhone}</span>
                    </div>
                    <span className={`status-pill status-${res.status}`}>
                      {res.status === 'confirmed' ? 'Confirmada' : res.status === 'pending' ? 'Pendiente' : 'Cancelada'}
                    </span>
                  </div>

                  <div className="res-card-body">
                    <div className="res-meta-item">
                      <strong>Menú:</strong> {res.menuName}
                    </div>
                    <div className="res-meta-item">
                      <strong>Invitados:</strong> {res.guests} comensales
                    </div>
                    <div className="res-meta-item">
                      <strong>Origen:</strong> {res.source === 'public' ? 'Web Pública' : 'Manual (Admin)'}
                    </div>
                    {res.estimatedTotal && (
                      <div className="res-meta-item gold-meta">
                        <strong>Total Estimado:</strong> {res.estimatedTotal}€
                      </div>
                    )}
                    {res.notes && (
                      <div className="res-notes">
                        <strong>Notas:</strong> {res.notes}
                      </div>
                    )}
                  </div>

                  <div className="res-card-actions">
                    {res.status !== 'confirmed' && (
                      <button 
                        className="btn btn-sm btn-confirm"
                        onClick={() => onUpdateStatus(res.id, 'confirmed')}
                      >
                        <CheckCircle size={14} />
                        <span>Confirmar</span>
                      </button>
                    )}

                    {res.status !== 'pending' && (
                      <button 
                        className="btn btn-sm btn-pending"
                        onClick={() => onUpdateStatus(res.id, 'pending')}
                      >
                        <Clock size={14} />
                        <span>Poner Pendiente</span>
                      </button>
                    )}

                    {res.status !== 'cancelled' && (
                      <button 
                        className="btn btn-sm btn-cancel"
                        onClick={() => onUpdateStatus(res.id, 'cancelled')}
                      >
                        <XCircle size={14} />
                        <span>Cancelar</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      <style>{`
        .monthly-calendar-module {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cal-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.25rem 1.8rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cal-title-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .cal-month-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3vw, 1.9rem) !important;
          color: #FFF;
          white-space: nowrap !important;
          word-break: normal !important;
        }

        .cal-nav-controls {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .cal-btn {
          padding: 0.55rem 0.9rem;
          font-size: 0.85rem;
          white-space: nowrap !important;
        }

        .cal-layout-grid {
          display: grid;
          grid-template-columns: 1.6fr 1.1fr;
          gap: 1.5rem;
        }

        .month-grid-wrapper {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.2rem;
          overflow-x: auto;
        }

        .weekdays-header {
          display: grid;
          grid-template-columns: repeat(7, minmax(34px, 1fr));
          text-align: center;
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          margin-bottom: 0.75rem;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(34px, 1fr));
          gap: 0.35rem;
        }

        .day-cell {
          min-height: 85px;
          background: rgba(13, 13, 12, 0.6);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 0.4rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden !important; /* STRICT CONTAINMENT SO BADGES NEVER OVERFLOW */
          position: relative;
          min-width: 0;
        }

        .day-cell:hover {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.08);
        }

        .day-cell.selected {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.18);
        }

        .day-cell.cell-full {
          border-left: 3px solid var(--accent-red);
        }

        .blank-cell {
          background: transparent;
          border: none;
          cursor: default;
        }

        .day-number-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.2rem;
          width: 100%;
          overflow: hidden;
        }

        .day-num {
          font-family: var(--font-subtitles);
          font-weight: 700;
          font-size: 1.05rem;
          color: #FFF;
          flex-shrink: 0;
        }

        .density-badge {
          font-size: 0.6rem;
          font-weight: 800;
          padding: 0.1rem 0.25rem;
          text-transform: uppercase;
          white-space: nowrap !important;
          line-height: 1;
          border-radius: 0 !important;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .density-badge.partial {
          background: rgba(212, 175, 55, 0.25);
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
        }

        .density-badge.full {
          background: rgba(168, 35, 42, 0.3);
          color: #FF6B6B;
          border: 1px solid var(--accent-red);
        }

        .cell-stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          color: var(--text-dark-secondary);
          white-space: nowrap;
        }

        .day-details-panel {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .panel-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          padding-bottom: 0.85rem;
          gap: 1rem;
        }

        /* 2-LINE SIDE PANEL TITLE LAYOUT (As in Image 3) */
        .panel-title-container {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .panel-title-lbl {
          font-family: var(--font-subtitles);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .panel-title-date {
          font-family: var(--font-subtitles);
          font-size: 1.25rem;
          color: #FFF;
          line-height: 1.2;
        }

        .panel-empty {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-dark-muted);
          gap: 1rem;
          padding: 2.5rem 1rem;
        }

        .empty-icon { opacity: 0.3; }

        .day-reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .res-card {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .res-card.status-confirmed { border-left: 4px solid #79D494; }
        .res-card.status-pending { border-left: 4px solid var(--accent-gold); }
        .res-card.status-cancelled { border-left: 4px solid var(--accent-red); opacity: 0.6; }

        .res-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .res-card-header h4 {
          font-size: 1.05rem;
          color: #FFF;
        }

        .res-contact {
          font-size: 0.8rem;
          color: var(--text-dark-muted);
          display: block;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-pill.status-confirmed { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .status-pill.status-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .status-pill.status-cancelled { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .res-card-body {
          font-size: 0.88rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          color: var(--text-dark-secondary);
        }

        .gold-meta { color: var(--accent-cyan); font-weight: 700; }

        .res-card-actions {
          display: flex;
          gap: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-confirm { background: rgba(39, 90, 56, 0.2); color: #79D494; border: 1px solid #79D494; }
        .btn-pending { background: rgba(212, 175, 55, 0.2); color: var(--accent-gold); border: 1px solid var(--accent-gold); }
        .btn-cancel { background: rgba(168, 35, 42, 0.2); color: var(--accent-red); border: 1px solid var(--accent-red); }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .cal-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .day-cell { min-height: 55px; padding: 0.25rem; }
          .day-num { font-size: 0.95rem; }
          .density-badge { font-size: 0.55rem; padding: 0.05rem 0.15rem; }
          .cal-btn-add { width: 100%; }
        }
      `}</style>
    </div>
  );
};
