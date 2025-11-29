import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24 relative" ref={ref}>
      {/* Background vertical lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-primary font-body text-xs tracking-[0.3em] mb-3 block uppercase">
              Event Schedule
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TIMELINE
              <br />
              <span className="text-gradient">& MILESTONES</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold link-underline self-start tracking-wider hover:gap-3 transition-all"
          >
            Register Now
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "top" }}
              />

              {/* Image */}
              <motion.img
                src={milestone.image}
                alt={milestone.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bat-black via-bat-black/60 to-bat-black/20 group-hover:via-bat-black/70 transition-all duration-500" />

              {/* Top info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                <motion.span 
                  className="text-[11px] font-body text-primary tracking-[0.15em] uppercase"
                  animate={{ y: hoveredIndex === index ? 0 : -5, opacity: hoveredIndex === index ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.category}
                </motion.span>
                <span className="text-[11px] font-body text-foreground/60 tracking-wider">
                  {milestone.status}
                </span>
              </div>
              
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                {/* Description - shows on hover */}
                <motion.p 
                  className="text-xs font-body text-foreground/70 mb-3 tracking-wide leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.description}
                </motion.p>

                <div className="flex items-end justify-between">
                  <motion.h3 
                    className="text-xl md:text-2xl font-display tracking-wider group-hover:text-primary transition-colors duration-300 uppercase leading-tight"
                    animate={{ y: hoveredIndex === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {milestone.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </motion.h3>
                  
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center border border-primary/50 group-hover:border-primary group-hover:bg-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight 
                      size={16} 
                      className="text-primary group-hover:text-primary-foreground transition-colors" 
                    />
                  </motion.div>
                </div>
              </div>

              {/* Animated scan line */}
              <motion.div 
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                animate={{ 
                  top: hoveredIndex === index ? ["0%", "100%"] : "0%"
                }}
                transition={{ 
                  duration: 2, 
                  repeat: hoveredIndex === index ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline dots */}
        <motion.div 
          className="flex justify-center items-center gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {milestones.map((_, index) => (
            <div key={index} className="flex items-center gap-8">
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary/60"
                animate={{ scale: hoveredIndex === index ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
              />
              {index < milestones.length - 1 && (
                <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-primary/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
