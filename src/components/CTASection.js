import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container-fluid text-center px-4">
        <h2 className="display-1 fw-bold cta-title gold-text">
          Are You Ready?
        </h2>
        <p className="lead cta-desc">
          Ready to invest in Dubai? Mr Ahmad provides expert guidance for families and investors—helping you secure luxury properties, maximize returns, and navigate the Golden Visa process with confidence.
        </p>
        <button 
          type="button" 
          className="btn btn-primary btn-lg cta-button mt-4" 
          data-bs-toggle="modal" 
          data-bs-target="#contactModal"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTASection;
