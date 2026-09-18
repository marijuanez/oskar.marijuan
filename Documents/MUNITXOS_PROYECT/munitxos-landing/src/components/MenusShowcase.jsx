import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const MenusShowcase = ({ onSelectMenuCategory }) => {
  const { t } = useTranslation();
  const categories = t('menus.categories');
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];

  return (
    <section id="menus" className="section-padding bg-surface">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('menus.badge')}</div>
          <h2>{t('menus.title')}</h2>
          <HorizontalPintxoIcon color="#D4AF37" width={140} height={32} />
          <p>{t('menus.subtitle')}</p>
        </div>

        {/* Category Tabs */}
        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Category Showcase Display */}
        <div className="menu-card-display">
          <div className="menu-image-column">
            <img 
              src={activeCategory.image} 
              alt={activeCategory.name} 
              className="menu-featured-img"
            />
            <div className="menu-img-badge">{activeCategory.tagline}</div>
          </div>

          <div className="menu-info-column">
            <h3 className="menu-cat-title">{activeCategory.name}</h3>
            <p className="menu-cat-desc">{activeCategory.description}</p>

            {/* Highlights */}
            <div className="menu-highlights">
              {activeCategory.highlights.map((h, i) => (
                <span key={i} className="highlight-tag">
                  <CheckCircle2 size={15} />
                  <span>{h}</span>
                </span>
              ))}
            </div>

            {/* Sample Dish List */}
            <div className="dishes-list">
              <h4>{t('menus.sampleDishesTitle') || 'Selección representativa de platos:'}</h4>
              <ul>
                {activeCategory.items.map((dish, i) => (
                  <li key={i}>
                    <span className="bullet">•</span>
                    <span className="dish-name">{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              className="btn btn-primary menu-cta-btn"
              onClick={() => onSelectMenuCategory(activeCategory.id)}
            >
              <span className="cta-text-wrap">{t('menus.cta')} — {activeCategory.name}</span>
              <ChevronRight size={18} className="cta-icon" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .menu-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          width: 100%;
        }

        .menu-tab-btn {
          background: rgba(30, 29, 27, 0.7);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-secondary);
          padding: 0.85rem 1.8rem;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-transform: uppercase;
          max-width: 100%;
          box-sizing: border-box;
        }

        .menu-tab-btn:hover {
          color: var(--text-dark-primary);
          border-color: var(--accent-cyan);
        }

        .menu-tab-btn.active {
          background: var(--accent-cyan);
          color: #0D0D0C;
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        .menu-card-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .menu-image-column {
          position: relative;
          min-height: 420px;
          width: 100%;
          overflow: hidden;
        }

        .menu-featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .menu-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(13, 13, 12, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          width: fit-content;
          max-width: calc(100% - 3rem);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-info-column {
          padding: 2.5rem 2.5rem 2.5rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .menu-cat-title {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          color: var(--text-dark-primary);
          margin-bottom: 0.75rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-cat-desc {
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .menu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
          width: 100%;
          max-width: 100%;
        }

        .highlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          text-transform: uppercase;
          max-width: 100%;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          line-height: 1.3;
          box-sizing: border-box;
        }

        .dishes-list {
          margin-bottom: 2rem;
          width: 100%;
          max-width: 100%;
        }

        .dishes-list h4 {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          word-break: break-word;
        }

        .dishes-list ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
          max-width: 100%;
        }

        .dishes-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .dish-name {
          word-break: break-word;
          overflow-wrap: break-word;
          flex: 1;
        }

        .bullet {
          color: var(--accent-cyan);
          font-weight: bold;
          flex-shrink: 0;
        }

        .menu-cta-btn {
          width: 100%;
          max-width: 100%;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          text-align: center;
          justify-content: center;
          line-height: 1.35;
          padding: 0.85rem 1.25rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-text-wrap {
          white-space: normal !important;
          word-break: break-word !important;
          text-align: center;
        }

        .cta-icon {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .menu-card-display {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .menu-info-column {
            padding: 1.5rem 1.25rem;
          }
          .menu-image-column {
            min-height: 240px;
          }
        }

        @media (max-width: 480px) {
          .menu-info-column {
            padding: 1.25rem 0.9rem;
          }
          .menu-tab-btn {
            padding: 0.65rem 1rem;
            font-size: 0.85rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
