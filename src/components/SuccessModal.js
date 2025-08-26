import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ show, onHide, userCountry }) => {
  if (!show) return null;

  return (
    <div className="success-modal-overlay" onClick={onHide}>
      <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="success-modal-body">
          {/* Success Icon */}
          <div className="success-icon-wrapper">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#22C55E" strokeWidth="2" fill="#F0FDF4"/>
                <path d="M9 12l2 2 4-4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Success Image */}
          <div className="success-image-wrapper">
            <img 
              src="assets/contact.jpeg" 
              alt="Thank you" 
              className="success-image"
            />
          </div>
          
          {/* Success Message */}
          <div className="success-text">
            <h3>Thank You for Your Interest!</h3>
            <p className="success-subtitle">
              Your inquiry has been successfully submitted from <strong>{userCountry}</strong>
            </p>
            <p className="success-description">
              I'll personally review your message and get back to you within 24 hours with personalized property recommendations and market insights.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="success-contact">
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+971 56 227 9111</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>ahmad@mr1properties.com</span>
            </div>
          </div>
          
          {/* Close Button */}
          <button className="success-close-btn" onClick={onHide}>
            Continue Exploring
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
