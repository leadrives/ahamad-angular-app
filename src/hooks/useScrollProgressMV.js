import { useEffect, useCallback } from "react";
import { useMotionValue } from "framer-motion";

export default function useScrollProgressMV(ref) {
  const mv = useMotionValue(0);
  
  const calc = useCallback(() => {
    if (!ref.current) return;
    
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const top = rect.top + scrollY;
    const h = rect.height;
    const vh = window.innerHeight;
    const start = top - vh;
    const end = top + h - vh;
    const p = Math.min(1, Math.max(0, (scrollY - start) / Math.max(1, end - start)));
    
    mv.set(p);
  }, [ref, mv]);
  
  useEffect(() => {
    if (!ref.current) {
      console.warn("useScrollProgressMV: ref not ready, skipping setup");
      return;
    }
    
    console.log("useScrollProgressMV: Setting up with element:", ref.current.className);
    
    let raf = 0;
    const onScroll = () => { 
      cancelAnimationFrame(raf); 
      raf = requestAnimationFrame(calc); 
    };
    
    // Add listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    
    // Initial calculation
    calc();
    
    // Test if scroll events work by logging
    let testCount = 0;
    const testScroll = () => {
      console.log("Scroll event fired:", ++testCount);
    };
    window.addEventListener("scroll", testScroll, { passive: true });
    
    return () => { 
      console.log("useScrollProgressMV: Cleanup");
      window.removeEventListener("scroll", onScroll); 
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", testScroll);
      cancelAnimationFrame(raf); 
    };
  }, [calc, ref]); // Include ref dependency
  
  return mv;
}
