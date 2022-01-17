<template>
  <div>
    <h1>Página de TESTE</h1>

    <button
      type="button"
      v-on:click="alterar"
      class="btn btn-primary btn-sm mt-5"
    >
      Teste com WebSocket
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      artigo1: {
        titulo: "teste",
        conteudo: "teste",
        imagem: "teste",
      },
    };
  },
  methods: {
    ...mapActions(["alterarArtigo"]),
    teste() {
      console.log(this.artigo1.titulo);
      this.alterarArtigo(this.artigo);
    },
  },
  computed: {
    ...mapState(["artigo"]),
  },
};
</script>

<style>
</style>