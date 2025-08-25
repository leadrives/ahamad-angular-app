import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const handleContactClick = () => {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
      const modal = new window.bootstrap.Modal(contactModal);
      modal.show();
    }
  };

  return (
    <section className="about-section full-bleed" id="about">
      <div className="about-split">
        {/* Left Content Side */}
        <div className="about-content-side">
          <div className="about-content-wrapper">
            <h2 className="about-main-title">Mohamad Ahmad</h2>
            <p className="about-subtitle">M R One Properties</p>
            
            <div className="about-description">
              <span className="gold-text fw-bold">Mohamad Ahmad</span> is the advisor behind a <span className="gold-text fw-bold">$350,000,000 single-property purchase</span>—proof of access, discretion, and execution at the top tier. He helps investors and families secure Dubai's highest-potential assets, from launch-day off-plan allocations to trophy villas, using data-driven strategy and quiet, professional negotiation. Expect white-glove, end-to-end support—financing guidance, paperwork, and Golden Visas included—plus a network that opens doors others can't.
            </div>

            {/* Key Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">$350M+</span>
                <span className="stat-label">Closed Deals</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-label">Golden Visas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Prestige Properties</span>
              </div>
            </div>
            
            <div className="about-cta">
              <button
                className="about-btn"
                onClick={handleContactClick}
                aria-label="Contact Mohamad Ahmad"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Image Side */}
        <div className="about-image-side">
          <div className="about-image-overlay"></div>
          <img
            src="/assets/aboutimage.jpg"
            alt="Mohamad Ahmad - Dubai Real Estate Expert"
            className="about-hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
