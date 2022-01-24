<template>
  <div class="container">
    <form class="mt-5" enctype="multipart/form-data">
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
        Artigo cadastrado com sucesso!
      </div>
      <div class="form-group mt-3">
        <label for="titulo">Título do artigo</label>
        <input
          type="text"
          v-model="artigo.titulo"
          class="form-control"
          id="titulo"
          name="titulo"
          placeholder="Digite o título do artigo"
        />
      </div>

      <div class="form-group mt-3">
        <label for="conteudo">Escreva seu artigo</label>

        <!-- <textarea
          name="conteudo"
          v-model="artigo.conteudo"
          class="form-control mt-1"
          id="conteudo"
          cols="114"
          rows="8"
        ></textarea> -->

        <textarea
          name="conteudo"
          v-model="artigo.conteudo"
          class="form-control mt-1"
          cols="114"
          rows="8"
          id="editor"
        >
        </textarea>
      </div>

      <div class="form-group mt-3">
        <label for="img">Escolha a imagem</label> <br />
        <input type="file" name="imagem" @change="selecionarImagem" id="img" />
      </div>

      <button type="submit" v-on:click="cadastrar" class="btn btn-primary mt-2">
        Cadastrar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      mostrar: false,
      imagemSelecionada: null,
      erros: [],
      artigo: {
        titulo: "",
        conteudo: "",
        imagem: "",
      },
    };
  },
  methods: {
    ...mapActions(["cadastrarArtigo", "listar"]),

    limparCampos() {
      this.artigo.titulo = "";
      this.artigo.conteudo = "";
      this.artigo.imagem = null;
      document.querySelector("#img").value = null;
    },

    //Seleciona a imagem do formulário
    selecionarImagem(e) {
      this.imagemSelecionada = e.target.files[0];
      this.artigo.imagem = this.imagemSelecionada;
    },

    cadastrar(e) {
      this.erros = [];
      this.mostrar = false;
      if (!this.artigo.titulo) {
        this.erros.push("O título é obrigatório!");
      }

      if (!this.artigo.conteudo) {
        this.erros.push("Conteúdo é obrigatório!");
      }

      if (!this.artigo.imagem) {
        this.erros.push("Imagem é obrigatória");
      } else {
        let arquivo = new FormData();
        arquivo.append("imagem", this.imagemSelecionada);
        arquivo.append("titulo", this.artigo.titulo);
        arquivo.append("conteudo", this.artigo.conteudo);
        arquivo.append("nomeAutor", this.dadosLogin.nome);
        this.cadastrarArtigo(arquivo);
        this.mostrar = true;
        this.limparCampos();
        setInterval(() => {
          this.mostrar = false;
        }, 4000);
      }

      e.preventDefault();
    },
  },
  computed: {
    ...mapState(["dadosLogin"]),
  },
};
</script>