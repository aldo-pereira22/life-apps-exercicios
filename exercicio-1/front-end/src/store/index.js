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
      getArtigosM(state, payload){
            state.artigos = payload
      }
    },
  
    actions:{
      getArtigosA(context){
        axios.get('http://localhost:3001').then(resp => {
          console.log(resp.data)
          context.commit('getArtigosM', resp.data)
        })
      }
    }
  
})




