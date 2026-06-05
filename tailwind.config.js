/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F44',
          50: '#eef2f9',
          100: '#d4ddee',
          900: '#0B1F44',
          950: '#06122a',
        },
        accent: {
          DEFAULT: '#FF9F1C',
          400: '#ffb347',
          500: '#FF9F1C',
          600: '#e88a0a',
        },
        secondary: {
          DEFAULT: '#2563EB',
          400: '#4f86f0',
          500: '#2563EB',
          600: '#1d4ed8',
        },
        sand: '#F8FAFC',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 31, 68, 0.18)',
        glow: '0 0 0 1px rgba(255,159,28,0.4), 0 18px 50px -12px rgba(255,159,28,0.45)',
        card: '0 20px 60px -20px rgba(11, 31, 68, 0.28)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
