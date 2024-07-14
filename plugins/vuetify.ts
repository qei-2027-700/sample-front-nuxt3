
// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // https://vuetifyjs.com/en/features/global-configuration/#global-class-and-styles
    defaults: {
      VSheet: {
        elevation: 4,
      },
      VCard: {
        VBtn: { variant: 'outlined' },
      },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#123456', // プライマリカラーを設定
            // 他のカラー設定...
          },
          // options: { customProperties: true },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
