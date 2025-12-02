import { useMemo } from "react";

export const RainEffect = () => {
  // Reduce rain drops for performance - was 50, now 20
  const rainDrops = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${0.5 + Math.random() * 0.5}s`,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  return (
    <div className="rain-container" aria-hidden="true">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};
