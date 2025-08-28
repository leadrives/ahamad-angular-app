import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import YouTube from "react-youtube";
import styles from "./YouTubeShortsCarousel3D.module.css";

const YouTubeShortsCarousel3D = ({
  videoIds,
  autoRotate = false,
  rotateIntervalMs = 6000,
  className
}) => {
  const [active, setActive] = useState(0);
  const count = videoIds.length;
  const wheelLockRef = useRef(0);
  const dragRef = useRef(null);
  const players = useRef(new Map());

  const clampIndex = useCallback(
    (i) => (i + count) % count,
    [count]
  );

  const goNext = useCallback(() => setActive(a => clampIndex(a + 1)), [clampIndex]);
  const goPrev = useCallback(() => setActive(a => clampIndex(a - 1)), [clampIndex]);
  const goTo = useCallback((i) => setActive(clampIndex(i)), [clampIndex]);

  // relative offset for circular carousel (keeps nearest neighbors in [-half, +half])
  const offsetOf = useCallback((i) => {
    const half = Math.floor(count / 2);
    let diff = i - active;
    if (diff > half) diff -= count;
    if (diff < -half) diff += count;
    return diff;
  }, [active, count]);

  // Autoplay only the active video
  useEffect(() => {
    players.current.forEach((ref, idx) => {
      if (idx === active) {
        try { ref.play(); } catch (e) {}
      } else {
        try { ref.pause(); } catch (e) {}
      }
    });
  }, [active]);

  // Optional auto-rotate
  useEffect(() => {
    if (!autoRotate || count < 2) return;
    const id = window.setInterval(goNext, rotateIntervalMs);
    return () => window.clearInterval(id);
  }, [autoRotate, count, goNext, rotateIntervalMs]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // Wheel nav (debounced)
  const onWheel = (e) => {
    const now = Date.now();
    if (now < wheelLockRef.current) return;
    wheelLockRef.current = now + 300;
    if (e.deltaY > 0) goNext(); else goPrev();
  };

  // Enhanced drag/swipe nav with better mobile sensitivity
  const onPointerDown = (e) => {
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
    dragRef.current = { startX: e.clientX, dragging: true };
  };

  const onPointerMove = (e) => {
    if (!dragRef.current?.dragging) return;
    // could add live parallax here if desired
  };

  const onPointerUp = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    
    // More sensitive threshold for mobile
    const threshold = window.innerWidth <= 768 ? 40 : 60;
    if (Math.abs(dx) > threshold) dx < 0 ? goNext() : goPrev();
  };

  const optsBase = useMemo(() => ({
    playerVars: {
      // Only the active slide will be asked to autoplay via play() call.
      autoplay: 0,
      mute: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      loop: 1
    }
  }), []);

  const onReady = (i) => (e) => {
    const player = e.target;
    try {
      player.mute();
    } catch (err) {}
    
    players.current.set(i, {
      play: () => { 
        try { 
          player.mute(); 
          player.playVideo(); 
        } catch (err) {} 
      },
      pause: () => { 
        try { 
          player.pauseVideo(); 
        } catch (err) {} 
      }
    });
    
    // ensure non-active starts paused
    if (i !== active) {
      try { player.pauseVideo(); } catch (err) {}
    } else {
      try { player.playVideo(); } catch (err) {}
    }
  };

  // Enhanced touch handling for mobile
  const touchRef = useRef(null);
  
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    touchRef.current = { 
      startX: touch.clientX, 
      startY: touch.clientY,
      time: Date.now()
    };
  };

  const onTouchMove = (e) => {
    // Prevent default scrolling during horizontal swipes
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
    
    // Only register swipe if horizontal movement is dominant and within time limit
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30 && deltaTime < 500) {
      deltaX < 0 ? goNext() : goPrev();
    }
    
    touchRef.current = null;
  };

  if (!count) return null;

  const rootClasses = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div
      className={rootClasses}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="listbox"
      aria-activedescendant={`short-${active}`}
      tabIndex={0}
      style={{ touchAction: 'pan-y' }}
    >
      <div className={styles.track}>
        {videoIds.map((id, i) => {
          const off = offsetOf(i);
          const isActive = i === active;
          
          // Mobile-responsive spacing and rotation
          const isMobile = window.innerWidth <= 768;
          const translateX = off * (isMobile ? 200 : 280);
          const rotateY = off * (isMobile ? -20 : -28);
          const scale = isActive ? 1 : (isMobile ? 0.75 : 0.85);
          const blur = Math.abs(off) * (isMobile ? 1 : 1.5);
          const z = 100 - Math.abs(off);

          const cardClasses = [styles.card, isActive && styles.active].filter(Boolean).join(' ');
          const base = 'translate(-50%, -50%)';

          return (
            <button
              key={id + i}
              id={`short-${i}`}
              className={cardClasses}
              style={{
                transform: `${base} translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                filter: `blur(${blur}px)`,
                zIndex: z
              }}
              onClick={() => goTo(i)}
              title={`Short ${i + 1} of ${count}`}
            >
              <div className={styles.cardInner}>
                <YouTube
                  videoId={id}
                  className={styles.player}
                  iframeClassName={styles.iframe}
                  onReady={onReady(i)}
                  opts={{
                    ...optsBase,
                    playerVars: {
                      ...optsBase.playerVars,
                      // loop needs a playlist param equal to videoId
                      playlist: id
                    }
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className={`d-flex justify-content-center align-items-center mt-3 ${styles.dots}`}>
        {videoIds.map((_, i) => {
          const dotClasses = [styles.dot, i === active && styles.dotActive].filter(Boolean).join(' ');
          return (
            <button
              key={i}
              className={dotClasses}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => goTo(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel3D;
