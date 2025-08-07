import React from 'react';
import ShapeBlur from './ShapeBlur';

const GoldenVisa = () => {
  return (
    <section id="goldenVisa" className="golden-visa-section full-bleed py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-header mb-4">
              <h2 className="section-heading mb-2 text-white display-4 fw-bold">
                <i className="fa-solid fa-crown me-2"></i>
                Unlock the Elite Golden Visa
              </h2>
              <p className="section-subheading mb-2 lead text-secondary">
                Your Complete One-Stop Solution for Dubai Real Estate & UAE Residency
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="investor-visa-container">
              <div className="row align-items-stretch">
                
                {/* Investor Golden Visa Card */}
                <div className="col-lg-5 mb-3 mb-lg-0 d-flex">
                  <div className="investor-visa-card h-100 p-4 rounded-3 position-relative" style={{
                    background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden'
                  }}>
                    {/* ShapeBlur Animation Background */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ 
                        zIndex: 1,
                        opacity: 0.3,
                        mixBlendMode: 'screen'
                      }}
                    >
                      <ShapeBlur
                        variation={0}
                        pixelRatioProp={window.devicePixelRatio || 1}
                        shapeSize={2.5}
                        roundness={0.15}
                        borderSize={0.2}
                        circleSize={1.0}
                        circleEdge={1.5}
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="position-relative" style={{ zIndex: 2 }}>
                      <div className="visa-card-header text-center mb-4">
                        <div className="visa-icon-large mb-3">
                          <i className="fa-solid fa-chart-line gold-icon" style={{ fontSize: '3rem' }}></i>
                        </div>
                        <h4 className="visa-card-title text-white fw-bold mb-2">Investor Golden Visa</h4>
                        <p className="visa-card-description text-secondary">
                          Your Business, Your Residency, Your UAE Future.
                        </p>
                      </div>
                      <div className="visa-card-features">
                        <div className="feature-item d-flex align-items-center mb-3">
                          <i className="fa-solid fa-clock gold-icon me-3"></i>
                          <span className="text-white">10-Year Renewable Residence</span>
                        </div>
                        <div className="feature-item d-flex align-items-center mb-3">
                          <i className="fa-solid fa-briefcase gold-icon me-3"></i>
                          <span className="text-white">Full Business Ownership</span>
                        </div>
                        <div className="feature-item d-flex align-items-center mb-3">
                          <i className="fa-solid fa-users gold-icon me-3"></i>
                          <span className="text-white">Family Sponsorship Included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Benefits Card */}
                <div className="col-lg-7 d-flex">
                  <div className="benefits-card h-100 p-4 rounded-3 position-relative" style={{
                    background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden'
                  }}>
                    {/* ShapeBlur Animation Background */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ 
                        zIndex: 1,
                        opacity: 0.25,
                        mixBlendMode: 'screen'
                      }}
                    >
                      <ShapeBlur
                        variation={1}
                        pixelRatioProp={window.devicePixelRatio || 1}
                        shapeSize={2.2}
                        roundness={0.25}
                        borderSize={0.12}
                        circleSize={1.0}
                        circleEdge={1.3}
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="position-relative" style={{ zIndex: 2 }}>
                      <div className="benefits-card-header text-center mb-4">
                        <div className="benefits-icon-large mb-3">
                          <i className="fa-solid fa-star gold-icon" style={{ fontSize: '3rem' }}></i>
                        </div>
                        <h4 className="benefits-card-title text-white fw-bold mb-2">Key Benefits</h4>
                        <p className="benefits-card-description text-secondary">
                          Golden Visa. Golden Opportunity.
                        </p>
                      </div>
                      <div className="benefits-grid-compact">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="benefit-card d-flex align-items-start p-3 rounded-2" style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              <div className="benefit-icon me-3">
                                <i className="fa-solid fa-calendar-check gold-icon"></i>
                              </div>
                              <div className="benefit-content">
                                <h5 className="benefit-title text-white mb-1 fw-bold">10-Year Renewable Residence</h5>
                                <p className="benefit-description text-secondary small mb-0">Long-term stability with renewable visa status</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="benefit-card d-flex align-items-start p-3 rounded-2" style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              <div className="benefit-icon me-3">
                                <i className="fa-solid fa-building gold-icon"></i>
                              </div>
                              <div className="benefit-content">
                                <h5 className="benefit-title text-white mb-1 fw-bold">Full Business Ownership</h5>
                                <p className="benefit-description text-secondary small mb-0">Complete business control without local partners</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="benefit-card d-flex align-items-start p-3 rounded-2" style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              <div className="benefit-icon me-3">
                                <i className="fa-solid fa-users gold-icon"></i>
                              </div>
                              <div className="benefit-content">
                                <h5 className="benefit-title text-white mb-1 fw-bold">Family Sponsorship</h5>
                                <p className="benefit-description text-secondary small mb-0">Include spouse, children, and parents</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="benefit-card d-flex align-items-start p-3 rounded-2" style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                              <div className="benefit-icon me-3">
                                <i className="fa-solid fa-plane gold-icon"></i>
                              </div>
                              <div className="benefit-content">
                                <h5 className="benefit-title text-white mb-1 fw-bold">Travel Flexibility</h5>
                                <p className="benefit-description text-secondary small mb-0">Exit & re-entry without sponsor approval</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
