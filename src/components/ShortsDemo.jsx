import React from 'react';
import YouTubeShortsCarousel3D from './YouTubeShortsCarousel3D/YouTubeShortsCarousel3D';

const ShortsDemo = () => {
  // YouTube Shorts video IDs extracted from the provided URLs
  const videoIds = [
    "PdxI9t5cZ_Y", // https://www.youtube.com/shorts/PdxI9t5cZ_Y
    "BRmSK9f5M1E", // https://youtube.com/shorts/BRmSK9f5M1E
    "QSPan8Ve1qU", // https://youtube.com/shorts/QSPan8Ve1qU
    "Oh7lnw6RV-E", // https://youtube.com/shorts/Oh7lnw6RV-E
    "VqaAfdOFFYY"  // https://youtube.com/shorts/VqaAfdOFFYY
  ];

  return (
    <section 
      className="py-1 py-md-2" 
      style={{ 
        backgroundColor: '#1a1a2e', 
        minHeight: 'auto',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container-fluid px-1 px-md-3">
        
        <YouTubeShortsCarousel3D
          videoIds={videoIds}
          autoRotate={true}
          rotateIntervalMs={8000}
          className="mx-auto"
        />
        
      </div>
    </section>
  );
};

export default ShortsDemo;
