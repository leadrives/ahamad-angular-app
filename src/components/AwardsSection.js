import React from 'react';
import './AwardsSection.css';

const AwardsSection = () => {
  const awards = [
    { 
      name: "DAMAC Excellence Award 2024", 
      subtitle: "Top Performer", 
      image: "/assets/Awards/Damac24.png",
      description: "Outstanding sales achievement"
    },
    { 
      name: "DAMAC Recognition 2025", 
      subtitle: "Premium Partner", 
      image: "/assets/Awards/damac25.png",
      description: "Exceptional client service"
    },
    { 
      name: "EMAAR Achievement", 
      subtitle: "Excellence Award", 
      image: "/assets/Awards/emar.png",
      description: "Distinguished partnership"
    },
    { 
      name: "EMAAR Achievement", 
      subtitle: "Excellence Award", 
      image: "/assets/Awards/emaarq2.png",
      description: "Distinguished partnership"
    },
    { 
      name: "EMAAR Achievement", 
      subtitle: "Excellence Award", 
      image: "/assets/Awards/emaarh2.png",
      description: "Distinguished partnership"
    }
  ];

  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">
        
        {/* Section Header */}
        <div className="awards-header">
          <h2 className="awards-main-title">
            Awards
          </h2>
          <h3 className="awards-subtitle">
            Recognized Excellence in Dubai Real Estate
          </h3>
        </div>

        {/* Awards Showcase with Scrolling Animation */}
        <div className="awards-showcase">
          
          {/* Scrolling Awards Strip */}
          <div className="awards-scroll-container">
            <div className="awards-scroll-track">
              {/* First set of awards */}
              {awards.map((award, index) => (
                <div key={`first-${index}`} className="awards-scroll-card">
                  <div className="awards-image-container">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="awards-image"
                    />
                  </div>
                  <div className="awards-card-accent"></div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {awards.map((award, index) => (
                <div key={`second-${index}`} className="awards-scroll-card">
                  <div className="awards-image-container">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="awards-image"
                    />
                  </div>
                  <div className="awards-card-accent"></div>
                </div>
              ))}
              {/* Third set for extra smooth scrolling */}
              {awards.map((award, index) => (
                <div key={`third-${index}`} className="awards-scroll-card">
                  <div className="awards-image-container">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="awards-image"
                    />
                  </div>
                  <div className="awards-card-accent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="awards-stats">
            <div className="awards-stat-item">
              <h4 className="awards-stat-number">5+</h4>
              <p className="awards-stat-label">Industry Awards</p>
            </div>
            <div className="awards-stat-item">
              <h4 className="awards-stat-number">2025</h4>
              <p className="awards-stat-label">Latest Recognition</p>
            </div>
            <div className="awards-stat-item">
              <h4 className="awards-stat-number">100%</h4>
              <p className="awards-stat-label">Client Satisfaction</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
