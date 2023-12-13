export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  modules: ['@nuxtjs/robots'],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
      Comment: 'get out of here!'
    }
  }
})
