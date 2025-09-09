/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'monospace'],
      },
      colors: {
        // Using CSS custom properties for theming
        'bg': 'var(--color-bg)',
        'surface': 'var(--color-surface)',
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'text': 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'border': 'var(--color-border)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
        'soft': '8px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-text)',
            lineHeight: '1.6',
          },
        },
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
};