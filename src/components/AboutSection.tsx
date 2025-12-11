import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "./ShinyText";
import { Countdown } from "./Countdown";
import batmanLogo from "@/assets/hh26-logo.png";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !sectionRef.current || !textRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Get text elements
      const textElements = textRef.current ? [
        textRef.current.querySelector('span'),
        textRef.current.querySelector('h2'),
        ...Array.from(textRef.current.querySelectorAll('p'))
      ].filter(Boolean) : [];

      // Set initial states
      gsap.set(sectionRef.current, { y: 100, opacity: 0 });
      gsap.set(textElements, { y: 40, opacity: 0 });
      gsap.set(imageRef.current, { scale: 0.9, opacity: 0 });

      // Create a master timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Section slide up - first
      tl.to(sectionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Text elements reveal - second (staggered)
      tl.to(textElements, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      }, "-=0.3"); // Start slightly before previous animation ends

      // Image scale and fade - starts with text, faster duration
      tl.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.5"); // Start at the same time as text animation begins
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden md:-mt-[100vh] z-20 bg-background" ref={ref}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />
      
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div ref={textRef} className="order-2 lg:order-1 text-left">
            <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
              The Mission
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display leading-tight mb-4 sm:mb-6">
              HACK HUSTLE
              <br />
              <span className="text-gradient">CODE KNIGHT</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-3 sm:mb-4 tracking-wide">
              <ShinyText 
                text="We don't need heroes in capes; we need heroes with code. Hack Hustle: Code Knight is the ultimate proving ground for the next generation of innovators. Organized by the Tech Society, this isn't just a hackathon—it's an incubator for resilience." 
                disabled={false} 
                speed={3} 
              />
            </p>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed tracking-wide">
              <ShinyText 
                text="You have 36 hours to form your squad, choose your domain, and deploy a Minimum Viable Product (MVP) that solves real-world crises. Will you answer the call?" 
                disabled={false} 
                speed={3} 
              />
            </p>
            
            {/* Countdown Timer */}
            <div className="mt-8">
              <p className="text-sm sm:text-base text-primary font-bold tracking-wide mb-4">
                Deployment begins in
              </p>
              <Countdown targetDate={new Date('2026-03-13T09:00:00+05:30')} />
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square rounded-none bg-gradient-to-br from-bat-dark to-bat-black overflow-hidden relative group gotham-card">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Batman logo center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative animate-bat-signal"
                >
                  <img 
                    src={batmanLogo} 
                    alt="Batman Symbol" 
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                  />
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-primary/40" />
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
