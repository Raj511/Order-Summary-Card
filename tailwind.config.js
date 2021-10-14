module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          100: "hsl(225, 100%, 94%)",
          200: "hsl(245, 75%, 52%)"
        },
        neutral:{
          100: "hsl(225, 100%, 98%)",
          200: "hsl(224, 23%, 55%)",
          300: "hsl(223, 47%, 23%)",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
