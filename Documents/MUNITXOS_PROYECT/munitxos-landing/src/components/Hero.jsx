import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ChevronRight, Utensils, ShieldCheck } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const Hero = ({ onOpenBooking }) => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-container">
        <img 
          src="/images/person-slicing-sushi-roll-close-up.jpg" 
          alt="MUNCHOS Gourmet Sushi and Pinchos Catering Munich" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          
          <div className="badge hero-badge">
            <ShieldCheck size={16} />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="hero-title">
            {t('hero.headline')}
          </h1>

          <HorizontalPintxoIcon color="#3EC1C9" width={180} height={40} />

          <p className="hero-subtitle">
            {t('hero.subheadline')}
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-btn" onClick={onOpenBooking}>
              <span>{t('hero.ctaPrimary')}</span>
              <ChevronRight size={18} />
            </button>

            <a href="#menus" className="btn btn-secondary hero-btn">
              <Utensils size={18} />
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* Key Trust Stats */}
          <div className="hero-stats">
            {t('hero.stats').map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: clamp(150px, 22vh, 230px); /* Guaranteed clear spacing below fixed navbar */
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.6) saturate(1.15);
          transform: scale(1.03);
          transition: transform 10s ease;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(13, 13, 12, 0.88) 0%,
            rgba(13, 13, 12, 0.65) 40%,
            rgba(13, 13, 12, 0.95) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 860px;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .hero-title {
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          line-height: 1.2;
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          color: rgba(247, 245, 240, 0.9);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 760px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .hero-btn {
          font-size: 1.05rem;
          padding: 1.1rem 2.2rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          background: rgba(30, 29, 27, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(62, 193, 201, 0.2);
          padding: 1.5rem 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-value {
          font-family: var(--font-subtitles);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 140px; /* Precise top padding on mobile screens */
          }
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1.25rem;
          }
          .hero-actions {
            flex-direction: column;
          }
          .hero-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
