import { useEffect, lazy, Suspense, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

// Lazy load heavy components for better initial performance
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WorkSection = lazy(() => import("@/components/WorkSection").then(m => ({ default: m.WorkSection })));
const MarqueeSection = lazy(() => import("@/components/MarqueeSection").then(m => ({ default: m.MarqueeSection })));
const AwardsSection = lazy(() => import("@/components/AwardsSection").then(m => ({ default: m.AwardsSection })));
const SponsorsSection = lazy(() => import("@/components/SponsorsSection").then(m => ({ default: m.SponsorsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Simple loading fallback
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    // Delay background effects for better initial load
    const effectsTimer = setTimeout(() => setShowEffects(true), 1500);

    // Initialize Lenis for smooth scrolling with optimized settings
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Debounced resize handler for better performance
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      clearTimeout(effectsTimer);
      clearTimeout(resizeTimeout);
      lenis.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative noise-overlay">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ServicesSection />
          <AwardsSection />
          <WorkSection />
          <MarqueeSection />
          <SponsorsSection />
          <FAQSection />
          <GallerySection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
