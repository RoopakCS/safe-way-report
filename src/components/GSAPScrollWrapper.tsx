import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollWrapperProps {
  children: React.ReactNode;
}

export const GSAPScrollWrapper = ({ children }: GSAPScrollWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    ctxRef.current = gsap.context(() => {
      // Setup smooth scrolling with Lenis if available
      // GSAP ScrollTrigger will work with native scroll or Lenis
    }, containerRef.current);

    return () => {
      ctxRef.current?.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="gsap-scroll-wrapper">
      {children}
    </div>
  );
};

