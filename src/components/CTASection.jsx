import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function CTASection({ title, description, primaryText = 'Request a Demo', primaryTo = '/contact', secondaryText, secondaryTo }) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-blob w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(125,211,252,0.15), transparent)' }} aria-hidden="true" />

      <AnimatedSection className="container-default relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold gradient-text-cyan mb-4 text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryTo} className="btn-primary">
            {primaryText} <ArrowRight size={18} />
          </Link>
          {secondaryText && secondaryTo && (
            <Link to={secondaryTo} className="btn-secondary">
              {secondaryText}
            </Link>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}
