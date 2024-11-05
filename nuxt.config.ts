// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  tailwindcss: {
    cssPath: '~/assets/css/global.css',
  },

  app: {
    head: {
      title: 'Nuxt.js builder template',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // meta: [
      //   // Facebook Meta Tags
      //   { hid: "og:url", property: "og:url", content: "https://yourwebsite.com/"},
      //   { hid: "og:type", property: "og:type", content: "website"},
      //   { hid: "og-title", property: "og:title", content: "Your project tittle" },
      //   { hid: "og-desc", property: "og:description", content: "Your project description" },
      //   { hid: "og-image", property: "og:image", content: "/image.png"},

      //   // Twitter Meta Tags
      //   { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
      //   { hid: "twitter:domain", property: "twitter:domain", content: "https://yourwebsite.com/"},
      //   { hid: "twitter:title", name: "twitter:title", content: "Your project tittle" },
      //   { hid: "twitter:url", name: "twitter:url", content: "https://yourwebsite.com/" },
      //   { hid: "twitter:description", name: "twitter:description", content: "Your project description" },
      //   { hid: "twitter:image", name: "twitter:image", content: "/image.png"},
      // ],
      // link: [
      //   { rel: "preconnect", href:"https://fonts.googleapis.com" },
      //   { rel: "preconnect", href:"https://fonts.gstatic.com"},
      //   { href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap", rel:"stylesheet" },
      //   { href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap", rel: "stylesheet" }
      // ],
      // If mini app
      // script: [
      //   {src: "https://telegram.org/js/telegram-web-app.js"}
      // ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  runtimeConfig: {
    public: {
        environment: process.env.VERCEL_ENV,
    }
  },
})