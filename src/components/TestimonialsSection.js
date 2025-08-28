import React, { useCallback } from 'react';
import TextType from './TextType';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "British Expatriate",
      location: "Emirates Hills",
      rating: 5,
      testimonial: "Mr Ahmad helped us secure our dream villa in Emirates Hills within 3 months. His market knowledge and negotiation skills saved us AED 500,000. The Golden Visa process was seamless!",
      property: {
        icon: "fa-solid fa-house-chimney",
        details: "Emirates Hills Villa • AED 8.5M",
        savings: "AED 500K Saved"
      }
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Investment Portfolio Manager", 
      location: "Downtown Dubai",
      rating: 5,
      testimonial: "Outstanding ROI guidance! Mr Ahmad's off-plan recommendations in Downtown Dubai have delivered 22% annual returns. His data-driven approach is unmatched in the market.",
      property: {
        icon: "fa-solid fa-chart-line",
        details: "Downtown Portfolio • 22% ROI",
        savings: "22% Annual Returns"
      }
    },
    {
      name: "Maria Santos",
      role: "Tech Executive",
      location: "Dubai Marina", 
      rating: 5,
      testimonial: "From first viewing to keys in hand, Mr Ahmad made our Dubai Marina penthouse purchase effortless. His attention to detail and market insights are exceptional. Highly recommended!",
      property: {
        icon: "fa-solid fa-building",
        details: "Marina Penthouse • AED 4.2M",
        savings: "Seamless Process"
      }
    }
  ];

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateX = ((mouseY - centerY) / rect.height) * -10;
    const rotateY = ((mouseX - centerX) / rect.width) * 10;
    
    card.style.transform = `translateY(-12px) translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < rating ? 'testimonials-star-filled' : 'testimonials-star-empty'}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-main-title">
            Client Success Stories
          </h2>
          <h3 className="testimonials-subtitle">
            <TextType 
              text={[
                "Real Results, Real People, Real Success",
                "Real Results, Real People, Real Success",
                "Real Results, Real People, Real Success"
              ]}
              typingSpeed={75}
              pauseDuration={15000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
              className="d-inline-block"
            />
          </h3>
          
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              
              {/* Card Header */}
              <div className="testimonial-card-header">
                <div className="testimonial-client-info">
                  <div className="testimonial-client-details">
                    <h4 className="testimonial-client-name">{testimonial.name}</h4>
                    <p className="testimonial-client-role">{testimonial.role}</p>
                    <p className="testimonial-client-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Quote Content */}
              <div className="testimonial-quote-section">
                <div className="testimonial-quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="testimonial-quote-text">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Property Details */}
              <div className="testimonial-property-details">
                <div className="testimonial-property-info">
                  <i className={`${testimonial.property.icon} testimonial-property-icon`}></i>
                  <span className="testimonial-property-text">{testimonial.property.details}</span>
                </div>
                <div className="testimonial-property-highlight">
                  {testimonial.property.savings}
                </div>
              </div>

            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default TestimonialsSection;
