// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ["@prisma/nuxt"],
  devtools: { enabled: true },
  css: [
    '@/assets/styles.css'
  ],
})