import { useMemo } from 'react';

export default function ParticleField({ count = 24, variant = 'cyan', className = '' }) {
  const particles = useMemo(() => {
    const colors = [
      'rgba(2,132,199,0.18)',
      'rgba(3,105,161,0.14)',
      'rgba(125,211,252,0.20)',
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: -(Math.random() * 10),
      duration: Math.random() * 8 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count, variant]);

  return (
    <div className={`hidden sm:block absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full particle-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
