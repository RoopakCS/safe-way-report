import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import batmanHero from "@/assets/batman-hero-new.jpg";
import LightRays from "./LightRays";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the hero section (disable on mobile for better UX)
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });
      }

      // Parallax background (only on larger screens)
      if (!isMobile) {
        gsap.to(bgRef.current, {
          y: "30%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Fade out content as we scroll
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -50,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    // Refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="w-full h-full relative">
          <img
            src={batmanHero}
            alt="Batman overlooking Gotham"
            className="absolute inset-0 w-full h-full object-cover object-[50%_20%] sm:object-[55%_center] md:object-[60%_center] lg:object-[65%_center]"
            loading="eager"
          />
        </div>
        {/* Left gradient - covers left side more heavily */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" 
             style={{ 
               background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 25%, transparent 50%)' 
             }} 
        />
        {/* Right gradient - covers right side more heavily */}
        <div className="absolute inset-0" 
             style={{ 
               background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 12%, transparent 35%)' 
             }} 
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Light Rays Effect - centered on Batman */}
        <div className="absolute inset-0 opacity-70">
          <LightRays
            raysOrigin="top-center"
            raysColor="#FFD700"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
      </div>

      {/* Animated particles - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative elements for right side */}
      <div className="absolute right-12 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col gap-8"
        >
          {/* Vertical accent line */}
          <div className="w-[2px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto" />
          
          {/* Stats/Info boxes */}
          <div 
            className="border-2 border-primary/30 bg-background/90 backdrop-blur-md p-6 min-w-[200px] hover:scale-105 hover:border-primary/60 transition-all duration-300"
          >
            <div className="text-4xl font-display text-primary mb-2">24hrs</div>
            <div className="text-sm font-body text-muted-foreground tracking-wider">DURATION</div>
          </div>

          <div 
            className="border-2 border-primary/30 bg-background/90 backdrop-blur-md p-6 min-w-[200px] hover:scale-105 hover:border-primary/60 transition-all duration-300"
          >
            <div className="text-4xl font-display text-primary mb-2">₹35K+</div>
            <div className="text-sm font-body text-muted-foreground tracking-wider">PRIZE POOL</div>
          </div>

          <div 
            className="border-2 border-primary/30 bg-background/90 backdrop-blur-md p-6 min-w-[200px] hover:scale-105 hover:border-primary/60 transition-all duration-300"
          >
            <div className="text-4xl font-display text-primary mb-2">3</div>
            <div className="text-sm font-body text-muted-foreground tracking-wider">DOMAINS</div>
          </div>

          {/* Bottom vertical line */}
          <div className="w-[2px] h-32 bg-gradient-to-b from-primary via-transparent to-transparent mx-auto" />
        </motion.div>
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex items-center min-h-screen">
        <div className="max-w-xl lg:max-w-2xl pt-20 lg:pt-0 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 border border-primary/40 rounded-none text-[10px] sm:text-xs font-body text-primary tracking-[0.3em] sm:tracking-[0.4em] uppercase bg-background/80 backdrop-blur-sm">
              10TH FEBRUARY 2026
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-display leading-tight tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">HACK HUSTLE</span>
            <motion.span 
              className="block text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              CODE KNIGHT
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 sm:mt-10 max-w-md text-sm sm:text-base md:text-lg font-body text-muted-foreground/80 leading-relaxed tracking-wider"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Saveetha Engineering College, Chennai
          </motion.p>

          <motion.div 
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#prizes"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-display text-base sm:text-lg tracking-wider hover:scale-105 transition-transform duration-300 glow-gold"
              whileHover={{ boxShadow: "0 0 80px hsl(45 100% 50% / 0.5)" }}
            >
              <span>View Prizes</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-foreground/30 text-foreground font-display text-base sm:text-lg tracking-wider hover:border-primary hover:text-primary transition-all duration-300 bg-background/50 backdrop-blur-sm"
              whileHover={{ borderColor: "hsl(45 100% 50%)" }}
            >
              <span>Register Now</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
