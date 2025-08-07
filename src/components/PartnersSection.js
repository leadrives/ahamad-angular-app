import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "EMAAR", subtitle: "Properties", className: "text-danger" },
    { name: "DUBAI", subtitle: "Properties", className: "text-danger" },
    { name: "NAKHEEL", subtitle: "Developer", className: "text-secondary" },
    { name: "MERAAS", subtitle: "Holdings", className: "text-secondary" },
    { name: "DAMAC", subtitle: "Properties", className: "text-danger" },
    { name: "ALDAR", subtitle: "Properties", className: "text-secondary" },
    { name: "SOBHA", subtitle: "Realty", className: "text-danger" },
    { name: "OMNIYAT", subtitle: "Developer", className: "text-secondary" },
    { name: "SELECT", subtitle: "Group", className: "text-danger" },
    { name: "ELLINGTON", subtitle: "Properties", className: "text-secondary" }
  ];

  return (
    <section className="partners-section full-bleed py-5" id="partners">
      <div className="container">
        
        {/* Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h2 className="display-5 fw-bold text-white mb-0">
              Partners With
            </h2>
          </div>
        </div>

        {/* Scrolling Partners */}
        <div className="partners-slider-container">
          <div className="partners-track">
            {/* First set of brands */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="partner-card">
                <h4 className="fw-bold text-white mb-0">{partner.name}</h4>
                <small className={partner.className}>{partner.subtitle}</small>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="partner-card">
                <h4 className="fw-bold text-white mb-0">{partner.name}</h4>
                <small className={partner.className}>{partner.subtitle}</small>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
