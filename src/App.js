import './App.css';
import './style.css';
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
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <ServicesSection />
      
      <TestimonialsSection />
      <AboutSection />
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
    </div>
  );
}

export default App;
