import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Plus, ShoppingBag } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const GourmetShop = ({ onAddToCart, onOpenCart }) => {
  const { t } = useTranslation();
  const products = t('gourmetShop.products');

  return (
    <section id="gourmet" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('gourmetShop.badge')}</div>
          <h2>{t('gourmetShop.title')}</h2>
          <HorizontalPintxoIcon color="#D4AF37" width={140} height={32} />
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
          <button className="btn btn-outline-gold" onClick={onOpenCart}>
            <ShoppingBag size={18} />
            <span>{t('gourmetShop.interestBtn')}</span>
          </button>
        </div>
      </div>

      <style>{`
        .gourmet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .gourmet-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .gourmet-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
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
          background: rgba(13, 13, 12, 0.9);
          backdrop-filter: blur(8px);
          color: var(--accent-cyan);
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
          color: var(--text-dark-primary);
          margin-bottom: 0.5rem;
        }

        .gourmet-content p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .gourmet-footer {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
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
          color: var(--accent-cyan);
          white-space: nowrap;
        }

        .gourmet-add-btn {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          justify-content: center;
          white-space: nowrap !important;
        }

        .gourmet-bottom-cta {
          text-align: center;
          margin-top: 3rem;
        }
      `}</style>
    </section>
  );
};
