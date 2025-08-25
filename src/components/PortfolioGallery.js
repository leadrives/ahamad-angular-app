import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Fetch properties from Firebase
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'properties'),
          where('status', '==', 'active'),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const propertiesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(propertiesData);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to load properties');
        // Fallback to demo data if Firebase fails
        setProperties([
          {
            id: 'demo-1',
            badge: { text: "Luxury Villa", type: "luxury" },
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop",
            alt: "Emirates Hills Villa",
            title: "Emirates Hills Villa",
            description: "Spectacular 6-bedroom villa with private pool, garden, and stunning city views in Dubai's most prestigious community.",
            location: "Emirates Hills",
            details: { bedrooms: 6, bathrooms: 7, area: "8,500 sq ft", parking: 4 },
            price: "AED 8.5M",
            roi: "12% ROI"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 767) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 991) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const maxSlide = Math.max(0, properties.length - slidesPerView);
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }, 5000);
    };

    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slidesPerView, properties.length]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const restartAutoSlide = () => {
    stopAutoSlide();
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const maxSlide = Math.max(0, properties.length - slidesPerView);
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }, 5000);
    }, 3000);
  };

  const maxSlide = Math.max(0, properties.length - slidesPerView);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(Math.max(0, Math.min(slideIndex, maxSlide)));
    restartAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    restartAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
    restartAutoSlide();
  };

  return (
    <section className="portfolio-gallery-section" id="properties">
      <div className="portfolio-gallery-container">
        
        {/* Section Header */}
        <div className="portfolio-gallery-header">
          <h2 className="portfolio-gallery-main-title">
            Premium Listings
          </h2>
          <h3 className="portfolio-gallery-subtitle">
            Handpicked Selection of Dubai's Finest Properties
          </h3>
          <p className="portfolio-gallery-intro">
            Discover exceptional real estate opportunities across Dubai's most prestigious locations, 
            from luxury villas to high-yield investment properties.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="portfolio-loading">
            <div className="loading-spinner">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <p>Loading properties...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="portfolio-error">
            <div className="alert alert-warning">
              <i className="fa-solid fa-exclamation-triangle me-2"></i>
              {error}
            </div>
          </div>
        )}

        {/* Properties Content */}
        {!loading && !error && properties.length > 0 && (
          <>
            {/* Portfolio Navigation */}
            <div className="portfolio-gallery-nav">
              <div className="portfolio-gallery-controls">
                <button 
                  className={`portfolio-gallery-btn portfolio-gallery-prev ${currentSlide === 0 ? 'disabled' : ''}`}
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <span className="portfolio-gallery-counter">
                  {currentSlide + 1} / {Math.ceil(properties.length / slidesPerView)}
                </span>
                <button 
                  className={`portfolio-gallery-btn portfolio-gallery-next ${currentSlide >= maxSlide ? 'disabled' : ''}`}
                  onClick={nextSlide}
                  disabled={currentSlide >= maxSlide}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              
              <button className="portfolio-gallery-view-all">
                <span>View All Properties</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Properties Grid Slider */}
            <div 
              className="portfolio-gallery-slider"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={restartAutoSlide}
            >
              <div 
                ref={trackRef}
                className="portfolio-gallery-track" 
                style={{
                  transform: `translateX(-${(currentSlide * (100 / slidesPerView))}%)`,
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {properties.map((property) => (
                  <div key={property.id} className="portfolio-gallery-slide" style={{ flex: `0 0 ${100 / slidesPerView}%` }}>
                    <div className="portfolio-property-card">
                      
                      {/* Property Image */}
                      <div className="portfolio-property-image-wrapper">
                        <img
                          src={property.image}
                          alt={property.alt}
                          className="portfolio-property-image"
                        />
                        <div className={`portfolio-property-badge portfolio-property-badge-${property.badge.type}`}>
                          {property.badge.text}
                        </div>
                        <div className="portfolio-property-overlay">
                          <button className="portfolio-property-view-btn">
                            <i className="fa-solid fa-eye"></i>
                          </button>
                        </div>
                      </div>

                      {/* Property Content */}
                      <div className="portfolio-property-content">
                        
                        {/* Property Header */}
                        <div className="portfolio-property-header">
                          <h4 className="portfolio-property-title">{property.title}</h4>
                          <p className="portfolio-property-location">
                            <i className="fa-solid fa-location-dot"></i>
                            {property.location}
                          </p>
                        </div>

                        {/* Property Description */}
                        <p className="portfolio-property-description">
                          {property.description}
                        </p>

                        {/* Property Details Grid */}
                        <div className="portfolio-property-details">
                          <div className="portfolio-property-detail">
                            <i className="fa-solid fa-bed"></i>
                            <span>{property.details.bedrooms} {property.details.bedrooms === "Studio" ? "" : "BR"}</span>
                          </div>
                          <div className="portfolio-property-detail">
                            <i className="fa-solid fa-bath"></i>
                            <span>{property.details.bathrooms} BA</span>
                          </div>
                          <div className="portfolio-property-detail">
                            <i className="fa-solid fa-maximize"></i>
                            <span>{property.details.area}</span>
                          </div>
                          <div className="portfolio-property-detail">
                            <i className="fa-solid fa-car"></i>
                            <span>{property.details.parking} Park</span>
                          </div>
                        </div>

                        {/* Property Footer */}
                        <div className="portfolio-property-footer">
                          <div className="portfolio-property-price-section">
                            <h3 className="portfolio-property-price">{property.price}</h3>
                            <span className="portfolio-property-roi">{property.roi}</span>
                          </div>
                          <button className="portfolio-property-contact-btn">
                            Inquire Now
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Indicators */}
            <div className="portfolio-gallery-indicators">
              {Array.from({ length: Math.ceil(properties.length / slidesPerView) }, (_, index) => (
                <button
                  key={index}
                  className={`portfolio-gallery-indicator ${Math.floor(currentSlide / slidesPerView) === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index * slidesPerView)}
                />
              ))}
            </div>
          </>
        )}

        {/* No Properties State */}
        {!loading && !error && properties.length === 0 && (
          <div className="no-properties">
            <div className="text-center">
              <i className="fa-solid fa-building fa-3x text-muted mb-3"></i>
              <h5>No Properties Available</h5>
              <p className="text-muted">Properties will appear here once they are added to the database.</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioGallery;
