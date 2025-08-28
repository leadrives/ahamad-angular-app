/**
 * AwardsStackNew - Carousel slider version with center prominence
 */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { awards } from '../data/awardsList';
import './AwardsStackNew.css';

export default function AwardsStackNew() {
  const [active, setActive] = useState(0);
  const count = awards.length;
  const wheelLockRef = useRef(0);
  const dragRef = useRef(null);
  const touchRef = useRef(null);

  const clampIndex = useCallback(
    (i) => (i + count) % count,
    [count]
  );

  const goNext = useCallback(() => setActive(a => clampIndex(a + 1)), [clampIndex]);
  const goPrev = useCallback(() => setActive(a => clampIndex(a - 1)), [clampIndex]);
  const goTo = useCallback((i) => setActive(clampIndex(i)), [clampIndex]);

  // relative offset for circular carousel
  const offsetOf = useCallback((i) => {
    const half = Math.floor(count / 2);
    let diff = i - active;
    if (diff > half) diff -= count;
    if (diff < -half) diff += count;
    return diff;
  }, [active, count]);

  // Optional auto-rotate
  useEffect(() => {
    const id = window.setInterval(goNext, 8000); // 8 second intervals
    return () => window.clearInterval(id);
  }, [goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // Wheel navigation (debounced)
  const onWheel = (e) => {
    const now = Date.now();
    if (now < wheelLockRef.current) return;
    wheelLockRef.current = now + 300;
    if (e.deltaY > 0) goNext(); else goPrev();
  };

  // Enhanced drag/swipe nav
  const onPointerDown = (e) => {
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
    dragRef.current = { startX: e.clientX, dragging: true };
  };

  const onPointerMove = (e) => {
    if (!dragRef.current?.dragging) return;
    // Could add live parallax here if desired
  };

  const onPointerUp = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    
    const threshold = window.innerWidth <= 768 ? 40 : 60;
    if (Math.abs(dx) > threshold) dx < 0 ? goNext() : goPrev();
  };

  // Enhanced touch handling for mobile
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    touchRef.current = { 
      startX: touch.clientX, 
      startY: touch.clientY,
      time: Date.now()
    };
  };

  const onTouchMove = (e) => {
    if (touchRef.current) {
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - touchRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchRef.current.startY);
      
      if (deltaX > deltaY) {
        e.preventDefault();
      }
    }
  };

  const onTouchEnd = (e) => {
    if (!touchRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchRef.current.startX;
    const deltaY = touch.clientY - touchRef.current.startY;
    const deltaTime = Date.now() - touchRef.current.time;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30 && deltaTime < 500) {
      deltaX < 0 ? goNext() : goPrev();
    }
    
    touchRef.current = null;
  };

  if (!count) return null;
  return (
    <div 
      className="awards-carousel-container"
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="listbox"
      aria-activedescendant={`award-${active}`}
      tabIndex={0}
      style={{ touchAction: 'pan-y' }}
    >
      <div className="awards-carousel-content">
        <div className="awards-title">
          <h2>Awards & Recognition</h2>
          <p>Celebrating excellence and achievements</p>
        </div>
        
        <div className="awards-carousel-track">
          {awards.map((award, i) => {
            const off = offsetOf(i);
            const isActive = i === active;
            
            // Mobile-responsive spacing and rotation
            const isMobile = window.innerWidth <= 768;
            const translateX = off * (isMobile ? 180 : 240);
            const rotateY = off * (isMobile ? -15 : -20);
            const scale = isActive ? 1 : (isMobile ? 0.7 : 0.8);
            const blur = Math.abs(off) * (isMobile ? 1 : 1.5);
            const z = 100 - Math.abs(off);

            const cardClasses = `award-carousel-card ${isActive ? 'active' : ''}`;
            const base = 'translate(-50%, -50%)';

            return (
              <button
                key={award.title + i}
                id={`award-${i}`}
                className={cardClasses}
                style={{
                  transform: `${base} translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  zIndex: z
                }}
                onClick={() => goTo(i)}
                title={`${award.title} (${award.year})`}
              >
                <div className="award-carousel-inner">
                  <div className="award-image">
                    <img src={award.img} alt={award.alt} loading="lazy" />
                  </div>
                  <div className="award-content">
                    <h3 className="award-title">{award.title}</h3>
                    <div className="award-year">{award.year}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="awards-carousel-pagination">
          {awards.map((_, i) => {
            const dotClasses = `awards-carousel-dot ${i === active ? 'active' : ''}`;
            return (
              <button
                key={i}
                className={dotClasses}
                aria-label={`Go to award ${i + 1}`}
                onClick={() => goTo(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
