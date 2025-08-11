import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  // Add/remove body class when offcanvas opens/closes
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOffcanvasOpen]);

  return (
    <>
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
          
          {/* Mobile Offcanvas Toggle Button */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileOffcanvas"
            onClick={toggleOffcanvas}
            aria-controls="mobileOffcanvas"
            aria-expanded={isOffcanvasOpen}
            aria-label="Toggle navigation menu"
            style={{
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: isOffcanvasOpen ? '#df0c1e' : 'transparent',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto',
              cursor: 'pointer',
              zIndex: '1061',
              position: 'relative'
            }}
          >
            {isOffcanvasOpen ? (
              <i className="fa-solid fa-times" style={{ color: '#000', fontSize: '1.2rem' }}></i>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="desktopNav">
            {/* Main Navigation Links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home" aria-current="page" style={{
                  fontSize: '1rem',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  id="desktopServicesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  style={{
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    color: '#fff'
                  }}
                >
                  Services
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
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  id="desktopPropertiesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  style={{
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    color: '#fff'
                  }}
                >
                  Properties
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
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  id="desktopResourcesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  style={{
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    color: '#fff'
                  }}
                >
                  Resources
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

            {/* Desktop Social Icons and Contact */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#search" aria-label="Search properties" style={{
                  fontSize: '1rem',
                  padding: '8px 16px'
                }}>
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ color: '#fff' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="https://www.instagram.com/mroneproperties/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow us on Instagram"
                  style={{
                    fontSize: '1rem',
                    padding: '8px 16px'
                  }}
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true" style={{ color: '#fff' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="https://wa.me/971562279111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Contact us on WhatsApp"
                  style={{
                    fontSize: '1rem',
                    padding: '8px 16px'
                  }}
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" style={{ color: '#fff' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link border-0 bg-transparent" aria-label="Contact information" style={{
                  fontSize: '1rem',
                  padding: '8px 16px',
                  color: '#fff'
                }}>
                  <i className="fa-solid fa-user" aria-hidden="true" style={{ color: '#fff' }}></i>
                </button>
              </li>
              <li className="nav-item">
                <a 
                  className="btn btn-outline-light ms-3 buy-btn d-inline-flex align-items-center justify-content-center" 
                  href="tel:+971562279111" 
                  aria-label="Call Mohamad Ahmad"
                  style={{
                    border: '2px solid #df0c1e',
                    color: '#df0c1e',
                    backgroundColor: 'transparent',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    fontSize: '0.9rem'
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

      {/* Mobile Offcanvas */}
      <div 
        className={`offcanvas offcanvas-start d-lg-none ${isOffcanvasOpen ? 'show' : ''}`} 
        tabIndex="-1" 
        id="mobileOffcanvas" 
        aria-labelledby="mobileOffcanvasLabel"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          transition: 'all 0.3s ease',
          visibility: isOffcanvasOpen ? 'visible' : 'hidden',
          transform: isOffcanvasOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}
      >
        <div className="offcanvas-body" style={{ padding: '1.5rem' }}>
          {/* Mobile Navigation Links */}
          <ul className="navbar-nav" style={{ gap: '15px' }}>
            <li className="nav-item">
              <a className="nav-link active text-white" href="#home" onClick={closeOffcanvas} style={{
                fontSize: '1.1rem',
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-home me-3" style={{ color: '#fff', width: '20px' }}></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services" onClick={closeOffcanvas} style={{
                fontSize: '1.1rem',
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-concierge-bell me-3" style={{ color: '#fff', width: '20px' }}></i>Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#properties" onClick={closeOffcanvas} style={{
                fontSize: '1.1rem',
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-building me-3" style={{ color: '#fff', width: '20px' }}></i>Properties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#news" onClick={closeOffcanvas} style={{
                fontSize: '1.1rem',
                padding: '12px 0',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>
                <i className="fa-solid fa-chart-line me-3" style={{ color: '#fff', width: '20px' }}></i>Resources
              </a>
            </li>
          </ul>

          {/* Mobile Social Icons */}
          <div style={{
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h6 className="text-white mb-3">Connect With Us</h6>
            <div className="d-flex gap-3 mb-4">
              <a 
                href="https://www.instagram.com/mroneproperties/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/971562279111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            
            {/* Mobile Call Button */}
            <a 
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center" 
              href="tel:+971562279111" 
              style={{
                backgroundColor: '#df0c1e',
                border: '2px solid #df0c1e',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              <i className="fa-solid fa-phone me-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Offcanvas Backdrop */}
      {isOffcanvasOpen && (
        <div 
          className="offcanvas-backdrop fade show d-lg-none" 
          onClick={closeOffcanvas}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040
          }}
        ></div>
      )}
    </>
  );
};

export default Navbar;