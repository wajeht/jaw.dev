/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
  },
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
