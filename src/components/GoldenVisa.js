import React from 'react';
import styles from './GoldenVisa.module.css';

const benefits = [
  { id: 'renewable', icon: 'fa-solid fa-calendar-check', title: '10-Year Renewable', body: 'Long-term stability with renewable visa status' },
  { id: 'ownership', icon: 'fa-solid fa-building', title: 'Full Ownership', body: 'Complete business control without local partners' },
  { id: 'family', icon: 'fa-solid fa-users', title: 'Family Sponsorship', body: 'Include spouse, children, and parents' },
  { id: 'travel', icon: 'fa-solid fa-plane', title: 'Travel Flexibility', body: 'Exit & re-entry without sponsor approval' }
];

const investorPoints = [
  { icon: 'fa-solid fa-clock', label: '10-Year Renewable Residence', sub: 'Long-term stability with renewals' },
  { icon: 'fa-solid fa-briefcase', label: 'Full Business Ownership', sub: 'No local partner required' },
  { icon: 'fa-solid fa-users', label: 'Family Sponsorship Included', sub: 'Spouse, children, and parents' }
];

const investorStats = [
  { value: '10Y', label: 'Residence' },
  { value: '100%', label: 'Ownership' },
  { value: '∞', label: 'Renewals' },
  { value: 'Family', label: 'Included' }
];

const GoldenVisa = () => {
  // Parallax glare effect for icon hover (desktop only)
  const onIconMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width * 100) + '%';
    const my = ((e.clientY - r.top) / r.height * 100) + '%';
    e.currentTarget.style.setProperty('--mx', mx);
    e.currentTarget.style.setProperty('--my', my);
  };

  return (
    <section className={styles.section} id="goldenvisa" aria-labelledby="goldenvisa-heading">
      <div className={styles.container}>
        {/* Premium Header */}
        <div className={styles.header}>
          <h2 id="goldenvisa-heading" className={styles.mainTitle}>
            <img
              src="/assets/Golden-Visa_Logo_-ICon.webp"
              alt="Golden Visa"
              className={styles.logo}
            />
            Golden Visa
          </h2>
          <h3 className={styles.tagline}>Your Gateway to UAE Residency</h3>
        </div>

        <div className="row g-4" role="region" aria-label="Golden Visa details">
          {/* Investor Visa Panel */}
          <div className="col-lg-6">
            <article className={styles.gvPanel} aria-labelledby="investor-title">
              <div className="text-center mb-4">
                <span className={styles.iconCoin} onMouseMove={onIconMove}>
                  <i className="fa-solid fa-chart-line" />
                </span>
                <h3 id="investor-title" className={styles.sectionTitle}>
                  Investor Golden Visa
                </h3>
                <p className={styles.sectionSubtitle}>
                  Your Business, Your Residency, Your UAE Future
                </p>
              </div>

              <div className="d-grid gap-3 mb-4">
                {investorPoints.map(pt => (
                  <div key={pt.label} className={styles.feature}>
                    <span className={styles.iconCoin} onMouseMove={onIconMove}>
                      <i className={pt.icon} />
                    </span>
                    <div className={styles.featureContent}>
                      <div className={styles.featureTitle}>{pt.label}</div>
                      <div className={styles.featureSub}>{pt.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className={styles.statsGrid}>
                {investorStats.map(s => (
                  <div key={s.label} className={styles.statItem}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>

             
            </article>
          </div>

          {/* Benefits Panel */}
          <div className="col-lg-6">
            <article className={`${styles.gvPanel} ${styles.keyPanel}`} aria-labelledby="benefits-title">
              <div className="text-center mb-4">
                <span className={styles.iconCoin} data-variant="outline" onMouseMove={onIconMove}>
                  <i className="fa-solid fa-gem" />
                </span>
                <h3 id="benefits-title" className={styles.sectionTitle}>
                  Key Benefits
                </h3>
                <p className={styles.sectionSubtitle}>
                  Golden Visa. Golden Opportunity.
                </p>
              </div>

              <div className={styles.benefitsGrid}>
                {benefits.map((b) => (
                  <article className={styles.benefitCard} key={b.id}>
                    <span className={styles.iconCoin} onMouseMove={onIconMove}>
                      <i className={b.icon} />
                    </span>
                    <div className={styles.benefitText}>
                      <h4 className={styles.benefitTitle}>{b.title}</h4>
                      <p className={styles.benefitBody}>{b.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisa;
