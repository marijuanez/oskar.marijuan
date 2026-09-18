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
    <section id="beneficios" className="section-padding benefits-section">
      <div className="container">
        <div className="section-header">
          <div className="badge sage-badge">{t('benefits.badge')}</div>
          <h2>{t('benefits.title')}</h2>
          <HorizontalPintxoIcon color="#2D391A" width={140} height={32} />
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
        .benefits-section {
          background-color: #BAC08D;
          color: #1A2215;
          padding: 5rem 0;
        }

        .benefits-section h2 {
          color: #1A2215;
        }

        .benefits-section .section-header p {
          color: #2D391A;
        }

        .sage-badge {
          background: rgba(26, 34, 21, 0.12) !important;
          border-color: #3E4B28 !important;
          color: #2D391A !important;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          background: #182216;
          border: 1px solid rgba(212, 175, 55, 0.35);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
          transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: #C9B04A;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(201, 176, 74, 0.18);
          border: 1px solid #C9B04A;
          color: #C9B04A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all var(--transition-fast);
        }

        .benefit-card:hover .icon-wrapper {
          background: #C9B04A;
          color: #0D0D0C;
        }

        .benefit-card h3 {
          margin-bottom: 0.75rem;
          color: #FFFFFF;
        }

        .benefit-card p {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #D8D6CD;
        }

        @media (max-width: 767px) {
          .benefits-section {
            padding: 2.5rem 0;
          }
        }
      `}</style>
    </section>
  );
};
