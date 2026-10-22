import { useCountUp } from '../hooks/useCountUp';

export default function AnimatedCounter({ end, suffix = '', prefix = '', label, duration = 2000 }) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text-cyan mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {label && <div className="text-sm text-muted">{label}</div>}
    </div>
  );
}
