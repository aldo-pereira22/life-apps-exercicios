<template>
  <div>
    <h1>Página de TESTE</h1>

    <button type="button" class="btn btn-primary btn-sm mt-5">
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
  },
  computed: {
    ...mapState(["artigo"]),
  },
  mounted() {
    // this.$sockets.on("teste", (data) => {
    //   console.log(data);
    // });

    this.sockets.subscribe("teste", (data) => {
      console.log(data);
    });

    this.sockets.unsubscribe("connection", () => {
      console.log("TESTE DO");
    });

    // this.sockets.unsubscribe("message", "Mesagem do front-end!");
    // console.log("TESTE!");
  },
};
</script>

<style>
</style>