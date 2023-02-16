<template>
    <div>
        <p class="has-text-centered"><img src="~/assets/img/result.svg" alt="Discover Nuxt 3" style="max-width: 80%; margin: 0 auto"/></p>
        <form @submit.prevent="signIn">
            <o-field label="E-mail:">
                <o-input v-model="identifier" label-class="no-wrap" autocomplete="email" type="text" required/>
            </o-field>

            <o-field label="Hasło:">
                <o-input v-model="password" autocapitalize="off" autocomplete="current-password" type="password" required/>
            </o-field>
            <div class="buttons">
                <button type="submit" class="button is-light">Zaloguj się</button>
                <button class="button is-light"><NuxtLink to="/register" style="color: white">Nie mam konta</NuxtLink></button>
            </div>

        </form>
    </div>
</template>

<script setup>
    import {useFetch} from "nuxt/app";
    import {useRouter, onMounted} from "#imports";
    import {useLoginStore} from "~/stores/login";

    import Swal from "sweetalert2"

    const router = useRouter();
    const loginStore = useLoginStore();

    const identifier = ref();
    const password = ref();

    definePageMeta({
        layout: "login"
    });

    onCreated(async () => {
        if (process.client && loginStore.isLoggedIn) router.push("/")
    });

    const signIn = async () => {
        try {
            const formdata = new FormData();
            formdata.append("username", identifier.value);
            formdata.append("password", password.value);
            const {data: response} = await useFetch('http://127.0.0.1:8000/backend/authorize', {
                method: 'POST',
                body: formdata
            });
            console.log(response.value.data);
            await loginStore.login(response.value);
            router.push("/")
        } catch (error) {
            Swal.fire({
                text: "Niepoprawna nazwa użytkownika lub hasło!",
                icon: "error",
                footer: '',
                confirmButtonColor: "#0c5dd7"
            });
            password.value = ""
        }
    }

</script>
<style>
    img {
        -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
        filter: invert(100%);
        margin: 0 auto;
        width: 90%;
        max-height: 300px;
    }
</style>