/** @type {import('tailwindcss').Config} */

const pallete = require('./src/themes/pallete.cjs');

const backgroundColors = {};
Object.keys(pallete).forEach((key) => {
  backgroundColors[key] = `rgb(var(${pallete[key].cssVarName}),<alpha-value>)`;
});

const textColors = {};
Object.keys(pallete).forEach((key) => {
  textColors[key] = `rgb(var(${pallete[key].cssVarName}),<alpha-value>)`;
});
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /(w)|(h)|(p)|(m)|(rounded)|(bg)|(shadow)-.*/,
    },
  ],
  theme: {
    borderColor: {
      ...backgroundColors,
      transparent: 'transparent',
      DEFAULT: backgroundColors['framework90'],
    },
    colors: {
      transparent: 'transparent',
      ...backgroundColors,
    },
    textColor: {
      ...textColors,
      white: '#ffffff',
    },
    spacing: {
      0: '0px',
      xs3: '0.1875rem',
      xs: '0.125rem',
      sm: '0.375rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '3rem',
      auto: 'auto',
      'fixed-height-sm': '32px',
      'fixed-height-md': '36px',
      'fixed-height-lg': '40px',
      'fixed-height-xl': '44px',
      'fixed-height-xxl': '48px',
    },
    fontSize: {
      hint: '0.625rem',
      content: '0.75rem',
      subtitle: '0.875rem',
      topic: '1rem',
      h1: '1.25rem',
      14: '.1867rem',
      xs: '.1333rem',
      sm: '.16rem',
      md: '.1867rem',
      lg: '.2222rem',
      xl: '.25rem',
      '2xl': '.3333rem',
      '3xl': '.4444rem',
      '4xl': '.5555rem',
      '5xl': '.6667rem',
      '6xl': '.7778rem',
      '7xl': '.8889rem',
      '8xl': '.9999rem',
    },
    screens: {
      vw60: '60%',
      xs: '320px',
      sm: '768px',
      md: '1400px',
      lg: '1920px',
    },
    fontWeight: {
      light: '300',
      medium: '500',
      heavy: '700',
    },
    borderRadius: {
      0: '0px',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1.5rem',
      full: '9999px',
    },
    extend: {
      fontFamily: {
        default: [
          'Roboto',
          'Microsoft YaHei',
          'PingFang SC',
          '-apple-system',
          'BlinkMacSystemFont',
          'Source Han Sans SC',
          'Noto Sans SC',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'vertical-gradient':
          'linear-gradient(to top, #b7083e, #7c1233 ) !important',
        'horizontal-gradient':
          'linear-gradient(to left, #b7083e, #7c1233 ) !important',
        'horizontal-gradient-light':
          'linear-gradient(to left, #efeff0, rgba(var(--bd-framework-100)) 50px) !important',
        'vertical-gradient-light':
          'linear-gradient(to bottom, #F1F2F6, rgba(var(--bd-framework-100)) 50px) !important',
        plain:
          'linear-gradient(to bottom, #f3f4f5, rgba(var(--bd-framework-100)))',
      },
      boxShadow: {
        inner: 'inset 2px 2px 2px 0 rgba(var(--bd-framework-80))',
        container: '2px 2px 2px 0 rgba(var(--bd-framework-80));',
        'light-container': '2px 2px 2px 0 rgba(var(--bd-framework-90));',
      },
      animation: {
        grow: 'grow 1s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  // plugins: [require('@tailwindcss/line-clamp')],
};
