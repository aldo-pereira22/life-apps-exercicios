<template>
  <div class="container">
    <h1>Página Home</h1>
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
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              v-on:click.prevent.stop="pesquisar()"
            >
              Pesquisar
            </button>
          </form>
          <p></p>
        </div>
      </div>
      <br />
    </nav>

    <div>
      <!-- {{ projetoPesquisado[0].name }} -->
    </div>
    <!-- <p v-if="this.projetoPesquisado">
      {{ this.projetoPesquisado[0].id }} <br />
      {{ this.projetoPesquisado[0].name }}

      <br />
    </p> -->
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
    <div v-else>Não foi encontrado Projeto com este nome</div>
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
    };
  },
  computed: {
    ...mapState(["projetoPesquisado"]),
  },
  methods: {
    ...mapActions(["pesquisarProjeto"]),
    pesquisar() {
      this.pesquisarProjeto(this.nome);
    },
  },
  created() {},
};
</script>
