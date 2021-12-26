<template>
  <div class="mt-5">

          <h1>Artigos</h1>
      
      <div class="div">
        <!-- {{artigos}} -->
          <div v-for="artigo in artigos" :key="artigo.id" >
            <div class="card" style="width: 18rem;">
                <img src="../assets/img/logo.png" class="card-img-top" alt="Imagem do artigo">
              <div class="card-body">
                <h5 class="card-title"> {{artigo.titulo}}</h5>
                <p class="card-text"> <strong> Autor: </strong> {{artigo.nomeAutor}} </p>
                <a href="#" class="btn btn-primary ">Ver artigo </a><br>
                <a href="#" class="btn btn-alert mt-2">Editar artigo </a> <br>
                <a href="#" class="btn btn-danger mt-2">Excluir artigo </a>

              </div>
            </div>
          </div>
      
      </div>
            

  </div>
</template>

<script>

import axios from 'axios'
// antes do VUEX
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      artigos: {}
    }
  },
  methods:{
    getArtigos(){
      axios.get('http://localhost:3001').then(resp => {
        this.artigos = resp.data
      })
    }
  },
  created() {
    this.getArtigos();
  }
}
</script>

<style scoped>
  .div{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .card {
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
