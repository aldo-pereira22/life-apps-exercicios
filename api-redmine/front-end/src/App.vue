<template>
  <div class="banner">LifeApps</div>
  <div class="container">
    <div id="nav">
      <!-- <router-link class="navbar-brand" to="/about">Projetos</router-link> -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Inicio</router-link>
          <router-link class="navbar-brand" to="/about">Projetos</router-link>
          <router-link class="navbar-brand" to="/issues">Issues</router-link>

          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  </div>
  <router-view />
</template>

<style>
body {
  background-color: darkgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.banner {
  text-align: center;
  font-size: 60px;
  color: whitesmoke;
  background-color: #2c3e50;
  width: 100%;
  /* height: 180px; */
  /* position: absolute; */
}
</style>
