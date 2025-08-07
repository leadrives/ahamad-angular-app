import React, { useState, useEffect, useCallback } from 'react';

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const newsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      alt: "Dubai Real Estate Market Analysis 2025",
      title: "Dubai Real Estate Market Outlook 2025",
      category: "Market Analysis",
      timeAgo: "2 weeks ago",
      excerpt: "Comprehensive analysis of Dubai's real estate market trends, investment opportunities, and future projections for 2025.",
      fullContent: `Dubai's real estate market continues to demonstrate remarkable resilience and growth potential as we enter 2025. The emirate's strategic positioning as a global business hub, combined with progressive government policies and world-class infrastructure, has created an investment landscape that attracts both regional and international buyers.

**Market Performance Highlights:**
The Dubai real estate market has shown consistent growth over the past year, with average property prices increasing by 12% across key residential areas. Prime locations such as Downtown Dubai, Dubai Marina, and Palm Jumeirah have experienced even stronger appreciation rates, with some areas seeing increases of up to 18%.

**Key Investment Trends:**
- Luxury villa segment outperforming apartments with 15% price appreciation
- Growing demand for sustainable and smart home features
- Increased interest from European and Asian investors seeking stable returns
- Off-plan properties offering attractive payment plans and guaranteed returns

**2025 Projections:**
Industry experts predict continued moderate growth of 8-10% in property values, driven by Dubai's hosting of major international events and ongoing infrastructure developments. The upcoming completion of several major projects, including the Museum of the Future district and various transportation links, is expected to further boost property values in surrounding areas.

**Investment Recommendations:**
For investors seeking optimal returns, focus on emerging areas with strong infrastructure development plans, particularly in Dubai South and Mohammed Bin Rashid City. These areas offer excellent entry points with significant appreciation potential over the next 3-5 years.`
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
      alt: "Golden Visa Investment Requirements",
      title: "Golden Visa: New Investment Thresholds Announced",
      category: "Golden Visa",
      timeAgo: "1 week ago",
      excerpt: "UAE announces updated Golden Visa requirements with new investment thresholds and streamlined application processes for 2025.",
      fullContent: `The UAE government has announced significant updates to the Golden Visa program, making it more accessible and attractive for international investors and professionals. These changes, effective from 2025, represent the most comprehensive reform of the residency program since its inception.

**Key Changes for 2025:**
The minimum property investment threshold has been adjusted to AED 2 million for residential properties, while commercial investments require a minimum of AED 2.5 million. The government has also introduced new categories for emerging technology professionals and sustainable business investors.

**Streamlined Application Process:**
The new digital platform reduces application processing time from 6 months to just 30 days for eligible applicants. Required documentation has been simplified, and the introduction of pre-approval certificates allows investors to secure their eligibility before completing property purchases.

**Expanded Eligibility Categories:**
- Real estate investors (minimum AED 2M)
- Business owners and investors (minimum AED 2.5M)
- Specialized professionals in AI, blockchain, and renewable energy
- Outstanding students and graduates from top universities
- Humanitarian pioneers and frontline heroes

**Long-term Benefits:**
Golden Visa holders enjoy 10-year renewable residency, the ability to sponsor family members, and no requirement for minimum stay periods. The visa also provides access to UAE banking services, business setup opportunities, and eventual pathways to permanent residency.

**Strategic Advice:**
For optimal Golden Visa qualification, consider properties in government-approved developments that offer both residency eligibility and strong rental yields. Areas like Business Bay, JVC, and Dubai South provide excellent investment opportunities while meeting visa requirements.`
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      alt: "Off-Plan Investment Opportunities",
      title: "Top Off-Plan Projects to Watch in 2025",
      category: "Off-Plan",
      timeAgo: "3 days ago",
      excerpt: "Discover the most promising off-plan developments in Dubai offering exceptional investment returns and innovative payment plans.",
      fullContent: `The off-plan market in Dubai continues to offer some of the most attractive investment opportunities, with developers launching innovative projects that combine cutting-edge design with investor-friendly payment plans. These upcoming developments represent the future of Dubai's skyline and present significant appreciation potential.

**Featured Off-Plan Projects:**

**Creek Beach Residences:** Located in Dubai Creek Harbour, this waterfront development offers 1-3 bedroom apartments with guaranteed 8% rental returns for the first three years. Starting prices from AED 1.2M with flexible payment plans.

**Dubai South Central:** A mixed-use development near Al Maktoum International Airport, featuring smart homes with integrated IoT systems. The project offers 15% down payment and construction-linked payment plans.

**Business Bay Gardens:** Luxury residential towers with retail podiums, offering studios to 3-bedroom apartments. The development includes rooftop gardens, infinity pools, and co-working spaces.

**Investment Advantages:**
- Lower entry costs compared to ready properties
- Extended payment plans reducing financial pressure
- Potential for significant appreciation before completion
- Modern amenities and sustainable design features
- Developer guarantees and completion insurance

**Risk Management:**
When investing in off-plan properties, focus on established developers with proven track records. Verify all approvals and permits, understand the payment schedule, and consider purchasing from developers offering completion guarantees.

**Market Outlook:**
With Dubai's continued growth and upcoming major events, off-plan properties purchased today are expected to appreciate by 20-25% by completion, making them attractive for both end-users and investors seeking capital gains.`
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      alt: "Dubai Marina Luxury Properties",
      title: "Dubai Marina: Luxury Waterfront Living",
      category: "Luxury",
      timeAgo: "5 days ago",
      excerpt: "Explore Dubai Marina's premium residential offerings and why it remains the top choice for luxury waterfront living.",
      fullContent: `Dubai Marina continues to set the standard for luxury waterfront living in the Middle East. This man-made marina city offers an unparalleled lifestyle experience with its impressive skyline, world-class amenities, and vibrant community atmosphere.

**Why Dubai Marina Leads Luxury Living:**
The Marina's unique canal-city design provides residents with direct waterfront access, private yacht berths, and stunning views of both the Arabian Gulf and the iconic skyline. The area combines residential excellence with comprehensive lifestyle amenities.

**Premium Property Options:**
- Waterfront penthouses with private terraces and infinity pools
- High-floor apartments with panoramic marina and sea views  
- Townhouses with private beach access and boat moorings
- Luxury hotel residences with full-service amenities

**Lifestyle Amenities:**
The Marina Walk spans 7 kilometers of waterfront promenade lined with restaurants, cafes, and retail outlets. Residents enjoy access to private beaches, yacht clubs, world-class spas, and championship golf courses within minutes.

**Investment Performance:**
Dubai Marina properties have shown consistent appreciation over the past decade, with luxury units appreciating by an average of 8-12% annually. Rental yields for premium properties range from 6-8%, making it attractive for both lifestyle and investment purposes.

**Future Developments:**
Upcoming projects include expanded marina facilities, additional luxury towers, and enhanced transportation links. The planned Dubai Metro extension will further improve connectivity and property values.

**Market Recommendation:**
For luxury property investors, Dubai Marina offers the perfect combination of lifestyle excellence and investment stability. Focus on waterfront properties with unique features such as private beach access or yacht berths for maximum appreciation potential.`
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop",
      alt: "Smart Home Technology Dubai",
      title: "Smart Homes: The Future of Dubai Real Estate",
      category: "Technology",
      timeAgo: "1 week ago",
      excerpt: "How smart home technology is revolutionizing Dubai's residential market and creating new investment opportunities.",
      fullContent: `Smart home technology is rapidly transforming Dubai's residential landscape, with developers increasingly incorporating IoT devices, AI-powered systems, and sustainable technologies into new developments. This technological revolution is not just changing how we live, but also creating new investment opportunities and value propositions.

**Smart Technology Integration:**
Modern Dubai properties now feature integrated home automation systems that control lighting, temperature, security, and entertainment through single platforms. Voice-activated assistants, smart appliances, and energy management systems are becoming standard features rather than luxury additions.

**Key Smart Features:**
- Automated climate control systems that adapt to usage patterns
- Smart security systems with facial recognition and remote monitoring
- Energy-efficient lighting and appliance management
- Integrated entertainment and communication systems
- Water and electricity consumption optimization

**Investment Implications:**
Properties with smart home features command premium rental rates and sale prices. Market research indicates that smart-enabled properties achieve 10-15% higher rental yields and appreciate 12-18% faster than traditional properties.

**Developer Initiatives:**
Leading developers like Emaar, DAMAC, and Dubai Properties are partnering with technology companies to create fully integrated smart communities. These developments offer residents seamless connectivity and reduced utility costs through intelligent resource management.

**Sustainability Benefits:**
Smart home systems significantly reduce energy consumption through automated optimization. Properties with smart systems typically achieve 20-30% reduction in utility costs, making them attractive to environmentally conscious tenants and buyers.

**Future Outlook:**
As Dubai positions itself as a smart city, properties with advanced technology integration will become increasingly valuable. Early adopters of smart home technology are likely to see significant returns as these features become market expectations rather than premium options.`
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=250&fit=crop",
      alt: "Sustainable Architecture Dubai",
      title: "Green Building: Dubai's Sustainable Future",
      category: "Sustainability",
      timeAgo: "4 days ago",
      excerpt: "Exploring Dubai's commitment to sustainable architecture and green building practices in new residential developments.",
      fullContent: `Dubai's commitment to sustainability is reshaping the real estate landscape, with green building practices becoming integral to new developments. The emirate's Dubai Clean Energy Strategy 2050 and UAE Net Zero 2071 initiatives are driving unprecedented innovation in sustainable architecture and construction.

**Green Building Standards:**
Dubai Municipality has implemented stringent green building regulations requiring new developments to meet specific sustainability criteria. LEED and BREEAM certifications are becoming standard requirements, ensuring energy efficiency, water conservation, and reduced environmental impact.

**Sustainable Features:**
- Solar panel integration for renewable energy generation
- Greywater recycling systems reducing water consumption by 40%
- Green roofs and vertical gardens improving air quality
- Energy-efficient building materials and insulation systems
- Smart grid connectivity for optimized energy distribution

**Market Demand:**
There's growing demand from environmentally conscious buyers and tenants for sustainable properties. Green buildings command 8-12% premium rental rates and demonstrate superior long-term value retention compared to conventional properties.

**Developer Leadership:**
Major developers are investing heavily in sustainable technologies. Recent projects like Sustainable City and various Emaar developments showcase how environmental responsibility can be combined with luxury living and strong investment returns.

**Economic Benefits:**
Sustainable properties offer reduced operating costs through lower utility bills, government incentives for green building owners, and qualification for special financing programs. These economic advantages translate into higher net yields for investors.

**Future Regulations:**
Dubai plans to make green building certification mandatory for all new developments by 2030. Early investment in sustainable properties positions investors ahead of regulatory requirements and market trends.

**Investment Strategy:**
Focus on developments with comprehensive sustainability features and recognized green certifications. These properties offer the best combination of environmental responsibility and long-term investment performance.`
    }
  ];

  // Carousel functionality
  const totalSlides = Math.ceil(newsData.length / 3);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get current articles to display
  const getCurrentArticles = () => {
    const startIndex = currentSlide * 3;
    return newsData.slice(startIndex, startIndex + 3);
  };

  // Modal functionality
  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  return (
    <section className="latest-news full-bleed py-5" id="news">
      <div className="container">
        {/* Header row */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8 text-center text-md-start">
            <div className="section-accent mb-2"></div>
            <h2 className="display-5 fw-bold text-white mb-1">
              Dubai Real Estate Insights
            </h2>
            <p className="text-secondary mb-0">
              Stay updated with the latest market trends and investment opportunities in Dubai's dynamic real estate sector.
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
            <button type="button" className="btn btn-outline-light">View All</button>
          </div>
        </div>

        {/* Cards row */}
        <div className="row g-4">
          {getCurrentArticles().map((article) => (
            <div key={article.id} className="col-md-4">
              <div 
                className="news-card position-relative overflow-hidden h-100"
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(article)}
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="img-fluid w-100"
                />
                <div className="news-overlay d-flex flex-column justify-content-end p-4">
                  <h5 className="text-white mb-3">
                    {article.title}
                  </h5>
                  <div className="d-flex justify-content-between text-secondary">
                    <small>
                      <i className="fa-solid fa-hashtag me-1"></i>
                      {article.category}
                    </small>
                    <small>
                      <i className="fa-solid fa-clock me-1"></i>
                      {article.timeAgo}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button 
            className="btn btn-outline-light btn-sm"
            onClick={prevSlide}
            disabled={totalSlides <= 1}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          {/* Slider-style dots */}
          <div className="d-flex justify-content-center">
            {Array.from({ length: totalSlides }, (_, index) => (
              <span
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                style={{ 
                  cursor: 'pointer',
                  margin: '0 8px',
                  opacity: index === currentSlide ? 1 : 0.5
                }}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          
          <button 
            className="btn btn-outline-light btn-sm"
            onClick={nextSlide}
            disabled={totalSlides <= 1}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Article Modal */}
        {showModal && selectedArticle && (
          <div 
            className="modal fade show d-block" 
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            onClick={closeModal}
          >
            <div 
              className="modal-dialog modal-lg modal-dialog-scrollable"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="modal-content"
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px'
                }}
              >
                <div className="modal-header border-bottom border-secondary">
                  <div className="d-flex align-items-center">
                    <span 
                      className="badge me-3"
                      style={{
                        background: 'linear-gradient(135deg, #df0c1e 0%, #b91c42 100%)',
                        fontSize: '0.75rem'
                      }}
                    >
                      {selectedArticle.category}
                    </span>
                    <h4 className="modal-title text-white mb-0">
                      {selectedArticle.title}
                    </h4>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={closeModal}
                  ></button>
                </div>
                
                <div className="modal-body">
                  <div className="row mb-4">
                    <div className="col-12">
                      <img
                        src={selectedArticle.image}
                        alt={selectedArticle.alt}
                        className="img-fluid w-100 rounded"
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="d-flex justify-content-between align-items-center text-secondary mb-4">
                        <small>
                          <i className="fa-solid fa-clock me-1"></i>
                          {selectedArticle.timeAgo}
                        </small>
                        <small>
                          <i className="fa-solid fa-hashtag me-1"></i>
                          {selectedArticle.category}
                        </small>
                      </div>
                      
                      {/* Excerpt with enhanced styling */}
                      <div 
                        className="mb-4 p-3 rounded"
                        style={{
                          background: 'linear-gradient(135deg, rgba(223, 12, 30, 0.1) 0%, rgba(185, 28, 66, 0.1) 100%)',
                          border: '1px solid rgba(223, 12, 30, 0.2)',
                          borderLeft: '4px solid #df0c1e'
                        }}
                      >
                        <p 
                          className="text-light mb-0" 
                          style={{ 
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            fontStyle: 'italic',
                            textAlign: 'left'
                          }}
                        >
                          <i className="fa-solid fa-quote-left me-2" style={{ color: '#df0c1e', opacity: 0.7 }}></i>
                          {selectedArticle.excerpt}
                          <i className="fa-solid fa-quote-right ms-2" style={{ color: '#df0c1e', opacity: 0.7 }}></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-12">
                      {/* Article content with improved typography */}
                      <div 
                        className="article-content text-light" 
                        style={{ 
                          fontSize: '1rem', 
                          lineHeight: '1.8',
                          whiteSpace: 'pre-line',
                          textAlign: 'justify'
                        }}
                      >
                        {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => {
                          // Check if paragraph is a heading (starts with **)
                          if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                            const headingText = paragraph.replace(/\*\*/g, '');
                            return (
                              <h5 
                                key={index} 
                                className="text-white mt-4 mb-3 fw-bold"
                                style={{
                                  color: '#df0c1e',
                                  borderBottom: '2px solid rgba(223, 12, 30, 0.3)',
                                  paddingBottom: '8px',
                                  fontSize: '1.2rem'
                                }}
                              >
                                <i className="fa-solid fa-chevron-right me-2" style={{ color: '#df0c1e', fontSize: '0.8rem' }}></i>
                                {headingText}
                              </h5>
                            );
                          }
                          
                          // Check if paragraph contains bullet points
                          if (paragraph.includes('- ')) {
                            const items = paragraph.split('- ').filter(item => item.trim());
                            return (
                              <div key={index} className="mb-3">
                                {items.map((item, itemIndex) => (
                                  <div 
                                    key={itemIndex} 
                                    className="d-flex align-items-start mb-2"
                                    style={{ paddingLeft: '1rem' }}
                                  >
                                    <i 
                                      className="fa-solid fa-circle me-3 mt-2" 
                                      style={{ 
                                        color: '#df0c1e', 
                                        fontSize: '0.5rem',
                                        opacity: 0.8
                                      }}
                                    ></i>
                                    <span style={{ flex: 1 }}>{item.trim()}</span>
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          
                          // Regular paragraphs
                          return (
                            <p 
                              key={index} 
                              className="mb-3"
                              style={{ 
                                textIndent: '1.5rem',
                                color: 'rgba(255, 255, 255, 0.9)'
                              }}
                            >
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-footer border-top border-secondary">
                  <button 
                    type="button" 
                    className="btn btn-secondary me-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    style={{
                      background: 'linear-gradient(135deg, #df0c1e 0%, #b91c42 100%)',
                      border: 'none'
                    }}
                  >
                    <i className="fa-solid fa-share me-2"></i>
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;
