// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  components: true,
  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      // ENVIRONMENT: process.env.ENVIRONMENT || "local",
      // apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000",
      appName: process.env.APP_NAME,

      // environment=process.env.ENVIRONMENT,
      // apiUrl=process.env.NUXT_PUBLIC_API_URL
    },
    // private: {
    //   apiSecret: process.env.API_SECRET
    // },
  },

  app: {
    head: {
      title: "SampleKmApp",
      htmlAttrs: {
        lang: "ja",
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  css: ['~/assets/scss/main.scss'],
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/_colors.scss" as *;'
    //     }
    //   }
    // }
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
