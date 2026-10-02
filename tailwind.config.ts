import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#C92A2A',
          red: '#DC2626',
          rose: '#BE123C',
          orange: '#EA580C',
          amber: '#F59E0B',
          gold: '#D97706',
          dark: '#121417',
          cardDark: '#1A1D23',
          cream: '#FFFDF9',
          creamDark: '#F7F3EB',
          sand: '#ECE5D8',
          borderWarm: '#E5DED2',
          green: '#16A34A',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'soft-xl': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'card-lift': '0 12px 30px -10px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config