/**
 * Awards Section - Stacked Cards with Scroll-Driven Animations
 * 
 * SCROLL MATH EXPLANATION:
 * - Section height: 360vh (3.6x viewport height)
 * - Cards animate during scroll through this extended height
 * - Each card gets a "step" = 1 / (awards.length + 1)
 * - Card animations are staggered: Card N starts at (N * step) and ends at ((N + 1) * step)
 * 
 * ANIMATION RANGES:
 * - Y Transform: 140px → 0 (slides up into view)
 * - Rotation: -14deg → -3deg (subtle rotation effect)
 * - Scale: 0.94 → 1.03 (slight zoom in)
 * - Opacity: 0 → 1 (fades in during first half of animation)
 * - Box Shadow: Dynamic elevation mapping via useMotionTemplate
 * 
 * CURRENT AWARD IMAGES:
 * - Damac24.png, damac25.png, emaarh2.png, emaarq2.png, emar.png
 * 
 * @param {Object} props - Component props
 * @param {Array} props.awards - Optional custom awards array (falls back to default)
 */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import './AwardsSection.css';

const AwardsSection = ({ awards: customAwards }) => {
  const sectionRef = useRef(null);
  
  // Attach useScroll to the section with broader offsets for better animation range
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Start when section enters viewport, end when it leaves
  });

  // Background word animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.16]);

  // Awards data with actual files from /public/assets/Awards/
  const awards = customAwards || [
    { 
      title: "DAMAC Award 2024", 
      year: "2024", 
      img: "/assets/Awards/Damac24.png", 
      alt: "DAMAC Real Estate Award 2024" 
    },
    { 
      title: "DAMAC Excellence 2025", 
      year: "2025", 
      img: "/assets/Awards/damac25.png", 
      alt: "DAMAC Excellence Award 2025" 
    },
    { 
      title: "Emaar H2 Achievement", 
      year: "2025", 
      img: "/assets/Awards/emaarh2.png", 
      alt: "Emaar H2 Real Estate Achievement Award" 
    },
    { 
      title: "Emaar Q2 Recognition", 
      year: "2025", 
      img: "/assets/Awards/emaarq2.png", 
      alt: "Emaar Q2 Performance Recognition Award" 
    },
    { 
      title: "Emaar Partnership Excellence", 
      year: "2025", 
      img: "/assets/Awards/emar.png", 
      alt: "Emaar Partnership Excellence Award" 
    }
  ];

  // Calculate step size for scroll progress
  const step = 1 / (awards.length + 1);

  // Create all transforms at top level (React hooks rules)
  const card0Y = useTransform(scrollYProgress, [0 * step, 1 * step], [140, 0]);
  const card0RotateZ = useTransform(scrollYProgress, [0 * step, 1 * step], [-14, -3]);
  const card0Scale = useTransform(scrollYProgress, [0 * step, 1 * step], [0.94, 1.03]);
  const card0Opacity = useTransform(scrollYProgress, [0 * step, 0.5 * step], [0, 1]);
  const card0Elev = useTransform(scrollYProgress, [0 * step, 1 * step], [0.05, 0.28]);
  const card0BoxShadow = useMotionTemplate`0 24px 70px rgba(0,0,0,${card0Elev})`;

  const card1Y = useTransform(scrollYProgress, [1 * step, 2 * step], [140, 0]);
  const card1RotateZ = useTransform(scrollYProgress, [1 * step, 2 * step], [-14, -3]);
  const card1Scale = useTransform(scrollYProgress, [1 * step, 2 * step], [0.94, 1.03]);
  const card1Opacity = useTransform(scrollYProgress, [1 * step, 1.5 * step], [0, 1]);
  const card1Elev = useTransform(scrollYProgress, [1 * step, 2 * step], [0.05, 0.28]);
  const card1BoxShadow = useMotionTemplate`0 24px 70px rgba(0,0,0,${card1Elev})`;

  const card2Y = useTransform(scrollYProgress, [2 * step, 3 * step], [140, 0]);
  const card2RotateZ = useTransform(scrollYProgress, [2 * step, 3 * step], [-14, -3]);
  const card2Scale = useTransform(scrollYProgress, [2 * step, 3 * step], [0.94, 1.03]);
  const card2Opacity = useTransform(scrollYProgress, [2 * step, 2.5 * step], [0, 1]);
  const card2Elev = useTransform(scrollYProgress, [2 * step, 3 * step], [0.05, 0.28]);
  const card2BoxShadow = useMotionTemplate`0 24px 70px rgba(0,0,0,${card2Elev})`;

  const card3Y = useTransform(scrollYProgress, [3 * step, 4 * step], [140, 0]);
  const card3RotateZ = useTransform(scrollYProgress, [3 * step, 4 * step], [-14, -3]);
  const card3Scale = useTransform(scrollYProgress, [3 * step, 4 * step], [0.94, 1.03]);
  const card3Opacity = useTransform(scrollYProgress, [3 * step, 3.5 * step], [0, 1]);
  const card3Elev = useTransform(scrollYProgress, [3 * step, 4 * step], [0.05, 0.28]);
  const card3BoxShadow = useMotionTemplate`0 24px 70px rgba(0,0,0,${card3Elev})`;

  const card4Y = useTransform(scrollYProgress, [4 * step, 5 * step], [140, 0]);
  const card4RotateZ = useTransform(scrollYProgress, [4 * step, 5 * step], [-14, -3]);
  const card4Scale = useTransform(scrollYProgress, [4 * step, 5 * step], [0.94, 1.03]);
  const card4Opacity = useTransform(scrollYProgress, [4 * step, 4.5 * step], [0, 1]);
  const card4Elev = useTransform(scrollYProgress, [4 * step, 5 * step], [0.05, 0.28]);
  const card4BoxShadow = useMotionTemplate`0 24px 70px rgba(0,0,0,${card4Elev})`;

  // Array of all transforms for easy access
  const cardTransforms = [
    { y: card0Y, rotateZ: card0RotateZ, scale: card0Scale, opacity: card0Opacity, boxShadow: card0BoxShadow },
    { y: card1Y, rotateZ: card1RotateZ, scale: card1Scale, opacity: card1Opacity, boxShadow: card1BoxShadow },
    { y: card2Y, rotateZ: card2RotateZ, scale: card2Scale, opacity: card2Opacity, boxShadow: card2BoxShadow },
    { y: card3Y, rotateZ: card3RotateZ, scale: card3Scale, opacity: card3Opacity, boxShadow: card3BoxShadow },
    { y: card4Y, rotateZ: card4RotateZ, scale: card4Scale, opacity: card4Opacity, boxShadow: card4BoxShadow }
  ];

  return (
    <section 
      ref={sectionRef}
      className="awards-section"
      aria-label="Awards and Recognition"
    >
      {/* Background decorative text */}
      <motion.div 
        className="awards-word"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      >
        AWARDS
      </motion.div>

      {/* Sticky container for awards cards */}
      <div className="awards-sticky">
        <div className="awards-wrap">
          {awards.map((award, i) => {
            const transforms = cardTransforms[i];
            
            return (
              <motion.article
                key={award.title}
                className="award-card"
                style={{
                  y: transforms?.y,
                  rotateZ: transforms?.rotateZ,
                  scale: transforms?.scale,
                  opacity: transforms?.opacity,
                  boxShadow: transforms?.boxShadow,
                  zIndex: 100 - i
                }}
              >
                <div className="award-media">
                  <img 
                    src={award.img} 
                    alt={award.alt} 
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      console.warn(`Failed to load award image: ${award.img}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="award-meta">
                  <h3>{award.title}</h3>
                  <p>{award.year}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
