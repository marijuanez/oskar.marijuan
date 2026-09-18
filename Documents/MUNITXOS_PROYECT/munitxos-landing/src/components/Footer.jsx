import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Instagram, Facebook, Lock, Cookie } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  const handleOpenCookieSettings = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('openMunchosCookieSettings'));
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Col — Unified Ranchers Brand Typography Logo */}
          <div className="footer-brand-col">
            <span className="footer-logo-text">MUNCHOS</span>
            <p className="footer-about">{t('footer.about')}</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#beneficios">{t('nav.beneficios')}</a></li>
              <li><a href="#como-funciona">{t('nav.comoFunciona')}</a></li>
              <li><a href="#menus">{t('nav.menus')}</a></li>
              <li><a href="#personalizacion">{t('nav.personalizacion')}</a></li>
              <li><a href="#gourmet">{t('nav.gourmet')}</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="icon-cyan" />
                <span>{t('footer.address')}</span>
              </li>
              <li>
                <Phone size={18} className="icon-cyan" />
                <span>{t('footer.phone')}</span>
              </li>
              <li>
                <Mail size={18} className="icon-cyan" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          {/* Legal German Business Compliance & Admin Link */}
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#">{t('footer.impressum')}</a></li>
              <li><a href="#">{t('footer.privacy')}</a></li>
              <li><a href="#">{t('footer.terms')}</a></li>
              <li>
                <button onClick={handleOpenCookieSettings} className="footer-cookie-link">
                  <Cookie size={13} />
                  <span>{t('cookies.settings') || 'Configuración de Cookies'}</span>
                </button>
              </li>
              <li style={{ marginTop: '0.35rem' }}>
                <a href="#admin" className="admin-footer-link">
                  <Lock size={13} />
                  <span>{t('footer.admin')}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #080807;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          padding: 5rem 0 7rem 0;
          color: var(--text-dark-secondary);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.25fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-text {
          font-family: var(--font-headline);
          font-size: 2.2rem;
          font-weight: 400;
          font-style: normal !important;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #FCE8A6 0%, #FFD700 35%, #D4AF37 70%, #997315 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          line-height: 1;
          display: inline-block;
          text-transform: uppercase;
        }

        .footer-about {
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 340px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: rgba(247, 245, 240, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark-primary);
          transition: all var(--transition-fast);
        }

        .social-links a:hover {
          background: var(--accent-cyan);
          color: var(--bg-dark);
        }

        .footer-col h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-col a {
          font-size: 0.92rem;
          transition: color var(--transition-fast);
        }

        .footer-cookie-link {
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          font-size: 0.92rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0;
          transition: color var(--transition-fast);
        }

        .footer-cookie-link:hover {
          color: var(--accent-cyan);
        }

        .admin-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-cyan) !important;
          font-size: 0.85rem !important;
          font-weight: 600;
          opacity: 0.85;
        }

        .admin-footer-link:hover {
          opacity: 1;
        }

        .icon-cyan { color: var(--accent-cyan); }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(247, 245, 240, 0.06);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
