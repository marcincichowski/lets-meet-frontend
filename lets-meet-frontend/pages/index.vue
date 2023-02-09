<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>

    </AppAlert>
  </div>
</template>
<script setup>
import {useRouter, onMounted} from "#imports"
import {useLoginStore} from "~/stores/login";
import AppAlert from "../components/AppAlert";

const loginStore = useLoginStore()

onMounted(async () => {
  console.log(process)
  console.log(process.client)
  console.log(loginStore.isLoggedIn)


  if (process.client && loginStore.isLoggedIn) router.push("/")
})

</script>