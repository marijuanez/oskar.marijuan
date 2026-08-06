import React, { useState } from 'react';
import { getStoredPromotions, savePromotions } from '../../services/cmsService';
import { Plus, Eye, EyeOff, Trash2, Save, X, Calendar, Layers } from 'lucide-react';

export const PromotionsManager = () => {
  const [promotions, setPromotions] = useState(getStoredPromotions());
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState({
    headline: '',
    bodyText: '',
    image: '/images/IMG_1240.jpeg',
    ctaText: 'Ver Promoción',
    ctaLink: '#personalizacion',
    active: true,
    startDate: '',
    endDate: ''
  });

  const activeCount = promotions.filter(p => p.active).length;

  const handleToggleActive = (id) => {
    const updated = promotions.map(p => p.id === id ? { ...p, active: !p.active } : p);
    setPromotions(updated);
    savePromotions(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Deseas eliminar esta promoción de la portada?")) {
      const updated = promotions.filter(p => p.id !== id);
      setPromotions(updated);
      savePromotions(updated);
    }
  };

  const handleSaveAdd = (e) => {
    e.preventDefault();
    const newId = `promo_${Date.now()}`;
    const updated = [...promotions, { ...formData, id: newId }];
    setPromotions(updated);
    savePromotions(updated);
    setShowAddForm(false);
    setFormData({
      headline: '',
      bodyText: '',
      image: '/images/IMG_1240.jpeg',
      ctaText: 'Ver Promoción',
      ctaLink: '#personalizacion',
      active: true,
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="promotions-manager-module">
      
      {/* FULL WIDTH STACKED HEADER */}
      <div className="module-header">
        <div className="header-text-block">
          <h2 className="header-title">Gestión del Banner de Promociones</h2>
          <p className="header-subtitle">Publica ofertas temporales y eventos especiales en la portada sin desplegar código.</p>
        </div>

        <button className="btn btn-primary btn-sm header-action-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={16} />
          <span>Nueva Promoción</span>
        </button>
      </div>

      {/* Mode Auto-Detector Notification */}
      <div className="mode-status-banner">
        <Layers className="icon-cyan" size={22} />
        <div>
          <h4>Modo de Presentación en Portada: 
            <span className="gold-text">
              {activeCount === 0 
                ? ' Oculto (0 promociones activas)'
                : activeCount === 1 
                ? ' Banner Estático Individual (1 activa)'
                : ` Carrusel Giratorio (${activeCount} activas en rotación)`
              }
            </span>
          </h4>
          <p>El sistema detecta automáticamente el número de promociones activas y las muestra como banner único o carrusel girable.</p>
        </div>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <form onSubmit={handleSaveAdd} className="glass-card add-promo-form">
          <h3>Crear Nueva Promoción para la Portada</h3>
          
          <div className="form-field">
            <label>Titular de la Promoción *</label>
            <input 
              type="text" 
              required 
              placeholder="Ej: Menú Especial Paella los Fines de Semana"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label>Texto Descriptivo *</label>
            <textarea 
              rows="2" 
              required 
              placeholder="Explicación breve de la oferta o servicio especial..."
              value={formData.bodyText}
              onChange={(e) => setFormData({ ...formData, bodyText: e.target.value })}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Texto del Botón CTA</label>
              <input 
                type="text" 
                placeholder="Ej: Reservar Fecha Especial"
                value={formData.ctaText}
                onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Ruta de Imagen *</label>
              <input 
                type="text" 
                required 
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Fecha Inicio (Opcional)</label>
              <input 
                type="date" 
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Fecha Fin (Opcional)</label>
              <input 
                type="date" 
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              <span>Publicar Promoción</span>
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>
              <X size={16} />
              <span>Cancelar</span>
            </button>
          </div>
        </form>
      )}

      {/* Promotions List */}
      <div className="promotions-list">
        {promotions.map(promo => (
          <div key={promo.id} className={`glass-card promo-cms-card ${!promo.active ? 'is-inactive' : ''}`}>
            <img src={promo.image} alt={promo.headline} className="promo-cms-img" />

            <div className="promo-cms-content">
              <div className="promo-cms-header">
                <h3>{promo.headline}</h3>
                <span className={`status-badge ${promo.active ? 'active' : 'inactive'}`}>
                  {promo.active ? 'Activa' : 'Desactivada'}
                </span>
              </div>

              <p>{promo.bodyText}</p>

              {(promo.startDate || promo.endDate) && (
                <div className="date-range-tag">
                  <Calendar size={14} />
                  <span>Vigencia: {promo.startDate || '—'} a {promo.endDate || 'Sin límite'}</span>
                </div>
              )}
            </div>

            <div className="promo-cms-actions">
              <button 
                className={`btn-action-icon ${promo.active ? 'active' : ''}`}
                title={promo.active ? "Desactivar de portada" : "Activar en portada"}
                onClick={() => handleToggleActive(promo.id)}
              >
                {promo.active ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>

              <button 
                className="btn-action-icon delete"
                title="Eliminar promoción"
                onClick={() => handleDelete(promo.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .promotions-manager-module {
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

        .mode-status-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid var(--accent-cyan);
          padding: 1.25rem 1.8rem;
        }

        .mode-status-banner h4 { font-size: 1.1rem; color: #FFF; margin-bottom: 0.2rem; }
        .mode-status-banner p { font-size: 0.88rem; color: var(--text-dark-secondary); }
        .gold-text { color: var(--accent-cyan); }

        .add-promo-form {
          border: 1px solid var(--accent-cyan);
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

        .form-field input, .form-field textarea {
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .promotions-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .promo-cms-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .promo-cms-card.is-inactive { opacity: 0.5; }

        .promo-cms-img {
          width: 140px;
          height: 100px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .promo-cms-content {
          flex-grow: 1;
        }

        .promo-cms-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .promo-cms-header h3 { font-size: 1.25rem; color: #FFF; }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
        }

        .status-badge.active { background: rgba(39, 90, 56, 0.9); color: #FFF; }
        .status-badge.inactive { background: rgba(168, 35, 42, 0.9); color: #FFF; }

        .date-range-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          margin-top: 0.5rem;
        }

        .promo-cms-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-action-icon {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: #FFF;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-action-icon:hover { border-color: var(--accent-cyan); color: var(--accent-cyan); }
        .btn-action-icon.delete:hover { border-color: var(--accent-red); color: var(--accent-red); }

        @media (max-width: 768px) {
          .header-action-btn { width: 100%; }
          .promo-cms-card { flex-direction: column; align-items: flex-start; }
          .promo-cms-img { width: 100%; height: 160px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
