
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'The Altman Brothers - Los Angeles Luxury Homes for Sale',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Looking for a million dollar homes in Los Angeles? The Altman Brothers is among the top producing real estate agents in the country. Call with no obligation now!' },
      { hid: 'og:title', name: 'og:title', content: 'The Altman Brothers - Los Angeles Luxury Homes for Sale' },
      { hid: 'og:locale', name: 'og:locale', content: 'en_EU' },
      { hid: 'og:url', name: 'og:url', content: 'https://altman-brothers.herokuapp.com/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: 'https://altman-brothers.herokuapp.com/_nuxt/img/a71c678.jpg' },
      { hid: 'og:description', name: 'og:description', content: 'Looking for a million dollar homes in Los Angeles? The Altman Brothers is among the top producing real estate agents in the country. Call with no obligation now!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~plugins/scrollanimation', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    'nuxt-lazy-load'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
