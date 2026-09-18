import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Cookie, ShieldCheck, X, Settings, Check } from 'lucide-react';

const STORAGE_KEY = 'munchos_cookie_consent_v1';

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Delay initial display by 1 second for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored cookie preferences', e);
      }
    }

    // Listen for custom event from footer link to re-open settings
    const handleReopen = () => {
      setIsVisible(true);
      setIsModalOpen(true);
    };
    window.addEventListener('openMunchosCookieSettings', handleReopen);
    return () => window.removeEventListener('openMunchosCookieSettings', handleReopen);
  }, []);

  const saveConsent = (newPrefs) => {
    setPreferences(newPrefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleEssentialOnly = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      {/* FLOATING BOTTOM BANNER */}
      {isVisible && !isModalOpen && (
        <div className="cookie-banner-wrapper" role="region" aria-label="Consentimiento de Cookies">
          <div className="container">
            <div className="cookie-banner-card">
              <div className="cookie-banner-text">
                <div className="cookie-title-row">
                  <Cookie size={20} className="cookie-icon" />
                  <h4>{t('cookies.bannerTitle') || 'Respetamos tu Privacidad'}</h4>
                </div>
                <p>{t('cookies.bannerText') || 'Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento de nuestra plataforma (cumplimiento GDPR/DSGVO).'}</p>
              </div>

              <div className="cookie-actions-row">
                <button className="btn btn-primary cookie-btn-primary" onClick={handleAcceptAll}>
                  <span>{t('cookies.acceptAll') || 'Aceptar Todas'}</span>
                </button>
                <button className="btn btn-secondary cookie-btn-sec" onClick={handleEssentialOnly}>
                  <span>{t('cookies.essentialOnly') || 'Solo Necesarias'}</span>
                </button>
                <button className="btn-cookie-settings" onClick={() => setIsModalOpen(true)}>
                  <Settings size={16} />
                  <span>{t('cookies.settings') || 'Configurar'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DETAILED PREFERENCES MODAL */}
      {isModalOpen && (
        <div className="cookie-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cookie-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <div className="modal-title-wrap">
                <ShieldCheck size={24} className="shield-icon" />
                <h3>{t('cookies.modalTitle') || 'Configuración de Consentimiento de Cookies'}</h3>
              </div>
              <button className="close-btn" onClick={() => setIsModalOpen(false)} aria-label="Cerrar">
                <X size={20} />
              </button>
            </div>

            <p className="modal-sub">{t('cookies.modalSubtitle') || 'Puedes personalizar las categorías de cookies que autorizas para MUNCHOS Catering.'}</p>

            <div className="cookie-categories-list">
              
              {/* Category 1: Essential (Mandatory) */}
              <div className="cookie-cat-item disabled">
                <div className="cat-top">
                  <label className="checkbox-wrap">
                    <input type="checkbox" checked disabled />
                    <span className="custom-check checked disabled">
                      <Check size={14} />
                    </span>
                    <span className="cat-name">{t('cookies.catEssential') || 'Cookies Necesarias (Técnicas)'}</span>
                  </label>
                  <span className="required-badge">OBLIGATORIA</span>
                </div>
                <p className="cat-desc">{t('cookies.catEssentialDesc') || 'Imprescindibles para la navegación, el carrito gourmet y la gestión del proceso de reserva.'}</p>
              </div>

              {/* Category 2: Analytics */}
              <div className="cookie-cat-item">
                <div className="cat-top">
                  <label className="checkbox-wrap">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics} 
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })} 
                    />
                    <span className={`custom-check ${preferences.analytics ? 'checked' : ''}`}>
                      {preferences.analytics && <Check size={14} />}
                    </span>
                    <span className="cat-name">{t('cookies.catAnalytics') || 'Cookies Analíticas'}</span>
                  </label>
                </div>
                <p className="cat-desc">{t('cookies.catAnalyticsDesc') || 'Nos permiten medir el uso de la web para optimizar la velocidad y la experiencia del usuario.'}</p>
              </div>

              {/* Category 3: Marketing */}
              <div className="cookie-cat-item">
                <div className="cat-top">
                  <label className="checkbox-wrap">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing} 
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })} 
                    />
                    <span className={`custom-check ${preferences.marketing ? 'checked' : ''}`}>
                      {preferences.marketing && <Check size={14} />}
                    </span>
                    <span className="cat-name">{t('cookies.catMarketing') || 'Cookies de Marketing'}</span>
                  </label>
                </div>
                <p className="cat-desc">{t('cookies.catMarketingDesc') || 'Utilizadas para mostrar ofertas personalizadas y promociones gastronómicas exclusivas.'}</p>
              </div>

            </div>

            <div className="cookie-modal-footer">
              <button className="btn btn-secondary" onClick={handleEssentialOnly}>
                <span>{t('cookies.essentialOnly') || 'Solo Necesarias'}</span>
              </button>
              <button className="btn btn-primary" onClick={handleSaveCustom}>
                <span>{t('cookies.savePreferences') || 'Guardar Preferencias'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* FLOATING BANNER */
        .cookie-banner-wrapper {
          position: fixed;
          bottom: 1.25rem;
          left: 0;
          right: 0;
          z-index: 9999;
          pointer-events: none;
        }

        .cookie-banner-card {
          pointer-events: auto;
          background: rgba(22, 21, 20, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid #C9B04A;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .cookie-banner-text {
          max-width: 680px;
        }

        .cookie-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .cookie-icon {
          color: #C9B04A;
          flex-shrink: 0;
        }

        .cookie-title-row h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .cookie-banner-text p {
          font-size: 0.85rem;
          line-height: 1.45;
          color: #C5C0B6;
          margin: 0;
        }

        .cookie-actions-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .cookie-btn-primary {
          background: #C9B04A !important;
          color: #0D0D0C !important;
          font-size: 0.82rem !important;
          padding: 0.65rem 1.1rem !important;
        }

        .cookie-btn-primary:hover {
          background: #E6C665 !important;
        }

        .cookie-btn-sec {
          background: rgba(247, 245, 240, 0.08) !important;
          border: 1px solid rgba(247, 245, 240, 0.25) !important;
          color: #FFFFFF !important;
          font-size: 0.82rem !important;
          padding: 0.65rem 1.1rem !important;
        }

        .cookie-btn-sec:hover {
          border-color: #C9B04A !important;
          color: #C9B04A !important;
        }

        .btn-cookie-settings {
          background: transparent;
          border: none;
          color: #8A867F;
          font-size: 0.82rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          padding: 0.5rem 0.65rem;
          transition: color 0.2s ease;
        }

        .btn-cookie-settings:hover {
          color: #C9B04A;
        }

        /* MODAL OVERLAY & CARD */
        .cookie-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.80);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
        }

        .cookie-modal-card {
          background: #161514;
          border: 1px solid #C9B04A;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          max-width: 580px;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cookie-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .shield-icon {
          color: #C9B04A;
          flex-shrink: 0;
        }

        .cookie-modal-header h3 {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: #8A867F;
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s ease;
        }

        .close-btn:hover {
          color: #FFFFFF;
        }

        .modal-sub {
          font-size: 0.88rem;
          color: #C5C0B6;
          line-height: 1.5;
          margin: 0;
        }

        .cookie-categories-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cookie-cat-item {
          background: rgba(247, 245, 240, 0.04);
          border: 1px solid rgba(247, 245, 240, 0.12);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .cookie-cat-item.disabled {
          opacity: 0.9;
        }

        .cat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          user-select: none;
        }

        .checkbox-wrap input {
          display: none;
        }

        .custom-check {
          width: 20px;
          height: 20px;
          border: 1px solid #8A867F;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D0D0C;
          transition: all 0.2s ease;
        }

        .custom-check.checked {
          background: #C9B04A;
          border-color: #C9B04A;
        }

        .custom-check.disabled {
          background: rgba(201, 176, 74, 0.4);
          border-color: rgba(201, 176, 74, 0.5);
          color: #FFFFFF;
        }

        .cat-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .required-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: #C9B04A;
          background: rgba(201, 176, 74, 0.12);
          border: 1px solid rgba(201, 176, 74, 0.3);
          padding: 0.2rem 0.5rem;
          letter-spacing: 0.05em;
        }

        .cat-desc {
          font-size: 0.82rem;
          color: #8A867F;
          line-height: 1.45;
          margin: 0;
          padding-left: 1.85rem;
        }

        .cookie-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }

        @media (max-width: 768px) {
          .cookie-banner-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
          }
          .cookie-actions-row {
            width: 100%;
            flex-direction: column;
          }
          .cookie-actions-row button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
