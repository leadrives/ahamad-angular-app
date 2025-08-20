import React, { useState, useEffect, useRef } from 'react';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const properties = [
    {
      id: 1,
      badge: { text: "Luxury Villa", type: "luxury" },
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop",
      alt: "Emirates Hills Villa",
      title: "Emirates Hills Villa",
      description: "Spectacular 6-bedroom villa with private pool, garden, and stunning city views in Dubai's most prestigious community.",
      location: "Emirates Hills",
      details: {
        bedrooms: 6,
        bathrooms: 7,
        area: "8,500 sq ft",
        parking: 4
      },
      price: "AED 8.5M",
      roi: "12% ROI"
    },
    {
      id: 2,
      badge: { text: "Off-Plan", type: "offplan" },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
      alt: "Downtown Dubai Apartment",
      title: "Downtown Dubai Apartment",
      description: "Modern 2-bedroom apartment with Burj Khalifa views, premium finishes, and world-class amenities.",
      location: "Downtown Dubai",
      details: {
        bedrooms: 2,
        bathrooms: 3,
        area: "1,450 sq ft",
        parking: 2
      },
      price: "AED 2.8M",
      roi: "18% ROI"
    },
    {
      id: 3,
      badge: { text: "Ready", type: "ready" },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
      alt: "Dubai Marina Penthouse",
      title: "Dubai Marina Penthouse",
      description: "Exclusive penthouse with panoramic marina views, private terrace, and premium amenities.",
      location: "Dubai Marina",
      details: {
        bedrooms: 4,
        bathrooms: 5,
        area: "3,200 sq ft",
        parking: 3
      },
      price: "AED 4.2M",
      roi: "15% ROI"
    },
    {
      id: 4,
      badge: { text: "Investment", type: "investment" },
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
      alt: "Business Bay Studio",
      title: "Business Bay Studio",
      description: "High-yield studio apartment perfect for investors, with guaranteed rental returns.",
      location: "Business Bay",
      details: {
        bedrooms: "Studio",
        bathrooms: 1,
        area: "550 sq ft",
        parking: 1
      },
      price: "AED 850K",
      roi: "22% ROI"
    },
    {
      id: 5,
      badge: { text: "Luxury Villa", type: "luxury" },
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      alt: "Palm Jumeirah Villa",
      title: "Palm Jumeirah Villa",
      description: "Beachfront villa on the iconic Palm Jumeirah with private beach access and world-class amenities.",
      location: "Palm Jumeirah",
      details: {
        bedrooms: 5,
        bathrooms: 6,
        area: "6,800 sq ft",
        parking: 4
      },
      price: "AED 12.5M",
      roi: "10% ROI"
    },
    {
      id: 6,
      badge: { text: "Off-Plan", type: "offplan" },
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=250&fit=crop",
      alt: "City Walk Townhouse",
      title: "City Walk Townhouse",
      description: "Contemporary 3-bedroom townhouse in the heart of Dubai with retail and dining at your doorstep.",
      location: "City Walk",
      details: {
        bedrooms: 3,
        bathrooms: 4,
        area: "2,100 sq ft",
        parking: 2
      },
      price: "AED 3.5M",
      roi: "16% ROI"
    }
  ];

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

      </div>
    </section>
  );
};

export default PortfolioGallery;
