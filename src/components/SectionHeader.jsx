import { AnimatedSection } from './AnimatedSection';

export default function SectionHeader({ badge, title, description, align = 'center', gradient = 'cyan' }) {
  const gradientClass = gradient === 'emerald' ? 'gradient-text-emerald' : gradient === 'mixed' ? 'gradient-text-mixed' : 'gradient-text-cyan';
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <AnimatedSection className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-16`}>
      <div className={alignClass}>
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-ice-soft border border-ice/20 text-ice-strong mb-4">
            {badge}
          </span>
        )}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 ${gradientClass}`}>
          {title}
        </h2>
        {description && (
          <p className="text-muted text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
