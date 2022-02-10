<template>
  <div id="app">
    <h1>Batalha Naval</h1>
    <div class="container">
      <h2>Player - 1</h2>
      <div class="teste">
        <div v-for="(item, index) in this.campo1" :key="index">
          <div v-for="(i, indice) in item" :key="indice" class="teste">
            <div
              class="celula"
              :id="retornoID(index, indice)"
              v-on:click="selecionar(indice, index)"
            >
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
    <button id="botaoIniciar" class="iniciarPartida">Iniciar partida</button>
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
      quantidadeEmbarcacao: 0,
      qtdAvioes: 0,
      qtdSubmarinos: 0,
      qtdNavios: 0,
    };
  },
  methods: {
    mostrarBotaoInicio() {
      if (this.quantidadeEmbarcacao == 6)
        document.querySelector("#botaoIniciar").style.display = "inline-block";
    },
    selecionar(posicaoX, posicaoY) {
      //      this.qtdAvioes == 2 ||
      // this.qtdNavios == 3 ||
      // this.qtdSubmarinos == 4
      if (this.quantidadeEmbarcacao >= 6) {
        alert("Excedeu o limite de embarcações");
        return;
      }
      if (this.qtdSubmarinos == 4 && this.barco == 1) {
        alert("Excedeu a quantidade de Submarinos! Coloque outra embarcação");
        return;
      }
      if (this.qtdNavios == 3 && this.barco == 3) {
        alert("Excedeu a quantidade de Navios! Coloque outra embarcação");
        return;
      }

      if (this.qtdAvioes == 2 && this.barco == 5) {
        alert("Excedeu a quantidade de Porta Aviões! Coloque outra embarcação");
        return;
      }

      console.log("Posição - X " + posicaoX, " Posição - Y" + posicaoY);

      if (!this.barco) {
        alert("Selecione o tipo de embarcação!");
        return;
      }
      if (!this.posicao) {
        alert("Selecione a posição da embarcação!");
        return;
      }
      // if (this.campo1[posicaoY][posicaoX] != 0) {
      //   alert("Posição ocupada!");
      //   return;
      // }

      console.log(this.campo1[posicaoY][posicaoX]);
      this.enviarBackEnd(this.campo1);
      this.receberBackEnd();

      // alert("Posição - X: " + posicaoX + " - Posição - Y " + posicaoY);

      // let tamanhoGridX = Number(posicaoY) + this.barco - 1;
      // let tamanhoGridY = Number(posicaoX) + this.barco - 1;
      let tamanhoGridX = Number(posicaoY) + this.barco;
      let tamanhoGridY = Number(posicaoX) + this.barco;
      console.log(tamanhoGridY);
      if (this.posicao == 1) {
        alert(this.posicao);
        if (tamanhoGridX > 10) {
          alert(tamanhoGridX);
          alert("A embarcação não cabe nessa posição!");
          return;
        }
        for (let i = 0; i < this.barco; i++) {
          if (this.campo1[posicaoY + i][posicaoX] != 0) {
            alert("Posição ocupada!");
            return;
          }
        }
        for (let i = 0; i < this.barco; i++) {
          if (this.barco == 5) {
            this.campo1[posicaoY + i][posicaoX] = "Avião";
          }
          if (this.barco == 3) {
            this.campo1[posicaoY + i][posicaoX] = "Navio";
          }
          if (this.barco == 1) {
            this.campo1[posicaoY + i][posicaoX] = "Sub";
          }
          document.getElementById(`${posicaoY + i}${posicaoX}`).className =
            "selecionado";
        }
        if (this.barco == 1) this.qtdSubmarinos++;
        if (this.barco == 3) this.qtdNavios++;
        if (this.barco == 5) this.qtdAvioes++;
        this.quantidadeEmbarcacao++;
        alert("QUANTIDADE DE EMBARCAÇÕES!!! " + this.quantidadeEmbarcacao);
      } else if (this.posicao == 2) {
        alert(this.posicao);
        if (tamanhoGridY > 10) {
          alert(tamanhoGridY);
          alert("A embarcação não cabe nessa posição!");
          return;
        }
        for (let i = 0; i < this.barco; i++) {
          if (this.campo1[posicaoY][posicaoX + i] != 0) {
            alert("Posição ocupada!");
            return;
          }
        }
        for (let i = 0; i < this.barco; i++) {
          if (this.barco == 5) this.campo1[posicaoY][posicaoX + i] = "Avião";
          if (this.barco == 3) this.campo1[posicaoY][posicaoX + i] = "Navio";
          if (this.barco == 1) this.campo1[posicaoY][posicaoX + i] = "Sub";
          document.getElementById(`${posicaoY}${posicaoX + i}`).className =
            "selecionado";
        }
        this.quantidadeEmbarcacao++;
        alert("QUANTIDADE DE EMBARCAÇÕES!!! " + this.quantidadeEmbarcacao);
        if (this.barco == 1) this.qtdSubmarinos++;
        if (this.barco == 3) this.qtdNavios++;
        if (this.barco == 5) this.qtdAvioes++;
      } else {
        alert("Selecione uma posição!");
      }
      this.enviarBackEnd(this.campo1);
      this.receberBackEnd();
      this.mostrarBotaoInicio();
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
  border: solid 1px;
  width: 90px;
  height: 45px;
}
.iniciarPartida {
  background-color: green;
  border-radius: 7px;
  color: white;
  display: none;
}
</style>
