import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#c7a54f', // elegant gold
          50: '#fdf8ea',
          100: '#fbefcf',
          200: '#f5e1a5',
          300: '#eacb6d',
          400: '#e0b94f',
          500: '#c7a54f',
          600: '#a4873d',
          700: '#7e6730',
          800: '#5a4a24',
          900: '#3b3118',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        noise: "url('/noise.svg')",
      },
    },
  },
  plugins: [typography],
}

export default config
