import {defineStore} from "pinia"

export const useLoginStore = defineStore("login", {
    state: () => ({
        username: null,
        role: null,
        user_id: null
    }),

    getters: {
        isLoggedIn: state => !!state.username
    },

    actions: {
        async login(payload) {
            this.username = payload.username;
            this.role = payload.role;
            this.user_id = payload.user_id;
            console.log(payload.username);
            console.log(payload.role);
            console.log(payload.user_id);
        },

        async logout() {
            this.username = null;
            this.role = null;
            this.user_id = null;
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
});
