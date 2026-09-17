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
          <img src="/images/logo-text-only.svg?v=5" alt="MUNCHOS" className="sticky-logo-img" />
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
          background: rgba(12, 11, 10, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(229, 167, 27, 0.35);
          padding: 0.85rem 0;
          z-index: 999;
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.8);
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
        }

        .sticky-info {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .sticky-logo-img {
          height: 26px;
          width: auto;
          display: block;
          filter: none !important;
        }

        .sticky-sub {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .sticky-btn {
          font-size: 0.88rem;
          padding: 0.65rem 1.4rem;
        }

        @media (max-width: 768px) {
          .sticky-sub {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
