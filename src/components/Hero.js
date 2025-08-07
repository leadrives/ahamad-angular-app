import React from 'react';
import DotGrid from './DotGrid';

const Hero = () => {
  return (
    <main>
      <section className="hero full-bleed d-flex align-items-center position-relative" id="home" style={{ overflow: 'hidden' }}>
        {/* DotGrid Interactive Background - Hidden for now
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <DotGrid
            dotSize={8}
            gap={25}
            baseColor="#ffffff"
            activeColor="#df0c1e"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            resistance={600}
            returnDuration={1.2}
          />
        </div>
        */}
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-8 text-center text-md-start">
              <header>
                <h1 className="display-1 fw-bold gold-text" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  Invest Smart.<br />
                  Live Grand.
                </h1>
              </header>
              <p className="lead mt-3 text-secondary" style={{ 
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                I help investors and families secure high‑yield Dubai properties—from launch-day off‑plan deals to iconic villas—backed by data, discretion, and end‑to‑end support (yes, including Golden Visas). Let's turn addresses into assets.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg me-sm-3" 
                  aria-label="Get started with Dubai property investment"
                  style={{ 
                    boxShadow: '0 4px 15px rgba(221, 30, 75, 0.4), 0 0 20px rgba(221, 30, 75, 0.2)',
                    border: 'none'
                  }}
                >
                  Get Started
                </button>
                <a 
                  href="#about" 
                  className="btn btn-outline-light btn-lg mt-3 mt-sm-0" 
                  aria-label="Read more about our services"
                  style={{ 
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  View Listings
                </a>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div style={{ position: 'relative', height: '100%' }}>
                <img
                  src="/assets/hero.png"
                  alt="Mohamad Ahmad - Dubai Real Estate Expert and Property Consultant"
                  className="img-fluid hero-img"
                  loading="eager"
                  width="800"
                  height="850"
                  style={{ 
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
                    zIndex: 2,
                    position: 'relative',
                    maxWidth: '120%',
                    height: 'auto',
                    transform: 'scale(1.2)'
                  }}
                />
                {/* Glow effect behind the image */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    background: 'radial-gradient(ellipse, rgba(221, 30, 75, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                    animation: 'pulse 3s ease-in-out infinite alternate'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
