<template>
  <div class="">
    <div id="app" class="container">
      <Menu />
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
