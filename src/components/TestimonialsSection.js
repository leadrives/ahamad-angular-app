import React from 'react';
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
          <p className="testimonials-intro">
            Discover how strategic guidance and market expertise have transformed 
            property dreams into profitable realities across Dubai's premium districts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              
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
