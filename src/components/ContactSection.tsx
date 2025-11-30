import { ArrowUpRight, Radio, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import batSignal from "@/assets/bat-signal.jpg";
import ShinyText from "./ShinyText";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={batSignal} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 block uppercase">
              The Signal
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 sm:mb-6">
              CALL THE
              <br />
              <span className="text-gradient">DARK KNIGHT</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-6 sm:mb-8 max-w-md tracking-wide">
              <ShinyText 
                text="When Gotham needs its guardian, light the signal. I'll be watching from the shadows." 
                disabled={false} 
                speed={3} 
              />
            </p>

            <div className="space-y-4 sm:space-y-5">
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Radio size={18} className="sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-body text-muted-foreground block tracking-wider uppercase">Frequency</span>
                  <span className="text-sm sm:text-base font-body text-foreground group-hover:text-primary transition-colors tracking-wider">GCPD ROOFTOP</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <MapPin size={18} className="sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-body text-muted-foreground block tracking-wider uppercase">Location</span>
                  <span className="text-sm sm:text-base font-body text-foreground group-hover:text-primary transition-colors tracking-wider">GOTHAM CITY</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-4 sm:space-y-5 gotham-card p-5 sm:p-6">
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.15em] sm:tracking-[0.2em] uppercase">Codename</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors tracking-wide"
                  placeholder="Commissioner Gordon"
                />
              </div>
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.15em] sm:tracking-[0.2em] uppercase">Secure Channel</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors tracking-wide"
                  placeholder="gcpd@gotham.gov"
                />
              </div>
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.15em] sm:tracking-[0.2em] uppercase">Intelligence Report</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none tracking-wide"
                  placeholder="Report suspicious activity..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-primary text-primary-foreground font-display text-sm sm:text-base tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 glow-gold"
                whileHover={{ scale: 1.02, boxShadow: "0 0 60px hsl(45 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                LIGHT THE SIGNAL
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
