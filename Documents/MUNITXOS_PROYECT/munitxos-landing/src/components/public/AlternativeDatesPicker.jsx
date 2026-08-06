import React from 'react';
import { Calendar, AlertCircle, ArrowRight } from 'lucide-react';

export const AlternativeDatesPicker = ({ 
  requestedDateStr, 
  reason, 
  alternativeDates, 
  onSelectAlternative 
}) => {
  if (!alternativeDates || alternativeDates.length === 0) return null;

  return (
    <div className="alternative-dates-box">
      <div className="alt-header">
        <AlertCircle size={24} className="icon-alert" />
        <div>
          <h4>Fecha no disponible ({requestedDateStr})</h4>
          <p>{reason || "Hemos alcanzado la capacidad máxima de reservas para este día."}</p>
        </div>
      </div>

      <div className="alt-body">
        <span className="alt-title">Fechas alternativas más cercanas disponibles:</span>
        
        <div className="alt-grid">
          {alternativeDates.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="alt-date-card"
              onClick={() => onSelectAlternative(item.dateStr)}
            >
              <div className="alt-date-info">
                <Calendar size={18} className="icon-cyan" />
                <span className="alt-date-text">{item.formattedLabel}</span>
              </div>
              <div className="alt-action">
                <span className="alt-badge">
                  {item.offsetDays > 0 ? `+${item.offsetDays} días` : `${item.offsetDays} días`}
                </span>
                <ArrowRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .alternative-dates-box {
          background: rgba(168, 35, 42, 0.1);
          border: 1px solid var(--accent-red);
          padding: 1.8rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .alt-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding-bottom: 1rem;
        }

        .icon-alert {
          color: var(--accent-red);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .alt-header h4 {
          font-size: 1.15rem;
          color: #FFF;
          margin-bottom: 0.25rem;
        }

        .alt-header p {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .alt-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .alt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .alt-date-card {
          background: rgba(13, 13, 12, 0.85);
          border: 1px solid rgba(62, 193, 201, 0.3);
          color: #FFF;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .alt-date-card:hover {
          border-color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.15);
          transform: translateY(-2px);
        }

        .alt-date-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .alt-date-text {
          font-size: 0.92rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .alt-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-cyan);
        }

        .alt-badge {
          font-size: 0.75rem;
          background: rgba(62, 193, 201, 0.2);
          color: var(--accent-cyan);
          padding: 0.2rem 0.5rem;
          font-weight: 700;
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 640px) {
          .alt-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
