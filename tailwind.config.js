// eslint-disable-next-line @typescript-eslint/no-var-requires
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
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
