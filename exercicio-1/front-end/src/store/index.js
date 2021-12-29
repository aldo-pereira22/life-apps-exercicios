import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  
    state:{
      artigos:[],
      artigo:[]
    },
  
    mutations:{
      
      listar(state, payload){
            state.artigos = payload
      },

      excluir(state, payload){
        state.artigos = payload
      },

      adicionarArtigo(state, payload){
        state.artigos = payload
      },

      buscarArtigo(state, payload){
        state.artigo = payload
      },

      atualizarArtigo(state, payload){
        state.artigo = payload
      }



    },
    
  
    actions:{
      listar(context){
        axios.get('http://localhost:3001').then(resp => {
          console.log(resp.data)
          context.commit('listar', resp.data)
        })
      },

      adicionarArtigo(context, payload, imagem){
        axios.post('http://localhost:3001/admin/cadastrar',imagem, payload).then((resp)=> {
          context.commit('adicionarArtigo', resp.data)
          // return(resp.data)
        })
      },

      excluir(context, id){
        axios.delete('http://localhost:3001/admin/excluir/'+id).then(resp => {
          context.commit('excluir', resp.data)
        })
      },

      buscarArtigo(context, id){
        axios.get('http://localhost:3001/admin/buscar/'+id).then(resp =>{
          context.commit('buscarArtigo', resp.data)
        })
      },

      atualizarArtigo(context, artigo){
        axios.put('http://localhost:3001/admin/editar/'+artigo.id,artigo).then(resp => {
          context.commit('atualizarArtigo', resp.data)
        })
      }

    }
  
})




