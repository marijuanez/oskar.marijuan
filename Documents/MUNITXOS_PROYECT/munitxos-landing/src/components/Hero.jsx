import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { getActiveHeroSlides } from '../services/cmsService';
import { ChevronRight, Utensils, ShieldCheck } from 'lucide-react';

export const Hero = ({ onOpenBooking }) => {
  const { t } = useTranslation();
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const active = getActiveHeroSlides();
    setSlides(active);
  }, []);

  // 6-second automatic carousel timer
  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, slides]);

  if (slides.length === 0) return null;

  return (
    <section className="hero-fullscreen">
      
      {/* BACKGROUND VIDEO CAROUSEL */}
      <div className="hero-video-container">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id || idx} 
            className={`hero-video-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            {slide.poster && (
              <img src={slide.poster} alt={slide.title} className="hero-fallback-img" />
            )}
            {slide.video && (
              <video
                src={slide.video}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                preload={idx === 0 ? "auto" : "metadata"}
                className="hero-video"
              />
            )}
          </div>
        ))}

        {/* OVERLAID DUAL GRADIENT FOR ABSOLUTE TEXT LEGIBILITY */}
        <div className="hero-horizontal-overlay" />
        <div className="hero-vertical-overlay" />
      </div>

      {/* STATIC LEFT HERO CONTENT (FIRST FOLD PERFECT FIT) */}
      <div className="container hero-content-wrapper">
        <div className="hero-text-block">
          
          {/* Top Gold Badge */}
          <div className="hero-gold-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* H1 Title with Gold Ranchers Highlight */}
          <h1 className="hero-h1-title">
            {t('hero.headlinePart1')}
            <span className="gold-ranchers-highlight">{t('hero.headlineHighlight')}</span>
            {t('hero.headlinePart2')}
          </h1>

          {/* Descriptive Paragraph */}
          <p className="hero-desc-paragraph">
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons (Desktop: 2 Columns / Mobile: Stacked 100% Width) */}
          <div className="hero-buttons-group">
            <button className="btn hero-primary-btn" onClick={onOpenBooking}>
              <span>{t('hero.ctaPrimary')}</span>
              <ChevronRight size={18} />
            </button>

            <a href="#menus" className="btn hero-secondary-btn">
              <Utensils size={17} />
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* Carousel Slide Indicators (3-Column Grid directly ABOVE Proof Cards) */}
          <div className="hero-controls-panel">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              // Clean title: remove prefix numbers (01, 02, 03) for clean mobile rendering
              const displayTitle = (slide.title || '').replace(/^\d+\s*/, '');
              return (
                <button
                  key={slide.id || idx}
                  className={`carousel-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  title={`Ver ${slide.title}`}
                >
                  <div className="tab-progress-track">
                    {isActive && <div key={currentSlide} className="tab-progress-bar" />}
                  </div>
                  <div className="tab-text-info">
                    <span className="tab-title">{displayTitle}</span>
                    {slide.subtitle && <span className="tab-sub">{slide.subtitle}</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Proof Metric Cards (3-Column Grid directly BELOW Carousel Controls) */}
          <div className="hero-proof-cards-row">
            {t('hero.stats').map((stat, idx) => (
              <div key={idx} className="proof-metric-card">
                <span className="metric-val">{stat.value}</span>
                <span className="metric-lbl">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        /* FULLSCREEN HERO CONTAINER (FLEXIBLE HEIGHT & CONTAINER RESILIENCE) */
        .hero-fullscreen {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: auto;
          display: flex;
          align-items: center;
          padding-top: 104px;
          padding-bottom: 2.5rem;
          overflow: hidden;
          background: #0C0B0A;
        }

        /* VIDEO CAROUSEL BACKGROUND */
        .hero-video-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-video-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .hero-video-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .hero-video, .hero-fallback-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.85) saturate(1.1);
        }

        /* GRADIENT OVERLAYS FOR HIGH CONTRAST (WCAG AA COMPLIANCE) */
        .hero-horizontal-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(12, 11, 10, 0.92) 0%,
            rgba(12, 11, 10, 0.78) 45%,
            rgba(12, 11, 10, 0.40) 75%,
            rgba(12, 11, 10, 0.15) 100%
          );
          z-index: 2;
        }

        .hero-vertical-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 11, 10, 0.75) 0%,
            transparent 35%,
            rgba(12, 11, 10, 0.88) 100%
          );
          z-index: 2;
        }

        /* STATIC CONTENT WRAPPER */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
        }

        .hero-text-block {
          max-width: 660px;
          min-height: auto;
          height: auto;
        }

        /* GOLD PILL BADGE */
        .hero-gold-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(229, 167, 27, 0.12);
          border: 1px solid rgba(229, 167, 27, 0.45);
          color: #e5a71b;
          font-family: var(--font-body);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.85rem;
          margin-bottom: 1.1rem;
          border-radius: 0px !important;
          box-shadow: 0 4px 15px rgba(229, 167, 27, 0.20);
          white-space: normal !important;
          word-break: break-word !important;
          max-width: 100%;
          line-height: 1.35;
        }

        .badge-icon {
          color: #e5a71b;
          flex-shrink: 0;
        }

        /* H1 HEADLINE IN 100% RANCHERS FONT WITH DEFENSIVE TYPOGRAPHY */
        .hero-h1-title {
          font-family: var(--font-headline);
          font-weight: 400;
          font-style: normal !important;
          color: #FFFFFF;
          font-size: clamp(2.1rem, 3.6vw, 3.4rem);
          line-height: 1.20;
          margin-bottom: 1.1rem;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95);
          text-transform: uppercase;
          text-wrap: balance;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* RANCHERS BRAND GOLD HIGHLIGHT */
        .gold-ranchers-highlight {
          font-family: var(--font-headline);
          font-style: normal !important;
          color: #e5a71b;
          font-weight: 400;
          text-transform: uppercase;
          padding: 0 0.25rem;
          text-shadow: 0 0 25px rgba(229, 167, 27, 0.50);
        }

        /* PARAGRAPH WITH RELATIVE LINE HEIGHT & BREAK CONTROL */
        .hero-desc-paragraph {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          line-height: 1.55;
          color: rgba(247, 245, 240, 0.92);
          margin-bottom: 1.5rem;
          max-width: 600px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* BUTTONS GROUP (DESKTOP & TABLET: 2 EQUAL COLUMNS / MOBILE: STACKED 100% WIDTH GAP 12px) */
        .hero-buttons-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .hero-primary-btn {
          background: #e5a71b;
          color: #0C0B0A;
          font-family: var(--font-body);
          font-size: 0.90rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          border: none;
          box-shadow: 0 6px 25px rgba(229, 167, 27, 0.40);
          transition: all 0.2s ease;
          width: 100%;
          min-height: 48px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .hero-primary-btn:hover {
          background: #f5b72b;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(229, 167, 27, 0.55);
        }

        .hero-secondary-btn {
          background: rgba(12, 11, 10, 0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(247, 245, 240, 0.40);
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          text-decoration: none;
          transition: all 0.2s ease;
          width: 100%;
          min-height: 48px;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .hero-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #e5a71b;
          color: #e5a71b;
        }

        /* CAROUSEL CONTROLS PANEL (3-COLUMN GRID directly ABOVE PROOF METRICS) */
        .hero-controls-panel {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          width: 100%;
          margin-bottom: 1rem;
        }

        .carousel-tab-btn {
          background: rgba(18, 17, 16, 0.70);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 0.7rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          transition: all 0.25s ease;
          border-radius: 0px !important;
          width: 100%;
          min-height: auto;
          box-sizing: border-box;
        }

        .carousel-tab-btn:hover {
          background: rgba(28, 26, 24, 0.88);
          border-color: rgba(229, 167, 27, 0.45);
        }

        .carousel-tab-btn.active {
          background: rgba(25, 23, 20, 0.92);
          border-color: #e5a71b;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
        }

        .tab-progress-track {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.20);
          position: relative;
          overflow: hidden;
        }

        .tab-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #e5a71b;
          animation: progressBarFill 6s linear forwards;
        }

        @keyframes progressBarFill {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .tab-text-info {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .tab-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: rgba(247, 245, 240, 0.75);
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .carousel-tab-btn.active .tab-title {
          color: #e5a71b;
        }

        .tab-sub {
          font-size: 0.68rem;
          color: rgba(247, 245, 240, 0.55);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .carousel-tab-btn.active .tab-sub {
          color: rgba(247, 245, 240, 0.90);
        }

        /* PROOF METRIC CARDS ROW (3-COLUMN GRID directly BELOW CAROUSEL CONTROLS) */
        .hero-proof-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          width: 100%;
        }

        .proof-metric-card {
          background: rgba(18, 17, 16, 0.65);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(229, 167, 27, 0.25);
          padding: 0.65rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          border-radius: 0px !important;
          transition: border-color 0.2s ease;
          min-height: auto;
          height: auto;
        }

        .proof-metric-card:hover {
          border-color: rgba(229, 167, 27, 0.55);
        }

        .metric-val {
          font-family: var(--font-headline);
          font-size: 1.25rem;
          font-weight: 400;
          color: #e5a71b;
          line-height: 1.1;
        }

        .metric-lbl {
          font-size: 0.72rem;
          color: rgba(247, 245, 240, 0.85);
          line-height: 1.3;
          font-weight: 600;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* 2. TABLET (768px - 1024px) – EQUILIBRIO Y ALINEACIÓN */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-fullscreen {
            padding-top: 96px;
            padding-bottom: 2.2rem;
            min-height: auto;
            height: auto;
          }

          .hero-h1-title {
            font-size: clamp(1.75rem, 4vw, 2.25rem);
            line-height: 1.22;
          }

          .hero-text-block {
            max-width: 100%;
          }

          .hero-buttons-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 100%;
          }

          .hero-controls-panel {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .hero-proof-cards-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .proof-metric-card {
            padding: 0.55rem 0.5rem;
            text-align: center;
          }

          .metric-lbl {
            font-size: 0.68rem;
          }
        }

        /* 1. MOBILE (< 768px) – LIMPIEZA VISUAL Y FOCO EN CONVERSIÓN */
        @media (max-width: 767px) {
          .hero-fullscreen {
            padding-top: 92px;
            padding-bottom: 0.5rem;
            min-height: auto;
            height: auto;
          }

          /* Oscurecimiento incrementado (WCAG AA Contraste Elevado) */
          .hero-horizontal-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.82) 50%,
              rgba(0, 0, 0, 0.90) 100%
            );
          }

          .hero-vertical-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.78) 0%,
              transparent 35%,
              rgba(0, 0, 0, 0.92) 100%
            );
          }

          .hero-gold-badge {
            font-size: 0.68rem;
            padding: 0.3rem 0.65rem;
            margin-bottom: 0.8rem;
          }

          .hero-h1-title {
            font-size: 1.65rem;
            line-height: 1.22;
            margin-bottom: 0.8rem;
          }

          .gold-ranchers-highlight {
            font-size: 1.6rem;
          }

          .hero-desc-paragraph {
            font-size: 0.88rem;
            margin-bottom: 1.25rem;
            line-height: 1.48;
          }

          /* Botones CTAs en ancho completo (width: 100%) apilados verticalmente con 12px gap */
          .hero-buttons-group {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 0.5rem;
            width: 100%;
          }

          .hero-primary-btn, .hero-secondary-btn {
            justify-content: center;
            width: 100%;
            padding: 0.85rem 1rem;
            font-size: 0.88rem;
            box-sizing: border-box;
          }

          /* Ocultar pestañas intermedias de categorías en móvil para eliminar ruido */
          .hero-controls-panel {
            display: none !important;
          }

          /* Ocultar bloque de métricas en móvil para eliminar ruido y scroll excesivo */
          .hero-proof-cards-row {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

