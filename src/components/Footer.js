import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const contactInfo = [
    {
      icon: "fa-solid fa-phone",
      href: "tel:+971562279111",
      text: "+971 56 227 9111"
    },
    {
      icon: "fa-brands fa-whatsapp",
      href: "https://wa.me/971562279111",
      target: "_blank",
      rel: "noopener noreferrer",
      text: "WhatsApp"
    },
    {
      icon: "fa-solid fa-envelope",
      href: "mailto:info@mrahmadrealty.com",
      text: "info@mrahmadrealty.com"
    },
    {
      icon: "fa-solid fa-location-dot",
      text: "Dubai, UAE",
      isStatic: true
    }
  ];

  const services = [
    { href: "#services", text: "Luxury Property Sales" },
    { href: "#calculator", text: "Investment Advisory" },
    { href: "#services", text: "Golden Visa Assistance" },
    { href: "#properties", text: "Off-Plan Properties" },
    { href: "#partners", text: "Developer Relations" }
  ];

  const popularAreas = [
    "Downtown Dubai",
    "Dubai Marina",
    "Emirates Hills",
    "Palm Jumeirah",
    "Business Bay"
  ];

  const footerLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Service" },
    { href: "#home", text: "Back to Top" }
  ];

  return (
    <footer className="footer-section full-bleed pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          
          {/* Branding */}
          <div className="col-md-3">
            <h5 className="fw-bold text-white mb-3">
              Mr Ahmad <span className="text-danger">Realtor</span>
            </h5>
            <p className="text-secondary">
              Dubai's premier real estate expert specializing in luxury properties, off-plan investments, and Golden Visa assistance. Your trusted partner in Dubai property success.
            </p>
            <div className="social-icons mt-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  {...(link.target && { target: link.target })}
                  {...(link.rel && { rel: link.rel })}
                  className={`social-link me-3 ${index === socialLinks.length - 1 ? 'me-0' : ''}`}
                  aria-label={link.ariaLabel}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="text-white fw-semibold mb-3">Get in Touch</h6>
            <ul className="list-unstyled text-secondary mb-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="mb-2">
                  <i className={`${contact.icon} text-danger me-2`}></i>
                  {contact.isStatic ? (
                    <span>{contact.text}</span>
                  ) : (
                    <a
                      href={contact.href}
                      {...(contact.target && { target: contact.target })}
                      {...(contact.rel && { rel: contact.rel })}
                      className="text-secondary text-decoration-none hover-red"
                    >
                      {contact.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h6 className="text-white fw-semibold mb-3">Our Services</h6>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={service.href} 
                    className="text-secondary text-decoration-none hover-red"
                  >
                    <i 
                      className="fa-solid fa-chevron-right text-danger me-2" 
                      style={{ fontSize: '0.75rem' }}
                    ></i>
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Areas */}
          <div className="col-md-3">
            <h6 className="text-white fw-semibold mb-3">Popular Areas</h6>
            <ul className="list-unstyled">
              {popularAreas.map((area, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#properties" 
                    className="text-secondary text-decoration-none hover-red"
                  >
                    <i 
                      className="fa-solid fa-chevron-right text-danger me-2" 
                      style={{ fontSize: '0.75rem' }}
                    ></i>
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 text-secondary small">
            <p className="mb-1">© {currentYear} Mr Ahmad Realtor. All rights reserved.</p>
            <p className="mb-0">Licensed Real Estate Professional - Dubai, UAE</p>
          </div>
          <div className="col-md-6 text-md-end text-center small">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-secondary text-decoration-none hover-red ${
                  index < footerLinks.length - 1 ? 'me-3' : ''
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
