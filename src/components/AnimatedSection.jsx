import { motion } from 'framer-motion';
import useMobileDetect from '../hooks/useMobileDetect';

// Modern fluid deceleration curve (Apple / Linear style)
const fluidEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

// Lighter mobile variants — less distance, shorter duration
const containerVariantsMobile = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: fluidEase },
  },
};

const fadeUpMobile = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: fluidEase },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: fluidEase },
  },
};

const itemVariantsMobile = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: fluidEase },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: fluidEase },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: fluidEase },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: fluidEase },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: fluidEase },
  },
};

export function AnimatedSection({ children, className = '', variant = 'fadeUp', delay = 0 }) {
  const isMobile = useMobileDetect();

  const variants = {
    fadeUp: isMobile ? fadeUpMobile : fadeUp,
    fadeIn,
    scaleIn,
    slideLeft,
    slideRight,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.02 : 0.06, margin: '0px 0px 30px 0px' }}
      variants={variants[variant] || (isMobile ? fadeUpMobile : fadeUp)}
      transition={{ delay: isMobile ? Math.min(delay, 0.1) : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }) {
  const isMobile = useMobileDetect();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.02 : 0.06, margin: '0px 0px 30px 0px' }}
      variants={isMobile ? containerVariantsMobile : containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  const isMobile = useMobileDetect();

  return (
    <motion.div variants={isMobile ? itemVariantsMobile : itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export { containerVariants, fadeUp, fadeIn, scaleIn, slideLeft, slideRight, itemVariants, fluidEase };
