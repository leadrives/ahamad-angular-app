import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      
      // Check if navbar is scrolled
      setIsScrolled(scrollY > 20);
      
      // Check if we're still over the hero section
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const navbarHeight = 70; // Approximate navbar height
        setIsOverHero(scrollY < (heroHeight - navbarHeight));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on ESC key for accessibility
  const escHandler = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('keydown', escHandler);
    } else {
      window.removeEventListener('keydown', escHandler);
    }
    return () => window.removeEventListener('keydown', escHandler);
  }, [isMenuOpen, escHandler]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <>
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`} data-transparent={isOverHero && !isScrolled}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <span className="brand-text">Mohamad</span>
          <span className="brand-highlight">Ahmad</span>
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
        </button>
        
  {/* Navigation Items */}
  <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav" role="dialog" aria-modal="true" aria-label="Main navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#services" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#services" onClick={closeMenu}>Our Services</a></li>
                <li><a className="dropdown-item" href="#calculator" onClick={closeMenu}>Investment Calculator</a></li>
                <li><a className="dropdown-item" href="#testimonials" onClick={closeMenu}>Client Reviews</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#properties" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Properties
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#properties" onClick={closeMenu}>Premium Listings</a></li>
                <li><a className="dropdown-item" href="#calculator" onClick={closeMenu}>Calculate Returns</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          
          {/* Call to Action Button */}
          <div className="nav-cta d-none d-lg-block">
            <a href="tel:+971562279111" className="btn btn-primary">
              <i className="fa-solid fa-phone me-2"></i>Call Now
            </a>
          </div>
          
          {/* Social Media Icons - Visible only on desktop */}
          <div className="nav-social d-none d-lg-flex">
            <a href="https://www.instagram.com/mroneproperties/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/971562279111" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          
          {/* Mobile navigation additions - only visible when menu is open */}
          {isMenuOpen && (
            <div className="d-lg-none mobile-cta">
              <a href="tel:+971562279111" className="btn btn-primary">
                <i className="fa-solid fa-phone me-2"></i>Call Now
              </a>
              
              <div className="mobile-social">
                <a href="https://www.instagram.com/mroneproperties/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/971562279111" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
  </nav>
  {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true"/>}
  </>
  );
};

export default Navbar;