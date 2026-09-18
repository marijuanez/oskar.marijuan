import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Leaf, Award } from 'lucide-react';
import { HorizontalPintxoIcon } from './HorizontalPintxoIcon';

export const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <section id="filosofia" className="section-padding philosophy-section">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="badge terracotta-badge">{t('philosophy.badge')}</div>
          <h2>{t('philosophy.title')}</h2>
          <HorizontalPintxoIcon color="#FCE8A6" width={140} height={32} />
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
                <Award size={24} className="gold-icon" />
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
        .philosophy-section {
          background-color: #6F352D;
          color: #FFFFFF;
          padding: 5rem 0;
        }

        .philosophy-section h2 {
          color: #FFFFFF;
        }

        .terracotta-badge {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #FFFFFF !important;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .philosophy-quote {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-style: normal !important;
          color: #FCE8A6;
          line-height: 1.6;
          border-left: 4px solid #C9B04A;
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
          color: #FFFFFF;
        }

        .author-role {
          font-size: 0.88rem;
          color: #F5EAE8;
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
          background: #4E211A;
          border: 1px solid #C9B04A;
          color: #FCE8A6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .point-item h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .point-item p {
          font-size: 0.9rem;
          color: #F5EAE8;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid #C9B04A;
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
          background: rgba(24, 15, 13, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid #C9B04A;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .gold-icon { color: #C9B04A; }

        .badge-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #FFF;
          display: block;
        }

        .badge-sub {
          font-size: 0.8rem;
          color: #F5EAE8;
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
