// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  components: true,
  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      // ENVIRONMENT: process.env.ENVIRONMENT ?? "local",
      // apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
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

  // css: ['~/assets/scss/main.scss'],
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/_colors.scss" as *;'
    //     }
    //   }
    // }
  },
})
