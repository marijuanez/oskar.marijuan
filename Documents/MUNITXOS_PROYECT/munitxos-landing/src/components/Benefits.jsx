import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { UtensilsCrossed, Sparkles, Sliders, HeartHandshake } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

const iconMap = {
  UtensilsCrossed,
  Sparkles,
  Sliders,
  HeartHandshake
};

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section id="beneficios" className="section-padding bg-surface">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('benefits.badge')}</div>
          <h2>{t('benefits.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
          <p>{t('benefits.subtitle')}</p>
        </div>

        <div className="benefits-grid">
          {t('benefits.items').map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={idx} className="glass-card benefit-card">
                <div className="icon-wrapper">
                  <IconComponent size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-cyan);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(62, 193, 201, 0.12);
          border: 1px solid rgba(62, 193, 201, 0.4);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all var(--transition-fast);
        }

        .benefit-card:hover .icon-wrapper {
          background: var(--accent-cyan);
          color: #0D0D0C;
        }

        .benefit-card h3 {
          margin-bottom: 0.75rem;
          color: var(--text-dark-primary);
        }

        .benefit-card p {
          font-size: 0.98rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
