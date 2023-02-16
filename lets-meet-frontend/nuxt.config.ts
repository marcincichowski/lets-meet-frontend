// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({

    app: {
        head: {
            title: "Let's Meet",
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"}
            ],
            link: [{rel: "icon", type: "image/x-icon", href: "/favicon.png"}]
        },
    },


    css: ["~/assets/scss/app.scss"],
    modules: ["@pinia/nuxt"],
    plugins: ["~/plugins/pinia-persistedstate.client"],

})
