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
      <div>
        <small>
          <p><strong> Artigo atualizado em :</strong> {{ artigo.updatedAt }}</p>
        </small>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import io from "socket.io-client";

export default {
  data() {
    return {
      teste: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["buscarArtigo"]),
  },

  computed: {
    ...mapState(["artigo"]),
  },
  mounted() {
    // this.teste = this.artigo;
    this.socket.on("editado", (data) => {
      this.buscarArtigo(this.$route.params.id);
      this.teste = data;
      console.log("Dados ID: " + data.id);
    });
    this.socket.on("excluido", (data) => {
      console.log("EXCLUIDO", data.id == this.artigo.id);

      if (data.id == this.artigo.id) this.$router.push("/Erro");
    });
  },
  created() {
    this.teste = this.artigo;
    this.socket = io("http://localhost:3000");
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