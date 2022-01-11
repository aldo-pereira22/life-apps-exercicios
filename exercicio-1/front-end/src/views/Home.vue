<template>
  <div class="mt-5">
    <div v-if="this.artigos.length >= 1" class="text-center">
      <router-link v-if="logado" :to="{ name: 'Cadastro' }">
        <button class="btn btn-success mr-3">Novo Artigo</button>
      </router-link>
    </div>
    <button type="submit" v-on:click="mostrar()" class="btn btn-primary mt-2">
      mostrar
    </button>
    <!-- <h1>Artigos</h1> -->

    <!-- {{artigos}} -->

    <div v-if="this.artigos.length >= 1" class="">
      <div v-for="artigo in artigos" :key="artigo.id">
        <div class="card" style="width: 18rem">
          <img
            :src="artigo.imagem"
            class="card-img-top"
            alt="Imagem do artigo"
          />
          <!-- {{artigo.imagem}} -->
          <div class="card-body">
            <h5 class="card-title">
              <strong> Titulo: </strong>{{ artigo.titulo }}
            </h5>
            <p class="card-text">
              <strong> Autor: </strong>{{ artigo.nomeAutor }}
            </p>

            <!-- <router-link class="mr-3" to="/verArtigo"> -->
            <router-link
              class="mr-3"
              :to="{ name: 'verartigo', params: { id: artigo.id } }"
            >
              <button class="btn btn-primary">Visualizar</button>
            </router-link>

            <!-- <router-link v-bind:to="{ name:'/atualizar', params:{ id:artigo.id }  } " > -->
            <router-link :to="{ name: 'Atualizar', params: { id: artigo.id } }">
              <button class="btn btn-warning mr-3">Editar</button>
            </router-link>

            <button v-on:click="deletar(artigo.id)" class="btn btn-danger">
              Excluir
            </button>
            <!-- <a  v-bind:href ="`http://localhost:3001/admin/excluir/${artigo.id}`" class="btn btn-danger mt-2">Excluir artigo </a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="alert alert-primary" role="alert">
        Ainda não há Artigos cadastrados
      </div>
      <router-link :to="{ name: 'Cadastro' }">
        <button class="btn btn-primary mr-3">Cadastrar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // logado: false,
    };
  },
  methods: {
    ...mapActions(["listar", "excluir"]),
    mostrar() {
      this.$store.dispatch("testeLogar", false);
    },

    async deletar(id) {
      try {
        await this.excluir(id);
        this.listar();
        this.$router.go();
      } catch (error) {
        alert("Nao foi possivel excluir" + error);
      }
    },
  },
  computed: {
    ...mapState(["artigos"]),
    logado() {
      return this.$store.state.logado;
    },
  },
  created() {
    this.listar();
    // this.getArtigosA()
  },
};
</script>

<style scoped>
/* .div {
  display: flex;
  flex-direction: row;
} */

.card {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
