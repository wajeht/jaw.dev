export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-vitest',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-auth-utils'
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
      Comment: 'get out of here!'
    }
  }
})