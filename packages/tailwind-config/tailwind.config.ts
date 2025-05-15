import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export const config: Config = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          default: '#111111',
          hover: 'rgba(17, 17, 17, 0.8)',
          pressed: 'rgba(17, 17, 17, 0.8)',
        },
      },
      screens: {
        'board-mobile': '768px',
        'board-mobile-max': { max: '767px' },
        tablet: '768px',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
