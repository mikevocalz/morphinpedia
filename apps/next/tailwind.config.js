
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
  important: 'html',
}