import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useMobileDetect from '../hooks/useMobileDetect';

export default function TiltCard({ children, className = '', tiltAmount = 6, glare = true }) {
  const ref = useRef(null);
  const isMobile = useMobileDetect();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const isHovered = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 280, mass: 0.2 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const smoothGlare = useSpring(isHovered, { damping: 20, stiffness: 200 });

  const rotateX = useTransform(smoothMouseY, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-tiltAmount, tiltAmount]);

  // On mobile, skip the entire 3D tilt / glare — just render the children in a plain wrapper.
  // This avoids unnecessary GPU compositor layers for preserve-3d + willChange.
  if (isMobile) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    isHovered.set(1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    isHovered.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
      {/* Dynamic 3D Glare reflection running purely on GPU */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-20"
          style={{
            opacity: smoothGlare,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(2,132,199,0.15) 35%, transparent 70%)',
          }}
        />
      )}
    </motion.div>
  );
}
