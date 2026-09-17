import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

export const Navbar = ({ onOpenCart, cartCount, onOpenBooking }) => {
  const { lang, setLang, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menus', label: t('nav.menus') },
    { href: '#como-funciona', label: t('nav.experiencia') },
    { href: '#testimonios', label: t('nav.testimonios') },
    { href: '#gourmet', label: t('nav.gourmet') }
  ];

  return (
    <header className={`navbar-glass-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-glass-container">
        
        {/* Left: Clean Integrated Logo */}
        <a href="#" className="nav-logo-link" title="MUNCHOS Catering Boutique">
          <img src="/images/logo-definitive.png?v=5" alt="MUNCHOS" className="nav-logo-img" />
        </a>

        {/* Center: Condensed 4-Access Menu */}
        <nav className="desktop-nav-center">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-glass-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Lang Switcher & Actions */}
        <div className="nav-glass-right">
          {/* Compact Language Switcher [ ES | DE | EN ] */}
          <div className="compact-lang-switcher">
            <button 
              className={`compact-lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              title="Español (Castellano)"
            >
              ES
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`compact-lang-btn ${lang === 'de' ? 'active' : ''}`}
              onClick={() => setLang('de')}
              title="Deutsch"
            >
              DE
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`compact-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Cart Drawer Trigger */}
          <button className="nav-cart-btn" onClick={onOpenCart} aria-label="Ver carrito gourmet" title="Carrito de Compras">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
          </button>

          {/* Secondary CTA Button */}
          <button className="btn nav-secondary-cta" onClick={onOpenBooking}>
            <Calendar size={15} />
            <span>{t('nav.reservar')}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button className="mobile-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation Menu">
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <img src="/images/logo-definitive.png?v=5" alt="MUNCHOS" className="mobile-logo" />
              <button className="mobile-close" onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-actions">
              <button className="btn btn-primary w-full" onClick={() => { setMobileOpen(false); onOpenBooking(); }}>
                <Calendar size={16} />
                <span>{t('nav.reservar')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* SINGLE ROW GLASSMORPHISM HEADER (78px HEIGHT) */
        .navbar-glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 78px;
          z-index: 1000;
          background: rgba(12, 11, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 167, 27, 0.20);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
        }

        .navbar-glass-header.is-scrolled {
          background: rgba(10, 9, 8, 0.94);
          border-bottom-color: rgba(229, 167, 27, 0.40);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.85);
        }

        .nav-glass-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }

        /* LOGO */
        .nav-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-logo-img {
          height: 52px;
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
          transition: transform 0.2s ease;
        }

        .nav-logo-link:hover .nav-logo-img {
          transform: scale(1.02);
        }

        /* CENTER 4-LINK NAVIGATION */
        .desktop-nav-center {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-glass-link {
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(247, 245, 240, 0.88);
          text-decoration: none;
          letter-spacing: 0.03em;
          position: relative;
          padding: 0.4rem 0;
          transition: color 0.2s ease;
        }

        .nav-glass-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: #e5a71b;
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-glass-link:hover {
          color: #e5a71b;
        }

        .nav-glass-link:hover::after {
          width: 100%;
        }

        /* RIGHT SECTION: LANG & CTAs */
        .nav-glass-right {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        /* COMPACT LANG SWITCHER */
        .compact-lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(229, 167, 27, 0.25);
          padding: 0.3rem 0.65rem;
          border-radius: 0px !important;
        }

        .compact-lang-btn {
          background: none;
          border: none;
          color: rgba(247, 245, 240, 0.6);
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.05em;
          padding: 0 0.15rem;
          transition: color 0.2s ease;
        }

        .compact-lang-btn:hover {
          color: #e5a71b;
        }

        .compact-lang-btn.active {
          color: #e5a71b;
          font-weight: 900;
        }

        .lang-divider {
          color: rgba(247, 245, 240, 0.25);
          font-size: 0.75rem;
        }

        /* CART BUTTON */
        .nav-cart-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(229, 167, 27, 0.25);
          color: rgba(247, 245, 240, 0.9);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-cart-btn:hover {
          background: rgba(229, 167, 27, 0.15);
          color: #e5a71b;
          border-color: #e5a71b;
        }

        .nav-cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #e5a71b;
          color: #0C0B0A;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SECONDARY CTA BUTTON */
        .nav-secondary-cta {
          background: rgba(229, 167, 27, 0.12);
          border: 1px solid #e5a71b;
          color: #e5a71b;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.55rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-secondary-cta:hover {
          background: #e5a71b;
          color: #0C0B0A;
          box-shadow: 0 0 20px rgba(229, 167, 27, 0.35);
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          color: #FFFFFF;
          cursor: pointer;
          padding: 0.25rem;
        }

        /* MOBILE DRAWER STYLING (SOLID DARK BACKGROUND FOR ABSOLUTE LEGIBILITY ON TABLETS & MOBILES) */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 9, 8, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 9999;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: #0C0B0A;
          border-left: 1px solid rgba(229, 167, 27, 0.35);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 50px rgba(0, 0, 0, 0.95);
          z-index: 10000;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-logo {
          height: 46px;
        }

        .mobile-close {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          cursor: pointer;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .mobile-close:hover {
          background: rgba(229, 167, 27, 0.2);
          color: #e5a71b;
          border-color: #e5a71b;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .mobile-nav-links a {
          font-size: 1.15rem;
          font-weight: 700;
          color: rgba(247, 245, 240, 0.95);
          text-decoration: none;
          letter-spacing: 0.03em;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .mobile-nav-links a:hover {
          color: #e5a71b;
          padding-left: 0.5rem;
        }

        /* RESPONSIVE BREAKPOINTS (COLLAPSE TO HAMBURGER BELOW 1180px TO PREVENT OVERFLOW) */
        @media (max-width: 1180px) {
          .desktop-nav-center {
            display: none;
          }

          .mobile-hamburger {
            display: block;
          }

          .nav-secondary-cta {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
