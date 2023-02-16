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
            <o-field
                horizontal
                label="Nazwa spotkania"
            >
              <o-input name="subject" expanded placeholder="Spotkanie..."></o-input>
            </o-field>

            <o-field horizontal label="Preferowana gra">
              <o-select placeholder="Wybierz grę">
                <option selected disabled>Wybierz grę...</option>
                <option v-for="game in games" :value="game.pk">
                  {{ game.fields.name }}
                </option>
              </o-select>
            </o-field>
            <o-field horizontal label="Opis spotkania">
              <o-input type="textarea"></o-input>
            </o-field>

            <o-field horizontal
            ><!-- Label left empty for spacing -->
              <o-button variant="primary">Wnioskuj</o-button>
            </o-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth'
  });
</script>


<script>
import {useFetch} from "nuxt/app";
import Swal from "sweetalert2";

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