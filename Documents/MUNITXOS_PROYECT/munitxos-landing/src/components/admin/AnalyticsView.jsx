import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, DollarSign, Info } from 'lucide-react';

export const AnalyticsView = ({ reservations }) => {
  const activeReservations = reservations.filter(r => r.status !== 'cancelled');

  // 1. Menu Type Breakdown
  const menuCounts = activeReservations.reduce((acc, r) => {
    const key = r.menuName || r.menuType || 'Otro';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // 2. Guest Count Distribution
  const guestRanges = {
    '10-19 comensales': 0,
    '20-34 comensales': 0,
    '35-50+ comensales': 0
  };

  activeReservations.forEach(r => {
    const g = parseInt(r.guests) || 0;
    if (g < 20) guestRanges['10-19 comensales']++;
    else if (g <= 34) guestRanges['20-34 comensales']++;
    else guestRanges['35-50+ comensales']++;
  });

  // 3. Source Split
  const publicCount = activeReservations.filter(r => r.source === 'public').length;
  const manualCount = activeReservations.filter(r => r.source === 'manual').length;

  // 4. Financial Calculations
  const pricedReservations = activeReservations.filter(r => parseFloat(r.estimatedTotal) > 0);
  const totalRevenue = pricedReservations.reduce((sum, r) => sum + parseFloat(r.estimatedTotal), 0);
  const avgOrderValue = pricedReservations.length > 0 ? Math.round(totalRevenue / pricedReservations.length) : 0;

  return (
    <div className="analytics-view-module">
      
      {/* FULL WIDTH STACKED HEADER (As requested in Image 4) */}
      <div className="analytics-header">
        <div className="header-text-block">
          <h2 className="header-title">Métricas y Análisis de Rendimiento</h2>
          <p className="header-subtitle">Análisis de patrones de reserva, distribución de menús y rentabilidad operativa.</p>
        </div>

        <div className="finance-notice">
          <Info size={16} />
          <span>Las métricas financieras se calculan sobre presupuestos completados.</span>
        </div>
      </div>

      {/* Financial Key Performance Indicators */}
      <div className="kpi-cards-grid">
        <div className="glass-card kpi-card">
          <DollarSign className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalRevenue.toFixed(0)}€</span>
            <span className="kpi-lbl">Ingresos Totales Registrados</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <TrendingUp className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{avgOrderValue}€</span>
            <span className="kpi-lbl">Valor Medio por Evento</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <Users className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{activeReservations.length}</span>
            <span className="kpi-lbl">Eventos Activos Confirmados</span>
          </div>
        </div>
      </div>

      {/* Visual Analytics Grid */}
      <div className="analytics-grid">
        
        {/* Menu Popularity Bar Chart */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <PieChart size={20} className="icon-cyan" />
            <h3>Distribución por Tipo de Menú</h3>
          </div>

          <div className="bar-chart-container">
            {Object.entries(menuCounts).map(([menuName, count], idx) => {
              const pct = activeReservations.length > 0 ? Math.round((count / activeReservations.length) * 100) : 0;
              return (
                <div key={idx} className="bar-row">
                  <div className="bar-info">
                    <span className="bar-label">{menuName}</span>
                    <span className="bar-val">{count} ({pct}%)</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guest Spread */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <Users size={20} className="icon-cyan" />
            <h3>Tamaño de los Grupos (Comensales)</h3>
          </div>

          <div className="bar-chart-container">
            {Object.entries(guestRanges).map(([rangeLabel, count], idx) => {
              const pct = activeReservations.length > 0 ? Math.round((count / activeReservations.length) * 100) : 0;
              return (
                <div key={idx} className="bar-row">
                  <div className="bar-info">
                    <span className="bar-label">{rangeLabel}</span>
                    <span className="bar-val">{count} eventos ({pct}%)</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill cyan-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Source Split */}
        <div className="glass-card chart-card full-width-card">
          <div className="chart-title">
            <BarChart3 size={20} className="icon-cyan" />
            <h3>Origen de las Reservas (Web Pública vs. Canal Manual)</h3>
          </div>

          <div className="source-split-wrapper">
            <div className="source-stat">
              <span className="source-num">{publicCount}</span>
              <span className="source-title">Reservas Web Pública</span>
              <span className="source-pct">
                {activeReservations.length > 0 ? Math.round((publicCount / activeReservations.length) * 100) : 0}% del total
              </span>
            </div>

            <div className="source-divider" />

            <div className="source-stat">
              <span className="source-num gold-num">{manualCount}</span>
              <span className="source-title">Reservas Manuales (Teléfono/Email)</span>
              <span className="source-pct">
                {activeReservations.length > 0 ? Math.round((manualCount / activeReservations.length) * 100) : 0}% del total
              </span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .analytics-view-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .analytics-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-text-block {
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          width: 100%;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
          width: 100%;
        }

        .finance-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(62, 193, 201, 0.1);
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.55rem 1rem;
          font-size: 0.85rem;
          align-self: flex-start;
          max-width: 100%;
        }

        .kpi-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .kpi-val {
          font-family: var(--font-subtitles);
          font-size: 2rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .kpi-lbl {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .chart-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .full-width-card {
          grid-column: 1 / -1;
        }

        .chart-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chart-title h3 {
          font-size: 1.2rem;
          color: #FFF;
        }

        .bar-chart-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .bar-label { color: #FFF; font-weight: 600; }
        .bar-val { color: var(--accent-cyan); font-weight: 700; }

        .bar-track {
          height: 10px;
          background: rgba(13, 13, 12, 0.7);
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--accent-cyan);
          transition: width 0.6s ease;
        }

        .cyan-fill { background: var(--accent-gold); }

        .source-split-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 1.5rem 0;
        }

        .source-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .source-num {
          font-family: var(--font-subtitles);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .gold-num { color: var(--accent-gold); }

        .source-title {
          font-size: 1rem;
          font-weight: 600;
          color: #FFF;
          margin-top: 0.4rem;
        }

        .source-pct {
          font-size: 0.85rem;
          color: var(--text-dark-muted);
        }

        .source-divider {
          width: 1px;
          height: 70px;
          background: rgba(247, 245, 240, 0.1);
        }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 900px) {
          .kpi-cards-grid, .analytics-grid {
            grid-template-columns: 1fr;
          }
          .source-split-wrapper {
            flex-direction: column;
            gap: 1.5rem;
          }
          .source-divider { display: none; }
        }
      `}</style>
    </div>
  );
};
