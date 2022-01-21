<template>
  <div class="login">
    <form class="card">
      <div class="card-header">
        <!-- <h1>TOKEN: {{ this.dadosLogin.token }}</h1> -->
        <h2>Login</h2>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">E-mail</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite seu E-mail"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input
          type="password"
          v-model="senha"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="senha"
        />
        <div></div>
      </div>
      <div class="card-footer">
        <button type="submit" v-on:click="logar" class="btn btn-primary mt-2">
          Acessar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    ...mapActions(["login"]),

    logar() {
      const dados = {
        email: this.email,
        senha: this.senha,
      };

      this.login(dados);
      // this.$router.push();
      this.$forceUpdate();
      this.$router.push("/");

      // e.preventDefault();
    },
  },
  computed: {
    ...mapState(["dadosLogin"]),
  },
};
</script>

<style>
.login {
  width: 600px;
  height: 800px;
  margin: auto;
}
.card-header {
  background-color: blue;
  text-align: center;
  opacity: 0.5;
  color: white;
}
</style>