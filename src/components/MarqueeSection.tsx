export const MarqueeSection = () => {
  const words = ["JUSTICE", "◆", "VENGEANCE", "◆", "FEAR", "◆", "DARKNESS", "◆", "LEGEND", "◆"];
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <section className="py-8 sm:py-10 md:py-12 overflow-hidden border-y border-primary/20 bg-card/30 relative">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="animate-marquee whitespace-nowrap flex">
        {repeatedWords.map((word, index) => (
          <span
            key={index}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mx-4 sm:mx-6 md:mx-8 text-foreground/10 hover:text-primary/40 transition-colors cursor-default tracking-[0.05em] sm:tracking-[0.1em]"
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};
