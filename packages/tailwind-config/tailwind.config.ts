import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export const config: Config = {
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#111111',
      },
      fontSize: {
        sm: '15px',
        md: '16px',
        lg: '28px',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
