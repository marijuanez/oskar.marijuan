import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { legalContent } from '../../content/legalContent';
import { Shield, FileText, ArrowLeft, Lock, Award, CheckCircle2, AlertTriangle, Building2, Scale, Mail } from 'lucide-react';

export const LegalPage = ({ onBackToHome, initialTab = 'cancellation' }) => {
  const { lang } = useTranslation();
  const [activeTab, setActiveTab] = useState(initialTab);

  // Content according to selected language (fallback to ES if key missing)
  const content = legalContent[lang] || legalContent.es;

  useEffect(() => {
    // Listen to hash changes inside legal page (e.g. #cancellation, #terms, #privacy)
    const updateTabFromHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('terms') || hash.includes('agb')) {
        setActiveTab('terms');
      } else if (hash.includes('privacy') || hash.includes('datenschutz')) {
        setActiveTab('privacy');
      } else if (hash.includes('cancellation') || hash.includes('stornierung')) {
        setActiveTab('cancellation');
      }
    };

    updateTabFromHash();
    window.addEventListener('hashchange', updateTabFromHash);
    return () => window.removeEventListener('hashchange', updateTabFromHash);
  }, []);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    window.location.hash = `#legal#${tabKey}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="legal-page-wrapper">
      {/* Top Banner Header */}
      <header className="legal-header">
        <div className="container legal-container">
          <button className="back-btn" onClick={onBackToHome}>
            <ArrowLeft size={18} />
            <span>Volver a MUNCHOS</span>
          </button>

          <div className="legal-title-block">
            <div className="badge-legal">
              <Shield size={16} className="gold-icon" />
              <span>MARCO LEGAL & CUMPLIMIENTO REGULATORIO</span>
            </div>
            <h1>{content.meta.title}</h1>
            <p className="legal-subtitle">{content.meta.subtitle}</p>
            
            <div className="legal-meta-chips">
              <span className="chip"><Building2 size={14} /> {content.meta.entity} — {content.meta.address}</span>
              <span className="chip"><Scale size={14} /> {content.meta.jurisdiction}</span>
              <span className="chip"><Award size={14} /> {content.meta.supervisoryAuthority}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navigation Tabs */}
      <div className="legal-tabs-bar">
        <div className="container legal-container">
          <nav className="nav-tabs" role="tablist">
            <button 
              className={`nav-tab-btn ${activeTab === 'cancellation' ? 'active' : ''}`}
              onClick={() => handleTabClick('cancellation')}
              role="tab"
              aria-selected={activeTab === 'cancellation'}
            >
              <AlertTriangle size={17} />
              <span>{content.tabs.cancellation}</span>
            </button>

            <button 
              className={`nav-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabClick('terms')}
              role="tab"
              aria-selected={activeTab === 'terms'}
            >
              <FileText size={17} />
              <span>{content.tabs.terms}</span>
            </button>

            <button 
              className={`nav-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabClick('privacy')}
              role="tab"
              aria-selected={activeTab === 'privacy'}
            >
              <Lock size={17} />
              <span>{content.tabs.privacy}</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="legal-body">
        <div className="container legal-container">

          {/* TAB 1: CANCELLATION POLICY */}
          {activeTab === 'cancellation' && (
            <section id="cancellation" className="legal-tab-content">
              <div className="section-card">
                <h2>{content.cancellation.title}</h2>
                <p className="lead-p">{content.cancellation.intro}</p>

                {/* Standard Event Table */}
                <div className="table-block">
                  <h3>{content.cancellation.standardTitle}</h3>
                  <p className="table-sub">{content.cancellation.standardSubtitle}</p>
                  
                  <div className="table-responsive">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>{content.cancellation.tableHeaders.timeframe}</th>
                          <th>{content.cancellation.tableHeaders.withoutProtection}</th>
                          <th>{content.cancellation.tableHeaders.withProtection}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.cancellation.standardRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="time-td">{row.timeframe}</td>
                            <td className="without-td">{row.without}</td>
                            <td className="with-td">{row.with}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Large Event Table */}
                <div className="table-block">
                  <h3>{content.cancellation.largeTitle}</h3>
                  <p className="table-sub">{content.cancellation.largeSubtitle}</p>
                  
                  <div className="table-responsive">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>{content.cancellation.tableHeaders.timeframe}</th>
                          <th>{content.cancellation.tableHeaders.withoutProtection}</th>
                          <th>{content.cancellation.tableHeaders.withProtection}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.cancellation.largeRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="time-td">{row.timeframe}</td>
                            <td className="without-td">{row.without}</td>
                            <td className="with-td">{row.with}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Protection & Deposit rules */}
                <div className="info-box-gold">
                  <h4>{content.cancellation.protectionTitle}</h4>
                  <p>{content.cancellation.protectionText}</p>
                </div>

                <div className="info-block">
                  <h4>{content.cancellation.depositsTitle}</h4>
                  <ul>
                    {content.cancellation.depositsList.map((item, idx) => (
                      <li key={idx}><CheckCircle2 size={16} className="gold-icon" /> <span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="info-block">
                  <h4>{content.cancellation.chefGuaranteeTitle}</h4>
                  <p>{content.cancellation.chefGuaranteeText}</p>
                </div>

                <div className="contact-callout">
                  <Mail size={20} className="gold-icon" />
                  <p>{content.cancellation.contactNote}</p>
                </div>
              </div>
            </section>
          )}

          {/* TAB 2: TERMS AND CONDITIONS */}
          {activeTab === 'terms' && (
            <section id="terms" className="legal-tab-content">
              <div className="section-card">
                <h2>{content.terms.title}</h2>

                <div className="legal-sections-list">
                  {content.terms.sections.map((sec, idx) => (
                    <div key={idx} className="legal-sec-item">
                      <h3>{sec.heading}</h3>
                      <p>{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: PRIVACY POLICY (GDPR) */}
          {activeTab === 'privacy' && (
            <section id="privacy" className="legal-tab-content">
              <div className="section-card">
                <h2>{content.privacy.title}</h2>
                <p className="lead-p">{content.privacy.intro}</p>

                <div className="legal-sections-list">
                  {content.privacy.sections.map((sec, idx) => (
                    <div key={idx} className="legal-sec-item">
                      <h3>{sec.heading}</h3>
                      <p style={{ whiteSpace: 'pre-line' }}>{sec.content}</p>

                      {/* Subprocessors Subtable if present */}
                      {sec.subprocessors && (
                        <div className="subprocessors-grid">
                          {sec.subprocessors.map((sub, sIdx) => (
                            <div key={sIdx} className="sub-card">
                              <span className="sub-name">{sub.name}</span>
                              <span className="sub-purpose">{sub.purpose}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom Back Button */}
          <div className="legal-bottom-bar">
            <button className="btn btn-outline-gold" onClick={onBackToHome}>
              <ArrowLeft size={16} />
              <span>Volver a la Página Principal</span>
            </button>
            <span className="updated-meta">{content.meta.lastUpdated}</span>
          </div>

        </div>
      </main>

      <style>{`
        /* CORPORATE DARK UI PALETTE */
        .legal-page-wrapper {
          background-color: #121212;
          color: #FFFFFF;
          min-height: 100vh;
          font-family: var(--font-body);
          overflow-wrap: break-word;
          hyphens: auto;
        }

        .legal-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* HEADER */
        .legal-header {
          background: linear-gradient(180deg, #1E1E1E 0%, #121212 100%);
          padding: 3rem 0 2rem 0;
          border-bottom: 1px solid rgba(229, 169, 60, 0.2);
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          background: #E5A93C;
          color: #121212;
          border-color: #E5A93C;
        }

        .badge-legal {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(229, 169, 60, 0.12);
          border: 1px solid #E5A93C;
          color: #E5A93C;
          padding: 0.3rem 0.8rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .gold-icon { color: #E5A93C; }

        .legal-header h1 {
          font-size: 2.2rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .legal-subtitle {
          font-size: 1.05rem;
          color: #B3B3B3;
          margin-bottom: 1.5rem;
        }

        .legal-meta-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .chip {
          background: #1E1E1E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #B3B3B3;
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* STICKY NAV TABS */
        .legal-tabs-bar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 0;
        }

        .nav-tabs {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .nav-tabs::-webkit-scrollbar { display: none; }

        .nav-tab-btn {
          background: #1E1E1E;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #B3B3B3;
          padding: 0.75rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .nav-tab-btn:hover {
          border-color: #E5A93C;
          color: #FFFFFF;
        }

        .nav-tab-btn.active {
          background: #E5A93C;
          color: #121212;
          border-color: #E5A93C;
        }

        /* BODY CONTENT */
        .legal-body {
          padding: 3rem 0;
        }

        .section-card {
          background: #1E1E1E;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .section-card h2 {
          font-size: 1.8rem;
          color: #FFFFFF;
          margin-bottom: 1rem;
          border-bottom: 2px solid #E5A93C;
          padding-bottom: 0.75rem;
        }

        .lead-p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #D6D6D6;
          margin-bottom: 2rem;
        }

        /* TABLES & DEFENSIVE HORIZONTAL SCROLL */
        .table-block {
          margin-bottom: 2.5rem;
        }

        .table-block h3 {
          font-size: 1.25rem;
          color: #E5A93C;
          margin-bottom: 0.3rem;
        }

        .table-sub {
          font-size: 0.88rem;
          color: #B3B3B3;
          margin-bottom: 1rem;
        }

        .table-responsive {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 1rem;
          border: 1px solid rgba(229, 169, 60, 0.3);
        }

        .legal-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
          min-width: 600px; /* Defensive width for small screens */
        }

        .legal-table th {
          background: #282828;
          color: #E5A93C;
          font-weight: 700;
          padding: 0.9rem 1.1rem;
          border-bottom: 1px solid rgba(229, 169, 60, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          font-size: 0.82rem;
        }

        .legal-table td {
          padding: 0.85rem 1.1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          color: #E0E0E0;
        }

        .legal-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.02);
        }

        .time-td { font-weight: 600; color: #FFFFFF; }
        .without-td { color: #E57373; }
        .with-td { color: #81C784; font-weight: 700; }

        /* INFO BOXES */
        .info-box-gold {
          background: rgba(229, 169, 60, 0.08);
          border-left: 4px solid #E5A93C;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-box-gold h4 {
          color: #E5A93C;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .info-box-gold p {
          font-size: 0.95rem;
          color: #E0E0E0;
          line-height: 1.6;
        }

        .info-block {
          margin-bottom: 2rem;
        }

        .info-block h4 {
          font-size: 1.1rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .info-block ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .info-block li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #B3B3B3;
        }

        .info-block p {
          font-size: 0.95rem;
          color: #B3B3B3;
          line-height: 1.6;
        }

        .contact-callout {
          background: #252525;
          border: 1px dashed rgba(229, 169, 60, 0.4);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .contact-callout p {
          font-size: 0.92rem;
          color: #E0E0E0;
          margin: 0;
        }

        /* SECTIONS LIST FOR TERMS AND PRIVACY */
        .legal-sections-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .legal-sec-item h3 {
          font-size: 1.2rem;
          color: #E5A93C;
          margin-bottom: 0.6rem;
        }

        .legal-sec-item p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #B3B3B3;
        }

        .subprocessors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-top: 1rem;
        }

        .sub-card {
          background: #282828;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sub-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #E5A93C;
        }

        .sub-purpose {
          font-size: 0.8rem;
          color: #B3B3B3;
        }

        /* BOTTOM BAR */
        .legal-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .updated-meta {
          font-size: 0.82rem;
          color: #777777;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .section-card {
            padding: 1.5rem;
          }
          .subprocessors-grid {
            grid-template-columns: 1fr;
          }
          .legal-bottom-bar {
            flex-direction: column;
            gap: 1.2rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};
