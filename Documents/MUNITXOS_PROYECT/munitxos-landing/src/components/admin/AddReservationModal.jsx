import React, { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';

export const AddReservationModal = ({ isOpen, onClose, prefilledDate, onSave }) => {
  const [formData, setFormData] = useState({
    date: prefilledDate || '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    guests: 20,
    menuType: 'sushi-fusion',
    menuName: 'Fusión Nikkei (Sushi + Pinchos)',
    status: 'confirmed',
    estimatedTotal: 960,
    location: '',
    notes: ''
  });

  useEffect(() => {
    if (prefilledDate) {
      setFormData(prev => ({ ...prev, date: prefilledDate }));
    }
  }, [prefilledDate]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      source: 'manual',
      createdAt: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}><X size={24} /></button>

        {/* 2-Line Modal Title Layout (As requested in Image 4) */}
        <h3 className="modal-title">
          <span className="title-main-line">Añadir Reserva Manual</span>
          <span className="title-sub-line">(Teléfono / Email)</span>
        </h3>
        
        <p className="modal-subtitle">Introduce los datos de la reserva aceptada directamente para actualizar el mapa de ocupación.</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="form-field">
              <label>Fecha del Evento *</label>
              <input 
                type="date" 
                required 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Número de Invitados *</label>
              <input 
                type="number" 
                min="10" 
                max="100" 
                required 
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Nombre Completo del Cliente *</label>
            <input 
              type="text" 
              required 
              placeholder="Ej: Dr. Schmidt"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Email *</label>
              <input 
                type="email" 
                required 
                placeholder="schmidt@example.de"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Teléfono *</label>
              <input 
                type="tel" 
                required 
                placeholder="+49 89 123456"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Menú Principal</label>
              <select 
                value={formData.menuType}
                onChange={(e) => {
                  const type = e.target.value;
                  const nameMap = {
                    'sushi-fusion': 'Fusión Nikkei (Sushi + Pinchos)',
                    'de-tapas': 'Experiencia Pinchos & Tapas',
                    'full-experience': 'Experiencia Completa MUNCHOS'
                  };
                  setFormData({ 
                    ...formData, 
                    menuType: type,
                    menuName: nameMap[type] || type 
                  });
                }}
              >
                <option value="sushi-fusion">Fusión Nikkei (Sushi + Pinchos)</option>
                <option value="de-tapas">Experiencia Pinchos & Tapas</option>
                <option value="full-experience">Experiencia Completa MUNCHOS</option>
              </select>
            </div>

            <div className="form-field">
              <label>Estado Inicial</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="confirmed">Confirmada</option>
                <option value="pending">Pendiente de pago</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Precio Total Estimado (€)</label>
              <input 
                type="number" 
                value={formData.estimatedTotal}
                onChange={(e) => setFormData({ ...formData, estimatedTotal: parseFloat(e.target.value) })}
              />
            </div>

            <div className="form-field">
              <label>Zona / Ubicación en Múnich</label>
              <input 
                type="text" 
                placeholder="Ej: Bogenhausen"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Notas Adicionales</label>
            <textarea 
              rows="2" 
              placeholder="Detalles sobre vajilla, alergias, cocinero presencial..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            <Plus size={18} />
            <span>Guardar Reserva Manual</span>
          </button>
        </form>

      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1005;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          padding: 2.5rem;
          width: 100%;
          max-width: 620px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        /* 2-LINE TITLE FORMATTING */
        .modal-title {
          display: flex;
          flex-direction: column;
          font-size: 1.7rem;
          color: #FFF;
          margin-bottom: 0.4rem;
          line-height: 1.25;
        }

        .title-main-line {
          font-family: var(--font-subtitles);
          font-weight: 700;
          color: #FFF;
        }

        .title-sub-line {
          font-family: var(--font-subtitles);
          font-size: 1.25rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .modal-subtitle { font-size: 0.9rem; color: var(--text-dark-secondary); margin-bottom: 1.5rem; }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-field label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        .form-field input, .form-field select, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .w-full { width: 100%; }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
          .modal-container { padding: 1.5rem; }
          .modal-title { font-size: 1.4rem; }
          .title-sub-line { font-size: 1.05rem; }
        }
      `}</style>
    </div>
  );
};
