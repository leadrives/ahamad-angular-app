import React from 'react';
import TextType from './TextType';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "British Expatriate",
      rating: 5,
      testimonial: "Mr Ahmad helped us secure our dream villa in Emirates Hills within 3 months. His market knowledge and negotiation skills saved us AED 500,000. The Golden Visa process was seamless!",
      property: {
        icon: "fa-solid fa-house-chimney",
        details: "Emirates Hills Villa • AED 8.5M"
      }
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Investment Portfolio Manager",
      rating: 5,
      testimonial: "Outstanding ROI guidance! Mr Ahmad's off-plan recommendations in Downtown Dubai have delivered 22% annual returns. His data-driven approach is unmatched in the market.",
      property: {
        icon: "fa-solid fa-chart-line",
        details: "Downtown Dubai Portfolio • 22% ROI"
      }
    },
    {
      name: "Maria Santos",
      role: "Tech Executive",
      rating: 5,
      testimonial: "From first viewing to keys in hand, Mr Ahmad made our Dubai Marina penthouse purchase effortless. His attention to detail and market insights are exceptional. Highly recommended!",
      property: {
        icon: "fa-solid fa-building",
        details: "Dubai Marina Penthouse • AED 4.2M"
      }
    }
  ];

  const trustStats = [
    {
      number: "150+",
      label: "Properties Sold"
    },
    {
      number: "1.3B+",
      label: "Transaction Value"
    },
    {
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      number: "80+",
      label: "Golden Visas"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials-section full-bleed" id="testimonials">
      <div className="container-fluid px-4">
        
        {/* Top separator (desktop only) */}
        <div className="separator-group d-none d-md-block">
          <div className="separator-line"></div>
          <div className="separator-bar"></div>
        </div>

        {/* Title & Description */}
        <div className="row justify-content-center mb-2">
          <div className="col-lg-8 text-center">
            <div className="section-accent mb-3"></div>
            <h2 className="display-4 fw-bold text-white mb-3">
              <TextType 
                text={["Client Success Stories", "Real Results Delivered", "Dreams Made Reality"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                className="d-inline-block"
              />
            </h2>
            <p className="lead mx-auto" style={{maxWidth: '600px', color: '#6d6d6dff'}}>
              <TextType 
                text={["From luxury to lucrative—Mr. Ahmad steers your Dubai property wins.", "Exceptional service, extraordinary outcomes.", "Your success story starts here."]}
                typingSpeed={50}
                pauseDuration={2000}
                showCursor={false}
                startOnVisible={true}
                initialDelay={2000}
                className="d-inline-block"
              />
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="testimonial-card-modern h-100 p-4 position-relative">
                <div className="testimonial-header mb-4">
                  <div className="mb-3 text-start">
                    <h5 className="text-white mb-1">{testimonial.name}</h5>
                    <span className="testimonial-role text-danger d-block mb-2">{testimonial.role}</span>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <i className="fa-solid fa-quote-left testimonial-quote-icon"></i>
                  <p className="text-secondary mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="testimonial-property">
                    <small className="text-muted">
                      <i className={`${testimonial.property.icon} me-1`}></i>
                      {testimonial.property.details}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators Section */}
        <div className="row mb-4 mt-5">
          <div className="col-12">
            <div className="trust-indicators text-center">
              <div className="row g-4 align-items-center justify-content-center">
                {trustStats.map((stat, index) => (
                  <div key={index} className="col-md-3 col-6">
                    <div className="trust-stat">
                      <h3 className="text-danger fw-bold mb-1">{stat.number}</h3>
                      <p className="text-secondary small mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom separator (desktop only) */}
        <div className="separator-group d-none d-md-block">
          <div className="separator-line"></div>
          <div className="separator-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
