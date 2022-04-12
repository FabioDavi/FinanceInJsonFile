import auth from "./middleware/auth";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Finance',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'abc' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      { src : 'https://code.jquery.com/jquery-3.6.0.min.js'} //teste
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/my-plugin',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],



  router: {
    //use below when ALL routes are private, otherwise u shoud config each private file instead
    //middleware: auth
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  publicRuntimeConfig:{

      youtubeAPIkey: process.env.youtubeAPIkey,
      API_URL: process.env.API_URL

  },

  privateRuntimeConfig:{

      facebookAPIkey: process.env.facebookAPIkey

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
