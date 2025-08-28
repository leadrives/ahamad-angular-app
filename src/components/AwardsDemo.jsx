import React from 'react';
import AwardsShowcase3D from './AwardsShowcase3D/AwardsShowcase3D';

const AwardsDemo = () => {
  // Sample awards data using real award images
  const awards = [
    {
      id: "damac-2025",
      title: "DAMAC 2025 Achievement",
      subtitle: "Top Performance",
      year: 2025,
      image: "/assets/Awards/damac25.png",
      tag: "2025"
    },
    {
      id: "damac-2024",
      title: "DAMAC 2024 Excellence", 
      subtitle: "Outstanding Results",
      year: 2024,
      image: "/assets/Awards/Damac24.png",
      tag: "2024"
    },
    {
      id: "emaar-h2-2024",
      title: "Emaar H2 Awards",
      subtitle: "Half Year Recognition",
      year: 2024,
      image: "/assets/Awards/emaarh2.png",
      tag: "H2"
    },
    {
      id: "emaar-q2-2024",
      title: "Emaar Q2 Achievement",
      subtitle: "Quarterly Excellence",
      year: 2024,
      image: "/assets/Awards/emaarq2.png", 
      tag: "Q2"
    },
    {
      id: "emaar-annual-2024",
      title: "Emaar Annual Awards",
      subtitle: "Annual Recognition",
      year: 2024,
      image: "/assets/Awards/emar.png",
      tag: "Annual"
    }
  ];

  return (
    <section 
      className="py-4" 
      style={{ 
        backgroundColor: '#1a1a2e', 
        minHeight: 'auto'
      }}
    >
      <div className="container">
        <AwardsShowcase3D 
          items={awards} 
          initialYear={2025}
          showYearFilter={true}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default AwardsDemo;
