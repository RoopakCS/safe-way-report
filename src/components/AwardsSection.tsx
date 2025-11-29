import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Gift, Shirt, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs tracking-[0.3em] mb-4 block uppercase">
            The Rewards
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            PRIZES &amp;
            <br />
            <span className="text-gradient">RECOGNITION</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto tracking-wide text-sm">
            Compete for exciting prizes and recognition across all domains.
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            
            return (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-lg p-6 md:p-8 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  {/* Rank badge */}
                  <div className="absolute -top-1 -right-1 px-3 py-1 bg-primary text-primary-foreground font-display text-sm tracking-wider">
                    {prize.rank}
                  </div>
                  
                  {/* Content */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 border border-primary/40 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div>
                      <div className="text-4xl md:text-5xl font-display text-primary">
                        {prize.amount}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-body tracking-[0.3em] uppercase mt-1">
                        Cash Prize
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-display mb-2 tracking-wide uppercase">
                    {prize.title}
                  </h3>
                  
                  <p className="text-foreground/60 font-body text-sm tracking-wide leading-relaxed">
                    {prize.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swags card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative overflow-hidden rounded-lg p-6 md:p-8 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 border border-primary/40 rounded-lg bg-primary/10">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-display text-primary italic mb-1">
                  Swags
                </div>
                <h3 className="text-base md:text-lg font-display mb-2 tracking-wide uppercase">
                  All Participants
                </h3>
                <p className="text-foreground/60 font-body text-sm tracking-wide leading-relaxed">
                  Exclusive merchandise, t-shirts, stickers, and goodies for everyone who participates. 
                  Walk away with awesome swag regardless of the outcome!
                </p>
              </div>
              
              <div className="hidden md:flex items-center gap-4">
                <Shirt className="w-10 h-10 text-emerald-500/80" />
                <Gift className="w-10 h-10 text-rose-400/80" />
                <Sparkles className="w-10 h-10 text-amber-400/80" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
