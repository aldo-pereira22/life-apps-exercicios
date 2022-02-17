<template>
  <div class="home">
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
// @ is an alias to /src

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["projetos"]),
    ...mapActions(["listarProjetos"]),
  },
  created() {
    this.listarProjetos;
    console.log(this.projetos);
  },
};
</script>
