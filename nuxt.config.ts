// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
		},
		baseURL: "/",
	},
	srcDir: "src",
	dir: {
		layouts: "layouts",
		middleware: "middleware",
		pages: "pages",
	},
	runtimeConfig: {
		apiSecret: "apiSecret",
	},
});
