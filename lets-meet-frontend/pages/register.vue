<template>
  <form method="post">

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" placeholder="np. jan.kowalski@przyklad.com">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="********">
      </div>
    </div>
    <button type="submit" class="button is-light">Sign in</button>
  </form>
</template>

<script>
import {definePageMeta} from "nuxt/dist/pages/runtime";
definePageMeta({  layout: "login",});
</script>