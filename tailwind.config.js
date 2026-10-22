/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#cfe5f5',
        card: '#eaf4fb',
        line: '#b3d4ec',
        footer: '#0f172a',
        ink: '#0f172a',
        muted: '#475569',
        primary: { DEFAULT: '#1e293b', 2: '#334155' },
        ice: { DEFAULT: '#0284c7', strong: '#0369a1', soft: 'rgba(2,132,199,0.12)' },
        severity: { critical: '#ef4444', high: '#f97316', medium: '#eab308', low: '#22c55e' },
      },
      fontFamily: {
        heading: ['"Lora"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 6px 24px rgba(30,41,59,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'draw-line': 'draw-line 1.5s ease-out forwards',
        'count-up': 'count-up 2s ease-out',
        'ripple': 'ripple 0.6s linear',
        'shine': 'shine 1.5s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        shine: {
          '0%': { left: '-75%' },
          '100%': { left: '125%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
