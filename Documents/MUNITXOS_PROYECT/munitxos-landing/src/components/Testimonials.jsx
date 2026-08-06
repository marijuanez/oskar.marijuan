import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonios" className="section-padding bg-surface">
      <div className="container">
        <div className="section-header">
          <div className="badge">{t('testimonials.badge')}</div>
          <h2>{t('testimonials.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
        </div>

        <div className="testimonials-grid">
          {t('testimonials.reviews').map((rev, idx) => (
            <div key={idx} className="glass-card testimonial-card">
              <div className="quote-icon">
                <Quote size={28} />
              </div>
              
              <div className="rating-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#3EC1C9" color="#3EC1C9" />
                ))}
              </div>

              <p className="testimonial-text">"{rev.comment}"</p>

              <div className="reviewer-info">
                <span className="reviewer-name">{rev.name}</span>
                <span className="reviewer-event">{rev.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .quote-icon {
          color: rgba(62, 193, 201, 0.3);
          margin-bottom: 1rem;
        }

        .rating-row {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.2rem;
        }

        .testimonial-text {
          font-family: var(--font-subtitles);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-dark-primary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding-top: 1rem;
        }

        .reviewer-name {
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .reviewer-event {
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
