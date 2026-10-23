import { useState, useEffect } from 'react';

/**
 * Central mobile / low-power device detection hook.
 * Accurately detects mobile phones and tablets (narrow viewports or touch devices < 1024px)
 * while preserving the full rich desktop experience for laptops and workstations.
 * Listens to viewport resize and orientation changes so device mode & rotation work smoothly.
 */
export default function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(() => isMobileDevice());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const check = () => {
      const next = isMobileDevice();
      setIsMobile((prev) => (prev !== next ? next : prev));
    };

    window.addEventListener('resize', check, { passive: true });
    window.addEventListener('orientationchange', check, { passive: true });
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  return isMobile;
}

/**
 * Lightweight static check (no hook, no re-render).
 * Use outside React components or in event callbacks.
 */
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;

  // Viewport width < 768px covers 100% of smartphones in portrait.
  if (window.innerWidth < 768) return true;

  // For viewports between 768px and 1023px (tablets / phones in landscape), check for touch:
  if (window.innerWidth < 1024) {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
    );
  }

  // Large screens (>= 1024px) are treated as desktop/workstation.
  return false;
}
