import { motion } from 'framer-motion';

export default function GlitchText({ text, className = '' }) {
  return (
    <motion.div
      className={`glitch-wrapper ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
    </motion.div>
  );
}
