<script setup>
  definePageMeta({
    middleware: 'auth'
  });
</script>
<template>
  <div class="content p-4">
    <article class="p-2" style="float: left; background: white; border-radius: 10px; width: calc(100vw - 370px);">
      <h1 class="m-2">Lista gier</h1>
    </article>
    <div class="is-flex pl-0 pt-2 pr-0 is-justify-content-space-between" style="width: calc(100vw - 370px);">

      <div class="card" style="border-radius: 10px; width: 100%">
        <header class="card-header">
          <p class="card-header-title">
            Spotkania
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <section>
              <DataTable-games></DataTable-games>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
