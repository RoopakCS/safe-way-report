import { Building2, Sparkles, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ShinyText from "./ShinyText";

// Placeholder sponsor data
const titleSponsor = {
  name: "Title Sponsor",
  category: "Platinum Partner",
  logo: "TITLE",
  description: "Our premier partner powering innovation",
};

const sponsors = [
  { name: "Gold Sponsor", category: "Gold", logo: "GOLD", tier: "gold" },
  { name: "Silver Sponsor", category: "Silver", logo: "SILVER", tier: "silver" },
  { name: "Bronze Sponsor", category: "Bronze", logo: "BRONZE", tier: "bronze" },
  { name: "Tech Partner", category: "Technology", logo: "TECH", tier: "tech" },
  { name: "Media Partner", category: "Media", logo: "MEDIA", tier: "media" },
  { name: "Community Partner", category: "Community", logo: "COMM", tier: "community" },
];

const tierColors = {
  gold: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400",
  silver: "from-gray-400/20 to-gray-500/10 border-gray-400/30 text-gray-300",
  bronze: "from-orange-600/20 to-orange-700/10 border-orange-600/30 text-orange-400",
  tech: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
  media: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400",
  community: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400",
};

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vertical lines */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        
        {/* Horizontal accent lines */}
        <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
            The Alliance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-3 sm:mb-4">
            OUR SPONSORS
            <br />
            <span className="text-gradient">& PARTNERS</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-2xl mx-auto tracking-wide">
            <ShinyText 
              text="Powering innovation through strategic partnerships and collaborative excellence" 
              disabled={false} 
              speed={3} 
            />
          </p>
        </motion.div>

        {/* Title Sponsor - Featured */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="group relative max-w-4xl mx-auto">
            {/* Spotlight effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative overflow-hidden rounded-lg p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/50 backdrop-blur-sm gotham-card hover-lift">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_20s_linear_infinite]" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                {/* Icon */}
                <div className="p-4 sm:p-5 border-2 border-primary rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 mb-3 bg-primary/20 border border-primary/50 rounded-full">
                    <span className="text-xs sm:text-sm font-body text-primary tracking-[0.2em] uppercase font-semibold">
                      {titleSponsor.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold mb-2 tracking-wide">
                    {titleSponsor.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body tracking-wide">
                    {titleSponsor.description}
                  </p>
                </div>
                
                {/* Logo placeholder */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-primary/50 rounded-lg bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-display text-primary font-bold tracking-wider">
                    {titleSponsor.logo}
                  </span>
                </div>
              </div>
              
              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Other Sponsors Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className={`relative h-full overflow-hidden p-5 sm:p-6 bg-gradient-to-br ${tierColors[sponsor.tier as keyof typeof tierColors]} border backdrop-blur-sm gotham-card hover-lift`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                  borderRadius: '0',
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent" />
                
                {/* Diagonal corner cut effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary/20 group-hover:border-t-primary transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-primary/20 group-hover:border-b-primary transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Category badge */}
                  <div className="mb-3 sm:mb-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-card/40 border border-primary/30 rounded-full">
                      {sponsor.tier === "gold" && <Award className="w-3.5 h-3.5 text-amber-400" />}
                      {sponsor.tier === "silver" && <Award className="w-3.5 h-3.5 text-gray-300" />}
                      {sponsor.tier === "bronze" && <Award className="w-3.5 h-3.5 text-orange-400" />}
                      {sponsor.tier === "tech" && <Zap className="w-3.5 h-3.5 text-blue-400" />}
                      {sponsor.tier === "media" && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                      {sponsor.tier === "community" && <Building2 className="w-3.5 h-3.5 text-green-400" />}
                      <span className="text-[9px] sm:text-[10px] font-body tracking-[0.15em] uppercase font-semibold">
                        {sponsor.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Logo placeholder */}
                  <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4 w-full">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 border border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                        borderRadius: '0',
                      }}
                    >
                      <span className="text-base sm:text-lg font-display font-bold tracking-wider">
                        {sponsor.logo}
                      </span>
                    </div>
                  </div>
                  
                  {/* Sponsor name */}
                  <h4 className="text-sm sm:text-base font-display font-semibold tracking-wide">
                    {sponsor.name}
                  </h4>
                </div>
                
                {/* Side accent lines */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-primary/10 group-hover:bg-primary/30 transition-colors duration-300" />
                <div className="absolute top-0 right-0 bottom-0 w-px bg-primary/10 group-hover:bg-primary/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }
      `}</style>
    </section>
  );
};

