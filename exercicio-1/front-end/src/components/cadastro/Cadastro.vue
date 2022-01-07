<template>
  <div class="main">
    <h2>Cadastrar Artigo</h2>

    <form class="mt-5" enctype="multipart/form-data">
      <div class="form-group mt-3">
        <label for="titulo">Nome do autor </label>
        <input
          type="text"
          v-model="artigo.nomeAutor"
          class="form-control"
          id="titulo"
          name="autor"
          placeholder="Digite o título do artigo"
        />
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
        <!-- <quill-editor v-model="artigo.conteudo">Editor </quill-editor> -->
      </div>

      <div class="form-group mt-3">
        <label for="img">Escolha a imagem</label> <br />
        <input type="file" name="imagem" @change="selecionarImagem" id="" />
      </div>

      <button type="submit" v-on:click="adicionar" class="btn btn-primary mt-2">
        Cadastrar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import verificaFormulario from "../../../src/services/servicesVerificaCampos";
export default {
  components: {},
  data() {
    return {
      imagemSelecionada: null,
      erros: [],
      artigo: {
        titulo: "",
        conteudo: "",
        nomeAutor: "",
        imagem: "",
      },
    };
  },
  methods: {
    ...mapActions(["adicionarArtigo"]),

    //Seleciona a imagem do formulário
    selecionarImagem(e) {
      this.imagemSelecionada = e.target.files[0];
      // console.log("\n\nARQUIVO"+this.imagemSelecionada+"\n\n\n")
    },

    adicionar() {
      let arquivo = new FormData();
      this.erros = verificaFormulario(this.artigo);
      console.log(this.erros);

      arquivo.append("imagem", this.imagemSelecionada);
      arquivo.append("titulo", this.artigo.titulo);
      arquivo.append("conteudo", this.artigo.conteudo);
      arquivo.append("nomeAutor", this.artigo.nomeAutor);

      this.adicionarArtigo(arquivo);
      this.artigo.titulo = "";
      this.artigo.conteudo = "";
      this.artigo.nomeAutor = "";

      setTimeout(() => {
        alert("Artigo cadastrado!");
      }, 100);
      this.$router.push("/");
    },

    // imagemSelecionada(event){
    //     this.imgArtigo = event.target.files
    // }
  },
};
</script>