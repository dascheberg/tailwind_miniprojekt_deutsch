module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        ueberschrift: ['Oswald']
      },
      colors: {
        hauptfarbe: '#212f49'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
