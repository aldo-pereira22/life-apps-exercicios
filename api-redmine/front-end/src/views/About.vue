<template>
  <div class="container">
    <h1>Projetos</h1>

    <div class="container">
      <h1>
        {{ this.box }}
      </h1>
      <div class="filtros">
        <h3>Filtros</h3>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="ativo"
            name="filtros"
            id="ativo"
            v-model="ativo"
          />
          <label class="form-check-label" for="ativo"> Ativos </label>
        </div>
      </div>
      {{ ativo }}
      <div class="mt-4" v-for="projeto in projetos" :key="projeto.id">
        <!-- {{ projeto }} -->
        <div v-for="p in projeto" :key="p.id">
          <h1>1</h1>
          <br />
          {{ p }}
          <hr />
          <h2>2</h2>
          <br />
          {{ projeto }}
        </div>
        <div class="card">
          <h5 class="card-header">Projeto</h5>
          <div class="card-body">
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
  data() {
    return {
      project: "",
      ativo: true,
    };
  },
  computed: {
    ...mapState(["projetos"]),
    ...mapActions(["listarProjetos"]),
  },
  methods: {},

  created() {
    this.listarProjetos;
  },
};
</script>
<style scoped>
.filtros {
  text-align: left;
}
</style>