import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrolledPast } from '../hooks/useScroll';
import useMobileDetect from '../hooks/useMobileDetect';

const circumference = 2 * Math.PI * 18;

export default function BackToTop() {
  const show = useScrolledPast(400);
  const isMobile = useMobileDetect();
  const { scrollYProgress } = useScroll();
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          whileHover={isMobile ? undefined : { scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-card hover:bg-primary-2 transition-colors cursor-pointer group"
          aria-label="Scroll to top"
        >
          {/* Progress ring on desktop; simplified border on mobile */}
          {!isMobile ? (
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 44 44"
            >
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="rgba(30,41,59,0.1)"
                strokeWidth="2"
              />
              <motion.circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="rgba(2,132,199,0.7)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
              />
            </svg>
          ) : (
            <span className="absolute inset-0 rounded-full border border-ice/30 pointer-events-none" />
          )}
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
