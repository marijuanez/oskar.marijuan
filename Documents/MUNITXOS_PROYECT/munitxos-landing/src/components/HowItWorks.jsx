import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const HowItWorks = ({ onOpenBooking }) => {
  const { t } = useTranslation();

  return (
    <section id="como-funciona" className="section-padding how-it-works-section">
      <div className="container">
        <div className="section-header">
          <div className="badge chestnut-badge">{t('howItWorks.badge')}</div>
          <h2>{t('howItWorks.title')}</h2>
          <HorizontalPintxoIcon color="#F5EBE1" width={140} height={32} />
          <p>{t('howItWorks.subtitle')}</p>
        </div>

        <div className="steps-container">
          {t('howItWorks.steps').map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {idx < 3 && (
                <div className="step-connector">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <button className="btn btn-outline-gold how-cta-btn" onClick={onOpenBooking}>
            <span>{t('howItWorks.cta')}</span>
          </button>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: #886850;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .how-it-works-section h2 {
          color: #FFFFFF;
        }

        .how-it-works-section .section-header p {
          color: #F5EBE1;
        }

        .chestnut-badge {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #FFFFFF !important;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-card {
          background: #2D211A;
          border: 1px solid rgba(201, 176, 74, 0.35);
          padding: 2rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .step-card:hover {
          border-color: #C9B04A;
          transform: translateY(-4px);
        }

        .step-number {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: #C9B04A;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .step-content p {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #E6DDD6;
        }

        .step-connector {
          position: absolute;
          right: -1.2rem;
          top: 3.5rem;
          z-index: 2;
          color: #C9B04A;
          background: #2D211A;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #C9B04A;
        }

        .how-it-works-cta {
          text-align: center;
          margin-top: 3.5rem;
        }

        .how-cta-btn {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
          background: #2D211A !important;
        }

        .how-cta-btn:hover {
          background: #C9B04A !important;
          color: #0D0D0C !important;
        }

        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .step-connector { display: none; }
        }

        @media (max-width: 640px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
