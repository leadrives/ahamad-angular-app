import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling with simpler, more reliable config
    lenisRef.current = new Lenis({
      lerp: 0.08, // Smoother interpolation
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // Important: disable on touch for mobile compatibility
      syncTouch: false,
      touchMultiplier: 1,
      infinite: false,
      normalizeWheel: true, // Better cross-browser wheel support
    });

    // Ensure the lenis instance is working
    if (!lenisRef.current) {
      console.warn('Lenis failed to initialize');
      return;
    }

    // Request Animation Frame loop
    const raf = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(raf);

    // Debug logging
    const handleScroll = (e) => {
      // console.log('Lenis scroll:', e.scroll);
    };

    lenisRef.current.on('scroll', handleScroll);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Expose lenis globally (optional)
  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }

    return () => {
      if (window.lenis === lenisRef.current) {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
