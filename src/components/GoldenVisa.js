import React from 'react';
import './GoldenVisa.css';

const GoldenVisa = () => {
  return (
    <section className="goldenvisa-section" id="goldenvisa">
      <div className="goldenvisa-container">
        
        {/* Section Header */}
        <div className="goldenvisa-header">
          <h2 className="goldenvisa-main-title">
            <img 
              src="/assets/Golden-Visa_Logo_-ICon.webp" 
              alt="Golden Visa Logo" 
              className="goldenvisa-logo"
            />
            Golden Visa
          </h2>
          <p className="goldenvisa-subtitle">Your Gateway to UAE Residency</p>
        </div>

        {/* Main Content */}
        <div className="goldenvisa-content">
          
          {/* Investor Visa Section */}
          <div className="goldenvisa-investor-section">
            <div className="investor-card">
              <div className="investor-header">
                <div className="investor-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="investor-title">Investor Golden Visa</h3>
                <p className="investor-description">Your Business, Your Residency, Your UAE Future</p>
              </div>

              <div className="investor-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <span className="feature-text">10-Year Renewable Residence</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <span className="feature-text">Full Business Ownership</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <span className="feature-text">Family Sponsorship Included</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="goldenvisa-benefits-section">
            <div className="benefits-card">
              <div className="benefits-header">
                <div className="benefits-icon">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <h3 className="benefits-title">Key Benefits</h3>
                <p className="benefits-description">Golden Visa. Golden Opportunity.</p>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">10-Year Renewable</h4>
                    <p className="benefit-text">Long-term stability with renewable visa status</p>
                  </div>
                  <div className="benefit-glow"></div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">Full Ownership</h4>
                    <p className="benefit-text">Complete business control without local partners</p>
                  </div>
                  <div className="benefit-glow"></div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">Family Sponsorship</h4>
                    <p className="benefit-text">Include spouse, children, and parents</p>
                  </div>
                  <div className="benefit-glow"></div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fa-solid fa-plane"></i>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">Travel Flexibility</h4>
                    <p className="benefit-text">Exit & re-entry without sponsor approval</p>
                  </div>
                  <div className="benefit-glow"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoldenVisa;
