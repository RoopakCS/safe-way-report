import { useEffect, useRef } from "react";

interface CityScapeProps {
  className?: string;
}

export const CityScape = ({ className = "" }: CityScapeProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    
    // Set initial position (simulating mouse at center-right of screen)
    const initialOffsetX = -0.25; // Offset to the right
    const initialOffsetY = 0;
    
    const parallaxElements = sceneRef.current.querySelectorAll('.parallax');
    parallaxElements.forEach((el) => {
      const offset = parseInt((el as HTMLElement).dataset.offset || '0');
      const translate = `translate3d(${Math.round(initialOffsetX * offset)}px, ${Math.round(initialOffsetY * offset)}px, 0px)`;
      (el as HTMLElement).style.transform = translate;
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      
      const w = window.innerWidth;
      const h = window.innerHeight;
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;

      const parallaxElements = sceneRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const offset = parseInt((el as HTMLElement).dataset.offset || '0');
        const translate = `translate3d(${Math.round(offsetX * offset)}px, ${Math.round(offsetY * offset)}px, 0px)`;
        (el as HTMLElement).style.transform = translate;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={sceneRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Stars/particles in the sky */}
      <div data-offset="15" className="parallax absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Distant clouds/fog */}
      <div 
        data-offset="90" 
        className="parallax absolute left-1/2 -translate-x-1/2 bottom-[35%] w-[120%] h-[200px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Back buildings - tallest, most distant */}
      <svg 
        data-offset="50" 
        className="parallax absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] h-auto opacity-40"
        viewBox="0 0 1400 350" 
        fill="none" 
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Distant skyscrapers */}
        <rect x="50" y="150" width="60" height="200" fill="hsl(var(--primary) / 0.15)" />
        <rect x="55" y="155" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="75" y="155" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="55" y="180" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="75" y="180" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        
        <rect x="140" y="80" width="80" height="270" fill="hsl(var(--primary) / 0.12)" />
        <rect x="145" y="85" width="8" height="12" fill="hsl(var(--primary) / 0.25)" />
        <rect x="160" y="85" width="8" height="12" fill="hsl(var(--primary) / 0.25)" />
        <rect x="175" y="85" width="8" height="12" fill="hsl(var(--primary) / 0.25)" />
        <rect x="190" y="85" width="8" height="12" fill="hsl(var(--primary) / 0.25)" />
        
        <polygon points="250,50 280,50 290,100 240,100" fill="hsl(var(--primary) / 0.18)" />
        <rect x="250" y="100" width="40" height="250" fill="hsl(var(--primary) / 0.15)" />
        
        <rect x="320" y="120" width="70" height="230" fill="hsl(var(--primary) / 0.13)" />
        <rect x="325" y="125" width="12" height="18" fill="hsl(var(--primary) / 0.28)" />
        <rect x="345" y="125" width="12" height="18" fill="hsl(var(--primary) / 0.28)" />
        <rect x="365" y="125" width="12" height="18" fill="hsl(var(--primary) / 0.28)" />
        
        <rect x="420" y="180" width="50" height="170" fill="hsl(var(--primary) / 0.14)" />
        
        <rect x="500" y="60" width="90" height="290" fill="hsl(var(--primary) / 0.16)" />
        <rect x="505" y="65" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="525" y="65" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="545" y="65" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        <rect x="565" y="65" width="10" height="15" fill="hsl(var(--primary) / 0.3)" />
        
        <polygon points="620,30 650,30 660,80 610,80" fill="hsl(var(--primary) / 0.2)" />
        <rect x="620" y="80" width="40" height="270" fill="hsl(var(--primary) / 0.15)" />
        
        <rect x="690" y="140" width="60" height="210" fill="hsl(var(--primary) / 0.12)" />
        
        <rect x="780" y="90" width="85" height="260" fill="hsl(var(--primary) / 0.14)" />
        <rect x="785" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.28)" />
        <rect x="805" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.28)" />
        <rect x="825" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.28)" />
        <rect x="845" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.28)" />
        
        <rect x="900" y="160" width="55" height="190" fill="hsl(var(--primary) / 0.13)" />
        
        <rect x="980" y="70" width="70" height="280" fill="hsl(var(--primary) / 0.15)" />
        <polygon points="995,40 1030,40 1040,70 985,70" fill="hsl(var(--primary) / 0.18)" />
        
        <rect x="1080" y="130" width="65" height="220" fill="hsl(var(--primary) / 0.12)" />
        
        <rect x="1170" y="100" width="80" height="250" fill="hsl(var(--primary) / 0.14)" />
        <rect x="1175" y="105" width="10" height="15" fill="hsl(var(--primary) / 0.25)" />
        <rect x="1195" y="105" width="10" height="15" fill="hsl(var(--primary) / 0.25)" />
        <rect x="1215" y="105" width="10" height="15" fill="hsl(var(--primary) / 0.25)" />
        <rect x="1235" y="105" width="10" height="15" fill="hsl(var(--primary) / 0.25)" />
        
        <rect x="1280" y="170" width="70" height="180" fill="hsl(var(--primary) / 0.13)" />
      </svg>

      {/* Mid buildings */}
      <svg 
        data-offset="30" 
        className="parallax absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[130%] max-w-[1300px] h-auto opacity-60"
        viewBox="0 0 1300 280" 
        fill="none" 
        preserveAspectRatio="xMidYMax slice"
      >
        <rect x="20" y="100" width="70" height="180" fill="hsl(var(--primary) / 0.2)" />
        <rect x="25" y="110" width="12" height="18" fill="hsl(var(--primary) / 0.4)" />
        <rect x="45" y="110" width="12" height="18" fill="hsl(var(--primary) / 0.4)" />
        <rect x="65" y="110" width="12" height="18" fill="hsl(var(--primary) / 0.4)" />
        
        <rect x="110" y="60" width="55" height="220" fill="hsl(var(--primary) / 0.22)" />
        <rect x="115" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.45)" />
        <rect x="130" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.45)" />
        <rect x="145" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.45)" />
        
        <rect x="190" y="130" width="80" height="150" fill="hsl(var(--primary) / 0.18)" />
        
        <rect x="300" y="80" width="65" height="200" fill="hsl(var(--primary) / 0.2)" />
        <polygon points="315,50 350,50 355,80 310,80" fill="hsl(var(--primary) / 0.25)" />
        
        <rect x="400" y="150" width="50" height="130" fill="hsl(var(--primary) / 0.19)" />
        
        <rect x="480" y="90" width="75" height="190" fill="hsl(var(--primary) / 0.21)" />
        <rect x="485" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        <rect x="505" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        <rect x="525" y="95" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        
        <rect x="590" y="120" width="60" height="160" fill="hsl(var(--primary) / 0.17)" />
        
        <rect x="680" y="70" width="70" height="210" fill="hsl(var(--primary) / 0.2)" />
        <rect x="685" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.4)" />
        <rect x="705" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.4)" />
        <rect x="725" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.4)" />
        
        <rect x="780" y="140" width="55" height="140" fill="hsl(var(--primary) / 0.18)" />
        
        <rect x="860" y="100" width="80" height="180" fill="hsl(var(--primary) / 0.2)" />
        <polygon points="880,70 920,70 930,100 870,100" fill="hsl(var(--primary) / 0.24)" />
        
        <rect x="970" y="130" width="60" height="150" fill="hsl(var(--primary) / 0.19)" />
        
        <rect x="1060" y="80" width="70" height="200" fill="hsl(var(--primary) / 0.21)" />
        <rect x="1065" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        <rect x="1085" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        <rect x="1105" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.42)" />
        
        <rect x="1160" y="150" width="55" height="130" fill="hsl(var(--primary) / 0.17)" />
        
        <rect x="1230" y="110" width="60" height="170" fill="hsl(var(--primary) / 0.2)" />
      </svg>

      {/* Front buildings - closest, most detailed */}
      <svg 
        data-offset="15" 
        className="parallax absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-[1200px] h-auto opacity-80"
        viewBox="0 0 1200 200" 
        fill="none" 
        preserveAspectRatio="xMidYMax slice"
      >
        <rect x="0" y="80" width="80" height="120" fill="hsl(var(--primary) / 0.25)" />
        <rect x="5" y="90" width="14" height="20" fill="hsl(var(--primary) / 0.5)" />
        <rect x="25" y="90" width="14" height="20" fill="hsl(var(--primary) / 0.5)" />
        <rect x="45" y="90" width="14" height="20" fill="hsl(var(--primary) / 0.5)" />
        <rect x="65" y="90" width="10" height="15" fill="hsl(var(--primary) / 0.5)" />
        
        <rect x="100" y="50" width="60" height="150" fill="hsl(var(--primary) / 0.28)" />
        <rect x="105" y="55" width="10" height="15" fill="hsl(var(--primary) / 0.55)" />
        <rect x="125" y="55" width="10" height="15" fill="hsl(var(--primary) / 0.55)" />
        <rect x="145" y="55" width="10" height="15" fill="hsl(var(--primary) / 0.55)" />
        
        <rect x="180" y="100" width="70" height="100" fill="hsl(var(--primary) / 0.23)" />
        
        <rect x="280" y="60" width="55" height="140" fill="hsl(var(--primary) / 0.26)" />
        <rect x="285" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.52)" />
        <rect x="300" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.52)" />
        <rect x="315" y="65" width="8" height="12" fill="hsl(var(--primary) / 0.52)" />
        
        <rect x="360" y="120" width="50" height="80" fill="hsl(var(--primary) / 0.22)" />
        
        <rect x="440" y="70" width="65" height="130" fill="hsl(var(--primary) / 0.27)" />
        <rect x="445" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        <rect x="465" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        <rect x="485" y="75" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        
        <rect x="530" y="90" width="60" height="110" fill="hsl(var(--primary) / 0.24)" />
        
        <rect x="620" y="55" width="70" height="145" fill="hsl(var(--primary) / 0.28)" />
        <rect x="625" y="60" width="12" height="18" fill="hsl(var(--primary) / 0.56)" />
        <rect x="645" y="60" width="12" height="18" fill="hsl(var(--primary) / 0.56)" />
        <rect x="665" y="60" width="12" height="18" fill="hsl(var(--primary) / 0.56)" />
        
        <rect x="720" y="110" width="55" height="90" fill="hsl(var(--primary) / 0.22)" />
        
        <rect x="800" y="65" width="60" height="135" fill="hsl(var(--primary) / 0.26)" />
        <rect x="805" y="70" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
        <rect x="825" y="70" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
        <rect x="845" y="70" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
        
        <rect x="890" y="100" width="50" height="100" fill="hsl(var(--primary) / 0.23)" />
        
        <rect x="970" y="75" width="70" height="125" fill="hsl(var(--primary) / 0.27)" />
        <rect x="975" y="80" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        <rect x="995" y="80" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        <rect x="1015" y="80" width="10" height="15" fill="hsl(var(--primary) / 0.54)" />
        
        <rect x="1070" y="95" width="55" height="105" fill="hsl(var(--primary) / 0.24)" />
        
        <rect x="1140" y="80" width="60" height="120" fill="hsl(var(--primary) / 0.26)" />
        <rect x="1145" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
        <rect x="1165" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
        <rect x="1185" y="85" width="10" height="15" fill="hsl(var(--primary) / 0.52)" />
      </svg>

      {/* Ground/street level */}
      <div 
        data-offset="5" 
        className="parallax absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-black via-[#0a0a0a] to-transparent"
      />
      
      {/* Street lights glow */}
      <div data-offset="10" className="parallax absolute bottom-[6%] left-0 right-0 flex justify-around px-[10%]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/60 blur-sm"
            style={{
              boxShadow: '0 0 15px 5px hsl(var(--primary) / 0.3)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CityScape;
