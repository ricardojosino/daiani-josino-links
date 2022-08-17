/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/index.html',
    './src/typography.html',
  ],
  theme: {
    
    container: {
      center: true,
    },

    fontFamily: {
      'lato': 'lato'
    },

    extend: {
      screens: {
        'xl': '1140px'
      },

      colors: {
        'color01': '#034D5A',
        'color02': '#CBA340',
        'color03': '#1A1A1A',
        'color04': '#F4F4F4',
        'color05': '#F3F3F3',
        'color06': '#FFFFFF',
      },

    },

  },
  plugins: [],
}
