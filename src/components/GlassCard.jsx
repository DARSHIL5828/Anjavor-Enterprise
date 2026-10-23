import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useMobileDetect from '../hooks/useMobileDetect';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = '',
  spotlight = true,
  watermark = '',
  showBrackets = true,
  showSheen = true,
  topBeam = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMobileDetect();

  // On mobile, disable all mouse-tracking effects entirely
  const enableSpotlight = spotlight && !isMobile;
  const enableSheen = showSheen && !isMobile;
  const enableTopBeam = topBeam && !isMobile;
  const enableHover = hover && !isMobile;

  const handleMouseMove = (e) => {
    if (!enableSpotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: -1000, y: -1000 });
  };

  const baseClasses = isMobile
    ? 'glass-card-mobile group relative overflow-hidden select-none-text'
    : 'glass-card group relative overflow-hidden select-none-text';

  const cardContent = (
    <>
      {/* 1. Top Crystal Edge Catch-Light */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 z-20"
        aria-hidden="true"
      />

      {/* 2. Top Dynamic Energy Beam (Expands on Hover) — desktop only */}
      {enableTopBeam && (
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4/5 transition-all duration-500 ease-out bg-gradient-to-r from-transparent via-ice to-transparent shadow-[0_0_12px_rgba(2,132,199,0.8)] z-30"
          aria-hidden="true"
        />
      )}

      {/* 3. Subtle Cyber Micro-Grid Pattern — desktop only (causes paint on mobile) */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] group-hover:opacity-[0.07] transition-opacity duration-500 z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(2, 132, 199, 0.9) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />
      )}

      {/* 4. Interactive Mouse Spotlight Glow — desktop only */}
      {enableSpotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 132, 199, 0.22), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 5. Interactive Border Light Following Cursor — desktop only */}
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] z-10 transition-opacity duration-200"
          style={{
            padding: '1.5px',
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 132, 199, 0.65), transparent 60%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          aria-hidden="true"
        />
      )}

      {/* 6. Diagonal Sheen Wave Sweep on Hover — desktop only */}
      {enableSheen && (
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/35 to-transparent z-10 skew-x-12"
          aria-hidden="true"
        />
      )}

      {/* 7. Cyber Corner Tech Brackets */}
      {showBrackets && (
        <>
          {/* Top-Left Bracket */}
          <div
            className="pointer-events-none absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-line/40 group-hover:border-ice/70 transition-colors duration-300 z-20"
            aria-hidden="true"
          />
          {/* Bottom-Right Bracket */}
          <div
            className="pointer-events-none absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-line/40 group-hover:border-ice/70 transition-colors duration-300 z-20"
            aria-hidden="true"
          />
        </>
      )}

      {/* 8. Watermark Text / Number (Optional) */}
      {watermark && (
        <div
          className="pointer-events-none absolute top-2 right-4 font-heading text-5xl sm:text-6xl font-extrabold text-ice/[0.08] group-hover:text-ice/[0.16] group-hover:scale-105 transition-all duration-300 select-none z-0"
          aria-hidden="true"
        >
          {watermark}
        </div>
      )}

      {/* 9. Cyber Corner Telemetry Indicator on Hover — desktop only */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute top-3.5 right-3.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ice animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-ice shadow-[0_0_8px_rgba(2,132,199,0.85)]" />
        </div>
      )}

      {/* 10. Ambient Glow Blob — desktop only */}
      {glow && !isMobile && (
        <div
          className="glow-blob w-44 h-44 -top-12 -right-12 pointer-events-none z-0"
          style={{ background: glow }}
          aria-hidden="true"
        />
      )}

      {/* Card Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </>
  );

  if (!enableHover) {
    return (
      <div
        ref={cardRef}
        className={`${baseClasses} ${className}`}
        onMouseMove={enableSpotlight ? handleMouseMove : undefined}
        onMouseEnter={enableSpotlight ? handleMouseEnter : undefined}
        onMouseLeave={enableSpotlight ? handleMouseLeave : undefined}
        {...props}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${baseClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -6,
        transition: { type: 'spring', stiffness: 350, damping: 25 },
      }}
      {...props}
    >
      {cardContent}
    </motion.div>
  );
}
