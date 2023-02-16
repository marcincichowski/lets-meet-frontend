<template>
  <div>
    <p class="has-text-centered"><img src="~/assets/img/result.svg" alt="Discover Nuxt 3" style="max-width: 80%; margin: 0 auto"/></p>
    <form @submit.prevent="register">
      <o-field label="E-mail:">
        <o-input v-model="identifier" label-class="no-wrap" autocomplete="email" type="text" required/>
      </o-field>
      <o-field label="Username:">
        <o-input v-model="username" label-class="no-wrap" autocomplete="username" type="text" required/>
      </o-field>
      <o-field label="Hasło:">
        <o-input v-model="password" autocapitalize="off" autocomplete="" type="password" required/>
      </o-field>

      <o-field label="Powtórz hasło:">
        <o-input v-model="repeat" autocapitalize="off" autocomplete="" type="password" required/>
      </o-field>
      <div class="buttons">
        <button type="submit" class="button is-light">Zarejestruj</button>
        <button class="button is-light"><NuxtLink to="/login" style="color: white">Posiadam już konto</NuxtLink></button>
      </div>

    </form>
  </div>
</template>

<script setup>

  import {useFetch} from "nuxt/app";
  import Swal from "sweetalert2"
  import {useRouter, onMounted} from "#imports";

  definePageMeta({  layout: "login",});

  const username = ref();
  const identifier = ref();
  const password = ref();
  const repeat = ref();

  const router = useRouter();
  const register = async () => {
    try {
      const formdata = new FormData();
      formdata.append("username", username.value);
      formdata.append("email", identifier.value);
      formdata.append("password", password.value);
      if (repeat.value === password.value) {

        const {data: response} = await useFetch('http://127.0.0.1:8000/backend/user/add', {
          method: 'POST',
          body: formdata
        });

        if(response.value.status === 'success'){
          console.log(response.value.status);
          Swal.fire({
            text: "Dodano użytkownika!",
            icon: "success",
            footer: '',
            confirmButtonColor: "#0c5dd7"
          });
          router.push("/login")
        }

      } else {
        Swal.fire({
          text: "Hasła nie są identyczne!",
          icon: "error",
          footer: '',
          confirmButtonColor: "#0c5dd7"
        });
      }

    } catch (error) {
      console.log(error);
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