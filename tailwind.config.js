module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"]
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
