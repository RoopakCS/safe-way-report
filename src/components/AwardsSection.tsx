import { Trophy, Award, Gift, Shirt, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ShinyText from "./ShinyText";

const prizes = [
  { 
    amount: "₹20,000", 
    title: "Grand Winner", 
    description: "The ultimate champion takes home the grand prize. Recognition, glory, and rewards await.",
    icon: Trophy,
    rank: "1ST"
  },
  { 
    amount: "₹15,000", 
    title: "First Runner-Up", 
    description: "Excellence deserves recognition. Second place earns significant rewards.",
    icon: Award,
    rank: "2ND"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const AwardsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-transparent" ref={ref}>
      {/* Background effects with decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-primary/5 blur-[100px] sm:blur-[150px] rounded-full" />
        
        {/* Decorative lines - vertical */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden md:block" />
        
        {/* Decorative lines - horizontal */}
        <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block" />
        <div className="absolute left-0 right-0 bottom-[25%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
            The Rewards
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-2 sm:mb-3">
            PRIZES &amp;
            <br />
            <span className="text-gradient">RECOGNITION</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground font-body max-w-xl mx-auto tracking-wide">
            <ShinyText 
              text="Compete for exciting prizes and recognition across all domains." 
              disabled={false} 
              speed={3} 
            />
          </p>
        </motion.div>

        {/* Main prizes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {prizes.map((prize) => {
            const Icon = prize.icon;
            
            return (
              <motion.div
                key={prize.title}
                variants={itemVariants}
                className="group relative gotham-card hover-lift"
              >
                <div className="relative overflow-hidden rounded-lg p-6 sm:p-8 md:p-10 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 min-h-[280px] sm:min-h-[320px] flex flex-col">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Rank badge */}
                  <div className="absolute -top-1 -right-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary text-primary-foreground font-display text-sm sm:text-base tracking-wider z-10 shadow-lg">
                    {prize.rank}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
                      <div className="p-3 sm:p-4 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold mb-1">
                          {prize.amount}
                        </div>
                        <div className="text-xs text-muted-foreground font-body tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                          Cash Prize
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-display mb-3 sm:mb-4 group-hover:text-primary transition-colors tracking-[0.1em] uppercase font-bold">
                      {prize.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground font-body tracking-wide leading-relaxed flex-1">
                      <ShinyText 
                        text={prize.description} 
                        disabled={false} 
                        speed={3} 
                      />
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Swags card - Professional Design */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="group relative overflow-hidden rounded-lg p-6 sm:p-8 md:p-10 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 gotham-card hover-lift">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
              <div className="p-4 sm:p-5 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 rounded-lg flex-shrink-0">
                <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold mb-2 tracking-[0.05em]">
                  PARTICIPANT MERCHANDISE
                </div>
                <h3 className="text-sm sm:text-base font-display mb-3 sm:mb-4 text-muted-foreground tracking-[0.15em] uppercase font-semibold">
                  Included for All Participants
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-body tracking-wide leading-relaxed">
                  <ShinyText 
                    text="Exclusive event merchandise, branded apparel, collectible items, and premium accessories. Every participant receives a curated package regardless of competition results." 
                    disabled={false} 
                    speed={3} 
                  />
                </p>
              </div>
              
              <div className="hidden md:flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <div className="p-2.5 border border-primary/20 rounded-lg bg-card/50">
                  <Shirt className="w-6 h-6 sm:w-7 sm:h-7 text-primary/80" />
                </div>
                <div className="p-2.5 border border-primary/20 rounded-lg bg-card/50">
                  <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-primary/80" />
                </div>
                <div className="p-2.5 border border-primary/20 rounded-lg bg-card/50">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary/80" />
                </div>
              </div>
            </div>
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
