import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';

export const StickyCTA = ({ onOpenBooking }) => {
  const { t } = useTranslation();

  return (
    <div className="sticky-cta-bar">
      <div className="container sticky-container">
        <div className="sticky-info">
          <span className="sticky-brand">{t('brand.name')}</span>
          <span className="sticky-sub">{t('stickyCta.text')}</span>
        </div>

        <button className="btn btn-primary sticky-btn" onClick={onOpenBooking}>
          <Calendar size={18} />
          <span>{t('stickyCta.button')}</span>
        </button>
      </div>

      <style>{`
        .sticky-cta-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(13, 13, 12, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid var(--accent-cyan);
          padding: 0.85rem 0;
          z-index: 999;
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.5);
        }

        .sticky-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sticky-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sticky-brand {
          font-family: var(--font-logo);
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--accent-cyan);
          letter-spacing: 2px;
        }

        .sticky-sub {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .sticky-btn {
          padding: 0.75rem 1.8rem;
          font-size: 0.95rem;
        }

        @media (max-width: 640px) {
          .sticky-sub { display: none; }
          .sticky-btn {
            width: 100%;
          }
          .sticky-container {
            justify-content: center;
          }
          .sticky-brand { display: none; }
        }
      `}</style>
    </div>
  );
};
