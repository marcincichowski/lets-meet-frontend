import {defineNuxtPlugin} from "#app"
import {createPersistedState} from "pinia-plugin-persistedstate"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.$pinia.use(createPersistedState({storage: sessionStorage}))
})
