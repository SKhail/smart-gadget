const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss
  ],
};


// postcss.config.js  
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer')
//   ],
// };