<template>
  <div id="app">
    <h1>Batalha Naval</h1>
    <div class="container">
      <h2>Player - 1</h2>
      <div class="teste">
        <div v-for="(item, index) in this.campo1" :key="index">
          <div v-for="(i, indice) in item" :key="indice" class="teste">
            <div class="celula" v-on:click="selecionar(index, indice)">
              {{ i }}
            </div>
            <!-- <div
              v-for="valor in 10"
              :key="valor"
              class="celula"
              v-on:click="selecionar(indice, valor - 1)"
              :id="retornoID(indice, valor - 1)"
            >
              {{ i[valor - 1] }}
            </div> -->
          </div>
        </div>
      </div>

      <div>
        <div class="aa">
          <p v-on:click="tipoEmbarcao(5)">Porta-Aviões:</p>
          <br />
          <div class="a">1</div>
          <div class="a">2</div>
          <div class="a">3</div>
          <div class="a">4</div>
          <div class="a">5</div>
        </div>
        <div class="aa">
          <p v-on:click="tipoEmbarcao(3)">Navio-tanque</p>
          <div class="a">1</div>
          <div class="a">2</div>
          <div class="a">3</div>
        </div>
        <div class="aa">
          <p v-on:click="tipoEmbarcao(1)">Submarino</p>
          <div class="a">1</div>
        </div>
        <div class="aa">
          <p v-on:click="tipoPosicao(1)">Horizontal</p>
          <div class="a">1</div>
          <div class="a">2</div>
          <div class="a">3</div>
        </div>
        <div class="">
          <p v-on:click="tipoPosicao(2)">Vertical</p>
          <div class="a">1</div>
          <div class="a">2</div>
          <div class="a">3</div>
        </div>
      </div>
    </div>
    <hr />

    <h2>Player - 2</h2>
  </div>
</template>
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: this.socket,
      barco: "",
      posicao: "",
      campo1: [],
      campo2: [],
    };
  },
  methods: {
    selecionar(posicaoX, posicaoY) {
      console.log("Posição - X " + posicaoX, " Posição - Y" + posicaoY);
      if (this.barco == 5) this.campo1[posicaoX][posicaoY] = "Avião";
      if (this.barco == 3) this.campo1[posicaoX][posicaoY] = "Navio";
      if (this.barco == 1) this.campo1[posicaoX][posicaoY] = "Sub";

      console.log(this.campo1[posicaoY][posicaoX]);
      this.enviarBackEnd(this.campo1);
      this.receberBackEnd();
      // this.testeIo();
      // this.campo1[posicaoX][posicaoX] = " P";
      // console.log(this.campo1);
      // this.campo1[posicaoX][posicaoY] = "CLIQUE";

      // alert("Posição - X: " + posicaoX + " - Posição - Y " + posicaoY);
      // let tamanhoGridX = Number(posicaoY) + this.barco - 1;
      // let tamanhoGridY = Number(posicaoX) + this.barco - 1;
      // console.log(tamanhoGridY);
      // if (this.posicao == 1) {
      //   alert(this.posicao);
      //   if (tamanhoGridX > 9) return console.log("Passou do tabuleiro");
      //   for (let i = 0; i < this.barco; i++) {
      //     document.getElementById(`${posicaoX}${posicaoY + i}`).className =
      //       "selecionado";
      //   }
      // } else if (this.posicao == 2) {
      //   alert(this.posicao);
      //   if (tamanhoGridY > 9) return console.log("Passou do tabuleiro");
      //   for (let i = 0; i < this.barco; i++) {
      //     document.getElementById(`${posicaoX + i}${posicaoY}`).className =
      //       "selecionado";
      //   }
      // } else {
      //   alert("Selecione uma posição!");
      // }
    },
    tipoEmbarcao(tipo) {
      this.barco = tipo;
    },
    retornoID(indice, valor) {
      return `${indice}${valor}`;
    },
    tipoPosicao(posicao) {
      this.posicao = posicao;
    },
    enviarBackEnd(array) {
      this.socket.emit("atualizar", array);
    },
    receberBackEnd() {
      this.socket.on("recebe", (array) => {
        this.campo1 = array;
      });
    },
  },

  computed: {},

  created() {
    this.socket = io("http://localhost:3000");
    // this.socket.emit("teste" + this.campo1);
    this.socket.on("connect", () => {
      console.log("Conectado com o servidor");
    });

    this.socket.on("campo1", (campo1) => {
      // this.campo1.push(campo1);
      // this.campo1.push(campo1);
      this.campo1 = campo1;
      console.log("\n\n\ncampo de batalha - 1");
      console.log(this.campo1);
    });

    this.socket.on("campo2", (campo2) => {
      // this.campo2.push(campo2);
      this.campo2.push(campo2);
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
.a {
  background-color: chartreuse;
  border: solid 1px black;
  width: 20px;
  height: 20px;
}
.aa {
  display: flex;
  flex-direction: row;
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
  width: 90px;
  height: 45px;
}
.selecionado {
  background-color: rgb(25, 0, 252);
  cursor: no-drop;
  width: 50px;
  height: 25px;
}
</style>
