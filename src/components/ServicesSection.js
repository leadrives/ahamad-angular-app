import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: "fa-solid fa-house-user",
      title: "Bespoke Family Home Sourcing",
      description: "Curating exceptional family homes that perfectly align with your lifestyle and investment goals.",
      features: ["Premium Locations", "Exclusive Access", "Family-Focused"]
    },
    {
      icon: "fa-solid fa-chart-line", 
      title: "Strategic Investment Advisory",
      description: "Navigate Dubai's dynamic property market with insights from record-breaking transactions.",
      features: ["Market Intelligence", "ROI Optimization", "Risk Assessment"]
    },
    {
      icon: "fa-solid fa-passport",
      title: "Golden Visa Facilitation",
      description: "Streamlined pathway to UAE residency through strategic property investment guidance.",
      features: ["Documentation Support", "Process Management", "Legal Guidance"]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-main-title">
            Exceptional Service
          </h2>
          <h3 className="services-subtitle">
            Unparalleled Expertise in Dubai Real Estate
          </h3>
          <p className="services-intro">
            From luxury family homes to strategic investments, I deliver personalized solutions 
            that have shaped Dubai's property landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <i className={`${service.icon} service-icon`}></i>
              </div>
              
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="service-feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="service-hover-overlay">
                <div className="service-number">0{index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <p className="services-cta-text">
            Ready to explore Dubai's finest properties?
          </p>
          <button 
            className="services-btn"
            data-bs-toggle="modal" 
            data-bs-target="#contactModal"
          >
            Start Your Journey
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
