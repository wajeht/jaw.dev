export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { autoImport: true },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
  srcDir: './src',
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-vitest',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-auth-utils',
    'nuxt-icon',
    '@nuxtjs/plausible'
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
      Comment: 'get out of here!'
    }
  },
  plausible: {
    apiHost: 'https://plausible.jaw.dev/',
 },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    }
  }
})
