import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gothamRooftop from "@/assets/gotham-rooftop.jpg";
import batSignal from "@/assets/bat-signal.jpg";
import batmanHero from "@/assets/batman-hero.jpg";

const milestones = [
  {
    title: "Registration Opens",
    category: "01ST OCTOBER 2024",
    status: "Start",
    image: gothamRooftop,
    description: "Mark your calendars and gather your team. The journey begins here.",
  },
  {
    title: "Hackathon Starts",
    category: "08TH NOVEMBER 2024",
    status: "24 Hours",
    image: batSignal,
    description: "24 hours of intense coding, innovation, and collaboration.",
  },
  {
    title: "Final Presentations",
    category: "09TH NOVEMBER 2024",
    status: "Winners",
    image: batmanHero,
    description: "Present your solutions and compete for the ultimate glory.",
  },
];

export const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-20 relative" ref={ref}>
      {/* Background vertical lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
              Event Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
              TIMELINE
              <br />
              <span className="text-gradient">& MILESTONES</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-body text-xs sm:text-sm font-semibold link-underline self-start tracking-wider hover:gap-3 transition-all"
          >
            Register Now
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
          </a>
        </motion.div>

        <div className={`grid gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 ease-in-out ${expandedCard !== null && !isMobile ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => handleCardClick(index)}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                expandedCard === null 
                  ? 'aspect-[3/4]' 
                  : expandedCard === index 
                    ? isMobile ? 'aspect-[3/4]' : 'h-[500px]' 
                    : isMobile ? 'aspect-[3/4]' : 'hidden'
              }`}
            >
              {/* Border frame */}
              <div className="absolute inset-0 border border-primary/30 group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none">
                {/* Corner accents that appear on hover */}
                <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Left accent line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-20 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
              />

              {/* Image - hidden on mobile when expanded */}
              <img
                src={milestone.image}
                alt={milestone.title}
                className={`absolute inset-0 object-cover transition-all duration-700 ease-in-out ${
                  expandedCard === index 
                    ? isMobile 
                      ? 'hidden' 
                      : 'w-1/2 h-full group-hover:scale-105'
                    : 'w-full h-full group-hover:scale-110'
                }`}
                loading="lazy"
              />
              
              {/* Overlay - hidden on mobile when expanded */}
              <div className={`absolute inset-0 bg-gradient-to-t from-bat-black via-bat-black/60 to-bat-black/20 group-hover:via-bat-black/70 transition-all duration-700 ease-in-out ${
                expandedCard === index 
                  ? isMobile 
                    ? 'hidden' 
                    : 'w-1/2'
                  : 'w-full'
              }`} />

              {/* Close button for expanded view */}
              {expandedCard === index && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(null);
                  }}
                  className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-primary/20 hover:bg-primary/40 border border-primary/50 hover:border-primary transition-all duration-300 rounded-full"
                >
                  <X size={20} className="text-primary" />
                </button>
              )}

              {/* Top info */}
              <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 z-10 ${expandedCard === index ? 'w-1/2' : 'right-2 sm:right-4'} flex justify-between items-start`}>
                <span 
                  className="text-[10px] sm:text-xs font-body text-primary tracking-[0.1em] sm:tracking-[0.15em] uppercase group-hover:translate-y-0 transition-transform duration-300"
                >
                  {milestone.category}
                </span>
                {expandedCard !== index && (
                  <span className="text-[10px] sm:text-xs font-body text-foreground/60 tracking-wider">
                    {milestone.status}
                  </span>
                )}
              </div>
              
              {/* Bottom content - collapsed view */}
              {expandedCard !== index && (
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                  {/* Description - shows on hover */}
                  <p 
                    className="text-xs sm:text-sm font-body text-foreground/70 mb-2 sm:mb-3 tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    {milestone.description}
                  </p>

                  <div className="flex items-end justify-between">
                    <h3 
                      className="text-base sm:text-lg font-display tracking-wider group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300 uppercase leading-tight"
                    >
                      {milestone.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                    
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-primary/50 group-hover:border-primary group-hover:bg-primary hover:scale-110 transition-all duration-300"
                    >
                      <ArrowUpRight 
                        size={14} 
                        className="sm:w-4 sm:h-4 text-primary group-hover:text-primary-foreground transition-colors" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded content - right side on desktop, full width on mobile */}
              {expandedCard === index && (
                <div className={`absolute inset-0 p-6 sm:p-8 md:p-12 z-10 flex flex-col justify-center animate-in fade-in duration-500 ${
                  isMobile ? 'bg-bat-black' : 'left-1/2'
                }`}>
                  <div className="max-w-2xl">
                    <span className="text-xs sm:text-sm font-body text-primary tracking-[0.15em] uppercase mb-4 block">
                      {milestone.status}
                    </span>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-wider text-primary mb-6 uppercase leading-tight">
                      {milestone.title}
                    </h2>
                    
                    <p className="text-base sm:text-lg font-body text-foreground/80 mb-6 leading-relaxed tracking-wide">
                      {milestone.description}
                    </p>

                    <div className="space-y-4">
                      <div className="border-l-2 border-primary/50 pl-4">
                        <h4 className="text-sm font-display text-primary tracking-wider uppercase mb-2">Date</h4>
                        <p className="text-sm font-body text-foreground/70">{milestone.category}</p>
                      </div>
                      
                      <div className="border-l-2 border-primary/50 pl-4">
                        <h4 className="text-sm font-display text-primary tracking-wider uppercase mb-2">Details</h4>
                        <p className="text-sm font-body text-foreground/70">
                          {index === 0 && "Join us as we kick off the hackathon journey. Register your team and prepare for an incredible 24-hour coding experience."}
                          {index === 1 && "The main event begins! Code, collaborate, and create innovative solutions. Our mentors will be available throughout the hackathon."}
                          {index === 2 && "Showcase your projects to our panel of judges. Present your innovative solutions and compete for amazing prizes."}
                        </p>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider hover:bg-primary/90 transition-all"
                        >
                          Register Now
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Animated scan line - CSS only */}
              <div 
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan"
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline dots */}
        <motion.div 
          className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {milestones.map((_, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 hover:scale-150 transition-transform duration-300"
              />
              {index < milestones.length - 1 && (
                <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-primary/40 to-primary/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
