import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export const GourmetCartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <ShoppingBag size={22} className="icon-gold" />
            <h3>Lista de Compras Gourmet</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar"><X size={24} /></button>
        </div>

        {/* Cart Items List */}
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} className="empty-icon" />
              <p>Tu selección gourmet está vacía.</p>
              <span className="empty-sub">Añade conservas, vinos vascos o quesos artesanos de nuestra tienda.</span>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">{(item.price * item.quantity).toFixed(2)}€</span>
                    
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                  </div>

                  <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Action */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-total-row">
              <span>Total Estimado:</span>
              <span className="total-price">{totalAmount.toFixed(2)}€</span>
            </div>

            <button 
              className="btn btn-primary w-full"
              onClick={() => {
                alert(`¡Gracias! Hemos recibido tu solicitud para los productos gourmet seleccionados. Te contactaremos para coordinar el envío en Múnich.`);
                onClose();
              }}
            >
              <span>Solicitar Productos Gourmet</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          z-index: 1002;
          display: flex;
          justify-content: flex-end;
        }

        .drawer-content {
          width: 90%;
          max-width: 440px;
          background: var(--bg-surface-dark);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.7);
        }

        .drawer-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .drawer-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .drawer-title-group h3 {
          font-size: 1.25rem;
          color: var(--text-dark-primary);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          cursor: pointer;
        }

        .drawer-body {
          padding: 1.5rem;
          flex-grow: 1;
          overflow-y: auto;
        }

        .empty-cart {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-dark-muted);
          gap: 0.75rem;
        }

        .empty-icon { opacity: 0.3; }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          background: var(--bg-card-dark);
          padding: 1rem;
          border-radius: var(--radius-md);
          align-items: center;
          border: 1px solid rgba(247, 245, 240, 0.06);
        }

        .cart-item-img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }

        .cart-item-details {
          flex-grow: 1;
        }

        .cart-item-details h4 {
          font-size: 0.95rem;
          color: var(--text-dark-primary);
          margin-bottom: 0.2rem;
        }

        .cart-item-price {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--accent-gold);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 13, 12, 0.6);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          width: fit-content;
        }

        .qty-controls button {
          background: transparent;
          border: none;
          color: var(--text-dark-primary);
          cursor: pointer;
        }

        .remove-item-btn {
          background: transparent;
          border: none;
          color: var(--text-dark-muted);
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .remove-item-btn:hover {
          color: var(--accent-red);
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          background: var(--bg-card-dark);
        }

        .cart-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }

        .total-price {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
      `}</style>
    </div>
  );
};
