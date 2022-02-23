<template>
  <div class="container">
    <h1>Projetos</h1>
    <div class="container">
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
  data() {
    return {
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