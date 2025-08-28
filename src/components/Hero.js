// Hero.js
import React from 'react';
import './GlobalReset.css'; // Global reset styles
import './Hero.css';
// import './MobileFix.css';           // Temporarily disabled
// import './HeroStyleFix.css';        // Temporarily disabled

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Video background layer with responsive wrapper */}
      <div className="hero-bg">
        <div className="hero-video-wrapper">
          <iframe 
            className="hero-video"
            src="https://www.youtube.com/embed/-6tjvYXk-PU?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=-6tjvYXk-PU&start=5&enablejsapi=1&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&quality=hd1080"
            title="Dubai Real Estate"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>
      </div>

      {/* Overlay layer */}
      {/* <div className="hero-overlay"></div> */}

      {/* Content layer - no container wrapper */}
      {/* <div className="hero-content">
        <p className="hero-tag">Meet</p>
        
        <h1 className="hero-title">
          <span className="line-1">The Record</span>
          <span className="line-2">Breaking Realtor</span>
        </h1>
        
        <p className="hero-subtitle">
          In real estate, trust is the currency & excellence is the standard, $350,000,000 is the result.
        </p>
        
        <div className="hero-cta">
          <a href="#services" className="hero-btn hero-btn-primary">
            Discover More
          </a>
          
          <a href="#properties" className="hero-btn hero-btn-outline">
            View Listings
          </a>
        </div>
      </div> */} 
    </section>
  );
};export default Hero;
