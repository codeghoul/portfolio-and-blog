const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  darkMode: 'class',
  theme: {
    fontFamily: {
      'display': ['EB Garamond', 'serif'],
      'body': ['Raleway', 'sans-serif']
    },
    extend: {
      height: {
        120: '28rem',
        128: '32rem',
        224: '56rem',
      },
      width: {
        120: '28rem',
        128: '32rem',
        224: '56rem',
      },
      margin: {
        120: '28rem',
        128: '32rem',
        224: '56rem',
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: 'auto',
            },
          },
        },
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
