import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// SVG Icons for each milestone
const BeaconIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Signal tower */}
    <motion.path
      d="M50 85 L40 50 L60 50 Z"
      fill="hsl(var(--primary) / 0.3)"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    />
    {/* Signal waves */}
    <motion.path
      d="M50 45 Q35 35 50 25"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="none"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M50 45 Q65 35 50 25"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="none"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
    />
    <motion.path
      d="M50 35 Q30 20 50 5"
      stroke="hsl(var(--primary) / 0.6)"
      strokeWidth="1.5"
      fill="none"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: [0, 0.8, 0], pathLength: [0, 1, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
    <motion.path
      d="M50 35 Q70 20 50 5"
      stroke="hsl(var(--primary) / 0.6)"
      strokeWidth="1.5"
      fill="none"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: [0, 0.8, 0], pathLength: [0, 1, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    />
    {/* Center glow */}
    <motion.circle
      cx="50"
      cy="45"
      r="5"
      fill="hsl(var(--primary))"
      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const GateIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Gate frame */}
    <path d="M15 20 L15 85 L85 85 L85 20" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
    {/* Top arch */}
    <path d="M15 20 Q50 5 85 20" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
    
    {/* Left gate door */}
    <motion.g
      animate={{ x: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="18" y="22" width="30" height="60" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.6)" strokeWidth="1.5" />
      {/* Left door bars */}
      <line x1="24" y1="22" x2="24" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      <line x1="33" y1="22" x2="33" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      <line x1="42" y1="22" x2="42" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      {/* Left door handle */}
      <circle cx="44" cy="52" r="3" fill="hsl(var(--primary))" />
    </motion.g>
    
    {/* Right gate door */}
    <motion.g
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="52" y="22" width="30" height="60" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.6)" strokeWidth="1.5" />
      {/* Right door bars */}
      <line x1="58" y1="22" x2="58" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      <line x1="67" y1="22" x2="67" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      <line x1="76" y1="22" x2="76" y2="82" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
      {/* Right door handle */}
      <circle cx="56" cy="52" r="3" fill="hsl(var(--primary))" />
    </motion.g>
    
    {/* Lock that appears when closed */}
    <motion.g
      animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="43" y="48" width="14" height="12" rx="2" fill="hsl(var(--primary))" />
      <path d="M46 48 L46 43 Q50 38 54 43 L54 48" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" />
      <circle cx="50" cy="54" r="2" fill="hsl(var(--background))" />
    </motion.g>
  </svg>
);

const DeployIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Laptop/terminal */}
    <rect x="15" y="35" width="70" height="45" rx="3" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary) / 0.1)" />
    <rect x="20" y="40" width="60" height="32" fill="hsl(var(--background))" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
    {/* Code lines */}
    <motion.line
      x1="25"
      y1="48"
      x2="45"
      y2="48"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.line
      x1="25"
      y1="55"
      x2="55"
      y2="55"
      stroke="hsl(var(--primary) / 0.7)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
    />
    <motion.line
      x1="25"
      y1="62"
      x2="40"
      y2="62"
      stroke="hsl(var(--primary) / 0.5)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    />
    {/* 36h badge */}
    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <circle cx="70" cy="25" r="12" fill="hsl(var(--primary))" />
      <text x="70" y="29" textAnchor="middle" fontSize="10" fontWeight="bold" fill="hsl(var(--background))">36h</text>
    </motion.g>
    {/* Cursor blink */}
    <motion.rect
      x="58"
      y="53"
      width="2"
      height="8"
      fill="hsl(var(--primary))"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

const VerdictIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Trophy */}
    <motion.path
      d="M35 30 L35 20 L65 20 L65 30 Q65 50 50 55 Q35 50 35 30 Z"
      fill="hsl(var(--primary) / 0.2)"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      animate={{ filter: ["drop-shadow(0 0 5px hsl(var(--primary)))", "drop-shadow(0 0 15px hsl(var(--primary)))", "drop-shadow(0 0 5px hsl(var(--primary)))"] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Trophy handles */}
    <path d="M35 25 Q25 25 25 35 Q25 45 35 45" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    <path d="M65 25 Q75 25 75 35 Q75 45 65 45" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    {/* Trophy base */}
    <rect x="42" y="55" width="16" height="8" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <rect x="38" y="63" width="24" height="5" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <rect x="34" y="68" width="32" height="8" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    {/* Star */}
    <motion.path
      d="M50 28 L52 34 L58 34 L53 38 L55 44 L50 40 L45 44 L47 38 L42 34 L48 34 Z"
      fill="hsl(var(--primary))"
      animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ transformOrigin: "50px 36px" }}
    />
    {/* Sparkles */}
    <motion.circle
      cx="30"
      cy="20"
      r="2"
      fill="hsl(var(--primary))"
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
    />
    <motion.circle
      cx="70"
      cy="18"
      r="2"
      fill="hsl(var(--primary))"
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
    />
    <motion.circle
      cx="75"
      cy="50"
      r="1.5"
      fill="hsl(var(--primary))"
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

const milestoneIcons = [BeaconIcon, GateIcon, DeployIcon, VerdictIcon];

const milestones = [
  {
    title: "The Beacon Lit",
    category: "DEC 19, 2025",
    status: "Registration Opens",
    description: "The signal is lit. Registration opens for all vigilante coders.",
  },
  {
    title: "Gate Closure",
    category: "FEB 14, 2026",
    status: "Team Formation",
    description: "Registration ends. Form your squad and prepare for deployment.",
  },
  {
    title: "Deployment",
    category: "MAR 13, 2026",
    status: "36 Hours",
    description: "The hackathon begins at 09:00 AM. 36 hours of intense innovation.",
  },
  {
    title: "The Verdict",
    category: "MAR 15, 2026",
    status: "Winners",
    description: "Final pitches and prize distribution. The city's fate is decided.",
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
              Operation Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
              TIMELINE
              <br />
              <span className="text-gradient">& OPERATIONS</span>
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

        <div className={`grid gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 ease-in-out ${expandedCard !== null && !isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}`}>
          {milestones.map((milestone, index) => {
            const IconComponent = milestoneIcons[index];
            return (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => handleCardClick(index)}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out bg-gradient-to-b from-card via-card/90 to-background ${
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

              {/* SVG Icon Background */}
              <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-in-out ${
                expandedCard === index 
                  ? isMobile 
                    ? 'hidden' 
                    : 'w-1/2'
                  : 'w-full'
              }`}>
                <div className="w-full h-full max-w-[180px] max-h-[180px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <IconComponent />
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-bat-black via-bat-black/40 to-transparent group-hover:via-bat-black/50 transition-all duration-700 ease-in-out ${
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
          );
          })}
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
