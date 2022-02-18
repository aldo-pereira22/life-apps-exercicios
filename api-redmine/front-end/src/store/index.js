import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    projetos: [],
    projetoPesquisado: ""
  },
  mutations: {
    projetos(state, payload) {
      state.projetos = payload
    },
    projetoPesquisado(state, payload) {
      state.projetoPesquisado = payload
    },
  },
  actions: {
    listarProjetos(context) {
      axios.get('http://localhost:3001/projects').then(resp => {
        context.commit('projetos', resp.data)
      })
    },
    pesquisarProjeto(context, nome) {
      console.log("Nome Pesquisado: " + nome)
      axios.get('http://localhost:3001/buscarProjeto/' + nome).then(resp => {
        console.log(resp.data)
        context.commit('projetoPesquisado', resp.data)
      })
    },

  },
  modules: {
  }
})
