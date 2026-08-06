import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

const icons = [Clock, ShieldCheck, MessageSquare];

export const Guarantee = () => {
  const { t } = useTranslation();

  return (
    <section id="garantia" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('guarantee.badge')}</div>
          <h2>{t('guarantee.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
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
        .guarantee-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .guarantee-card {
          border-top: 3px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .guarantee-icon {
          width: 52px;
          height: 52px;
          background: rgba(62, 193, 201, 0.12);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .guarantee-card h3 {
          font-size: 1.3rem;
          color: var(--text-dark-primary);
          margin-bottom: 0.75rem;
        }

        .guarantee-card p {
          font-size: 0.95rem;
          line-height: 1.6;
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
