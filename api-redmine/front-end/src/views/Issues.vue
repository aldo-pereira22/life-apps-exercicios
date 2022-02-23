<template>
  <div class="container">
    <h1>Issues</h1>
    <p>
      <strong>Filtrar por prioridade:</strong>

      <select
        name="prioridade"
        id=""
        class="select"
        v-model="select"
        v-on:click="selecionar()"
      >
        <option value="0" selected>Todas</option>
        <option value="1">Baixa</option>
        <option value="2">Normal</option>
        <option value="3">Alta</option>
        <option value="4">Urgente</option>
        <option value="5">Imediata</option>
      </select>
    </p>
    <h2>{{ this.select }}</h2>
    <div class="mt-4" v-for="issue in issues" :key="issue.id">
      <div class="card">
        <h5 class="card-header">Issue: {{ issue.id }}</h5>
        <h4>Projeto: {{ issue.project.name }}</h4>
        <div class="card-body">
          <h5 class="card-title">{{ issue.subject }}</h5>
          <h5>Prioridade: {{ issue.priority.name }}</h5>

          <p class="card-text"></p>
          <p>
            Data de criação: <strong>{{ issue.start_date }}</strong>
          </p>
          <a href="#" class="btn btn-primary">Detalhes da Issue</a>
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
      //   issues: "",
      prioridade: "",
      select: "",
    };
  },
  methods: {
    selecionar() {
      alert("mudou");
    },
  },
  computed: {
    ...mapState(["issues"]),
    ...mapActions(["listarIssues"]),
  },
  created() {
    this.listarIssues;
    console.log("Issues: ", this.issues);
  },
};
</script>

<style>
.select {
  width: 120px;
}
p {
  font-size: 20px;
}
</style>