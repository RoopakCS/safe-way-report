import { useState, useRef, useEffect } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import batmanLogo from "@/assets/hh26-logo.png";
import backgroundMusic from "@/assets/background-music.mp3.mp3";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" },
  { label: "Domains", href: "#domains" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for background music
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (soundOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Audio playback failed:", error);
        });
      }
      setSoundOn(!soundOn);
    }
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src={batmanLogo} alt="Hack Hustle" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display tracking-[0.15em] sm:tracking-[0.2em] text-foreground leading-none">
                HACK HUSTLE
              </span>
              <span className="text-[10px] sm:text-xs font-body tracking-[0.1em] sm:tracking-[0.15em] text-primary/80 mt-0.5">
                Code Knight
              </span>
            </div>
          </motion.a>
          
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleSound}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle sound"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </motion.button>
            
            <div className="w-px h-6 bg-border mx-1" />
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bat-black"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
            </div>
            
            <div className="relative h-full flex flex-col items-center justify-center">
              <ul className="space-y-2 text-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group block text-5xl md:text-7xl font-display text-foreground hover:text-primary transition-colors duration-300 tracking-wider"
                    >
                      <span className="inline-block group-hover:animate-glitch">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-16 flex gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {["Twitter", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-body text-muted-foreground hover:text-primary transition-colors link-underline tracking-wider"
                  >
                    {social}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
