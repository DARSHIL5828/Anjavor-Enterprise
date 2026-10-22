import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-ice via-ice-strong to-ice z-[9999] shadow-[0_0_8px_rgba(2,132,199,0.4)] pointer-events-none will-change-transform"
      role="progressbar"
      aria-label="Scroll progress"
    />
  );
}
