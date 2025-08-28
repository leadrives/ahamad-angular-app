/**
 * AwardsStack - Modern glass cards with 3D tilt, ambient glow, and progress rail
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { awards } from '../data/awardsList';
import './awardsStack.css';
import '../styles/awardsTheme.css';
import useMouseTilt from '../hooks/useMouseTilt';
import AwardsProgressRail from './AwardsProgressRail';

// Child component that handles individual card transforms with MotionValue
function AwardCard({ index: i, total, progress, data, isActive, showStack, onCardHover, onCardLeave }) {
  // Check if device supports hover (desktop)
  const isMobile = typeof window !== "undefined" && window.matchMedia?.("(hover: none)").matches;
  
  // Mouse tilt hook for 3D effects
  const { rotateX, rotateY, onMove } = useMouseTilt();
  
  // Simplified positioning for carousel mode (always clean single card)
  const cardStyle = {
    active: {
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      zIndex: 100,
      boxShadow: '0 25px 80px rgba(0,0,0,0.35), 0 10px 30px rgba(139,92,246,0.2)'
    },
    inactive: {
      y: 0,
      rotate: 0,
      scale: 0.9,
      opacity: 0, // Completely hidden
      zIndex: 1,
      boxShadow: 'none'
    }
  };
  
  // Select card transforms based on active state  
  const currentTransform = isActive ? cardStyle.active : cardStyle.inactive;
  
  return (
    <motion.article
      className={`award-stack-card${isActive ? ' is-active' : ''}`}
      style={{
        y: currentTransform.y,
        rotate: currentTransform.rotate,
        scale: currentTransform.scale,
        opacity: currentTransform.opacity,
        zIndex: currentTransform.zIndex,
        boxShadow: currentTransform.boxShadow,
        transformStyle: "preserve-3d"
      }}
      animate={{
        y: currentTransform.y,
        rotate: currentTransform.rotate,
        scale: currentTransform.scale,
        opacity: currentTransform.opacity
      }}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1]
      }}
      onMouseEnter={() => {
        onCardHover(i); // Set this card as active on hover
      }}
      onMouseLeave={() => {
        onCardLeave(); // Resume auto-advance when leaving
      }}
      onMouseMove={!isMobile && isActive ? onMove : undefined}
    >
      {/* ambient glow */}
      <div className="card-ambient" aria-hidden="true" />
      {/* gradient border ring */}
      <div className="card-ring" aria-hidden="true" />
      
      <div className="award-stack-media">
        {/* mask reveal */}
        <motion.img
          src={data.img} 
          alt={data.alt} 
          loading="lazy"
          initial={{ clipPath: "inset(20% 0% 20% 0% round var(--card-r))", scale: 1.03 }}
          animate={{ 
            clipPath: isActive ? "inset(0% 0% 0% 0% round var(--card-r))" : "inset(5% 0% 5% 0% round var(--card-r))", 
            scale: isActive ? 1.02 : 1.0 
          }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          style={{ 
            transformPerspective: 1000, 
            rotateX: isActive ? rotateX : 0, 
            rotateY: isActive ? rotateY : 0 
          }}
          onError={(e)=> { e.currentTarget.style.display='none'; }}
        />
      </div>

      <div className="award-stack-meta">
        <h3 className="award-title">{data.title}</h3>
        <p className="award-year">{data.year}</p>
      </div>
    </motion.article>
  );
}

const AwardsStack = () => {
  const sectionRef = useRef(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Time-based carousel instead of scroll-driven
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const step = 1 / (awards.length + 1);
  
  // Auto-advance cards every 3 seconds (pause when user is hovering a card)
  useEffect(() => {
    if (hoveredCard !== null) return; // Don't auto-advance if user is hovering
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % awards.length;
        console.log('Auto-advancing to card:', next, awards[next]?.title);
        return next;
      });
    }, 3000); // 3 seconds per card

    return () => clearInterval(interval);
  }, [hoveredCard]);

  // Create smooth progress animation for visual effects
  const progress = useMotionValue(0);
  useEffect(() => {
    // Animate progress to match active card for visual consistency
    const targetProgress = (activeIndex * step) + (step * 0.5); // Center of card's range
    progress.set(targetProgress);
    setCurrentProgress(targetProgress);
  }, [activeIndex, step, progress]);

  // Background parallax (now based on activeIndex instead of scroll)
  const bgY = useTransform(progress, [0, 1], [0, -150]);
  const bgOpacity = useTransform(progress, [0, 1], [0.08, 0.16]);

  // Handle manual card selection from progress rail
  const handleCardSelect = (cardIndex) => {
    setActiveIndex(cardIndex);
    console.log('Manual card selection:', cardIndex, awards[cardIndex]?.title);
  };

  // Handle card hover navigation
  const handleCardHover = (cardIndex) => {
    if (cardIndex !== activeIndex) {
      setActiveIndex(cardIndex);
      setHoveredCard(cardIndex);
      console.log('Hover navigation to card:', cardIndex, awards[cardIndex]?.title);
    }
  };

  const handleCardLeave = () => {
    // Small delay before resuming auto-advance to prevent flickering
    setTimeout(() => {
      setHoveredCard(null);
    }, 100);
  };

  return (
    <section ref={sectionRef} className="awards-stack-section">
      
      <div className="awards-stack-sticky">
        <motion.div 
          className="awards-stack-word" 
          style={{ 
            y: bgY, 
            opacity: bgOpacity 
          }}
        >
          AWARDS
        </motion.div>
        <div className="awards-stack-wrap">
          {awards.map((a, i) => (
            <AwardCard
              key={a.img || i}
              index={i}
              total={awards.length}
              progress={progress}
              data={a}
              isActive={i === activeIndex}
              showStack={false}
              onCardHover={handleCardHover}
              onCardLeave={handleCardLeave}
            />
          ))}
        </div>
        <AwardsProgressRail
          count={awards.length}
          progress={currentProgress}
          onJump={handleCardSelect}
        />
      </div>
    </section>
  );
};

export default AwardsStack;
