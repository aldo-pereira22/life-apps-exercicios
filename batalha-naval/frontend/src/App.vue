<template>
  <div id="app">
    <h1>Batalha Naval</h1>
    <div class="container">
      <h2>Player - 1</h2>
      <div class="teste">
        <div v-for="(item, index) in campo1" :key="index">
          <div v-for="(i, indice) in item" :key="indice" class="teste">
            <div>
              <div v-on:click="atacar(indice, index)" class="celula">
                {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="teste">
        <div v-for="(item, index) in campo2" :key="index">
          <div v-for="(i, index) in item" :key="index" class="teste">
            <div>
              <div class="celula">{{ i }}</div>
            </div>
          </div>
        </div>
      </div>
      <h2>Player - 2</h2>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      campo1: {},
      campo2: {},
    };
  },
  methods: {
    atacar(posicaoX, posicaoY) {
      alert("ATACOU: linha: " + posicaoX + " - Coluna " + posicaoY);
    },
  },
  computed: {},

  created() {
    this.socket = io("http://localhost:3000");

    this.socket.on("connect", () => {
      console.log("Conectado com o servidor");
    });

    this.socket.on("campo1", (campo1) => {
      // this.campo1.push(campo1);
      this.campo1 = campo1;
      console.log("\n\n\ncampo de batalha - 1");
      console.log(this.campo1);
    });

    this.socket.on("campo2", (campo2) => {
      // this.campo2.push(campo2);
      this.campo2 = campo2;
      console.log("\n\n\ncampo de batalha - 2");
      console.log(this.campo2);
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

.teste {
  /* background-color: blue; */
  margin: 0 auto;
  display: flex;
}
.container {
  display: flex;
  margin: 5px;
}
.celula {
  background-color: blueviolet;
  cursor: pointer;
  border: solid 1px;
  width: 50px;
  height: 25px;
}
</style>
