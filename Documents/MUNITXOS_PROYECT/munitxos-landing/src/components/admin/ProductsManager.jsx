import React, { useState } from 'react';
import { getStoredProducts, saveProducts } from '../../services/cmsService';
import { Plus, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export const ProductsManager = () => {
  const [products, setProducts] = useState(getStoredProducts());
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Conservas Artesanales',
    price: 15.00,
    image: '/images/IMG_1241.jpeg',
    desc: '',
    active: true
  });

  const handleToggleActive = (id) => {
    const updated = products.map(p => p.id === id ? { ...p, active: !p.active } : p);
    setProducts(updated);
    saveProducts(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto gourmet?")) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      saveProducts(updated);
    }
  };

  const handleSaveAdd = (e) => {
    e.preventDefault();
    const newId = `prod_${Date.now()}`;
    const updated = [...products, { ...formData, id: newId }];
    setProducts(updated);
    saveProducts(updated);
    setShowAddForm(false);
    setFormData({
      name: '',
      category: 'Conservas Artesanales',
      price: 15.00,
      image: '/images/IMG_1241.jpeg',
      desc: '',
      active: true
    });
  };

  return (
    <div className="products-manager-module">
      
      {/* FULL WIDTH STACKED HEADER (As requested in Image 5) */}
      <div className="module-header">
        <div className="header-text-block">
          <h2 className="header-title">Gestión de Productos Gourmet (CMS)</h2>
          <p className="header-subtitle">Edita la tienda delicatessen pública en tiempo real sin reiniciar ni redesplegar código.</p>
        </div>

        <button className="btn btn-primary btn-sm header-action-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus size={16} />
          <span>Nuevo Producto Gourmet</span>
        </button>
      </div>

      {/* Add Form Collapse */}
      {showAddForm && (
        <form onSubmit={handleSaveAdd} className="glass-card add-prod-form">
          <h3>Añadir Nuevo Producto Gourmet</h3>
          
          <div className="form-row">
            <div className="form-field">
              <label>Nombre del Producto *</label>
              <input 
                type="text" 
                required 
                placeholder="Ej: Bonito del Norte en AOVE"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Categoría *</label>
              <input 
                type="text" 
                required 
                placeholder="Ej: Conservas Artesanales"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Precio (€) *</label>
              <input 
                type="number" 
                step="0.10"
                required 
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              />
            </div>

            <div className="form-field">
              <label>Ruta / URL de la Imagen</label>
              <input 
                type="text" 
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Descripción Gastronómica *</label>
            <textarea 
              rows="2" 
              required 
              placeholder="Detalles sobre elaboración, origen o maridaje recomendados..."
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              <span>Guardar Producto</span>
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>
              <X size={16} />
              <span>Cancelar</span>
            </button>
          </div>
        </form>
      )}

      {/* Product Cards List Grid */}
      <div className="products-cms-grid">
        {products.map(prod => (
          <div key={prod.id} className={`glass-card cms-product-card ${!prod.active ? 'is-inactive' : ''}`}>
            
            <div className="cms-img-wrapper">
              <img src={prod.image} alt={prod.name} className="cms-prod-img" />
              <span className={`status-badge ${prod.active ? 'active' : 'inactive'}`}>
                {prod.active ? 'Visible en Web' : 'Oculto'}
              </span>
            </div>

            <div className="cms-prod-body">
              <span className="cms-cat">{prod.category}</span>
              <h4>{prod.name}</h4>
              <p>{prod.desc}</p>

              <div className="cms-price-row">
                <span className="cms-price">{prod.price.toFixed(2)}€</span>

                <div className="cms-actions">
                  <button 
                    className={`btn-action-icon ${prod.active ? 'active' : ''}`}
                    title={prod.active ? "Ocultar en la web" : "Hacer visible"}
                    onClick={() => handleToggleActive(prod.id)}
                  >
                    {prod.active ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>

                  <button 
                    className="btn-action-icon delete"
                    title="Eliminar producto"
                    onClick={() => handleDelete(prod.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <style>{`
        .products-manager-module {
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

        .add-prod-form {
          border: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          gap: 1rem;
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
          margin-top: 0.5rem;
        }

        .products-cms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .cms-product-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .cms-product-card.is-inactive {
          opacity: 0.6;
        }

        .cms-img-wrapper {
          position: relative;
          height: 180px;
        }

        .cms-prod-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          text-transform: uppercase;
        }

        .status-badge.active { background: rgba(39, 90, 56, 0.9); color: #FFF; }
        .status-badge.inactive { background: rgba(168, 35, 42, 0.9); color: #FFF; }

        .cms-prod-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cms-cat {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .cms-prod-body h4 {
          font-size: 1.15rem;
          color: #FFF;
          margin-bottom: 0.5rem;
        }

        .cms-prod-body p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .cms-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 1rem;
        }

        .cms-price {
          font-family: var(--font-subtitles);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .cms-actions {
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

        @media (max-width: 640px) {
          .header-action-btn { width: 100%; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
