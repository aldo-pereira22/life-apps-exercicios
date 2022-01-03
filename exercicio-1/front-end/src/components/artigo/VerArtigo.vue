<template>
  <div class="container">
    <h2>Título:</h2>
    <h3>{{ artigo.titulo }}</h3>
    <h2>Autor:</h2>
    <h3>{{ artigo.nomeAutor }}</h3>
    <h2>ID:</h2>
    <h3>{{ artigo.id }}</h3>
    <h2>Criado em:</h2>
    <h3>{{ artigo.createdAt }}</h3>
    <h2>Ultima autalização:</h2>
    <h3>{{ artigo.updatedAt }}</h3>
    <div>{{ artigo }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["artigo"]),
  },
  methods: {
    ...mapActions(["buscarArtigo"]),
  },
  created() {
    this.buscarArtigo(this.$route.params.id);
  },
};
</script>
 
    
<style>
</style>