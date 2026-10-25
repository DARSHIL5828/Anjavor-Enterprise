import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoMark from '../assets/logo-mark.png';

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return !sessionStorage.getItem('anjavor_splash_seen');
      } catch {
        return false;
      }
    }
    return false;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem('anjavor_splash_seen', 'true');
        } catch {
          // ignore
        }
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(125,211,252,0.25) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex flex-col items-center gap-3">
              {/* Logo */}
              <motion.img
                src={logoMark}
                alt="Anjavor Technologies"
                className="w-20 h-20 object-contain drop-shadow-md"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
              />

              {/* Company name */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="font-heading font-bold text-2xl text-ink tracking-tight">
                  Anjavor
                </span>
                <span className="text-xs font-semibold tracking-[0.20em] text-ice-strong uppercase mt-1">
                  TECHNOLOGIES
                </span>
              </motion.div>

              {/* Loading bar */}
              <motion.div
                className="w-32 h-0.5 rounded-full bg-line overflow-hidden mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-ice to-ice-strong"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
