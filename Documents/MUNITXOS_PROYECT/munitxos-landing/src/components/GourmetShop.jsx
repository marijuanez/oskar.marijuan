import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Plus, ShoppingBag } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const GourmetShop = ({ onAddToCart, onOpenCart }) => {
  const { t } = useTranslation();
  const products = t('gourmetShop.products');

  return (
    <section id="gourmet" className="section-padding gourmet-section">
      <div className="container">
        <div className="section-header">
          <div className="badge burgundy-badge">{t('gourmetShop.badge')}</div>
          <h2>{t('gourmetShop.title')}</h2>
          <HorizontalPintxoIcon color="#C9B04A" width={140} height={32} />
          <p>{t('gourmetShop.subtitle')}</p>
        </div>

        <div className="gourmet-grid">
          {products.map((prod) => (
            <div key={prod.id} className="gourmet-card">
              <div className="gourmet-img-wrapper">
                <img src={prod.image} alt={prod.name} className="gourmet-img" />
                <span className="gourmet-category">{prod.category}</span>
              </div>

              <div className="gourmet-content">
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>

                <div className="gourmet-footer">
                  <div className="gourmet-price-row">
                    <span className="gourmet-price">{prod.price.toFixed(2)}€</span>
                  </div>
                  <button 
                    className="btn btn-primary gourmet-add-btn"
                    onClick={() => onAddToCart(prod)}
                  >
                    <Plus size={16} />
                    <span>{t('gourmetShop.addBtn')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gourmet-bottom-cta">
          <button className="btn btn-outline-gold gourmet-cart-btn" onClick={onOpenCart}>
            <ShoppingBag size={18} />
            <span>{t('gourmetShop.interestBtn')}</span>
          </button>
        </div>
      </div>

      <style>{`
        .gourmet-section {
          background-color: #5B1C2B;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .gourmet-section h2 {
          color: #FFFFFF;
        }

        .gourmet-section .section-header p {
          color: #E8DFDC;
        }

        .burgundy-badge {
          background: rgba(201, 176, 74, 0.18) !important;
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        .gourmet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .gourmet-card {
          background: #1C0A0F;
          border: 1px solid rgba(201, 176, 74, 0.35);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .gourmet-card:hover {
          transform: translateY(-6px);
          border-color: #C9B04A;
        }

        .gourmet-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .gourmet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gourmet-card:hover .gourmet-img {
          transform: scale(1.05);
        }

        .gourmet-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(28, 10, 15, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid #C9B04A;
          color: #C9B04A;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          text-transform: uppercase;
        }

        .gourmet-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .gourmet-content h3 {
          font-size: 1.25rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .gourmet-content p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          color: #E8DFDC;
        }

        .gourmet-footer {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid rgba(201, 176, 74, 0.2);
          padding-top: 1rem;
          width: 100%;
        }

        .gourmet-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gourmet-price {
          font-family: var(--font-subtitles);
          font-size: 1.6rem;
          font-weight: 700;
          color: #C9B04A;
          white-space: nowrap;
        }

        .gourmet-add-btn {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          justify-content: center;
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        .gourmet-add-btn:hover {
          background: #E6C665 !important;
        }

        .gourmet-bottom-cta {
          text-align: center;
          margin-top: 3rem;
        }

        .gourmet-cart-btn {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
          background: #1C0A0F !important;
        }

        .gourmet-cart-btn:hover {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }
      `}</style>
    </section>
  );
};
