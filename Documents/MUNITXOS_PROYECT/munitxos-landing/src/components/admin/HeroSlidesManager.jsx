import React, { useState, useEffect } from 'react';
import { getStoredHeroSlides, saveHeroSlides, updateHeroSlide, optimizeImageFile } from '../../services/cmsService';
import { Plus, Trash2, Edit2, Eye, EyeOff, Check, Video, Image as ImageIcon } from 'lucide-react';

export const HeroSlidesManager = () => {
  const [slides, setSlides] = useState([]);
  const [editingSlide, setEditingSlide] = useState(null);
  const [uploadingPoster, setUploadingPoster] = useState(false);

  const [form, setForm] = useState({
    id: '',
    title: '',
    subtitle: '',
    video: '',
    poster: '',
    active: true
  });

  useEffect(() => {
    setSlides(getStoredHeroSlides());
  }, []);

  const handleEdit = (slide) => {
    setEditingSlide(slide.id);
    setForm({ ...slide });
  };

  const handleCancel = () => {
    setEditingSlide(null);
    setForm({
      id: '',
      title: '',
      subtitle: '',
      video: '',
      poster: '',
      active: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.video) {
      alert('Por favor completa al menos el título y la URL del vídeo.');
      return;
    }

    const slideToSave = {
      ...form,
      id: form.id || `slide_${Date.now()}`
    };

    const updated = updateHeroSlide(slideToSave);
    setSlides([...updated]);
    handleCancel();
  };

  const handleToggleActive = (id) => {
    const updated = slides.map(s => s.id === id ? { ...s, active: !s.active } : s);
    saveHeroSlides(updated);
    setSlides(updated);
  };

  const handleDelete = (id) => {
    if (confirm('¿Eliminar esta diapositiva del carrusel Hero?')) {
      const updated = slides.filter(s => s.id !== id);
      saveHeroSlides(updated);
      setSlides(updated);
    }
  };

  const handlePosterUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setUploadingPoster(true);
      const optimized = await optimizeImageFile(file, 1200, 800, 0.8);
      setForm(prev => ({ ...prev, poster: optimized }));
    } catch (err) {
      alert('Error optimizando la imagen de póster: ' + err.message);
    } finally {
      setUploadingPoster(false);
    }
  };

  return (
    <div className="hero-slides-manager">
      <div className="cms-section-header">
        <div>
          <h2>Carrusel de Vídeo Principal (Hero Banner)</h2>
          <p>Gestiona los vídeos de fondo, títulos e imágenes de portada que se muestran en la cabecera.</p>
        </div>
        {!editingSlide && (
          <button 
            className="btn btn-primary"
            onClick={() => {
              setEditingSlide('new');
              setForm({
                id: `slide_${Date.now()}`,
                title: '',
                subtitle: '',
                video: '',
                poster: '',
                active: true
              });
            }}
          >
            <Plus size={16} />
            <span>Añadir Diapositiva de Vídeo</span>
          </button>
        )}
      </div>

      {/* Slide Form (Edit / Create) */}
      {editingSlide && (
        <form onSubmit={handleSubmit} className="cms-edit-card">
          <h3>{editingSlide === 'new' ? 'Añadir Nueva Diapositiva' : 'Editar Diapositiva'}</h3>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Título del Indicador (ej. 01 Pintxos Gourmet):</label>
              <input 
                type="text" 
                value={form.title} 
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder="01 Pintxos Gourmet"
                required
              />
            </div>

            <div className="form-group">
              <label>Subtítulo Corto:</label>
              <input 
                type="text" 
                value={form.subtitle} 
                onChange={e => setForm({ ...form, subtitle: e.target.value })}
                placeholder="Elaboración y artesanía vasca"
              />
            </div>

            <div className="form-group full-width">
              <label>URL del Vídeo (MP4 loop):</label>
              <div className="input-with-icon">
                <Video size={18} />
                <input 
                  type="url" 
                  value={form.video} 
                  onChange={e => setForm({ ...form, video: e.target.value })}
                  placeholder="https://servidor.com/video.mp4"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Imagen de Portada (Poster / Fallback):</label>
              <div className="image-upload-box">
                {form.poster && (
                  <img src={form.poster} alt="Preview" className="poster-preview" />
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePosterUpload}
                  disabled={uploadingPoster}
                />
                {uploadingPoster && <span>Optimizando póster...</span>}
              </div>
            </div>

            <div className="form-group full-width checkbox-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={form.active} 
                  onChange={e => setForm({ ...form, active: e.target.checked })}
                />
                <span>Diapositiva Activa en el Carrusel</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <Check size={16} />
              <span>Guardar Diapositiva</span>
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Slides List */}
      <div className="slides-grid">
        {slides.map(slide => (
          <div key={slide.id} className={`slide-cms-card ${!slide.active ? 'is-inactive' : ''}`}>
            <div className="slide-media-preview">
              <video src={slide.video} poster={slide.poster} muted loop playsInline className="mini-video" />
              <div className="slide-status-badge">
                {slide.active ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>{slide.active ? 'Activo' : 'Oculto'}</span>
              </div>
            </div>

            <div className="slide-card-body">
              <h4>{slide.title}</h4>
              <p>{slide.subtitle}</p>
              
              <div className="slide-card-actions">
                <button className="btn-icon" onClick={() => handleEdit(slide)} title="Editar">
                  <Edit2 size={16} />
                </button>
                <button className="btn-icon" onClick={() => handleToggleActive(slide.id)} title="Visibilidad">
                  {slide.active ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button className="btn-icon danger" onClick={() => handleDelete(slide.id)} title="Eliminar">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hero-slides-manager {
          padding: 1rem 0;
        }

        .cms-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .cms-edit-card {
          background: #181716;
          border: 1px solid rgba(229, 167, 27, 0.35);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .full-width {
          grid-column: span 2;
        }

        .input-with-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #0C0B0A;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.5rem 0.75rem;
          color: #FFF;
        }

        .input-with-icon input {
          background: none;
          border: none;
          color: #FFF;
          width: 100%;
          outline: none;
        }

        .poster-preview {
          height: 70px;
          width: 110px;
          object-fit: cover;
          margin-bottom: 0.5rem;
          display: block;
        }

        .slides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .slide-cms-card {
          background: #181716;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .slide-cms-card.is-inactive {
          opacity: 0.5;
        }

        .slide-media-preview {
          position: relative;
          height: 140px;
          background: #000;
        }

        .mini-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-status-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.75);
          color: #e5a71b;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .slide-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slide-card-body h4 {
          color: #FFF;
          font-size: 1rem;
        }

        .slide-card-body p {
          color: rgba(247, 245, 240, 0.7);
          font-size: 0.85rem;
        }

        .slide-card-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-icon {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #FFF;
          padding: 0.4rem;
          cursor: pointer;
        }

        .btn-icon:hover {
          background: #e5a71b;
          color: #000;
        }

        .btn-icon.danger:hover {
          background: #e74c3c;
          color: #FFF;
        }
      `}</style>
    </div>
  );
};
