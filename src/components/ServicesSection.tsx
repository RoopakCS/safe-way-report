import { ArrowUpRight, Shield, Brain, Sword, Eye, Cpu, Zap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";
import batmanLogo from "@/assets/batman-logo.png";
// Using batman-hero-new.jpg as placeholder - replace with batman-domains.jpg when available
import batmanDomains from "@/assets/batman-hero-new.jpg";
import batmanHero from "@/assets/batman-hero.jpg";
// Import the two new Batman images for lanyard cards
// Add these files to src/assets/:
// - batman-silhouette.jpg (Batman with yellowish light and bats)
// - batman-water.jpg (Batman in water with red cape)
import batmanSilhouette from "@/assets/batman-silhouette.jpg";
import batmanWater from "@/assets/batman-water.jpg";
// Import additional images for more lanyard cards
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import Lanyard from "./Lanyard";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "FinTech",
    description: "Revolutionize the financial industry with innovative payment systems, blockchain solutions, and smart banking applications.",
    icon: Cpu,
  },
  {
    title: "HealthTech",
    description: "Transform healthcare delivery with telemedicine platforms, AI diagnostics, and patient management systems.",
    icon: Shield,
  },
  {
    title: "EdTech",
    description: "Shape the future of learning with interactive platforms, personalized education tools, and digital classrooms.",
    icon: Brain,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current || !titleRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current.children;
      gsap.fromTo(cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for background image
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          y: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="domains" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background Batman Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          ref={bgImageRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[65%] lg:w-[55%] h-[70vh] max-h-[600px] opacity-30 md:opacity-35 lg:opacity-40"
          style={{
            backgroundImage: `url(${batmanDomains})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(20%) contrast(1.2) brightness(0.95)',
            maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 75%)',
            zIndex: 0,
          }}
        />
        
        {/* Red energy trail effect overlay */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[65%] lg:w-[55%] h-[70vh] max-h-[600px] opacity-15 md:opacity-20 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, hsl(0 80% 50% / 0.4) 50%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 80%)',
            mixBlendMode: 'multiply',
            zIndex: 1,
          }}
        />
        
        {/* Gradient overlay to blend with background - less opaque to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-2" />
      </div>

      {/* Batman Sticker - Decorative Element */}
      <motion.div
        className="absolute right-2 sm:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-0 opacity-8 sm:opacity-12 md:opacity-15 hidden md:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={isInView ? { opacity: [0.08, 0.15, 0.08], scale: 0.9, rotate: -12 } : {}}
        transition={{ 
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 1, delay: 0.5 },
          rotate: { duration: 1, delay: 0.5 }
        }}
        style={{ 
          filter: 'drop-shadow(0 0 30px hsl(45 100% 50% / 0.2))',
        }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/15 blur-2xl rounded-full" style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }} />
          
          {/* Sticker container with rotation */}
          <div className="relative transform rotate-[-12deg]">
            {/* Sticker border/tape effect */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 md:w-12 h-2 md:h-3 bg-primary/40 rounded-sm opacity-60" />
            <div className="absolute -bottom-1 right-1/4 w-6 md:w-8 h-2 md:h-3 bg-primary/30 rounded-sm opacity-50" />
            
            {/* Batman logo */}
            <div className="relative bg-bat-dark/80 backdrop-blur-sm border-2 border-primary/30 p-3 md:p-5 rounded-lg shadow-xl">
              <img 
                src={batmanLogo} 
                alt="Batman Sticker" 
                className="w-16 h-16 md:w-24 md:h-24 object-contain filter brightness-110"
                style={{ filter: 'drop-shadow(0 0 15px hsl(45 100% 50% / 0.4))' }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-2 h-2 md:w-3 md:h-3 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-1 left-1 md:bottom-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-1 right-1 md:bottom-1.5 md:right-1.5 w-2 h-2 md:w-3 md:h-3 border-r-2 border-b-2 border-primary/50" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <motion.div 
          ref={titleRef}
          className="mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
            What We're Building
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
            DOMAINS
            <br />
            <span className="text-gradient">& INNOVATION</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground font-body max-w-xl tracking-wide">
            <ShinyText 
              text="Choose your battlefield and create innovative solutions" 
              disabled={false} 
              speed={3} 
            />
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Left side - Service Cards */}
          <motion.div 
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group p-4 sm:p-6 gotham-card hover-lift cursor-pointer relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                      <service.icon size={18} className="sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <ArrowUpRight 
                      size={16} 
                      className="sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-display mb-2 group-hover:text-primary transition-colors tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed tracking-wide">
                    <ShinyText 
                      text={service.description} 
                      disabled={false} 
                      speed={3} 
                    />
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Single Lanyard Card */}
          <div className="hidden lg:flex lg:col-span-1 relative z-10 w-full">
            <motion.div 
              className="group relative w-full h-full min-h-[320px] max-h-[500px] overflow-hidden rounded-xl pointer-events-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Background with gradient and glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-background rounded-xl border border-primary/30 shadow-[0_0_40px_rgba(255,215,0,0.1)]" />
              
              {/* Gold accent glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Single Lanyard Component */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <motion.div 
                  className="relative h-full w-full flex-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Lanyard 
                    position={[0, 0, 20]} 
                    gravity={[0, -40, 0]} 
                    fov={20}
                    transparent={true}
                    cardImage={batmanSilhouette}
                  />
                </motion.div>
                
                {/* QR Code Info */}
                <p className="text-[9px] sm:text-[10px] text-muted-foreground/60 font-body tracking-wide italic mt-2 mb-2 text-center px-2">
                  Scan this QR for more info regarding the tracks
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 pointer-events-none rounded-xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Agenda Button - Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Link to="/agenda">
          <motion.button
            className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/40 hover:border-primary flex items-center justify-center overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px hsl(45 100% 50% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/30 transition-all duration-500 blur-md" />
            
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Tooltip on hover */}
            <motion.div
              className="absolute right-full mr-2 px-2 py-1 bg-card/95 backdrop-blur-sm border border-primary/50 rounded text-[10px] font-body text-primary tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              initial={{ x: -5, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              <span className="text-[10px]">Agenda</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-3 border-transparent border-l-primary/50" />
            </motion.div>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};
