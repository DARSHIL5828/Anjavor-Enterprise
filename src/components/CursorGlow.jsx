import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const opacity = useMotionValue(0);

  // Responsive, fluid spring physics
  const springConfig = { damping: 28, stiffness: 320, mass: 0.15 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 200 });

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    let rafId;
    const move = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        opacity.set(1);
      });
    };

    const leave = () => opacity.set(0);
    const enter = () => opacity.set(1);

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [cursorX, cursorY, opacity]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden"
      style={{ opacity: smoothOpacity }}
    >
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(2,132,199,0.05) 0%, rgba(125,211,252,0.02) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
