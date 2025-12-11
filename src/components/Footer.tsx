import batmanLogo from "@/assets/ts-logo.png";
import FallingText from "./FallingText";
import "./FallingText.css";

const navLinks = [
  { name: "Mission", href: "#about" },
  { name: "Rewards", href: "#prizes" },
  { name: "Battlefields", href: "#domains" },
  { name: "Timeline", href: "#timeline" },
  { name: "Alliance", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/techsocietysec/" },
  { name: "Twitter", href: "https://x.com/techsocietysec" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/techsocietysec" },
  { name: "Facebook", href: "https://www.facebook.com/techsocietysec" },
  { name: "YouTube", href: "https://www.youtube.com/@techsocietysec" },
];

export const Footer = () => {
  return (
    <footer className="relative w-full z-10">
      {/* Main Footer */}
      <div className="py-12 md:py-16 border-t border-primary/20 relative bg-background w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-bat-black to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 md:mb-16">
            <div className="sm:col-span-2 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={batmanLogo} alt="Hack Hustle" className="w-12 h-12 sm:w-12 sm:h-12 object-contain" />
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display tracking-[0.1em] sm:tracking-[0.15em] text-foreground leading-none">TECH SOCIETY</span>
                  <span className="text-xs sm:text-xs font-body tracking-[0.1em] text-primary/80 mt-1">Saveetha Engineering College</span>
                </div>
              </div>
              <p className="text-sm sm:text-sm text-muted-foreground font-body max-w-sm tracking-wide leading-relaxed">
                A 36-hour offline innovation marathon to build solutions that secure our future. 
                Join 500+ developers and answer the call.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-0">
              <span className="text-xs sm:text-xs font-body text-primary tracking-[0.2em] sm:tracking-[0.3em] mb-4 block uppercase">
                Navigation
              </span>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm sm:text-sm font-body text-foreground hover:text-primary transition-colors link-underline tracking-wider"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 sm:mt-0">
              <span className="text-xs sm:text-xs font-body text-primary tracking-[0.2em] sm:tracking-[0.3em] mb-4 block uppercase">
                Social
              </span>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm sm:text-sm font-body text-foreground hover:text-primary transition-colors link-underline tracking-wider"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10 gap-4">
            <span className="text-xs sm:text-xs font-body text-muted-foreground tracking-wider text-center md:text-left">
              © Hack Hustle 2026. Saveetha Engineering College.
            </span>
            <span className="text-xs sm:text-xs font-body text-primary/60 tracking-[0.15em] sm:tracking-[0.2em]">
              THE SIGNAL IS LIT
            </span>
          </div>

          {/* Falling Text Interactive Section - Merged into footer */}
          <div className="mt-10 sm:mt-12 pt-8">
            <div className="text-center mb-4">
              <span className="text-xs sm:text-xs font-body text-primary/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Play with the words
              </span>
            </div>
            <div className="h-[180px] sm:h-[200px] md:h-[250px] relative overflow-hidden" style={{ pointerEvents: 'auto' }}>
              <FallingText
                text="VIGILANTE PROTOCOL ALLIANCE SIGNAL LEGACY FORTRESS CODE HACK HUSTLE INNOVATE BUILD CREATE GUARDIAN PROTECT FUTURE TECH DEPLOY MISSION"
                highlightWords={["VIGILANTE", "PROTOCOL", "ALLIANCE", "HACK", "HUSTLE", "CODE", "SIGNAL"]}
                highlightClass="bat-highlight"
                trigger="scroll"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.5}
                fontSize="clamp(0.75rem, 3vw, 1.5rem)"
                mouseConstraintStiffness={0.9}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
