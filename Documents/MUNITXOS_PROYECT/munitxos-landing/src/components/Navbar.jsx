import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

export const Navbar = ({ onOpenCart, cartCount, onOpenBooking }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beneficios', label: t('nav.beneficios') },
    { href: '#como-funciona', label: t('nav.comoFunciona') },
    { href: '#menus', label: t('nav.menus') },
    { href: '#personalizacion', label: t('nav.personalizacion') },
    { href: '#filosofia', label: t('nav.filosofia') },
    { href: '#garantia', label: t('nav.garantia') },
    { href: '#gourmet', label: t('nav.gourmet') },
    { href: '#testimonios', label: t('nav.testimonios') }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Top Header Line: Double Size Logo (Top Left) & Quick Actions */}
        <div className="nav-top-row">
          <a href="#" className="brand-logo-link">
            <img src="/images/logo.svg" alt="MUNCHOS" className="logo-img-large" />
          </a>

          <div className="nav-actions">
            <button className="cart-btn" onClick={onOpenCart} aria-label="Ver carrito gourmet">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <button className="btn btn-primary nav-cta" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>{t('nav.reservar')}</span>
            </button>

            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
              {mobileOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>

        {/* Aligned Sub-Navigation Line Below Logo (Desktop) */}
        <nav className="desktop-subnav">
          <div className="subnav-line">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-item">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

      </div>

      {/* Mobile & Tablet OPAQUE Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/images/logo.svg" alt="MUNCHOS" className="logo-img-mobile" />
              <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="mobile-links">
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-actions">
              <button className="btn btn-primary w-full" onClick={() => { setMobileOpen(false); onOpenBooking(); }}>
                <Calendar size={18} />
                <span>{t('nav.reservar')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all var(--transition-smooth);
          background: #0D0D0C; /* Solid opaque background */
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding: 0.8rem 0 0.5rem 0;
        }

        .navbar-header.is-scrolled {
          background: #0D0D0C;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.8);
          border-bottom-color: var(--accent-cyan);
        }

        .nav-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* DOUBLE SIZE LOGO */
        .logo-img-large {
          height: 85px;
          width: auto;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
          transition: height var(--transition-fast);
        }

        .navbar-header.is-scrolled .logo-img-large {
          height: 70px;
        }

        /* Aligned Navigation Line Below Logo */
        .desktop-subnav {
          width: 100%;
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding-top: 0.5rem;
          margin-top: 0.25rem;
        }

        .subnav-line {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .nav-item {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: color var(--transition-fast);
        }

        .nav-item:hover {
          color: var(--accent-cyan);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cart-btn {
          position: relative;
          background: rgba(247, 245, 240, 0.06);
          border: 1px solid rgba(247, 245, 240, 0.15);
          color: var(--text-dark-primary);
          width: 44px;
          height: 44px;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cart-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--accent-cyan);
          color: #0D0D0C;
          font-size: 0.72rem;
          font-weight: 900;
          width: 20px;
          height: 20px;
          border-radius: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-dark-primary);
          cursor: pointer;
        }

        .logo-img-mobile {
          height: 60px;
        }

        @media (max-width: 1024px) {
          .desktop-subnav { display: none; }
          .mobile-toggle { display: block; }
          .nav-cta { display: none; }
          .logo-img-large { height: 65px; }
        }

        /* SOLID OPAQUE MOBILE & TABLET DRAWER */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1001;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-menu-content {
          width: 100%;
          max-width: 420px;
          background: #0D0D0C !important; /* 100% Opaque Dark Background */
          opacity: 1 !important;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-left: 2px solid var(--accent-cyan);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.9);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          padding-bottom: 1rem;
        }

        .mobile-close-btn {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin: 2rem 0;
        }

        .mobile-links a {
          font-family: var(--font-subtitles);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark-primary);
          text-transform: uppercase;
          transition: color var(--transition-fast);
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(247, 245, 240, 0.05);
        }

        .mobile-links a:hover {
          color: var(--accent-cyan);
        }

        .mobile-actions {
          padding-top: 1rem;
          border-top: 1px solid rgba(247, 245, 240, 0.1);
        }

        .w-full { width: 100%; }
      `}</style>
    </header>
  );
};
