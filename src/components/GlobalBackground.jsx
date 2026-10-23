import { useEffect, useRef } from 'react';
import useMobileDetect from '../hooks/useMobileDetect';

export default function GlobalBackground() {
  const canvasRef = useRef(null);
  const isMobile = useMobileDetect();

  useEffect(() => {
    // On mobile / touch devices, skip the continuous canvas particle animation loop
    // to preserve GPU memory and prevent WebKit Jetsam process crashes.
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 65;
    const maxDistance = 105;

    // Palette: Ice blues and deep slate
    const colors = [
      { r: 2, g: 132, b: 199 },    // #0284c7 Ice blue
      { r: 3, g: 105, b: 161 },    // #0369a1 Deep ice
      { r: 56, g: 189, b: 248 },   // #38bdf8 Sky 400
      { r: 30, g: 41, b: 59 },     // #1e293b Navy
    ];

    const mouse = {
      x: null,
      y: null,
      radius: 130,
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : Math.random() < 0.5 ? -10 : width + 10;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 1.8 + 1.2;
        this.baseAlpha = Math.random() * 0.35 + 0.25;
        this.alpha = this.baseAlpha;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Subtle pulsing
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.12;

        // Mouse interaction: gentle repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 2.2;
            this.y -= Math.sin(angle) * force * 2.2;
          }
        }

        // Wrap around boundaries
        if (this.x < -20) this.x = width + 20;
        else if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        else if (this.y > height + 20) this.y = -20;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.max(0.05, this.alpha)})`;
        ctx.fill();

        // Subtle outer glow for larger dots
        if (this.radius > 2.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.08)`;
          ctx.fill();
        }
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Connect dots with subtle mesh lines
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${opacity})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect to mouse if nearby
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius * 0.9) {
            const opacity = (1 - dist / (mouse.radius * 0.9)) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(3, 105, 161, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    let isRunning = true;

    function animate() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isRunning = true;
        animate();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMobile]);

  /* ── Mobile: Ultra-lightweight static background ── */
  if (isMobile) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(125,211,252,0.12) 0%, transparent 70%)',
        }}
      />
    );
  }

  /* ── Desktop: Full particle network + glow layers ── */
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* High-tech Dotted Matrix Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(2, 132, 199, 0.22) 1.3px, transparent 1.3px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Soft Ambient Radiance Top Right (white glow) */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[480px] rounded-full opacity-45 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.65) 0%, transparent 70%)',
        }}
      />

      {/* Soft Ambient Radiance Left (sky blue glow) */}
      <div
        className="absolute top-20 -left-40 w-[600px] h-[480px] rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(125,211,252,0.45) 0%, transparent 70%)',
        }}
      />

      {/* 60FPS Continuous Dynamic Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
