import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Flame, List, BarChart3, ShoppingBag, Tag, Users, LogOut, ArrowLeft, ShieldCheck, User, ChevronDown, Check, Video } from 'lucide-react';
import { MonthlyCalendar } from './MonthlyCalendar';
import { AnnualHeatmap } from './AnnualHeatmap';
import { ReservationsList } from './ReservationsList';
import { AnalyticsView } from './AnalyticsView';
import { ProductsManager } from './ProductsManager';
import { PromotionsManager } from './PromotionsManager';
import { HeroSlidesManager } from './HeroSlidesManager';
import { UserManagement } from './UserManagement';
import { AddReservationModal } from './AddReservationModal';
import { getStoredReservations, updateReservationStatus, createReservation, getCapacitySettings } from '../../services/reservationService';

export const AdminLayout = ({ onNavigateToPublic }) => {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('calendar');
  const [reservations, setReservations] = useState(getStoredReservations());
  const [capacitySettings, setCapacitySettings] = useState(getCapacitySettings());
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  // Add Reservation Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [prefilledDate, setPrefilledDate] = useState(null);

  const handleUpdateStatus = (id, newStatus) => {
    const updated = updateReservationStatus(id, newStatus);
    setReservations(updated);
  };

  const handleAddReservationManual = (newResData) => {
    createReservation(newResData);
    setReservations(getStoredReservations());
    setIsAddModalOpen(false);
  };

  const handleOpenAddModal = (dateStr = null) => {
    setPrefilledDate(dateStr);
    setIsAddModalOpen(true);
  };

  const navItems = [
    { id: 'calendar', label: 'Calendario Mensual', icon: Calendar },
    { id: 'heatmap', label: 'Mapa de Calor Anual', icon: Flame },
    { id: 'reservations', label: 'Lista de Reservas', icon: List },
    { id: 'analytics', label: 'Analítica & Métricas', icon: BarChart3, ownerOnly: true },
    { id: 'products', label: 'CMS Tienda Gourmet', icon: ShoppingBag, ownerOnly: true },
    { id: 'promotions', label: 'CMS Banners Promo', icon: Tag, ownerOnly: true },
    { id: 'heroslides', label: 'CMS Carrusel Hero', icon: Video, ownerOnly: true },
    { id: 'users', label: 'Gestión Usuarios', icon: Users, ownerOnly: true }
  ];

  const activeNavItem = navItems.find(i => i.id === activeTab) || navItems[0];
  const ActiveIcon = activeNavItem.icon;

  return (
    <div className="admin-shell">
      
      {/* Responsive Top Navbar */}
      <header className="admin-topbar">
        <div className="topbar-row-main">
          
          <div className="topbar-left">
            <a href="#" onClick={onNavigateToPublic} className="admin-logo-link" title="Volver a la Web Pública">
              <img src="/images/logo-definitive.png" alt="MUNCHOS Admin" className="admin-logo" />
            </a>
            <span className="admin-badge-title">PANEL CONTROL</span>
          </div>

          <div className="topbar-right">
            <button className="btn btn-secondary btn-sm nav-public-btn" onClick={onNavigateToPublic}>
              <ArrowLeft size={16} />
              <span>Ver Web Pública</span>
            </button>

            <div className="user-profile-tag">
              {currentUser?.role === 'owner' ? <ShieldCheck size={18} className="icon-cyan" /> : <User size={18} />}
              <span className="user-name">{currentUser?.name}</span>
              <span className={`role-pill role-${currentUser?.role}`}>
                {currentUser?.role === 'owner' ? 'Owner' : 'Staff'}
              </span>
            </div>

            <button className="btn-logout" onClick={logout} title="Cerrar Sesión">
              <LogOut size={18} />
            </button>
          </div>

        </div>

        {/* ELEGANT MOBILE & TABLET SECTION SWITCHER DROPDOWN */}
        <div className="mobile-section-switcher">
          <button 
            className="mobile-switcher-trigger"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            <div className="trigger-left">
              <ActiveIcon size={18} className="icon-cyan" />
              <span className="trigger-label">{activeNavItem.label}</span>
            </div>
            <ChevronDown size={18} className={`chevron ${mobileDropdownOpen ? 'open' : ''}`} />
          </button>

          {mobileDropdownOpen && (
            <div className="mobile-dropdown-menu">
              {navItems.map(item => {
                if (item.ownerOnly && currentUser?.role !== 'owner') return null;
                const ItemIcon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`mobile-dropdown-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <div className="item-left">
                      <ItemIcon size={18} />
                      <span>{item.label}</span>
                    </div>
                    {isSelected && <Check size={16} className="icon-cyan" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <div className="admin-body">
        
        {/* Desktop Navigation Sidebar */}
        <nav className="admin-sidebar">
          {navItems.map(item => {
            if (item.ownerOnly && currentUser?.role !== 'owner') return null;
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <IconComp size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Content Area */}
        <main className="admin-content-area">
          {activeTab === 'calendar' && (
            <MonthlyCalendar 
              reservations={reservations}
              capacitySettings={capacitySettings}
              onUpdateStatus={handleUpdateStatus}
              onOpenAddModal={handleOpenAddModal}
            />
          )}

          {activeTab === 'heatmap' && (
            <AnnualHeatmap reservations={reservations} />
          )}

          {activeTab === 'reservations' && (
            <ReservationsList 
              reservations={reservations}
              onUpdateStatus={handleUpdateStatus}
              onOpenAddModal={handleOpenAddModal}
            />
          )}

          {activeTab === 'analytics' && currentUser?.role === 'owner' && (
            <AnalyticsView reservations={reservations} />
          )}

          {activeTab === 'products' && currentUser?.role === 'owner' && (
            <ProductsManager />
          )}

          {activeTab === 'promotions' && currentUser?.role === 'owner' && (
            <PromotionsManager />
          )}

          {activeTab === 'heroslides' && currentUser?.role === 'owner' && (
            <HeroSlidesManager />
          )}

          {activeTab === 'users' && currentUser?.role === 'owner' && (
            <UserManagement />
          )}
        </main>

      </div>

      {/* Add Manual Reservation Modal */}
      <AddReservationModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        prefilledDate={prefilledDate}
        onSave={handleAddReservationManual}
      />

      <style>{`
        .admin-shell {
          min-height: 100vh;
          background: var(--bg-dark);
          color: var(--text-dark-primary);
          display: flex;
          flex-direction: column;
        }

        .admin-topbar {
          background: var(--bg-surface-dark);
          border-bottom: 1px solid var(--accent-cyan);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .topbar-row-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1.8rem;
          width: 100%;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .admin-logo-link {
          display: flex;
          align-items: center;
        }

        /* 30% LARGER LOGO IN ADMIN PANEL */
        .admin-logo {
          height: 68px; /* Increased +30% */
          width: auto;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(62, 193, 201, 0.4));
        }

        .admin-badge-title {
          font-family: var(--font-subtitles);
          font-size: 0.9rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
          border-left: 1px solid rgba(247, 245, 240, 0.15);
          padding-left: 0.8rem;
          white-space: nowrap;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-profile-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(13, 13, 12, 0.8);
          border: 1px solid rgba(62, 193, 201, 0.3);
          padding: 0.45rem 0.9rem;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .user-name { font-weight: 600; color: #FFF; }

        .role-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          text-transform: uppercase;
        }

        .role-pill.role-owner { background: rgba(62, 193, 201, 0.2); color: var(--accent-cyan); border: 1px solid var(--accent-cyan); }
        .role-pill.role-staff { background: rgba(247, 245, 240, 0.1); color: var(--text-dark-secondary); }

        .btn-logout {
          background: rgba(168, 35, 42, 0.2);
          border: 1px solid var(--accent-red);
          color: var(--accent-red);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .btn-logout:hover {
          background: var(--accent-red);
          color: #FFF;
        }

        /* ELEGANT CUSTOM DROPDOWN SWITCHER (MOBILE & TABLET) */
        .mobile-section-switcher {
          display: none;
          position: relative;
          background: rgba(13, 13, 12, 0.95);
          border-top: 1px solid rgba(247, 245, 240, 0.1);
          padding: 0.6rem 1rem;
        }

        .mobile-switcher-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card-dark);
          border: 1px solid var(--accent-cyan);
          color: #FFF;
          padding: 0.75rem 1rem;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .trigger-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chevron {
          transition: transform var(--transition-fast);
          color: var(--accent-cyan);
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .mobile-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          background: #161514;
          border: 1px solid var(--accent-cyan);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
          z-index: 200;
          display: flex;
          flex-direction: column;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.2rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .mobile-dropdown-item:last-child {
          border-bottom: none;
        }

        .mobile-dropdown-item:hover, .mobile-dropdown-item.selected {
          background: rgba(62, 193, 201, 0.12);
          color: #FFF;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .admin-body {
          display: flex;
          flex-grow: 1;
        }

        .admin-sidebar {
          width: 250px;
          background: var(--bg-surface-dark);
          border-right: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: transparent;
          border: none;
          color: var(--text-dark-secondary);
          padding: 0.85rem 1.2rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          white-space: nowrap !important;
        }

        .sidebar-link:hover {
          color: var(--accent-cyan);
          background: rgba(62, 193, 201, 0.08);
        }

        .sidebar-link.active {
          background: var(--accent-cyan);
          color: #0D0D0C;
          font-weight: 700;
        }

        .admin-content-area {
          flex-grow: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .admin-sidebar { display: none; }
          .mobile-section-switcher { display: block; }
          .admin-content-area { padding: 1.2rem; }
          .admin-badge-title { display: none; }
        }

        @media (max-width: 640px) {
          .topbar-row-main { padding: 0.6rem 0.8rem; }
          .user-name { display: none; }
          .nav-public-btn span { display: none; }
          .admin-logo { height: 56px; }
          .admin-content-area { padding: 0.75rem; }
        }
      `}</style>
    </div>
  );
};
