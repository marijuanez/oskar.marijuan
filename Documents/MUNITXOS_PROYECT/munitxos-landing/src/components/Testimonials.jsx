import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonios" className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="badge cream-badge">{t('testimonials.badge')}</div>
          <h2>{t('testimonials.title')}</h2>
          <HorizontalPintxoIcon color="#5B1C2B" width={140} height={32} />
        </div>

        <div className="testimonials-grid">
          {t('testimonials.reviews').map((rev, idx) => (
            <div key={idx} className="glass-card testimonial-card">
              <div className="quote-icon">
                <Quote size={28} />
              </div>
              
              <div className="rating-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C9B04A" color="#C9B04A" />
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
        .testimonials-section {
          background-color: #F7F5F0;
          color: #1A1918;
          padding: 5rem 0;
        }

        .testimonials-section h2 {
          color: #1A1918;
        }

        .cream-badge {
          background: rgba(91, 28, 43, 0.12) !important;
          border-color: #5B1C2B !important;
          color: #5B1C2B !important;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          background: #5B1C2B;
          border: 1px solid #C9B04A;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem;
        }

        .quote-icon {
          color: rgba(201, 176, 74, 0.5);
          margin-bottom: 1rem;
        }

        .rating-row {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.2rem;
        }

        .testimonial-text {
          font-family: var(--font-subtitles);
          font-size: 1.1rem;
          font-style: normal !important;
          color: #FFFFFF;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(201, 176, 74, 0.3);
          padding-top: 1rem;
        }

        .reviewer-name {
          font-weight: 700;
          color: #C9B04A;
        }

        .reviewer-event {
          font-size: 0.85rem;
          color: #E8DFDC;
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
