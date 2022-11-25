// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  content: {
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  image: {
    // Options
  }
})
