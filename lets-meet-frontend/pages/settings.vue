<script setup>
  import {useRouter, onMounted} from "#imports"
  import {useLoginStore} from "~/stores/login";
  import AppAlert from "../components/AppAlert";

  definePageMeta({
    middleware: 'auth'
  });



</script>
<template>
  <div class="content p-4">
    <article class="p-2" style="float: left; background: white; border-radius: 10px; width: calc(100vw - 370px);">
      <h1 class="m-2">Ustawienia</h1>
    </article>
    <div class="is-flex pl-0 pt-2 pr-0 is-justify-content-space-between" style="width: calc(100vw - 370px);">

      <div class="card" style="border-radius: 10px; width: 30%">
        <header class="card-header">
          <p class="card-header-title">
            Spotkania
          </p>
        </header>
        <div class="card-content">
          <div class="content">

          </div>
        </div>
      </div>

      <div class="card" style="border-radius: 10px; width: 30%">
        <header class="card-header">
          <p class="card-header-title">
            Spotkania2
          </p>
        </header>
        <div class="card-content">
          <div class="content">

          </div>
        </div>
      </div>

      <div class="card" style="border-radius: 10px; width: 30%">
        <header class="card-header">
          <p class="card-header-title">
            Spotkania3
          </p>
        </header>
        <div class="card-content">
          <div class="content">

          </div>
        </div>
      </div>
    </div>
  </div>

</template>
