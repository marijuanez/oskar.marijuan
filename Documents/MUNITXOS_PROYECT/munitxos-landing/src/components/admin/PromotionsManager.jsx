import React, { useState } from 'react';
import { getStoredPromotions, savePromotions, updatePromotion, optimizeImageFile } from '../../services/cmsService';
import { Plus, Eye, EyeOff, Trash2, Save, X, Calendar, Layers, Pencil, Upload, Image as ImageIcon, Zap } from 'lucide-react';

export const PromotionsManager = () => {
  const [promotions, setPromotions] = useState(getStoredPromotions());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

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

  const handleStartEdit = (promo) => {
    setEditingId(promo.id);
    setFormData({
      headline: promo.headline || '',
      bodyText: promo.bodyText || '',
      image: promo.image || '/images/IMG_1240.jpeg',
      ctaText: promo.ctaText || 'Ver Promoción',
      ctaLink: promo.ctaLink || '#personalizacion',
      active: promo.active !== undefined ? promo.active : true,
      startDate: promo.startDate || '',
      endDate: promo.endDate || ''
    });
    setShowAddForm(true);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleCancelForm = () => {
    setShowAddForm(false);
    setEditingId(null);
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

  const handleImageFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    setIsOptimizing(true);
    try {
      const optimizedUrl = await optimizeImageFile(file, 800, 800, 0.78);
      setFormData(prev => ({ ...prev, image: optimizedUrl }));
    } catch (e) {
      console.error("Error al optimizar la imagen:", e);
    } finally {
      setIsOptimizing(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    const itemToSave = {
      ...formData,
      id: editingId || `promo_${Date.now()}`
    };
    const updated = updatePromotion(itemToSave);
    setPromotions(updated);
    handleCancelForm();
  };

  return (
    <div className="promotions-manager-module">
      
      {/* FULL WIDTH STACKED HEADER */}
      <div className="module-header">
        <div className="header-text-block">
          <h2 className="header-title">Gestión del Banner de Promociones</h2>
          <p className="header-subtitle">Edita, añade o sube imágenes para ofertas temporales y eventos especiales en tiempo real.</p>
        </div>

        <button 
          className="btn btn-primary btn-sm header-action-btn" 
          onClick={() => {
            if (showAddForm && !editingId) {
              handleCancelForm();
            } else {
              setEditingId(null);
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
              setShowAddForm(true);
            }
          }}
        >
          <Plus size={16} />
          <span>{showAddForm ? 'Cerrar Formulario' : 'Nueva Promoción'}</span>
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

      {/* Add / Edit Form Collapse */}
      {showAddForm && (
        <form onSubmit={handleSaveForm} className="glass-card add-promo-form">
          <h3>{editingId ? '✍️ Editar Promoción de Portada' : '✨ Crear Nueva Promoción para la Portada'}</h3>
          
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
              <label>Ruta / URL de la Imagen *</label>
              <input 
                type="text" 
                required 
                value={formData.image.startsWith('data:') ? `[Imagen Base64 Optimizada - ${Math.round(formData.image.length / 1024)} KB]` : formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                title={formData.image}
              />
            </div>
          </div>

          {/* Drag & Drop Image Upload Zone */}
          <div className="form-field">
            <label className="drag-header-label">
              <span>Subir Imagen por Arrastre (Drag & Drop)</span>
              <span className="badge-opt"><Zap size={12} /> Auto-Optimización Canvas 800px</span>
            </label>
            <div 
              className={`drag-drop-zone ${isDragging ? 'is-dragging' : ''} ${isOptimizing ? 'is-optimizing' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                accept="image/*" 
                id="file-promo-input"
                className="file-hidden-input"
                onChange={(e) => handleImageFile(e.target.files[0])}
              />
              <label htmlFor="file-promo-input" className="drag-label-content">
                {isOptimizing ? (
                  <div className="optimizing-text">
                    <Zap size={24} className="icon-cyan spin" />
                    <span>Optimizando y comprimiendo imagen en canvas...</span>
                  </div>
                ) : formData.image ? (
                  <div className="preview-row">
                    <img src={formData.image} alt="Preview" className="drag-preview-img" />
                    <div className="preview-info">
                      <span className="preview-status">⚡ Imagen procesada y optimizada.</span>
                      <span className="preview-sub">Arrastra otra foto para reemplazarla.</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload size={28} className="icon-cyan" />
                    <span>Arrastra y suelta tu imagen aquí o <strong>haz clic para seleccionar</strong></span>
                  </>
                )}
              </label>
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
            <button type="submit" className="btn btn-primary" disabled={isOptimizing}>
              <Save size={16} />
              <span>{editingId ? 'Guardar Cambios' : 'Publicar Promoción'}</span>
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancelForm}>
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
                className="btn-action-icon edit"
                title="Editar promoción"
                onClick={() => handleStartEdit(promo)}
              >
                <Pencil size={17} />
              </button>

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
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
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
          box-sizing: border-box;
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
          width: 100%;
          box-sizing: border-box;
        }

        .mode-status-banner h4 { font-size: 1.1rem; color: #FFF; margin-bottom: 0.2rem; }
        .mode-status-banner p { font-size: 0.88rem; color: var(--text-dark-secondary); }
        .gold-text { color: var(--accent-cyan); }

        .add-promo-form {
          border: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          width: 100%;
          max-width: 100%;
          min-width: 0; /* PREVENT GRID OVERFLOW FROM BASE64 OR LONG TEXT */
          box-sizing: border-box;
        }

        .drag-header-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .badge-opt {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(62, 193, 201, 0.12);
          padding: 0.15rem 0.5rem;
          border: 1px solid rgba(62, 193, 201, 0.3);
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
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .form-field textarea {
          white-space: pre-wrap;
        }

        /* DRAG AND DROP ZONE */
        .drag-drop-zone {
          border: 2px dashed rgba(212, 175, 55, 0.4);
          background: rgba(13, 13, 12, 0.6);
          padding: 1.2rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .drag-drop-zone:hover, .drag-drop-zone.is-dragging {
          border-color: var(--accent-cyan);
          background: rgba(212, 175, 55, 0.08);
        }

        .file-hidden-input {
          display: none;
        }

        .drag-label-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .preview-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow: hidden;
        }

        .preview-status {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .preview-sub {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        .drag-preview-img {
          width: 54px;
          height: 54px;
          object-fit: cover;
          border: 1px solid var(--accent-cyan);
          flex-shrink: 0;
        }

        .optimizing-text {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
        }

        .promotions-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .promo-cms-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
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
          min-width: 0;
          overflow: hidden;
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
        .btn-action-icon.edit:hover { border-color: var(--accent-cyan); background: rgba(212, 175, 55, 0.2); }
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
