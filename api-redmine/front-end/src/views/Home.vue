<template>
  <div class="container">
    <h1>Página Home</h1>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquise um projeto"
                aria-label="Search"
                v-model="nome"
                id="textPesquisar"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                v-on:click.prevent.stop="pesquisar()"
              >
                Pesquisar
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                class="btn btn-outline-success"
                type="submit"
                v-on:click.prevent.stop="limparPesquisa()"
              >
                Todos
              </button>
            </form>
            <p></p>
          </div>
        </div>
        <br />
      </nav>
    </div>
    <div v-if="this.projetoPesquisado[0]" class="container">
      <div class="card">
        <h5 class="card-header">Projeto</h5>
        <div class="card-body">
          <h5 class="card-title">{{ projetoPesquisado[0].name }}</h5>
          <p class="card-text">
            {{ projetoPesquisado[0].description }}
          </p>
          <p>
            Data de criação:
            <strong>{{ projetoPesquisado[0].created_on }}</strong>
          </p>
          <a href="#" class="btn btn-primary">Detalhes do projeto</a>
        </div>
      </div>
    </div>
  </div>

  <hr />

  <div class="container" v-if="!this.projetoPesquisado">
    <h1>Todos os projetos</h1>
    <div class="container">
      <div class="mt-4" v-for="projeto in projetos" :key="projeto.id">
        <div class="card">
          <h5 class="card-header">Projeto</h5>
          <div class="card-body">
            <h1>
              <!-- <h5 class="card-title">{{ projeto.id }}</h5> -->
            </h1>
            <h5 class="card-title">{{ projeto.name }}</h5>
            <p class="card-text">
              {{ projeto.description }}
            </p>
            <p>
              Data de criação: <strong>{{ projeto.created_on }}</strong>
            </p>
            <a href="#" class="btn btn-primary">Detalhes do projeto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      nome: "",
      teste: false,
    };
  },
  computed: {
    ...mapState(["projetoPesquisado", "projetos"]),
  },
  methods: {
    ...mapActions([
      "pesquisarProjeto",
      "listarProjetos",
      "limparProjetoPesquisado",
    ]),
    pesquisar() {
      this.pesquisarProjeto(this.nome);
    },
    limparPesquisa() {
      this.limparProjetoPesquisado();
    },
  },
  created() {
    this.listarProjetos();
  },
};
</script>
<style scoped>
</style>
