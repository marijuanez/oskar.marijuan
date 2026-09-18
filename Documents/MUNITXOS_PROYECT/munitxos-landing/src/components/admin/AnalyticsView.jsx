import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, DollarSign, Info, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { getStoredClients } from '../../services/clientService';

export const AnalyticsView = ({ reservations }) => {
  const clients = getStoredClients();

  // 1. Reservations breakdown
  const totalRequests = reservations.length;
  const confirmedReservations = reservations.filter(r => r.status === 'confirmed' || r.status === 'completed');
  const pendingReservations = reservations.filter(r => r.status === 'pending');
  const cancelledReservations = reservations.filter(r => r.status === 'cancelled');

  const conversionRate = totalRequests > 0 ? Math.round((confirmedReservations.length / totalRequests) * 100) : 0;

  // 2. Guests & Revenue
  const totalGuestsServed = confirmedReservations.reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);
  const totalRevenue = confirmedReservations.reduce((sum, r) => sum + (parseFloat(r.estimatedTotal) || 0), 0);
  const avgEventValue = confirmedReservations.length > 0 ? Math.round(totalRevenue / confirmedReservations.length) : 0;

  // 3. Repeat Client Metrics
  const totalClientsCount = clients.length;
  const repeatClientsCount = clients.filter(c => c.isRepeatCustomer).length;
  const repeatCustomerRate = totalClientsCount > 0 ? Math.round((repeatClientsCount / totalClientsCount) * 100) : 0;
  const avgLtv = totalClientsCount > 0 ? Math.round(totalRevenue / totalClientsCount) : 0;

  // 4. Menu Type Breakdown
  const menuCounts = confirmedReservations.reduce((acc, r) => {
    const key = r.menuName || r.menuType || 'Otro';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // 5. Guest Count Distribution
  const guestRanges = {
    '10-19 comensales': 0,
    '20-34 comensales': 0,
    '35-50+ comensales': 0
  };

  confirmedReservations.forEach(r => {
    const g = parseInt(r.guests) || 0;
    if (g < 20) guestRanges['10-19 comensales']++;
    else if (g <= 34) guestRanges['20-34 comensales']++;
    else guestRanges['35-50+ comensales']++;
  });

  return (
    <div className="analytics-view-module">
      
      {/* Header */}
      <div className="analytics-header">
        <div className="header-text-block">
          <h2 className="header-title">Analítica Global y Métricas de Conversión</h2>
          <p className="header-subtitle">
            Análisis de captación de solicitudes, eventos llevados a cabo, volumen de personas atendidas y recurrencia de clientes.
          </p>
        </div>

        <div className="finance-notice">
          <Info size={16} />
          <span>Las métricas de facturación y comensales se calculan sobre eventos llevados a cabo / confirmados.</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="kpi-cards-grid">
        
        <div className="glass-card kpi-card">
          <BarChart3 className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalRequests}</span>
            <span className="kpi-lbl">Solicitudes Totales Recibidas</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <CheckCircle2 className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{confirmedReservations.length} <small>({conversionRate}%)</small></span>
            <span className="kpi-lbl">Eventos Llevados a Cabo</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <Users className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalGuestsServed}</span>
            <span className="kpi-lbl">Total Personas / Comensales Atendidos</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <UserCheck className="icon-gold" size={26} />
          <div>
            <span className="kpi-val">{repeatClientsCount} <small>({repeatCustomerRate}%)</small></span>
            <span className="kpi-lbl">Clientes Repetitivos / Recurrentes</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <DollarSign className="icon-cyan" size={26} />
          <div>
            <span className="kpi-val">{totalRevenue.toFixed(0)}€</span>
            <span className="kpi-lbl">Ingresos Totales Confirmados</span>
          </div>
        </div>

        <div className="glass-card kpi-card">
          <TrendingUp className="icon-gold" size={26} />
          <div>
            <span className="kpi-val">{avgLtv}€</span>
            <span className="kpi-lbl">Valor Medio por Cliente (LTV)</span>
          </div>
        </div>

      </div>

      {/* Analytics Grid */}
      <div className="analytics-grid">
        
        {/* Conversion Funnel Card */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <BarChart3 size={20} className="icon-cyan" />
            <h3>Embudo de Solicitudes y Conversión</h3>
          </div>

          <div className="funnel-container">
            <div className="funnel-step step-received">
              <div className="step-info">
                <span className="step-name">Solicitudes Recibidas (Leads)</span>
                <span className="step-count">{totalRequests}</span>
              </div>
              <div className="funnel-bar"><div className="funnel-fill" style={{ width: '100%' }} /></div>
            </div>

            <div className="funnel-step step-confirmed">
              <div className="step-info">
                <span className="step-name">Eventos Llevados a Cabo / Confirmados</span>
                <span className="step-count">{confirmedReservations.length} ({conversionRate}%)</span>
              </div>
              <div className="funnel-bar"><div className="funnel-fill cyan-fill" style={{ width: `${conversionRate}%` }} /></div>
            </div>

            <div className="funnel-step step-pending">
              <div className="step-info">
                <span className="step-name">Solicitudes Pendientes de Confirmación</span>
                <span className="step-count">{pendingReservations.length}</span>
              </div>
              <div className="funnel-bar"><div className="funnel-fill gold-fill" style={{ width: `${totalRequests > 0 ? (pendingReservations.length/totalRequests)*100 : 0}%` }} /></div>
            </div>
          </div>
        </div>

        {/* Customer Retention Card */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <UserCheck size={20} className="icon-gold" />
            <h3>Recurrencia y Fidelización de Clientes</h3>
          </div>

          <div className="retention-wrapper">
            <div className="retention-stat">
              <span className="ret-num gold-num">{repeatClientsCount}</span>
              <span className="ret-title">Clientes Repetitivos</span>
              <span className="ret-desc">{repeatCustomerRate}% de tu base total de clientes</span>
            </div>

            <div className="retention-divider" />

            <div className="retention-stat">
              <span className="ret-num">{totalClientsCount - repeatClientsCount}</span>
              <span className="ret-title">Clientes de Evento Único</span>
              <span className="ret-desc">{100 - repeatCustomerRate}% nuevos en fase de desarrollo</span>
            </div>
          </div>
        </div>

        {/* Menu Popularity Bar Chart */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <PieChart size={20} className="icon-cyan" />
            <h3>Distribución de Menús en Eventos Realizados</h3>
          </div>

          <div className="bar-chart-container">
            {Object.entries(menuCounts).length === 0 ? (
              <p className="no-data">Sin datos de menú disponibles.</p>
            ) : (
              Object.entries(menuCounts).map(([menuName, count], idx) => {
                const pct = confirmedReservations.length > 0 ? Math.round((count / confirmedReservations.length) * 100) : 0;
                return (
                  <div key={idx} className="bar-row">
                    <div className="bar-info">
                      <span className="bar-label">{menuName}</span>
                      <span className="bar-val">{count} eventos ({pct}%)</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Guest Spread */}
        <div className="glass-card chart-card">
          <div className="chart-title">
            <Users size={20} className="icon-cyan" />
            <h3>Tamaño de Eventos (Comensales por Grupo)</h3>
          </div>

          <div className="bar-chart-container">
            {Object.entries(guestRanges).map(([rangeLabel, count], idx) => {
              const pct = confirmedReservations.length > 0 ? Math.round((count / confirmedReservations.length) * 100) : 0;
              return (
                <div key={idx} className="bar-row">
                  <div className="bar-info">
                    <span className="bar-label">{rangeLabel}</span>
                    <span className="bar-val">{count} eventos ({pct}%)</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill gold-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .analytics-view-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .analytics-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.1);
          padding: 1.5rem 1.8rem;
          width: 100%;
        }

        .header-title {
          font-family: var(--font-subtitles);
          font-size: clamp(1.4rem, 3.5vw, 2.2rem);
          color: #FFF;
          line-height: 1.25;
        }

        .header-subtitle {
          font-size: 0.92rem;
          color: var(--text-dark-secondary);
          margin-top: 0.35rem;
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
          padding: 1.4rem;
        }

        .kpi-val {
          font-family: var(--font-subtitles);
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .kpi-val small {
          font-size: 0.95rem;
          color: var(--accent-gold);
        }

        .kpi-lbl {
          font-size: 0.82rem;
          color: var(--text-dark-secondary);
          margin-top: 0.2rem;
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

        .chart-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .chart-title h3 {
          font-size: 1.15rem;
          color: #FFF;
        }

        /* Funnel Styles */
        .funnel-container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .step-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          margin-bottom: 0.35rem;
        }

        .step-name { color: #FFF; font-weight: 600; }
        .step-count { color: var(--accent-cyan); font-weight: 700; }

        .funnel-bar {
          height: 12px;
          background: rgba(13, 13, 12, 0.7);
          overflow: hidden;
        }

        .funnel-fill {
          height: 100%;
          background: rgba(247, 245, 240, 0.3);
          transition: width 0.6s ease;
        }

        .cyan-fill { background: var(--accent-cyan); }
        .gold-fill { background: var(--accent-gold); }

        /* Retention Card */
        .retention-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 1rem 0;
        }

        .retention-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ret-num {
          font-family: var(--font-subtitles);
          font-size: 2.5rem;
          font-weight: 700;
          color: #FFF;
          line-height: 1;
        }

        .gold-num { color: var(--accent-gold); }

        .ret-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #FFF;
          margin-top: 0.4rem;
        }

        .ret-desc {
          font-size: 0.82rem;
          color: var(--text-dark-muted);
          margin-top: 0.2rem;
        }

        .retention-divider {
          width: 1px;
          height: 70px;
          background: rgba(247, 245, 240, 0.1);
        }

        .bar-chart-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
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

        .icon-cyan { color: var(--accent-cyan); }
        .icon-gold { color: var(--accent-gold); }
        .no-data { color: var(--text-dark-muted); font-size: 0.88rem; font-style: italic; }

        @media (max-width: 1024px) {
          .kpi-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .analytics-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .kpi-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
