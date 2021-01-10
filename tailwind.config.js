module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
  }, 
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
