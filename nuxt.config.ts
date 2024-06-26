// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: {
    dirs: [
      {
        path: '~/components/bases',
        global: true
      },
      '~/components'
    ]
  }
})
