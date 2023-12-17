export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { autoImport: true },
  googleFonts: {
    download: true,
    families: {
      'Open Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800],
        ital: [100, 200, 300, 400, 500, 600, 700, 800],
      }
    }
  },
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
   '@nuxtjs/plausible',
   '@nuxtjs/google-fonts'
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
    documentDriven: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    }
  }
})
