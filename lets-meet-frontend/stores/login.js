import {defineStore} from "pinia"

export const useLoginStore = defineStore("login", {
    state: () => ({
        name: null,
        role: null
    }),

    getters: {
        isLoggedIn: state => !!state.name
    },

    actions: {
        async login(payload) {
            this.name = payload.name
            console.log(payload.password)
            this.role = 'admin'
        },

        async logout() {
            this.name = null
            this.role = null
        }
    },

    persist: {
        enabled: true,
        strategies: [
            {
                key: "login"
            }
        ]
    }
})
