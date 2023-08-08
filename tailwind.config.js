module.exports = {
  mode: 'jit',
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
       fontSize: {
        'tiny': '0.75rem', // 12px
        '7xl': '1.75rem'   // 28px
      },
    },
  },
  plugins: [],
}
