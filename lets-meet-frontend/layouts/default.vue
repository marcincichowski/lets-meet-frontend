<script setup>

    import {useRouter, onMounted} from "#imports"
    import {useLoginStore} from "~/stores/login";
    import Swal from "sweetalert2";

    const loginStore = useLoginStore();
    const router = useRouter();

    const username = loginStore.username;
    const role = loginStore.role;

    console.log(router.currentRoute.value.path);

const logout = async () => {
    await loginStore.logout();
    Swal.fire({
        text: "Poprawnie wylogowano!",
        icon: "success",
        footer: '',
        confirmButtonColor: "#0c5dd7"
    });
    router.push('/login')
}
</script>
<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <img src="~/assets/img/logo.png" alt="logo" />
            </NuxtLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">


            <div class="navbar-end">
                <div class="navbar-item">
                    <div v-if="username">
                        Zalogowany jako: {{ username }}
                    </div>
                    <div v-else class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="full">
        <aside class="menu p-3 m-4" style="width: 300px;background: white; float: left; border-radius: 10px;">
            <ul class="menu-list" v-if="role==='user'">
                <p class="menu-label">
                    Menu
                </p>
                <li ><NuxtLink to="/" :class="{ 'is-active': router.currentRoute.value.path==='/'}">Strona główna</NuxtLink></li>
                <li><NuxtLink to="/meetings" :class="{ 'is-active': router.currentRoute.value.path==='/meetings'}">Wyszukiwarka spotkań</NuxtLink></li>
                <li><NuxtLink to="/personal-meetings" :class="{ 'is-active': router.currentRoute.value.path==='/add-meeting' || router.currentRoute.value.path==='/personal-meetings'}">Twoje spotkania</NuxtLink></li>
                <li><NuxtLink to="/games" :class="{ 'is-active': router.currentRoute.value.path==='/add-game' || router.currentRoute.value.path==='/games'}">Spis gier</NuxtLink></li>
                <li><a @click.native="logout">Logout</a></li>
            </ul>
            <ul class="menu-list" v-if="role!=='user'">
                <p class="menu-label">
                    Menu
                </p>
                <li><NuxtLink to="/" :class="{ 'is-active': router.currentRoute.value.path==='/'}">Strona główna</NuxtLink></li>
                <li><NuxtLink to="/meetings" :class="{ 'is-active': router.currentRoute.value.path==='/meetings'}">Wyszukiwarka spotkań</NuxtLink></li>
                <li><NuxtLink to="/personal-meetings" :class="{ 'is-active': router.currentRoute.value.path==='/add-meeting' || router.currentRoute.value.path==='/personal-meetings'}">Twoje spotkania</NuxtLink></li>
                <li><NuxtLink to="/games" :class="{ 'is-active': router.currentRoute.value.path==='/add-game' || router.currentRoute.value.path==='/games'}">Spis gier</NuxtLink></li>
                <p class="menu-label">
                    Sekcja Administratora
                </p>
                <li><NuxtLink to="/applications" :class="{ 'is-active': router.currentRoute.value.path==='/applications'}">Wnioski</NuxtLink></li>
                <li><NuxtLink to="/settings" :class="{ 'is-active': router.currentRoute.value.path==='/settings'}">Ustawienia</NuxtLink></li>
                <li><a @click.native="logout">Logout</a></li>
            </ul>
        </aside>
        <slot />

    </div>
  </div>

</template>
<style>
.menu-list li a{
    border-radius: 10px;
}
.page-enter-active,.page-leave-active {  transition: all 0.3s;}.page-enter-from,.page-leave-to {  opacity: 0;  filter: blur(1rem);}
.flex-container{
  height: 100%;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
@media only screen and (max-width: 700px) {
  .flex-container{
    width: 100%;
  }
  .login-box{
    margin: 40px;
  }
}
.full{
  width: 100%;
  height: 100vh;
  background:-moz-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

  /* opera 11.10+ */
  background:-o-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03267D', endColorstr='#0CD7C7', GradientType=1 );

  /* ie 10+ */
  background:-ms-linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);

  /* global 94%+ browsers support */
  background:linear-gradient(192deg, rgba(12, 215, 199, 1) 0%, rgba(3, 38, 125, 1) 100%);


}
</style>
