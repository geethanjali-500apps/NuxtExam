// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [ '@/assets/css/main.css'],
    modules: ["@nuxtjs/tailwindcss"],
    postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
})
