import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export default function HowItWorks({ steps, variant = 'cyan' }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Connecting line */}
      <motion.div
        className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ice to-ice-strong origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        aria-hidden="true"
      />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <AnimatedSection key={step.step} variant="fadeUp" delay={index * 0.15}>
            <div className="flex items-start gap-6 relative">
              {/* Step number dot */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-lg md:text-xl shadow-lg shadow-primary/20 z-10">
                {step.step}
              </div>

              {/* Content */}
              <div className="solid-card p-5 flex-1">
                <h3 className="text-lg font-heading font-semibold text-ink mb-1">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
