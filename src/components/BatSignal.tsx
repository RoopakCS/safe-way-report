export const BatSignal = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Bat signal light beam - CSS animation only */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1200px] animate-bat-signal"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, transparent 45%, hsl(45 100% 50% / 0.1) 50%, transparent 55%)`,
        }}
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
    </div>
  );
};
