import React, { useState } from 'react';
import { Calendar as CalIcon, TrendingUp, Users, Flame } from 'lucide-react';

export const AnnualHeatmap = ({ reservations }) => {
  const [selectedYear, setSelectedYear] = useState(2026);

  const months = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  // Calculate monthly stats for the selected year
  const monthlyData = months.map((monthName, idx) => {
    const monthNum = String(idx + 1).padStart(2, '0');
    const prefix = `${selectedYear}-${monthNum}`;

    const monthRes = reservations.filter(r => r.date.startsWith(prefix) && r.status !== 'cancelled');
    const totalEvents = monthRes.length;
    const totalGuests = monthRes.reduce((sum, r) => sum + (parseInt(r.guests) || 0), 0);
    const estimatedRev = monthRes.reduce((sum, r) => sum + (parseFloat(r.estimatedTotal) || 0), 0);

    // Heat intensity score 0 to 4
    let intensity = 0;
    if (totalEvents >= 1) intensity = 1;
    if (totalEvents >= 3) intensity = 2;
    if (totalEvents >= 6) intensity = 3;
    if (totalEvents >= 10) intensity = 4;

    return {
      monthName,
      monthNum,
      totalEvents,
      totalGuests,
      estimatedRev,
      intensity
    };
  });

  const totalYearEvents = monthlyData.reduce((sum, m) => sum + m.totalEvents, 0);
  const totalYearGuests = monthlyData.reduce((sum, m) => sum + m.totalGuests, 0);
  const totalYearRevenue = monthlyData.reduce((sum, m) => sum + m.estimatedRev, 0);

  return (
    <div className="annual-heatmap-module">
      
      {/* FULL WIDTH STACKED HEADER (As requested in Image 2) */}
      <div className="heatmap-header">
        <div className="header-text-block">
          <h2 className="header-title">Mapa de Calor Anual ({selectedYear})</h2>
          <p className="header-subtitle">Visión panorámica de la intensidad de reservas y estacionalidad durante todo el año.</p>
        </div>

        <div className="year-selector-row">
          <button 
            className={`btn btn-sm ${selectedYear === 2025 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedYear(2025)}
          >
            2025
          </button>
          <button 
            className={`btn btn-sm ${selectedYear === 2026 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedYear(2026)}
          >
            2026
          </button>
          <button 
            className={`btn btn-sm ${selectedYear === 2027 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedYear(2027)}
          >
            2027
          </button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="year-stats-row">
        <div className="glass-card stat-box">
          <Flame className="icon-cyan" size={24} />
          <div>
            <span className="stat-val">{totalYearEvents}</span>
            <span className="stat-lbl">Eventos en {selectedYear}</span>
          </div>
        </div>

        <div className="glass-card stat-box">
          <Users className="icon-cyan" size={24} />
          <div>
            <span className="stat-val">{totalYearGuests}</span>
            <span className="stat-lbl">Comensales Totales</span>
          </div>
        </div>

        <div className="glass-card stat-box">
          <TrendingUp className="icon-cyan" size={24} />
          <div>
            <span className="stat-val">{totalYearRevenue.toFixed(0)}€</span>
            <span className="stat-lbl">Ingresos Estimados</span>
          </div>
        </div>
      </div>

      {/* Heatmap 12-Month Grid */}
      <div className="heatmap-grid">
        {monthlyData.map((m, idx) => (
          <div key={idx} className={`month-heat-card intensity-${m.intensity}`}>
            <div className="month-card-header">
              <span className="month-name">{m.monthName}</span>
              <span className="heat-dot" />
            </div>

            <div className="month-card-body">
              <div className="heat-metric">
                <span className="val">{m.totalEvents}</span>
                <span className="lbl">evento{m.totalEvents !== 1 ? 's' : ''}</span>
              </div>
              <div className="heat-metric">
                <span className="sub-val">{m.totalGuests} comensales</span>
              </div>
              {m.estimatedRev > 0 && (
                <div className="heat-metric rev-val">
                  {m.estimatedRev}€
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap Legend */}
      <div className="heatmap-legend">
        <span>Intensidad de Ocupación:</span>
        <div className="legend-scale">
          <span className="scale-box intensity-0">Baja (0)</span>
          <span className="scale-box intensity-1">Moderada (1-2)</span>
          <span className="scale-box intensity-2">Media (3-5)</span>
          <span className="scale-box intensity-3">Alta (6-9)</span>
          <span className="scale-box intensity-4">Máxima (10+)</span>
        </div>
      </div>

      <style>{`
        .annual-heatmap-module {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        /* STACKED FULL WIDTH HEADER LAYOUT */
        .heatmap-header {
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

        .year-selector-row {
          display: flex;
          gap: 0.6rem;
          width: 100%;
        }

        .year-selector-row button {
          flex: 1;
        }

        .year-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .stat-val {
          font-family: var(--font-subtitles);
          font-size: 2rem;
          font-weight: 700;
          color: #FFF;
          display: block;
          line-height: 1;
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .heatmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .month-heat-card {
          background: var(--bg-card-dark);
          border: 1px solid rgba(247, 245, 240, 0.08);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: transform var(--transition-fast);
        }

        .month-heat-card:hover {
          transform: translateY(-4px);
        }

        .month-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          padding-bottom: 0.4rem;
        }

        .month-name {
          font-family: var(--font-subtitles);
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFF;
        }

        .heat-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        /* Heatmap intensity color spectrum */
        .month-heat-card.intensity-0 .heat-dot { background: #3A3835; }
        .month-heat-card.intensity-1 { border-top: 3px solid #275A38; }
        .month-heat-card.intensity-1 .heat-dot { background: #79D494; }

        .month-heat-card.intensity-2 { border-top: 3px solid var(--accent-gold); }
        .month-heat-card.intensity-2 .heat-dot { background: var(--accent-gold); }

        .month-heat-card.intensity-3 { border-top: 3px solid var(--accent-cyan); }
        .month-heat-card.intensity-3 .heat-dot { background: var(--accent-cyan); }

        .month-heat-card.intensity-4 { border-top: 3px solid var(--accent-red); background: rgba(168, 35, 42, 0.12); }
        .month-heat-card.intensity-4 .heat-dot { background: var(--accent-red); }

        .heat-metric .val {
          font-family: var(--font-subtitles);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .heat-metric .lbl {
          font-size: 0.82rem;
          color: var(--text-dark-muted);
          margin-left: 0.3rem;
        }

        .heat-metric .sub-val {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .rev-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: #79D494;
          margin-top: 0.4rem;
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: var(--bg-card-dark);
          padding: 1rem 1.5rem;
          font-size: 0.88rem;
          color: var(--text-dark-secondary);
          border: 1px solid rgba(247, 245, 240, 0.08);
          flex-wrap: wrap;
        }

        .legend-scale {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .scale-box {
          font-size: 0.72rem;
          padding: 0.2rem 0.5rem;
          font-weight: 700;
        }

        .scale-box.intensity-0 { background: #3A3835; color: #FFF; }
        .scale-box.intensity-1 { background: rgba(39, 90, 56, 0.3); color: #79D494; }
        .scale-box.intensity-2 { background: rgba(212, 175, 55, 0.3); color: var(--accent-gold); }
        .scale-box.intensity-3 { background: rgba(62, 193, 201, 0.3); color: var(--accent-cyan); }
        .scale-box.intensity-4 { background: rgba(168, 35, 42, 0.3); color: var(--accent-red); }

        .icon-cyan { color: var(--accent-cyan); }

        @media (max-width: 1024px) {
          .heatmap-grid { grid-template-columns: repeat(2, 1fr); }
          .year-stats-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .heatmap-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
