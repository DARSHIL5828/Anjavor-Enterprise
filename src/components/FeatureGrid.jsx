import { StaggerContainer, StaggerItem } from './AnimatedSection';
import GlassCard from './GlassCard';

export default function FeatureGrid({ features, columns = 3, variant = 'cyan' }) {
  const colClass = columns === 4 ? 'lg:grid-cols-4' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
  const iconColor = 'text-ice';
  const glowColor = 'rgba(2,132,199,0.12)';

  return (
    <StaggerContainer className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-6`}>
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        const indexStr = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
        return (
          <StaggerItem key={feature.id || feature.title}>
            <GlassCard
              className="p-7 h-full hover:border-ice/50 transition-all"
              glow={glowColor}
              watermark={indexStr}
              showBrackets={true}
              showSheen={true}
              topBeam={true}
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`jewel-badge w-12 h-12 ${iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ice-soft border border-ice/20 text-ice-strong font-semibold">
                      FEATURE //{indexStr}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-ink mb-2 group-hover:text-ice-strong transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-line/40 flex items-center justify-between text-xs text-muted/60 font-mono">
                  <span>ENTERPRISE SPEC</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ice/40 group-hover:bg-ice transition-colors" />
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

