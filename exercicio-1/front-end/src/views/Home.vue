<template>
  <div class="mt-5">
    <div v-if="this.artigos.length >= 1 && dadosLogin.nome" class="text-center">
      <router-link :to="{ name: 'Cadastro' }">
        <button class="btn btn-success mr-3">Novo Artigo</button>
      </router-link>
    </div>

    <!-- <h1>Artigos</h1> -->

    <!-- {{artigos}} -->

    <div v-if="this.artigos.length >= 1" class="container">
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
            <router-link
              v-if="dadosLogin.nome"
              :to="{ name: 'Atualizar', params: { id: artigo.id } }"
            >
              <button class="btn btn-warning mr-3">Editar</button>
            </router-link>

            <button
              v-if="dadosLogin.nome"
              v-on:click="deletar(artigo.id)"
              class="btn btn-danger"
            >
              Excluir
            </button>
            <!-- <a  v-bind:href ="`http://localhost:3001/admin/excluir/${artigo.id}`" class="btn btn-danger mt-2">Excluir artigo </a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="alert alert-primary" role="alert">
        Ainda não há Artigos cadastrados <br />
      </div>
      <br />
      <div>
        <router-link v-if="this.dadosLogin.nome" :to="{ name: 'Cadastro' }">
          <button class="btn btn-primary mr-3">Cadastrar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["listar", "excluir"]),

    async deletar(id) {
      try {
        await this.excluir(id);
        this.listar();
        this.$router.go();
        // this.$router.push("/");
      } catch (error) {
        alert("Nao foi possivel excluir" + error);
      }
    },
  },
  computed: {
    ...mapState(["artigos", "dadosLogin"]),
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
.container {
  display: flex;
}
.container img {
  width: 300px;
}
</style>
