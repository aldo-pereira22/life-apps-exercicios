<template>
  <div class="main">
    <h2>Atualizar Artigo</h2>
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
    <div class="alert alert-primary" role="alert" v-if="mostrar">
      Artigo atualizado com sucesso!
    </div>
    <div>
      <form class="mt-5">
        <div class="form-group">
          <img
            v-if="artigo.imagem"
            :src="artigo.imagem"
            class="card-img-top"
            alt="Imagem do artigo"
          />

          <label for="img">Escolha a imagem</label> <br />
          <input
            type="file"
            name="img"
            @change="selecionarImagem"
            class="form-control-file"
            id="img"
          />
        </div>

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
          <label for="conteudo">Editar artigo</label>
          <textarea
            name="conteudo"
            v-model="artigo.conteudo"
            class="form-control mt-1"
            id="conteudo"
            cols="114"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            v-on:click="update"
            class="btn btn-warning mt-2 mr-3"
          >
            Atualizar
          </button>

          <router-link to="/">
            <button type="button" class="btn btn-primary ml-2 mt-2">
              Voltar
            </button>
          </router-link>
        </div>
        <!-- <button type="submit" class="btn btn-warning mt-2">Atualizar</button> -->
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      mostrar: false,
      erros: [],
      id: this.$route.params.id,
      imagemSelecionada: null,
    };
  },
  methods: {
    ...mapActions(["buscarArtigo", "atualizarArtigo"]),
    limparCampos() {
      this.artigo.titulo = "";
      this.artigo.conteudo = "";
      this.artigo.nomeAutor = "";
      document.querySelector("#img").value = null;
    },
    selecionarImagem(e) {
      this.imagemSelecionada = e.target.files[0];
      // this.artigo.imagem = this.imagemSelecionada;
    },

    // async update(artigo) {
    //   this.mostrar = false;
    //   this.erros = [];
    //   const atualizado = {
    //     id: artigo.id,
    //     titulo: artigo.titulo,
    //     nomeAutor: artigo.nomeAutor,
    //     conteudo: artigo.conteudo,
    //   };
    //   try {
    //     await this.atualizarArtigo(atualizado);
    //     // await this.buscarArtigo(artigo.id);
    //     alert("Artigo atualizado com sucesso!");
    //     this.$router.push("/");
    //   } catch (error) {
    //     error.data
    //       ? (this.message = error.data.message)
    //       : (this.message = "Não foi possível atualizar!");
    //   }
    //   e.preventDefault();

    //   this.ok = true;
    //   this.limparMensage();
    // },

    update(e) {
      // this.erros = [];
      // this.mostrar = false;
      // if (!this.artigo.titulo) {
      //   this.erros.push("O título é obrigatório!");
      // }

      // if (!this.artigo.conteudo) {
      //   this.erros.push("Conteúdo é obrigatório!");
      // } else {
      //   try {
      //     this.atualizarArtigo(this.artigo);
      //     this.$router.push("/");
      //   } catch (error) {
      //     error.data;
      //     // ? (this.message = error.data.message)
      //     // : (this.message = "Não foi possível atualizar!");
      //   }
      // }
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
        arquivo.append("titulo", this.artigo.titulo);
        arquivo.append("conteudo", this.artigo.conteudo);
        arquivo.append("nomeAutor", this.artigo.nomeAutor);
        arquivo.append("id", this.artigo.id);
        this.imagemSelecionada
          ? arquivo.append("imagem", this.imagemSelecionada)
          : null;

        this.atualizarArtigo(arquivo);
        this.mostrar = true;
        setInterval(() => {
          this.mostrar = false;
        }, 4000);
        this.limparCampos();
      }
      e.preventDefault();
    },
  },

  computed: {
    ...mapState(["artigo", "artigos"]),
  },
  created() {
    this.buscarArtigo(this.$route.params.id);
  },
};
</script>

<style>
img {
  width: 300px;
}
</style>