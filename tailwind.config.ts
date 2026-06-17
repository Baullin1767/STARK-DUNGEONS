import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0910',
        ember: '#15111D',
        umber: '#241A12',
        gold: '#C89B3C',
        arcane: '#7C3AED',
        crimson: '#8B2E2E',
        parchment: '#E8D6B0',
        bone: '#F7F0E3',
        ash: '#B7A68B'
      },
      fontFamily: {
        heading: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 42px rgba(200, 155, 60, 0.24)',
        arcane: '0 0 54px rgba(124, 58, 237, 0.28)'
      },
      backgroundImage: {
        'radial-rune': 'radial-gradient(circle at center, rgba(200,155,60,.18), transparent 58%)'
      }
    }
  },
  plugins: []
};

export default config;
