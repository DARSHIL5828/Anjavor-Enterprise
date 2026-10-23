import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useMobileDetect from '../hooks/useMobileDetect';

export default function MagneticButton({ children, className = '', strength = 0.22, ...props }) {
  const isMobile = useMobileDetect();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 350, mass: 0.15 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // On mobile/touch devices, bypass magnetic physics completely
  if (isMobile) {
    return (
      <div className={`inline-block ${className}`} {...props}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const targetX = (e.clientX - rect.left - rect.width / 2) * strength;
    const targetY = (e.clientY - rect.top - rect.height / 2) * strength;
    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
