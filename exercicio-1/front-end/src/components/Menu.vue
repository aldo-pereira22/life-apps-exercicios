<template>
  <div class="menu">
    <div class="warning">
      <div v-if="dadosLogin.nome" class="alert alert-primary" role="alert">
        <!-- {{ dadosLogin.message }} -->
        {{ this.dadosLogin.nome }}
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="nav-link" :to="{ name: 'Home' }">
          <h3><img src="../assets/img/artigos.jpg" alt="" /></h3>
        </router-link>
        <router-link class="nav-link" :to="{ name: 'Home' }">
          <h3>INICIO</h3>
        </router-link>
        <div>
          <div>
            <router-link v-if="!dadosLogin" :to="{ name: 'Login' }">
              <button type="button" class="btn btn-primary btn-sm mt-5">
                Login
              </button>
            </router-link>
          </div>
          <div>
            <router-link v-if="!dadosLogin" :to="{ name: 'CadastrarUsuario' }"
              ><button type="button" class="btn btn-success btn-sm">
                Registrar
              </button></router-link
            >
          </div>
          <div>
            <router-link v-if="dadosLogin" :to="{ name: 'CadastrarUsuario' }"
              ><button
                v-on:click="sair"
                type="button"
                class="btn btn-danger btn-sm"
              >
                Sair
              </button></router-link
            >
          </div>
        </div>
        <!-- <router-link class="nav-link" :to="{ name: 'Cadastro' }">
          <h3>CADASTRAR</h3>
        </router-link> -->
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    sair(e) {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
      this.logout();
      e.preventDefault();
    },
  },

  computed: {
    ...mapState(["dadosLogin"]),
  },
};
</script>

<style  scoped>
img {
  width: 100px;
  border-radius: 89px;
}
</style>