import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const colors = {
  success: 'border-emerald-500/30 bg-card text-emerald-600 shadow-card',
  error: 'border-red-500/30 bg-card text-red-500 shadow-card',
  info: 'border-ice/30 bg-card text-ice shadow-card',
};

export default function Toast({
  isOpen,
  onClose,
  title,
  message,
  type = 'success',
  duration = 5000,
}) {
  const Icon = icons[type] || CheckCircle;

  useEffect(() => {
    if (!isOpen || !duration) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  return (
    <div className="fixed top-20 right-4 sm:right-8 z-[1000] pointer-events-none flex flex-col gap-2 max-w-sm w-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-2xl ${colors[type] || colors.info}`}
            role="alert"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              {title && (
                <h4 className="text-sm font-semibold text-ink tracking-wide mb-0.5">
                  {title}
                </h4>
              )}
              {message && (
                <p className="text-xs text-muted leading-relaxed">
                  {message}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1 rounded-lg text-muted hover:text-ink hover:bg-line/50 transition-colors"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
