export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss'
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
      Comment: 'get out of here!'
    }
  }
})