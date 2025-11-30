import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPScroll = () => {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Create a GSAP context for cleanup
    ctxRef.current = gsap.context(() => {
      // Refresh ScrollTrigger on resize
      ScrollTrigger.addEventListener('refresh', () => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      // Cleanup
      ctxRef.current?.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ctxRef.current;
};

export const initGSAPScroll = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh on resize
    let resizeTimer: NodeJS.Timeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    });
  }
};

