import { useEffect, useRef, useState } from 'react';
import { isMobileDevice } from './useMobileDetect';

export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      setCount(end);
      return;
    }

    const isMobile = isMobileDevice();
    const effectiveDuration = isMobile ? Math.min(duration, 800) : duration;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          let lastFrameTime = startTime;

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / effectiveDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            // On mobile, throttle state updates to ~30fps to avoid blocking the main thread during scrolling
            if (!isMobile || now - lastFrameTime >= 32 || progress >= 1) {
              setCount(Math.floor(eased * end));
              lastFrameTime = now;
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

            requestAnimationFrame(animate);
        }
      },
      { threshold: isMobile ? 0.05 : 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}
