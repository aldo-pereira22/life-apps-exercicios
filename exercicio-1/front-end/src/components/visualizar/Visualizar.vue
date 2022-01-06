<template>
  <div class="container">
    <div class="artigo">
      <div class="img">
        <img :src="artigo.imagem" alt="" />
      </div>
      <hr />
      <div class="autor">
        <h3>Autor:</h3>
        <strong> {{ artigo.nomeAutor }}</strong>
      </div>
      <hr />
      <div class="titulo">
        <h3>Título:</h3>
        <strong> {{ artigo.titulo }}</strong>
      </div>
      <hr />

      <div class="conteudo">
        <pre>
          {{ artigo.conteudo }}
        </pre>
      </div>
      <hr />
    </div>

    <p><strong> Atualizado em:</strong> {{ artigo.updatedAt }}</p>
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
h3 {
  display: inline-block;
}
.artigo {
  /* width: 100vw;
  height: 100vh;
  background: #6c7a89;
  display: flex;
  flex-direction: row; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.conteudo {
  align-items: center;
}
</style>