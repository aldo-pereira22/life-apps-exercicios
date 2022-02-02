<template>
  <div id="app">
    <div class="container">
      <h1>Batalha Naval</h1>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      campo1: [10][10],
      campo2: [10][10],
    };
  },
  methods: {
    preencherCampo1() {},
  },
  computed: {},

  created() {
    this.socket = io("http://localhost:3000");

    this.socket.on("connect", () => {
      console.log("Conectado com o servidor");
    });

    this.socket.on("teste", (teste) => {
      console.log(teste);
    });
  },
};
</script>

<style>
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
.cel {
  margin: 5px;
  width: 55px;
  height: 55px;
  border: 1px solid;
  background-color: blue;
}
.campo1 {
  margin: 0 auto;
  width: 700px;
  background-color: #ccc;
}
.campo2 {
  margin: 0 auto;
  width: 700px;
  background-color: #ccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.linha {
  display: flex;
  margin: 0 auto;
}
.navio {
  width: 50px;
  height: 50px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.main {
  display: flex;
}
</style>
