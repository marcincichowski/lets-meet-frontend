<template>
  <div class="content p-4">
    <article class="p-2" style="float: left; background: white; border-radius: 10px; width: calc(100vw - 370px);">
      <h1 class="m-2">Dodaj grę</h1>
    </article>

  <div class="is-flex pl-0 pt-2 pr-0 is-justify-content-space-between" style="width: calc(100vw - 370px);">

    <div class="card" style="border-radius: 10px; width: 100%">
      <header class="card-header">
        <p class="card-header-title">
          Wniosek dodawania gry
        </p>
      </header>
      <div class="content">
        <div class="card-content">
          <form @submit.prevent="addGame">
          <o-field
              horizontal
              label="Nazwa gry"
          >
            <o-input v-model="name" name="name" expanded></o-input>
          </o-field>

          <o-field horizontal label="Liczba osób">
            <o-input
                v-model="person_count"
                name="person_count"
                type="number"
                expanded
            ></o-input>
          </o-field>
          <o-field horizontal label="Gra online">
            <o-checkbox v-model="is_online" style="margin-top: 3px"></o-checkbox>
          </o-field>
          <o-field horizontal label="Adres URL do sklepu">
            <o-input
                v-model="url"
                name="url"
                type="text"
                expanded
            ></o-input>
          </o-field>
          <o-field horizontal label="Opis">
            <o-input v-model="description" type="textarea"></o-input>
          </o-field>

          <o-field horizontal
          ><!-- Label left empty for spacing -->
            <button type="submit" class="button is-light">Wnioskuj</button>
          </o-field>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {useFetch} from "nuxt/app";
import Swal from "sweetalert2";
import {useLoginStore} from "~/stores/login";
import {useRouter} from "#imports";

const loginStore = useLoginStore();
const router = useRouter();

definePageMeta({
  middleware: 'auth'
});

const person_count = ref();
const description = ref();
const name = ref();
const is_online = ref();
const url = ref();

const addGame = async () => {
  try {
    const formdata = new FormData();
    formdata.append("person_count", person_count.value);
    formdata.append("description", description.value);
    formdata.append("name", name.value);
    if(is_online.value === false || is_online.value === undefined){
      formdata.append("is_online", 'False');
    }
    else {
      formdata.append("is_online", 'True');
    }


    formdata.append("requested_by_id", loginStore.user_id);
    formdata.append("accepted_by_id", 1);
    formdata.append("url", url);
    console.log()
    const {data: response} = await useFetch('http://127.0.0.1:8000/backend/game/add', {
      method: 'POST',
      body: formdata
    });
    console.log(response.value);
    router.push("/games");
    Swal.fire({
      text: "Dodano wniosek!",
      icon: "success",
      footer: '',
      confirmButtonColor: "#0c5dd7"
    });

  } catch (error) {
    console.log(error)
    Swal.fire({
      text: "Błąd dodawania wniosku!",
      icon: "error",
      footer: '',
      confirmButtonColor: "#0c5dd7"
    });
  }
}
</script>