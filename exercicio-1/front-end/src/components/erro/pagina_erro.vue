<template>
  <div>
    <div class="alert alert-primary" role="alert">
      <h3>Atenção! O artigo que vc estava lendo foi excluído!</h3>
      <br />
      Voltar para todos os artigos. <br />
      <!-- <div>
        <router-link :to="{ name: 'Home' }">
          <button class="btn btn-primary mr-3">Cadastrar</button>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
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
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style>
</style>