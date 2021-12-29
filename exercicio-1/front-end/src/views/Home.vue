<template>
  <div class="mt-5">

          <h1>Artigos</h1>
       
        <!-- {{artigos}} -->
      
      <div class="div">
          <div v-for="artigo in artigos" :key="artigo.id" >
            <div class="card" style="width: 18rem;">
                <img :src=artigo.imagem class="card-img-top" alt="Imagem do artigo">
                <!-- {{artigo.imagem}} -->
              <div class="card-body">
                <h5 class="card-title"><strong> Titulo: </strong>{{artigo.titulo}}</h5>
                <p class="card-text"> <strong> Autor: </strong>{{artigo.nomeAutor}} </p>

                <router-link class="mr-3" to="/cadastro">
                  <button  class="btn btn-primary">Ver</button>
                </router-link>

                <!-- <router-link v-bind:to="{ name:'/atualizar', params:{ id:artigo.id }  } " > -->
                <router-link :to="{ name: 'Atualizar', params: { id: artigo.id  }}">
                  <button class="btn btn-warning mr-3">Editar</button>
                </router-link>

                <button v-on:click="qualquercoisa(artigo.id)" class="btn btn-danger">Excluir</button>
                <!-- <a  v-bind:href ="`http://localhost:3001/admin/excluir/${artigo.id}`" class="btn btn-danger mt-2">Excluir artigo </a> -->
              </div>
            </div>
          </div>
      
      </div>
            

  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {  
  },
  data(){
    return {
      
    }
  },
  methods:{
 
  ...mapActions(['listar', 'excluir']),

    async qualquercoisa(id){

      try {
        await this.excluir(id)
        this.listar()
        this.$router.go()
      } catch (error) {
        
          alert("Nao foi possivel excluir"+error)
        
      }
    }

  },
  computed:{
    ...mapState(['artigos'])
  },
  created() {
    this.listar();
    // this.getArtigosA()
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
