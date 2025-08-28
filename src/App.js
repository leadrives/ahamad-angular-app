import React, { useState, useEffect } from 'react';
import './App.css';
import './style.css';
import './components/MobileFix.css';
import IntroScreen from './components/IntroScreen';
// import SmoothScroll from './SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
// import AwardsSection from './components/AwardsSection';
// import AwardsStack from './components/AwardsStack';
import AwardsStackNew from './components/AwardsStackNew';
// import ServicesSection from './components/ServicesSection';
import GoldenVisa from './components/GoldenVisa';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioGallery from './components/PortfolioGallery';
import PartnersSection from './components/PartnersSection';
// import InvestmentCalculator from './components/InvestmentCalculator';
import CTASection from './components/CTASection';
// import LatestNews from './components/LatestNews';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import SeedProperties from './components/SeedProperties';
import ShortsDemo from './components/ShortsDemo';
// import AwardsDemo from './components/AwardsDemo';
// import ReactBitsDemo from './components/ReactBitsDemo';

function App() {
  const [showIntro, setShowIntro] = useState(true); // ENABLED FOR PRODUCTION
  const [showMainSite, setShowMainSite] = useState(false); // DISABLED INITIALLY
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showSeedProperties, setShowSeedProperties] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Check URL parameters for admin access and seed properties
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    const seedParam = urlParams.get('seed');
    
    if (adminParam === 'true') {
      setShowAdminLogin(true);
      setShowIntro(false);
      setShowMainSite(false);
      document.title = 'Admin Login - Mohamad Ahmad Real Estate';
    } else if (seedParam === 'properties') {
      setShowSeedProperties(true);
      setShowIntro(false);
      setShowMainSite(false);
      document.title = 'Seed Properties - Mohamad Ahmad Real Estate';
    }
  }, []);

  const handleAdminLogin = (success) => {
    if (success) {
      setIsAdminAuthenticated(true);
      setShowAdminLogin(false);
      setShowAdminPanel(true);
      document.title = 'Admin Dashboard - Mohamad Ahmad Real Estate';
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setShowAdminPanel(false);
    setShowAdminLogin(false);
    // Redirect to home page
    window.location.href = '/';
  };

  // Debug logging
  useEffect(() => {
    console.log('App - showIntro:', showIntro, 'showMainSite:', showMainSite);
  }, [showIntro, showMainSite]);

  const handleIntroComplete = () => {
    console.log('IntroScreen complete - hiding intro, showing main site');
    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowMainSite(true);
    }, 100);
  };

  // Handle intro screen logic
  useEffect(() => {
    // Always show intro on page load/refresh
    console.log('App useEffect - Always showing intro screen');
  }, []);

  return (
    <div className="App">
      {/* Seed Properties Tool */}
      {showSeedProperties && <SeedProperties />}
      
      {/* Admin Login */}
      {showAdminLogin && !isAdminAuthenticated && (
        <AdminLogin onLogin={handleAdminLogin} />
      )}
      
      {/* Admin Panel Access */}
      {showAdminPanel && isAdminAuthenticated && <AdminPanel onLogout={handleAdminLogout} />}
      
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
          {/* SmoothScroll disabled - using native scroll for Framer Motion compatibility */}
          <Navbar />
          <Hero />
          <AboutSection />
          {/* <AwardsSection /> */}
          
          {/* Modern Awards Stack Component with glass cards and 3D tilt */}
          <AwardsStackNew />
          
          {/* <ServicesSection /> */}
          
          <TestimonialsSection />
          
          <PortfolioGallery />
          <PartnersSection />
          {/* <InvestmentCalculator /> */}
          <GoldenVisa />
          
          <CTASection />
          {/* <LatestNews /> */}
          {/* <AwardsDemo /> */}
          <ShortsDemo />
          
          {/* Contact Modal */}
          <ContactModal />
          
          {/* Footer */}
          <Footer />
          {/* SmoothScroll disabled - using native scroll for Framer Motion compatibility */}
        </>
      )}
    </div>
  );
}

export default App;
