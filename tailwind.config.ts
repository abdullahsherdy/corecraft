import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:        '#1A2B4C',
          'navy-muted':'#2D4170',
          teal:        '#00C4B3',
          amber:       '#F4A622',
          fog:         '#F0F4FB',
          midnight:    '#0D1526',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      borderRadius: {
        brand: '0.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
