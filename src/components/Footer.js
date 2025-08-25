import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const socialLinks = [
    {
      href: "https://www.instagram.com/mroneproperties/",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Follow us on Instagram",
      icon: "fa-brands fa-instagram"
    },
    {
      href: "https://wa.me/971562279111",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Contact us on WhatsApp",
      icon: "fa-brands fa-whatsapp"
    },
    {
      href: "tel:+971562279111",
      ariaLabel: "Call us",
      icon: "fa-solid fa-phone"
    },
    {
      href: "mailto:info@mrahmadrealty.com",
      ariaLabel: "Email us",
      icon: "fa-solid fa-envelope"
    }
  ];

  const services = [
    { href: "#services", text: "Luxury Property Sales" },
    { href: "#calculator", text: "Investment Advisory" },
    { href: "#services", text: "Golden Visa Assistance" },
    { href: "#properties", text: "Off-Plan Properties" },
    { href: "#partners", text: "Developer Relations" }
  ];

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-main">
          
          {/* Brand & Contact Combined Section */}
          <div className="footer-brand-section">
            <div className="brand-info">
              <h3 className="footer-brand-title">
                <span className="footer-brand-text">Mohamad</span>
                <span className="footer-brand-highlight">Ahmad</span>
              </h3>
              <p className="brand-description">
                Dubai's premier real estate expert specializing in luxury properties and Golden Visa assistance.
              </p>
            </div>
            
            {/* Contact info only */}
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+971562279111">+971 56 227 9111</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@mroneproperties.com">info@mroneproperties.com</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Compact Services Section */}
          <div className="footer-services-section">
            <h4 className="section-title">Services</h4>
            <div className="footer-services-grid">
              {services.map((service, index) => (
                <a key={index} href={service.href} className="service-link">
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>{service.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect Us Section - Same level as Services */}
          <div className="footer-connect-section">
            <h4 className="section-title">Connect Us</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  {...(link.target && { target: link.target })}
                  {...(link.rel && { rel: link.rel })}
                  className="social-link"
                  aria-label={link.ariaLabel}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Compact RERA Section */}
          <div className="footer-rera-section">
            <div className="rera-badge">
              <div className="rera-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div className="rera-info">
                <span className="rera-label">RERA Licensed</span>
                <span className="rera-number">#68444</span>
              </div>
            </div>
            <div className="qr-container">
              <img 
                src="/assets/reraqrcode.png" 
                alt="RERA Verification QR Code" 
                className="qr-image"
              />
              <div className="qr-overlay">
                <i className="fa-solid fa-qrcode"></i>
              </div>
            </div>
            <p className="rera-description">Scan for verification</p>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright-info">
              <p>© {currentYear} M R One Properties LLC. All rights reserved.</p>
              <p>Licensed Real Estate Professional - Dubai, UAE</p>
            </div>
            <div className="footer-links">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
              <a href="#home" className="footer-link">Back to Top</a>
            </div>
          </div>
          
          {/* Disclaimer Toggle */}
          <div className="disclaimer-section">
            <button 
              className="disclaimer-toggle"
              onClick={toggleDisclaimer}
              aria-expanded={isDisclaimerOpen}
            >
              <span>Website Disclaimer</span>
              <i className={`fa-solid ${isDisclaimerOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
            
            <div className={`disclaimer-content ${isDisclaimerOpen ? 'open' : ''}`}>
              <p>
                This website is the official property of M R One Properties LLC. All content, including text, images, branding, and any other material, is owned or licensed by M R One Properties LLC. Unauthorized use, reproduction, or distribution of any part of this website is strictly prohibited. While we strive to ensure the accuracy of all information provided, M R One Properties LLC makes no warranties or guarantees regarding completeness, accuracy, or timeliness. Visitors are advised to verify details independently before making any decisions based on the content of this site.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
