import React from 'react';

const AboutSection = () => {
  const handleContactClick = () => {
    // Trigger the contact modal using Bootstrap's JavaScript API
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
      const modal = new window.bootstrap.Modal(contactModal);
      modal.show();
    }
  };

  return (
    <section className="about-section full-bleed py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Profile Photo Column */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="profile-photo-container" style={{
              position: 'relative',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}>
              {/* Gold accent border */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '3px',
                background: 'linear-gradient(90deg, #df0c1e, #ff2d92, #b91c42, #df0c1e)',
                borderRadius: '20px 20px 0 0'
              }}></div>
              
              {/* Photo Display */}
              <div className="photo-wrapper" style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(223, 12, 30, 0.1), rgba(255, 45, 146, 0.05))',
                border: '2px solid rgba(223, 12, 30, 0.3)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                maxWidth: window.innerWidth <= 768 ? '400px' : 'none',
                margin: window.innerWidth <= 768 ? '0 auto' : 'unset'
              }}>
                <img
                  src="/assets/profile.png"
                  alt="Mohamad Ahmad - Dubai Real Estate Expert"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '14px',
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    filter: 'brightness(1.1) contrast(1.05)'
                  }}
                  className="profile-photo"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.filter = 'brightness(1.15) contrast(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(1.1) contrast(1.05)';
                  }}
                />
                
                {/* Professional Info Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h4 className="mb-1" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>
                    Mohamad Ahmad
                  </h4>
                  <p className="mb-2" style={{
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
                  }}>
                    Dubai Real Estate Expert
                  </p>
                  <button
                    className="btn btn-sm"
                    onClick={handleContactClick}
                    style={{
                      background: 'linear-gradient(135deg, #df0c1e, #b91c42)',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: '600',
                      padding: '8px 20px',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 15px rgba(223, 12, 30, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(223, 12, 30, 0.6)';
                      e.target.style.background = 'linear-gradient(135deg, #b91c42, #8a1538)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(223, 12, 30, 0.4)';
                      e.target.style.background = 'linear-gradient(135deg, #df0c1e, #b91c42)';
                    }}
                  >
                    Contact Me
                  </button>
                </div>
                
                {/* Subtle red accent glow */}
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: 'linear-gradient(45deg, #df0c1e, #ff2d92, #b91c42, #df0c1e)',
                  borderRadius: '16px',
                  zIndex: '-1',
                  opacity: '0.6',
                  filter: 'blur(8px)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Description Column */}
          <div className="col-lg-7">
            <div className="about-content">
              {/* Main Description */}
              <div className="about-description">
                <p className="lead text-white mb-4" style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  With over <span className="gold-text fw-bold">AED 900 million in closed deals</span> and more than <span className="gold-text fw-bold">150 prestige properties sold</span>, Mohamad Ahmad has emerged as one of Dubai's most results‑driven real‑estate advisors. Celebrated for a <span className="gold-text fw-bold">98 percent client‑satisfaction record</span>, Mohamad blends analytical market insight with an unwavering client‑first philosophy, guiding investors, entrepreneurs, and family buyers through every step of the transaction.
                </p>
                
                <p className="text-secondary mb-4" style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7'
                }}>
                  From Downtown to Palm Jumeirah and Dubai Hills, Mohamad engineers data‑backed strategies that maximise ROI and unlock long‑term wealth. His track record includes facilitating <span className="text-white fw-bold">80+ UAE Golden Visas</span> and leveraging deep relationships to secure off‑market opportunities that others simply don't see. For clients who refuse to compromise on expertise, transparency, and measurable results, <span className="gold-text fw-bold">Mohamad Ahmad is the trusted name to know in Dubai real estate</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
