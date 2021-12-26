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
      artigos:[]
    },
  
    mutations:{
      
      listar(state, payload){
            state.artigos = payload
      },

      excluir(state, payload){
        state.artigos = payload
      } 


    },
    
  
    actions:{
      listar(context){
        axios.get('http://localhost:3001').then(resp => {
          console.log(resp.data)
          context.commit('listar', resp.data)
        })
      },

      excluir(context, id){
        axios.delete('http://localhost:3001/admin/excluir/'+id).then(resp => {
          context.commit('excluir', resp.data)
        })
      }

    }
  
})




