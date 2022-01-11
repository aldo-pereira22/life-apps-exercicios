<template>
  <div class="menu">
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
            <router-link :to="{ name: 'Login' }">
              <button type="button" class="btn btn-primary btn-sm mt-5">
                Login
              </button>
            </router-link>
          </div>
          <div>
            <router-link :to="{ name: 'CadastrarUsuario' }"
              ><button type="button" class="btn btn-success btn-sm">
                Registrar
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      ...mapState(["logado"]),
    };
  },

  created() {
    // this.teste = this.logado;
  },
};
</script>

<style  scoped>
img {
  width: 100px;
  border-radius: 89px;
}
</style>