<template>
  <div class="container">
    <h1>Projetos</h1>
    <div class="container">
      <div class="mt-4" v-for="projeto in projetos" :key="projeto.id">
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
