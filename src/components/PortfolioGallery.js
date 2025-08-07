import React, { useState, useEffect, useRef } from 'react';

const PortfolioGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const properties = [
    {
      id: 1,
      badge: { text: "Luxury Villa", className: "bg-danger" },
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop",
      alt: "Emirates Hills Villa",
      title: "Emirates Hills Villa",
      description: "Spectacular 6-bedroom villa with private pool, garden, and stunning city views in Dubai's most prestigious community.",
      details: {
        bedrooms: 6,
        bathrooms: 7,
        area: "8,500 sq ft",
        parking: 4
      },
      price: "AED 8.5M"
    },
    {
      id: 2,
      badge: { text: "Off-Plan", className: "bg-warning text-dark" },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
      alt: "Downtown Dubai Apartment",
      title: "Downtown Dubai Apartment",
      description: "Modern 2-bedroom apartment with Burj Khalifa views, premium finishes, and world-class amenities.",
      details: {
        bedrooms: 2,
        bathrooms: 3,
        area: "1,450 sq ft",
        parking: 2
      },
      price: "AED 2.8M"
    },
    {
      id: 3,
      badge: { text: "Ready", className: "bg-success" },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
      alt: "Dubai Marina Penthouse",
      title: "Dubai Marina Penthouse",
      description: "Exclusive penthouse with panoramic marina views, private terrace, and premium amenities.",
      details: {
        bedrooms: 4,
        bathrooms: 5,
        area: "3,200 sq ft",
        parking: 3
      },
      price: "AED 4.2M"
    },
    {
      id: 4,
      badge: { text: "Investment", className: "bg-info" },
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
      alt: "Business Bay Studio",
      title: "Business Bay Studio",
      description: "High-yield studio apartment perfect for investors, with guaranteed 8% rental returns.",
      details: {
        bedrooms: "Studio",
        bathrooms: 1,
        area: "550 sq ft",
        parking: 1
      },
      price: "AED 850K"
    },
    {
      id: 5,
      badge: { text: "Luxury Villa", className: "bg-danger" },
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      alt: "Palm Jumeirah Villa",
      title: "Palm Jumeirah Villa",
      description: "Beachfront villa on the iconic Palm Jumeirah with private beach access and world-class amenities.",
      details: {
        bedrooms: 5,
        bathrooms: 6,
        area: "6,800 sq ft",
        parking: 4
      },
      price: "AED 12.5M"
    },
    {
      id: 6,
      badge: { text: "Off-Plan", className: "bg-warning text-dark" },
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=250&fit=crop",
      alt: "City Walk Townhouse",
      title: "City Walk Townhouse",
      description: "Contemporary 3-bedroom townhouse in the heart of Dubai with retail and dining at your doorstep.",
      details: {
        bedrooms: 3,
        bathrooms: 4,
        area: "2,100 sq ft",
        parking: 2
      },
      price: "AED 3.5M"
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

  const totalDots = Math.ceil(properties.length / slidesPerView);

  return (
    <section className="portfolio-gallery full-bleed py-5" id="properties">
      <div className="container">
        {/* Header row with title/subtitle + View All button */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8 text-center text-md-start">
            <h2 className="display-5 fw-bold text-white mb-2">
              Premium Property Listings
            </h2>
            <p className="text-secondary mb-0">
              Discover our handpicked selection of luxury Dubai properties.
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
            <button className="btn btn-outline-light" onClick={() => console.log('View All clicked')}>
              View All
            </button>
          </div>
        </div>

        {/* Property Slider */}
        <div 
          className="property-slider-container position-relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={restartAutoSlide}
        >
          {/* Slider Navigation */}
          <div className="slider-nav d-flex justify-content-between align-items-center mb-3">
            <div className="slider-controls">
              <button 
                className="slider-btn slider-prev" 
                type="button" 
                aria-label="Previous properties"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button 
                className="slider-btn slider-next" 
                type="button" 
                aria-label="Next properties"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlide}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div className="slider-dots">
              {Array.from({ length: totalDots }, (_, index) => (
                <span
                  key={index}
                  className={`slider-dot ${Math.floor(currentSlide / slidesPerView) === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index * slidesPerView)}
                  style={{ cursor: 'pointer' }}
                ></span>
              ))}
            </div>
          </div>

          {/* Property Cards Slider */}
          <div className="property-slider overflow-hidden">
            <div 
              ref={trackRef}
              className="property-track d-flex transition-transform" 
              style={{
                transform: `translateX(-${(currentSlide * (100 / slidesPerView))}%)`,
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {properties.map((property) => (
                <div key={property.id} className="property-slide" style={{ flex: `0 0 ${100 / slidesPerView}%` }}>
                  <div className="portfolio-card d-flex flex-column h-100">
                    <div className="property-badge">
                      <span className={`badge ${property.badge.className}`}>
                        {property.badge.text}
                      </span>
                    </div>
                    <img
                      src={property.image}
                      alt={property.alt}
                      className="img-fluid property-image mb-3"
                    />
                    <div className="property-info flex-grow-1">
                      <h5 className="fw-bold text-white mb-2">{property.title}</h5>
                      <p className="text-secondary mb-3">
                        {property.description}
                      </p>
                      <div className="property-details mb-3">
                        <div className="d-flex justify-content-between text-secondary small mb-1">
                          <span>
                            <i className="fa-solid fa-bed me-1"></i>
                            {property.details.bedrooms} {property.details.bedrooms === "Studio" ? "" : "Bedrooms"}
                          </span>
                          <span>
                            <i className="fa-solid fa-bath me-1"></i>
                            {property.details.bathrooms} Bathroom{property.details.bathrooms > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between text-secondary small">
                          <span>
                            <i className="fa-solid fa-maximize me-1"></i>
                            {property.details.area}
                          </span>
                          <span>
                            <i className="fa-solid fa-car me-1"></i>
                            {property.details.parking} Parking
                          </span>
                        </div>
                      </div>
                      <div className="property-price">
                        <h4 className="text-danger fw-bold mb-0">{property.price}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom separator (desktop only) */}
        <div className="separator-group d-none d-md-block">
          <div className="separator-line"></div>
          <div className="separator-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
