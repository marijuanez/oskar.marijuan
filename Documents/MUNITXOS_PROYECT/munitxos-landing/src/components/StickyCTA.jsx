import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';

export const StickyCTA = ({ onOpenBooking }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta-bar">
      <div className="container sticky-container">
        <div className="sticky-info">
          <img src="/images/logo-definitive.png?v=5" alt="MUNCHOS" className="sticky-logo-img" />
          <span className="sticky-sub">{t('stickyCta.text')}</span>
        </div>

        <button className="btn btn-primary sticky-btn" onClick={onOpenBooking}>
          <Calendar size={17} />
          <span>{t('stickyCta.button')}</span>
        </button>
      </div>

      <style>{`
        .sticky-cta-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(12, 11, 10, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(229, 167, 27, 0.35);
          padding: 0.65rem 0;
          z-index: 999;
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.85);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .sticky-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .sticky-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 0;
        }

        .sticky-logo-img {
          height: 38px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
          flex-shrink: 0;
        }

        .sticky-sub {
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sticky-btn {
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .sticky-sub {
            display: none;
          }
          .sticky-logo-img {
            height: 34px;
          }
          .sticky-btn {
            font-size: 0.82rem;
            padding: 0.55rem 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .sticky-cta-bar {
            padding: 0.55rem 0;
          }
          .sticky-logo-img {
            height: 32px;
          }
          .sticky-btn {
            font-size: 0.78rem;
            padding: 0.5rem 0.75rem;
            gap: 0.35rem;
          }
        }
      `}</style>
    </div>
  );
};
