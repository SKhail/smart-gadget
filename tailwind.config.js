/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: "class",   //Apply Dark Mode feature 
  theme: {
    extend: {
      backgroundImage: {

      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],

        'serif': ['Georgia', 'serif'],

        'mono': ['ui-monospace', 'SFMono-Regular'],

        'display': ['Oswald', 'sans-serif'],

        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#FF8C32',
        'secondary': 'ed8900',
        'black': '#06113C',
        'background-white': '#FFFBF5',
        'custom-white': '#F7EFE5',

        'space-grey': '#EEEEEE'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',

        }
      }
    },

  },
  plugins: [


  ],
}

// tai

