const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', 'normal'],
      sm: ['16px', 'normal'],
      base: ['18px', 'normal'],
      lg: ['20px', 'normal'],
      xl: ['24px', 'normal'],
      '2xl': ['32px', 'normal'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      accent: colors.lime,
      red: colors.red,
    },
    extend: {
      spacing: {
        320: '80rem',
      },
    },
  },
  plugins: [],
}
