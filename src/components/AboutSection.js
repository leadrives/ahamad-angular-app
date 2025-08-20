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
              Advisor behind the <span className="gold-text fw-bold">largest single purchase in Emaar history</span>. I secure high-yield Dubai assets—launch-day allocations, blue-chip villas, and off-market opportunities—backed by data, discretion, and end-to-end service (Golden Visas included).
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
