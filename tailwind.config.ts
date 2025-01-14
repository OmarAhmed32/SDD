/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';
const config: Config = {
  mode: 'jit',
  content: [
    './public/*.{html,ts}',
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      base: '1.25rem', // 20px
      lg: '1.625rem', // 26px
      xl: '2.5rem', // 40px
      '2xl': '2.625rem', // 42px
      '36': '2.625rem', // 36px
      '40': '4rem',
      '60': '7rem',
    },
    extend: {
      colors: {
        green: {
          100: '#92C83E',
          200: '#21AF27',
        },
        gray: '#AAB0BC',
        'gray-1100': '#D3D3D3',
        'gray-1000': '#DDDFE4',
        'gray-1400': '#2D404D',
        'white-transparent': 'rgba(255, 255, 255, 0.44)',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/videos/video.mp4')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      height: {
        10: '2.5rem',
        11: '3rem',
        12: '3.5rem',
        13: '4rem',
        14: '4.5rem',
        15: '5rem',
        21: '8rem',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        '4xl': '2.5rem',
      },
      spacing: {
        '1': '1px',
        '10': '10px',
        '1.5': '1.5rem',
        '4.5': '4.5px',
        '0.1': '0.1rem',
        '.35': '.35rem',
        '40': '40rem',
        '15': '15%',
        '70': '70%',
        '95': '95%',
        '13': '3rem',
      },
      flexBasis: {
        '7/0': '90%',
      },
      boxShadow: {
        'custom-gray-shadow': `0 0 0 500px rgb(45, 64, 77)`,
      },
    },
  },
  plugins: [require('tailwindcss-dir')(), require('flowbite/plugin')],
};

export default config;
