import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

const icons = [Clock, ShieldCheck, MessageSquare];

export const Guarantee = () => {
  const { t } = useTranslation();

  return (
    <section id="garantia" className="section-padding guarantee-section">
      <div className="container">
        <div className="section-header">
          <div className="badge guarantee-sage-badge">{t('guarantee.badge')}</div>
          <h2>{t('guarantee.title')}</h2>
          <HorizontalPintxoIcon color="#2D391A" width={140} height={32} />
          <p>{t('guarantee.subtitle')}</p>
        </div>

        <div className="guarantee-cards-grid">
          {t('guarantee.cards').map((card, idx) => {
            const IconComp = icons[idx] || ShieldCheck;
            return (
              <div key={idx} className="glass-card guarantee-card">
                <div className="guarantee-icon">
                  <IconComp size={26} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .guarantee-section {
          background-color: #BAC08D;
          color: #1A2215;
          padding: 5rem 0;
        }

        .guarantee-section h2 {
          color: #1A2215;
        }

        .guarantee-section .section-header p {
          color: #2D391A;
        }

        .guarantee-sage-badge {
          background: rgba(26, 34, 21, 0.12) !important;
          border-color: #3E4B28 !important;
          color: #2D391A !important;
        }

        .guarantee-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .guarantee-card {
          background: #182216;
          border-top: 4px solid #C9B04A;
          border-left: 1px solid rgba(212, 175, 55, 0.3);
          border-right: 1px solid rgba(212, 175, 55, 0.3);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
        }

        .guarantee-icon {
          width: 52px;
          height: 52px;
          background: rgba(201, 176, 74, 0.18);
          color: #C9B04A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid #C9B04A;
        }

        .guarantee-card h3 {
          font-size: 1.3rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .guarantee-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #D8D6CD;
        }

        @media (max-width: 900px) {
          .guarantee-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
