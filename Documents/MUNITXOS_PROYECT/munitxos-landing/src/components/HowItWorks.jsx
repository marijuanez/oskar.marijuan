import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const HowItWorks = ({ onOpenBooking }) => {
  const { t } = useTranslation();

  return (
    <section id="como-funciona" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('howItWorks.badge')}</div>
          <h2>{t('howItWorks.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
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
          <button className="btn btn-outline-gold" onClick={onOpenBooking}>
            <span>Diseña tu evento en 2 minutos</span>
          </button>
        </div>
      </div>

      <style>{`
        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .step-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 2rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color var(--transition-fast);
        }

        .step-card:hover {
          border-color: var(--accent-cyan);
        }

        .step-number {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark-primary);
        }

        .step-content p {
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .step-connector {
          position: absolute;
          right: -1.2rem;
          top: 3.5rem;
          z-index: 2;
          color: var(--accent-cyan);
          background: var(--bg-dark);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(62, 193, 201, 0.4);
        }

        .how-it-works-cta {
          text-align: center;
          margin-top: 3.5rem;
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
