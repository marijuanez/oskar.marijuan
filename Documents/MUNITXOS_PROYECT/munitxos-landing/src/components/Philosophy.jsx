import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Leaf, Award } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <section id="filosofia" className="section-padding bg-surface">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="badge">{t('philosophy.badge')}</div>
          <h2>{t('philosophy.title')}</h2>
          <HorizontalPintxoIcon color="#3EC1C9" width={140} height={32} />
        </div>

        <div className="philosophy-grid">
          
          <div className="philosophy-content">
            <blockquote className="philosophy-quote">
              "{t('philosophy.text')}"
            </blockquote>

            <div className="author-tag">
              <span className="author-name">{t('philosophy.quoteAuthor')}</span>
              <span className="author-role">{t('philosophy.quoteRole')}</span>
            </div>

            <div className="philosophy-points">
              {t('philosophy.points').map((point, idx) => (
                <div key={idx} className="point-item">
                  <div className="point-icon">
                    <Leaf size={18} />
                  </div>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="philosophy-image-col">
            <div className="image-frame">
              <img 
                src="/images/oskar/ChatGPT Image 16 abr 2026, 12_37_25.png" 
                alt="Chef Oskar Marijuan MUNCHOS Munich" 
                className="chef-img"
                onError={(e) => { e.target.src = "/images/lifestyle-people-learning-make-sushi.jpg"; }}
              />
              <div className="experience-badge">
                <Award size={24} className="cyan-icon" />
                <div>
                  <span className="badge-title">Gastronomía Vasca</span>
                  <span className="badge-sub">en el corazón de Múnich</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .philosophy-quote {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--accent-cyan);
          line-height: 1.6;
          border-left: 3px solid var(--accent-cyan);
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .author-tag {
          display: flex;
          flex-direction: column;
          margin-bottom: 2.5rem;
        }

        .author-name {
          font-weight: 700;
          color: var(--text-dark-primary);
        }

        .author-role {
          font-size: 0.88rem;
          color: var(--text-dark-muted);
        }

        .philosophy-points {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .point-icon {
          width: 36px;
          height: 36px;
          background: rgba(62, 193, 201, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-item h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          margin-bottom: 0.2rem;
        }

        .point-item p {
          font-size: 0.9rem;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(62, 193, 201, 0.3);
        }

        .chef-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
        }

        .experience-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(13, 13, 12, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--accent-cyan);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cyan-icon { color: var(--accent-cyan); }

        .badge-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFF;
          display: block;
        }

        .badge-sub {
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
          }
          .chef-img {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
};
