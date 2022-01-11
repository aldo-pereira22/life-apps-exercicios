<template>
  <div class="login">
    <form class="card">
      <div class="warning" v-if="erros.length">
        <div class="alert alert-primary" role="alert">
          Por favor, verifique o(s) seguinte(s) capmos(s)
        </div>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-danger"
            v-for="error in erros"
            :key="error + 1"
          >
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="alert alert-success" role="alert" v-if="mostrar">
        Usuário Cadastrado com sucesso!
      </div>
      <div class="card-header">
        <h2>Cadastro de Usuário!</h2>
      </div>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          v-model="usuario.nome"
          name="nome"
          class="form-control"
          placeholder="Digite seu Nome"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          v-model="usuario.email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite seu E-mail"
        />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input
          type="password"
          v-model="senha1"
          class="form-control"
          name="senha1"
          id="senha1"
          placeholder="senha"
        />
      </div>
      <div class="form-group">
        <label for="repitasenha">Repita a Senha</label>
        <input
          type="password"
          v-model="senha2"
          class="form-control"
          name="senha2"
          id="senha2"
          placeholder="Repita a senha"
        />
      </div>
      <div class="card-footer">
        <button
          type="submit"
          v-on:click="cadastrar"
          class="btn btn-primary mt-2"
        >
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// import axios from "axios";
export default {
  data() {
    return {
      erros: [],
      mostrar: false,
      senha1: "",
      senha2: "",

      usuario: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    // ...mapActions(["c"]),
    ...mapActions(["cadastrarUsuario"]),

    limparFormulario() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.usuario.senha1 = "";
      this.usuario.senha2 = "";
    },

    cadastrar(e) {
      this.erros = [];
      this.mostrar = false;
      if (!this.usuario.nome) {
        this.erros.push("Nome é obrigatório!");
      }
      if (!this.usuario.email) {
        this.erros.push("Email é obrigatório!");
      }
      if (!(this.senha1 || this.senha2)) {
        this.erros.push("Senha é obrigatória!");
      }
      if (!(this.senha1 === this.senha2)) {
        this.erros.push("As senha não são iguais!");
      } else {
        this.cadastrarUsuario(this.usuario);

        this.mostrar = true;
      }

      e.preventDefault();
    },
  },
};
</script>

<style>
</style>