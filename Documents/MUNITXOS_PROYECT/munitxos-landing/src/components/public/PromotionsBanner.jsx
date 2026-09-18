import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { getActivePromotions } from '../../services/cmsService';
import { Tag, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const PromotionsBanner = () => {
  const { t, lang } = useTranslation();
  const [promos, setPromos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cmsPromos = getActivePromotions();
    const translatedItems = t('promotions.items');
    
    // Merge CMS image & link with translated text when switching language
    const merged = cmsPromos.map((cmsItem, idx) => {
      const trans = Array.isArray(translatedItems) && (translatedItems[idx] || translatedItems[0]);
      if (trans && lang !== 'es') {
        return {
          ...cmsItem,
          headline: trans.headline || cmsItem.headline,
          bodyText: trans.bodyText || cmsItem.bodyText,
          ctaText: trans.ctaText || cmsItem.ctaText
        };
      }
      return cmsItem;
    });

    setPromos(merged.length > 0 ? merged : cmsPromos);
  }, [lang, t]);

  useEffect(() => {
    if (promos.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % promos.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [promos]);

  if (promos.length === 0) return null;

  const isCarousel = promos.length > 1;
  const currentPromo = promos[currentIndex];

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % promos.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + promos.length) % promos.length);

  return (
    <section className="promotions-banner-section">
      <div className="container">
        <div className="promo-card">
          <div className="promo-image-col">
            <img src={currentPromo.image} alt={currentPromo.headline} className="promo-img" />
            <div className="promo-badge">
              <Tag size={15} />
              <span>{t('promotions.badge') || 'Promoción Exclusiva MUNCHOS'}</span>
            </div>
          </div>

          <div className="promo-content-col">
            <h2>{currentPromo.headline}</h2>
            <p>{currentPromo.bodyText}</p>

            {currentPromo.ctaText && (
              <a href={currentPromo.ctaLink || '#personalizacion'} className="btn btn-primary promo-btn">
                <span>{currentPromo.ctaText}</span>
                <ArrowRight size={18} />
              </a>
            )}

            {isCarousel && (
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {promos.map((_, i) => (
                    <span 
                      key={i} 
                      className={`dot ${i === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(i)}
                    />
                  ))}
                </div>
                <div className="carousel-arrows">
                  <button onClick={prevSlide} aria-label="Anterior"><ChevronLeft size={18} /></button>
                  <button onClick={nextSlide} aria-label="Siguiente"><ChevronRight size={18} /></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .promotions-banner-section {
          margin: 2rem 0;
        }

        .promo-card {
          display: grid;
          grid-template-columns: 360px 1fr;
          background: #5B1C2B;
          border: 1px solid #C9B04A;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          align-items: stretch;
        }

        .promo-image-col {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .promo-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .promo-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(13, 13, 12, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.3rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-transform: uppercase;
        }

        .promo-content-col {
          padding: 1.8rem 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .promo-content-col h2 {
          font-size: 1.6rem;
          color: #FFF;
          margin-bottom: 0.6rem;
          line-height: 1.25;
          font-family: var(--font-subtitles);
        }

        .promo-content-col p {
          font-size: 0.95rem;
          line-height: 1.55;
          margin-bottom: 1.2rem;
          color: var(--text-dark-secondary);
        }

        .promo-btn {
          align-self: flex-start;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.2rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }

        .carousel-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 24px;
          height: 4px;
          background: rgba(247, 245, 240, 0.2);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .dot.active {
          background: var(--accent-cyan);
        }

        .carousel-arrows {
          display: flex;
          gap: 0.5rem;
        }

        .carousel-arrows button {
          background: rgba(247, 245, 240, 0.08);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .carousel-arrows button:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        @media (max-width: 900px) {
          .promo-card {
            grid-template-columns: 280px 1fr;
          }
          .promo-content-col {
            padding: 1.4rem 1.6rem;
          }
        }

        @media (max-width: 680px) {
          .promotions-banner-section {
            margin: 0.5rem 0 0.85rem 0;
          }
          .promo-card {
            grid-template-columns: 1fr;
          }
          .promo-image-col {
            min-height: 200px;
            height: 200px;
          }
          .promo-content-col {
            padding: 1.25rem 1.25rem;
          }
          .promo-content-col h2 {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
};
