import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';
import './components/MobileFix.css';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GoldenVisa from './components/GoldenVisa';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioGallery from './components/PortfolioGallery';
import PartnersSection from './components/PartnersSection';
import InvestmentCalculator from './components/InvestmentCalculator';
import CTASection from './components/CTASection';
import LatestNews from './components/LatestNews';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
// import ReactBitsDemo from './components/ReactBitsDemo';

function App() {
  const [showIntro, setShowIntro] = useState(false); // TEMPORARILY DISABLED FOR TESTING
  const [showMainSite, setShowMainSite] = useState(true); // TEMPORARILY ENABLED FOR TESTING

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowMainSite(true);
    }, 100);
  };

  // Skip intro on subsequent visits (optional) - TEMPORARILY DISABLED FOR TESTING
  useEffect(() => {
    // TEMP: Always show intro for testing
    // const hasVisited = sessionStorage.getItem('hasVisited');
    // if (hasVisited) {
    //   setShowIntro(false);
    //   setShowMainSite(true);
    // } else {
    //   sessionStorage.setItem('hasVisited', 'true');
    // }
    
    // Clear any existing session storage to ensure intro shows
    sessionStorage.removeItem('hasVisited');
  }, []);

  return (
    <div className="App">
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      
      {/* Preload Hero component (with video) while intro is showing */}
      {showIntro && (
        <div style={{ 
          position: 'absolute', 
          top: '-9999px', 
          left: '-9999px', 
          visibility: 'hidden',
          pointerEvents: 'none'
        }}>
          <Hero />
        </div>
      )}
      
      {showMainSite && (
        <>
          <Navbar />
          <Hero />
          <AboutSection />
          <ServicesSection />
          
          <TestimonialsSection />
          
          <PortfolioGallery />
          <PartnersSection />
          <InvestmentCalculator />
          <GoldenVisa />
          <CTASection />
          <LatestNews />
          
          {/* Contact Modal */}
          <ContactModal />
          
          {/* Footer */}
          <Footer />
          {/* <ReactBitsDemo /> */}
        </>
      )}
    </div>
  );
}

export default App;
