<template>
  <div class="container">
    <h1>Leitura de Artigo</h1>
    <div>
      <img :src="artigo.imagem" alt="" />
    </div>
    {{ artigo }}

    <p>
      <strong> Atualizado em: {{ artigo.updatedAt }}</strong>
    </p>
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
  methods: {
    ...mapActions(["buscarArtigo"]),
  },

  computed: {
    ...mapState(["artigo"]),
  },
  created() {
    this.buscarArtigo(this.$route.params.id);
  },
};
</script>

<style>
</style>