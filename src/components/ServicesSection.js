import React from 'react';
import ScrollReveal from './ScrollReveal';
// import CountUp from './CountUp'; // Commented out - moved to TestimonialsSection

const ServicesSection = () => {
  const services = [
    {
      icon: "fa-solid fa-house-user",
      title: "Bespoke Family Home Sourcing",
      description: "I specialize in finding the perfect family home for you, tailored to your unique needs and preferences."
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Strategic Investment Advisory",
      description: "I provide expert guidance on investment opportunities, helping you make informed decisions."
    },
    {
      icon: "fa-solid fa-passport",
      title: "Golden Visa Made Effortless",
      description: "I assist you with every step of the Golden Visa process, ensuring a smooth and efficient experience."
    }
  ];

  // trustStats commented out - moved to TestimonialsSection
  /*
  const trustStats = [
    {
      number: 150,
      suffix: "+",
      label: "Properties Sold"
    },
    {
      number: 900,
      suffix: "M",
      label: "Transaction Value"
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction"
    },
    {
      number: 80,
      suffix: "+",
      label: "Golden Visas"
    }
  ];
  */

  return (
    <section className="services-section full-bleed" id="services">
      <div className="container">
        
        {/* Top separator (desktop only) */}
        <div className="separator-group d-none d-md-block">
          <div className="separator-line"></div>
          <div className="separator-bar"></div>
        </div>

        {/* Services row */}
        <div className="row text-center gy-5">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="service-icon-container d-flex justify-content-center mb-4">
                <i className={`${service.icon} icon-lg gold-icon`}></i>
              </div>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={8}
                containerClassName="mb-2"
                textClassName="service-title-custom"
              >
                {service.title}
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={1}
                blurStrength={5}
                containerClassName="mb-0"
                textClassName="text-secondary mb-0"
              >
                {service.description}
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Trust Indicators Section - HIDDEN (moved to TestimonialsSection) */}
        {/*
        <div className="row mb-4 mt-5">
          <div className="col-12">
            <div className="trust-indicators text-center">
              <div className="row g-4 align-items-center justify-content-center">
                {trustStats.map((stat, index) => (
                  <div key={index} className="col-md-3 col-6">
                    <div className="trust-stat">
                      <h3 className="fw-bold mb-1">
                        <CountUp
                          from={0}
                          to={stat.number}
                          duration={2}
                          delay={index * 0.2}
                          className="gold-text"
                        />
                        <span className="gold-text">{stat.suffix}</span>
                      </h3>
                      <p className="text-secondary small mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default ServicesSection;
