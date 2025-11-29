import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Gift, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const prizes = [
  { 
    amount: "₹20,000", 
    title: "Grand Winner", 
    description: "The ultimate champion takes home the grand prize. Recognition, glory, and rewards await.",
    icon: Trophy,
    color: "primary",
    rank: "1ST"
  },
  { 
    amount: "₹15,000", 
    title: "First Runner-Up", 
    description: "Excellence deserves recognition. Second place earns significant rewards.",
    icon: Award,
    color: "primary",
    rank: "2ND"
  },
  { 
    amount: "Swags", 
    title: "All Participants", 
    description: "Exclusive merchandise, t-shirts, stickers, and goodies for everyone who participates.",
    icon: Gift,
    color: "primary",
    rank: null
  },
];

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[200px] rounded-full" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
              The Rewards
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6">
            PRIZES &amp;
            <br />
            <span className="text-gradient">RECOGNITION</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto tracking-wide text-lg">
            Compete for exciting prizes and recognition across all domains. 
            Top performers will be celebrated and rewarded for their innovation.
          </p>
        </motion.div>

        {/* Main prizes - Grand Winner & Runner Up */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {prizes.slice(0, 2).map((prize, index) => {
            const Icon = prize.icon;
            const isFirst = index === 0;
            
            return (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className={cn(
                  "relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500",
                  "bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-md",
                  "border-2 hover:border-primary/80",
                  isFirst ? "border-primary/50" : "border-primary/30"
                )}>
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Rank badge */}
                  {prize.rank && (
                    <motion.div 
                      className="absolute -top-3 -right-3 w-16 h-16 bg-primary flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="font-display text-primary-foreground text-xl font-bold -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        {prize.rank}
                      </span>
                    </motion.div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <motion.div 
                        className="p-4 bg-primary/20 border-2 border-primary/50 rounded-xl group-hover:bg-primary/30 transition-colors duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div 
                          className="text-5xl md:text-6xl font-display text-primary mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                        >
                          {prize.amount}
                        </motion.div>
                        <div className="text-xs text-muted-foreground font-body tracking-[0.3em] uppercase">
                          Cash Prize
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                      {prize.title}
                    </h3>
                    
                    <p className="text-foreground/70 font-body tracking-wide leading-relaxed">
                      {prize.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/30"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swags card - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="group relative overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-r from-card/80 via-card/60 to-card/80 backdrop-blur-md border-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 100%" }}
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <motion.div 
                className="p-5 bg-primary/20 border-2 border-primary/50 rounded-xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Gift className="w-12 h-12 text-primary" />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-display text-primary mb-2">
                  Swags
                </div>
                <h3 className="text-xl md:text-2xl font-display mb-3 tracking-wide">
                  All Participants
                </h3>
                <p className="text-foreground/70 font-body tracking-wide leading-relaxed max-w-2xl">
                  Exclusive merchandise, t-shirts, stickers, and goodies for everyone who participates. 
                  Walk away with awesome swag regardless of the outcome!
                </p>
              </div>
              
              <motion.div 
                className="hidden md:flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                {["👕", "🎁", "✨"].map((emoji, i) => (
                  <motion.span 
                    key={i}
                    className="text-4xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
