// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "reset.css",
        },
      ],
    },
    baseURL: "/",
  },
  dir: {
    layouts: "layouts",
    middleware: "middleware",
    pages: "pages",
  },
  runtimeConfig: {
    apiSecret: "apiSecret",
  },
});
