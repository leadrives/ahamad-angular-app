import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="ctasection-section" id="cta">
      <div className="ctasection-container">
        
        {/* Background Elements */}
        <div className="ctasection-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        {/* Main Content */}
        <div className="ctasection-content">
          <div className="ctasection-header">
            <h2 className="ctasection-main-title">
              Are You Ready?
            </h2>
            <div className="title-accent"></div>
          </div>

          <div className="ctasection-description">
            <p className="ctasection-text">
              Ready to invest in Dubai? Mr Ahmad provides expert guidance for families and investors—helping you secure luxury properties, maximize returns, and navigate the Golden Visa process with confidence.
            </p>
          </div>

          <div className="ctasection-action">
            <button 
              type="button" 
              className="ctasection-btn"
              data-bs-toggle="modal" 
              data-bs-target="#contactModal"
            >
              <span className="btn-text">Contact Us</span>
              <div className="btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </button>
            
            <div className="ctasection-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>Expert Consultation</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <span>Trusted Partnership</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>Premium Service</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
