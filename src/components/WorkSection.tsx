import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Scroll progress for the timeline trail
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const trailHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-24 relative" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-12 sm:mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
            Operation Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">
            TIMELINE
            <br />
            <span className="text-gradient">& OPERATIONS</span>
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          {/* Central timeline line - background */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-primary/20 sm:-translate-x-1/2" />
          
          {/* Central timeline line - animated trail */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 top-0 w-px sm:-translate-x-1/2 origin-top"
            style={{ height: trailHeight }}
          >
            <div className="w-full h-full bg-gradient-to-b from-primary via-primary to-primary/50" />
            {/* Glowing tip */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary blur-sm" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
          </motion.div>
          
          {milestones.map((milestone, index) => {
            const IconComponent = milestoneIcons[index];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-20">
                  <motion.div 
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-background border-2 border-primary"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-40px)] ${isEven ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                  <motion.div
                    className="group relative bg-gradient-to-br from-card via-card/95 to-background border border-primary/20 hover:border-primary/50 p-5 sm:p-6 transition-all duration-500"
                    whileHover={{ y: -5 }}
                  >
                    {/* Corner accents */}
                    <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Date badge */}
                    <span className="inline-block text-[10px] sm:text-xs font-body text-primary tracking-[0.15em] uppercase mb-3 px-3 py-1 bg-primary/10 border border-primary/30">
                      {milestone.category}
                    </span>
                    
                    {/* Icon and Title row */}
                    <div className={`flex items-center gap-4 mb-3 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <IconComponent />
                      </div>
                      <div className={isEven ? 'sm:text-right' : ''}>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-display tracking-wider text-foreground group-hover:text-primary transition-colors duration-300 uppercase">
                          {milestone.title}
                        </h3>
                        <span className="text-xs sm:text-sm font-body text-primary/80 tracking-wider">
                          {milestone.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-sm sm:text-base font-body text-foreground/70 leading-relaxed tracking-wide ${isEven ? 'sm:text-right' : ''}`}>
                      {milestone.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Connector line to node */}
                <div className={`hidden sm:block absolute top-1/2 w-8 h-px bg-gradient-to-r ${
                  isEven 
                    ? 'right-1/2 mr-2.5 from-primary/50 to-transparent' 
                    : 'left-1/2 ml-2.5 from-transparent to-primary/50'
                }`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-body text-sm sm:text-base font-semibold tracking-wider hover:bg-primary/90 hover:gap-3 transition-all duration-300"
          >
            Register Now
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
