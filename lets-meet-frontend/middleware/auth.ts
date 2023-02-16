import {useLoginStore} from "~/stores/login";

export default defineNuxtRouteMiddleware((to, from) => {

    const loginStore = useLoginStore();
    if (process.client && !loginStore.isLoggedIn) {
        return navigateTo('/login')
    }
})
