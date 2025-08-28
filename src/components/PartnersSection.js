import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  const partners = [
    { 
      name: "EMAAR", 
      subtitle: "Properties", 
      type: "developer",
      description: "Leading luxury developer"
    },
    { 
      name: "DUBAI PROPERTIES", 
      subtitle: "Group", 
      type: "developer",
      description: "Government-backed developer"
    },
    { 
      name: "NAKHEEL", 
      subtitle: "Developer", 
      type: "developer",
      description: "Iconic Dubai projects"
    },
    { 
      name: "MERAAS", 
      subtitle: "Holdings", 
      type: "developer",
      description: "Premium lifestyle destinations"
    },
    { 
      name: "DAMAC", 
      subtitle: "Properties", 
      type: "developer",
      description: "Luxury living experiences"
    },
    { 
      name: "ALDAR", 
      subtitle: "Properties", 
      type: "developer",
      description: "Abu Dhabi's leading developer"
    },
    { 
      name: "SOBHA", 
      subtitle: "Realty", 
      type: "developer",
      description: "Crafting premium spaces"
    },
    { 
      name: "OMNIYAT", 
      subtitle: "Developer", 
      type: "developer",
      description: "Visionary luxury developments"
    },
    { 
      name: "SELECT GROUP", 
      subtitle: "Properties", 
      type: "developer",
      description: "Boutique luxury developments"
    },
    { 
      name: "ELLINGTON", 
      subtitle: "Properties", 
      type: "developer",
      description: "Contemporary design focus"
    }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        
        {/* Section Header */}
        <div className="partners-header">
          <h2 className="partners-main-title">
            Trusted Partners
          </h2>
        </div>

        {/* Partners Showcase with Scrolling Animation */}
        <div className="partners-showcase">
          
          {/* Scrolling Partners Strip */}
          <div className="partners-scroll-container">
            <div className="partners-scroll-track">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="partners-scroll-card">
                  <div className="partners-card-content">
                    <h4 className="partners-brand-name">{partner.name}</h4>
                    <span className="partners-brand-type">{partner.subtitle}</span>
                  </div>
                  <div className="partners-card-accent"></div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="partners-scroll-card">
                  <div className="partners-card-content">
                    <h4 className="partners-brand-name">{partner.name}</h4>
                    <span className="partners-brand-type">{partner.subtitle}</span>
                  </div>
                  <div className="partners-card-accent"></div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
