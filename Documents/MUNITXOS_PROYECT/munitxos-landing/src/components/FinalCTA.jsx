import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Calendar, MessageCircle } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const FinalCTA = ({ onOpenBooking }) => {
  const { t } = useTranslation();

  return (
    <section className="section-padding final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <h2>{t('finalCta.title')}</h2>
          <HorizontalPintxoIcon color="#D4AF37" width={160} height={36} />
          <p>{t('finalCta.subtitle')}</p>

          <div className="final-cta-actions">
            <button className="btn btn-primary btn-large final-primary-btn" onClick={onOpenBooking}>
              <Calendar size={20} />
              <span>{t('finalCta.primaryBtn')}</span>
            </button>

            <a 
              href="https://wa.me/498912345678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-large final-sec-btn"
            >
              <MessageCircle size={20} />
              <span>{t('finalCta.secondaryBtn')}</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          background: linear-gradient(135deg, #6F352D 0%, #5B1C2B 100%);
          padding: 6rem 0;
        }

        .final-cta-card {
          background: rgba(20, 10, 14, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid #C9B04A;
          padding: 4rem 3rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
        }

        .final-cta-card h2 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }

        .final-cta-card p {
          font-size: 1.15rem;
          max-width: 680px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
          color: #E8DFDC;
        }

        .final-cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-large {
          font-size: 1.05rem;
          padding: 1.1rem 2.5rem;
        }

        .final-primary-btn {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        .final-primary-btn:hover {
          background: #E6C665 !important;
        }

        .final-sec-btn {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          color: #FFFFFF !important;
        }

        .final-sec-btn:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        @media (max-width: 640px) {
          .final-cta-card {
            padding: 2.5rem 1.5rem;
          }
          .final-cta-actions button, .final-cta-actions a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
