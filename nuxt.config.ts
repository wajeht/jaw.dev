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
    'nuxt-icon'
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
      Comment: 'get out of here!'
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    }
  }
})