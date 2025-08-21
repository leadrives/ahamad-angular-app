import React from 'react';
import './GoldenVisa.css';

const benefits = [
  { icon: 'fa-solid fa-calendar-check', title: '10-Year Renewable', text: 'Long-term stability with renewable visa status' },
  { icon: 'fa-solid fa-building', title: 'Full Ownership', text: 'Complete business control without local partners' },
  { icon: 'fa-solid fa-users', title: 'Family Sponsorship', text: 'Include spouse, children, and parents' },
  { icon: 'fa-solid fa-plane', title: 'Travel Flexibility', text: 'Exit & re-entry without sponsor approval' }
];

const investorPoints = [
  { icon: 'fa-solid fa-clock', label: '10-Year Renewable Residence' },
  { icon: 'fa-solid fa-briefcase', label: 'Full Business Ownership' },
  { icon: 'fa-solid fa-users', label: 'Family Sponsorship Included' }
];

const investorStats = [
  { value: '10Y', label: 'Residence' },
  { value: '100%', label: 'Ownership' },
  { value: '∞', label: 'Renewals' },
  { value: 'Family', label: 'Included' }
];

const GoldenVisa = () => (
  <section className="goldenvisa-section" id="goldenvisa" aria-labelledby="goldenvisa-heading">
    <div className="goldenvisa-container">
      {/* Unified header style (aligned with Partners) */}
      <div className="partners-header goldenvisa-header">
        <h2 id="goldenvisa-heading" className="goldenvisa-main-title partners-main-title">
          <img
            src="/assets/Golden-Visa_Logo_-ICon.webp"
            alt="Golden Visa"
            className="goldenvisa-logo" />
          Golden Visa
        </h2>
        <h3 className="goldenvisa-subtitle partners-subtitle">Your Gateway to UAE Residency</h3>
      </div>

      <div className="goldenvisa-content" role="region" aria-label="Golden Visa details">
        {/* Investor Visa Card */}
        <article className="goldenvisa-investor-section" aria-labelledby="investor-title">
          <div className="investor-card">
            <header className="investor-header">
              <div className="investor-icon" aria-hidden="true">
                <i className="fa-solid fa-chart-line" />
              </div>
              <h3 id="investor-title" className="investor-title">Investor Golden Visa</h3>
              <p className="investor-description">Your Business, Your Residency, Your UAE Future</p>
            </header>
            <ul className="investor-features" aria-label="Investor visa key points">
              {investorPoints.map(pt => (
                <li key={pt.label} className="feature-item">
                  <div className="feature-icon" aria-hidden="true"><i className={pt.icon} /></div>
                  <span className="feature-text">{pt.label}</span>
                </li>
              ))}
            </ul>
            <div className="investor-stats" aria-label="Investor visa fast facts">
              {investorStats.map(s => (
                <div key={s.label} className="investor-stat">
                  <div className="investor-stat-value">{s.value}</div>
                  <div className="investor-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            
          </div>
        </article>

        {/* Benefits Card */}
        <article className="goldenvisa-benefits-section" aria-labelledby="benefits-title">
          <div className="benefits-card">
            <header className="benefits-header">
              <div className="benefits-icon" aria-hidden="true"><i className="fa-solid fa-gem" /></div>
              <h3 id="benefits-title" className="benefits-title">Key Benefits</h3>
              <p className="benefits-description">Golden Visa. Golden Opportunity.</p>
            </header>
            <div className="benefits-grid" role="list">
              {benefits.map(b => (
                <div key={b.title} className="benefit-card" role="listitem">
                  <div className="benefit-icon" aria-hidden="true"><i className={b.icon} /></div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{b.title}</h4>
                    <p className="benefit-text">{b.text}</p>
                  </div>
                  <div className="benefit-glow" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default GoldenVisa;
