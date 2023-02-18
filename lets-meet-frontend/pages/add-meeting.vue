<template>
  <div class="content p-4">
    <article class="p-2" style="float: left; background: white; border-radius: 10px; width: calc(100vw - 370px);">
      <h1 class="m-2">Dodaj spotkanie</h1>
    </article>

    <div class="is-flex pl-0 pt-2 pr-0 is-justify-content-space-between" style="width: calc(100vw - 370px);">

      <div class="card" style="border-radius: 10px; width: 100%">
        <header class="card-header">
          <p class="card-header-title">
            Formularz spotkania
          </p>
        </header>
        <div class="content">
          <div class="card-content">
            <form @submit.prevent="addMeeting">
              <o-field
                  horizontal
                  label="Nazwa spotkania"
              >
                <o-input v-model="name" name="subject" expanded placeholder="Spotkanie..."></o-input>
              </o-field>

              <o-field horizontal label="Preferowana gra">
                <o-select placeholder="Wybierz grę" v-model="game_id">
                  <option selected disabled>Wybierz grę...</option>
                  <option v-for="game in games" :value="game.pk">
                    {{ game.fields.name }}
                  </option>
                </o-select>
              </o-field>
              <o-field  horizontal label="Opis spotkania">
                <o-input v-model="description" type="textarea"></o-input>
              </o-field>

              <o-field horizontal
              ><!-- Label left empty for spacing -->
                <div class="buttons">
                  <button type="submit" class="button is-light">Dodaj</button>
                </div>
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

  const game_id = ref();
  const description = ref();
  const name = ref();

  const addMeeting = async () => {
    try {
      const formdata = new FormData();
      formdata.append("game_id", game_id.value);
      formdata.append("description", description.value);
      formdata.append("name", name.value);
      formdata.append("user_id", loginStore.user_id);

      console.log(game_id.value);
      console.log(description.value);
      console.log(name.value);
      console.log(loginStore.user_id);

      const {data: response} = await useFetch('http://127.0.0.1:8000/backend/meeting/add', {
        method: 'POST',
        body: formdata
      });
      console.log(response.value.data);
      router.push("/personal-meetings");
      Swal.fire({
        text: "Dodano spotkanie!",
        icon: "success",
        footer: '',
        confirmButtonColor: "#0c5dd7"
      });

    } catch (error) {
      console.log(error)
      Swal.fire({
        text: "Błąd dodawania spotkania!",
        icon: "error",
        footer: '',
        confirmButtonColor: "#0c5dd7"
      });
    }
  }
</script>


<script>
export default {

  data() {
    return {
      games: [],
      selected: {
        game: ""
      }
    }
  },

  mounted() {
    this.getGames();
  },

  methods: {
    getGames(){
      try {
        useFetch(`http://127.0.0.1:8000/backend/game/get_status?value=1`).then((response) => {
              console.log(JSON.parse(response.data.value.data));
              this.games = JSON.parse(response.data.value.data);
        });
      }
      catch (error){
        Swal.fire({
          text: "Coś poszło nie tak!",
          icon: "error",
          footer: '',
          confirmButtonColor: "#0c5dd7"
        });
      }
    },
  }
}
</script>