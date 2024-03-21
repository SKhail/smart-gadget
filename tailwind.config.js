const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],

  darkMode: 'class',

  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
    },

    extend: {
      backgroundImage: {},
      fontFamily: {
        'baloo': ['Baloo 2', 'sans-serif'],
      },
      colors: {
        "primary": "#003f6f",
        "hoverprimary": "#004080",
        "black": "#06113C",
        "background-white": "#FFFBF5",
        "teal": "#76ABAE",
        "space-grey": "#EEEEEE",
        "hover-grey": "#d6d4d4"
      },

    },
  },
  plugins: [

  ],
});
