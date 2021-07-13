const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
    },
    fontFamily: {
      sans: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
