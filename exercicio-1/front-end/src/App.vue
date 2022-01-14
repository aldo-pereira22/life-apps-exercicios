<template>
  <div class="">
    <div id="app" class="container">
      <Menu />
      <router-link :to="{ name: 'Teste' }">
        <button type="button" class="btn btn-primary btn-sm mt-5">TESTE</button>
      </router-link>
    </div>
    <hr />
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>


<style>
img {
  width: 200px;
}

h1 {
  text-align: center;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
} */
</style>
