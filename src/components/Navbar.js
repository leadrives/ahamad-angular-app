import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" role="navigation" aria-label="Main navigation" style={{
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="/" aria-label="Mohamad Ahmad Real Estate Home" style={{
          color: '#fff'
        }}>
          Mohamad <span style={{ color: '#df0c1e' }}>Ahmad</span>
        </a>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
          aria-controls="mainNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          style={{
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: isMenuOpen ? '#df0c1e' : 'transparent',
            transition: 'all 0.3s ease'
          }}
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-times" style={{ color: '#000', fontSize: '1.2rem' }}></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="mainNav" style={{
          backgroundColor: isMenuOpen ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          position: isMenuOpen ? 'fixed' : 'static',
          top: isMenuOpen ? '0' : 'auto',
          left: isMenuOpen ? '0' : 'auto',
          right: isMenuOpen ? '0' : 'auto',
          bottom: isMenuOpen ? '0' : 'auto',
          zIndex: isMenuOpen ? '9999' : 'auto',
          padding: isMenuOpen ? '20px' : '0',
          overflowY: isMenuOpen ? 'auto' : 'visible'
        }}>
          {/* Close button for mobile menu */}
          {isMenuOpen && (
            <button
              className="btn btn-link position-absolute d-block d-lg-none"
              onClick={toggleMenu}
              aria-label="Close menu"
              style={{
                top: '20px',
                right: '20px',
                color: '#fff',
                fontSize: '1.5rem',
                padding: '0',
                border: 'none',
                background: 'none'
              }}
            >
              <i className="fa-solid fa-times"></i>
            </button>
          )}
          
          {/* Mobile Brand in Full Screen Menu */}
          <div className="navbar-brand-mobile d-block d-lg-none mb-4" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            paddingBottom: '15px',
            marginBottom: '20px'
          }}>
            Mohamad <span style={{ color: '#df0c1e' }}>Ahmad</span>
          </div>
          
          {/* Main Navigation Links */}
          <ul className="navbar-nav flex-column flex-lg-row mx-auto" style={{
            gap: isMenuOpen ? '15px' : '0'
          }}>
            <li className="nav-item">
              <a className="nav-link active" href="#home" aria-current="page" style={{
                fontSize: isMenuOpen ? '1.1rem' : '1rem',
                padding: isMenuOpen ? '12px 0' : '8px 16px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-home me-2 d-lg-none" style={{ color: '#fff', width: '20px' }}></i>Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent w-100 text-start"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                style={{
                  fontSize: isMenuOpen ? '1.1rem' : '1rem',
                  padding: isMenuOpen ? '12px 0' : '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  color: '#fff'
                }}
              >
                <i className="fa-solid fa-concierge-bell me-2 d-lg-none" style={{ color: '#fff', width: '20px' }}></i>Services
              </button>
              <ul className="dropdown-menu" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px'
              }}>
                <li><a className="dropdown-item" href="#services" style={{ color: '#fff', padding: '10px 15px' }}>Our Services</a></li>
                <li><a className="dropdown-item" href="#calculator" style={{ color: '#fff', padding: '10px 15px' }}>Investment Calculator</a></li>
                <li><a className="dropdown-item" href="#testimonials" style={{ color: '#fff', padding: '10px 15px' }}>Client Reviews</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent w-100 text-start"
                id="propertiesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                style={{
                  fontSize: isMenuOpen ? '1.1rem' : '1rem',
                  padding: isMenuOpen ? '12px 0' : '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  color: '#fff'
                }}
              >
                <i className="fa-solid fa-building me-2 d-lg-none" style={{ color: '#fff', width: '20px' }}></i>Properties
              </button>
              <ul className="dropdown-menu" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px'
              }}>
                <li><a className="dropdown-item" href="#properties" style={{ color: '#fff', padding: '10px 15px' }}>Premium Listings</a></li>
                <li><a className="dropdown-item" href="#calculator" style={{ color: '#fff', padding: '10px 15px' }}>Calculate Returns</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent w-100 text-start"
                id="resourcesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                style={{
                  fontSize: isMenuOpen ? '1.1rem' : '1rem',
                  padding: isMenuOpen ? '12px 0' : '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  color: '#fff'
                }}
              >
                <i className="fa-solid fa-chart-line me-2 d-lg-none" style={{ color: '#fff', width: '20px' }}></i>Resources
              </button>
              <ul className="dropdown-menu" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px'
              }}>
                <li><a className="dropdown-item" href="#news" style={{ color: '#fff', padding: '10px 15px' }}>Market Insights</a></li>
                <li><a className="dropdown-item" href="#testimonials" style={{ color: '#fff', padding: '10px 15px' }}>Success Stories</a></li>
              </ul>
            </li>
          </ul>

          {/* Social Icons and Contact */}
          <ul className="navbar-nav align-items-center flex-column flex-lg-row" style={{
            gap: isMenuOpen ? '15px' : '0',
            marginTop: isMenuOpen ? '30px' : '0',
            paddingTop: isMenuOpen ? '20px' : '0',
            borderTop: isMenuOpen ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
          }}>
            <li className="nav-item">
              <a className="nav-link" href="#search" aria-label="Search properties" style={{
                fontSize: isMenuOpen ? '1.1rem' : '1rem',
                padding: isMenuOpen ? '12px 0' : '8px 16px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ color: '#fff', width: '20px' }}></i>
                <span className="d-lg-none ms-2">Search</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/mroneproperties/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" style={{
                fontSize: isMenuOpen ? '1.1rem' : '1rem',
                padding: isMenuOpen ? '12px 0' : '8px 16px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fa-brands fa-instagram" aria-hidden="true" style={{ color: '#fff', width: '20px' }}></i>
                <span className="d-lg-none ms-2">Instagram</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wa.me/971562279111" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" style={{
                fontSize: isMenuOpen ? '1.1rem' : '1rem',
                padding: isMenuOpen ? '12px 0' : '8px 16px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fa-brands fa-whatsapp" aria-hidden="true" style={{ color: '#fff', width: '20px' }}></i>
                <span className="d-lg-none ms-2">WhatsApp</span>
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link border-0 bg-transparent" aria-label="Contact information" style={{
                fontSize: isMenuOpen ? '1.1rem' : '1rem',
                padding: isMenuOpen ? '12px 0' : '8px 16px',
                display: 'flex',
                alignItems: 'center',
                color: '#fff'
              }}>
                <i className="fa-solid fa-user" aria-hidden="true" style={{ color: '#fff', width: '20px' }}></i>
                <span className="d-lg-none ms-2">Contact</span>
              </button>
            </li>
            <li className="nav-item" style={{ marginTop: isMenuOpen ? '20px' : '0' }}>
              <a 
                className="btn btn-outline-light ms-lg-3 buy-btn d-inline-flex align-items-center justify-content-center" 
                href="tel:+971562279111" 
                aria-label="Call Mohamad Ahmad"
                onClick={(e) => {
                  // For better mobile compatibility
                  if (/Mobi|Android/i.test(navigator.userAgent)) {
                    window.location.href = "tel:+971562279111";
                  }
                }}
                style={{
                  border: '2px solid #df0c1e',
                  color: '#df0c1e',
                  backgroundColor: 'transparent',
                  padding: isMenuOpen ? '12px 24px' : '8px 16px',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  fontSize: isMenuOpen ? '1.1rem' : '0.9rem',
                  width: isMenuOpen ? '100%' : 'auto',
                  maxWidth: isMenuOpen ? '250px' : 'none',
                  margin: isMenuOpen ? '0 auto' : '0 0 0 12px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#df0c1e';
                  e.target.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#df0c1e';
                }}
              >
                <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
