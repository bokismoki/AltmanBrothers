/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'main-blue-light': '#003366',
        'main-blue-light-85': '#003366d9',
        'main-blue': '#032241',
        'main-blue-darkest': '#011426',
        'main-yellow': '#ccac47',
        'main-yellow-light': '#d2b66c'
      },
      spacing: {
        '500px': '500px',
        '75vh': '75vh',
        '28': '7rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    display: ['responsive', 'group-hover'],
    width: ['responsive', 'hover', 'group-hover'],
    height: ['responsive', 'hover', 'group-hover']
  },
  plugins: []
}
