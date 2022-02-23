import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    projetos: [],
    issues: [],
    projetoPesquisado: ""
  },
  mutations: {
    projetos(state, payload) {
      state.projetos = payload
    },
    projetoPesquisado(state, payload) {

      state.projetoPesquisado = payload
    },

    // Issues
    issues(state, payload) {
      state.issues = payload
    },
  },
  actions: {

    // PROJETOS
    listarProjetos(context) {
      axios.get('http://localhost:3001/projects').then(resp => {
        context.commit('projetos', resp.data)
      })
    },
    pesquisarProjeto(context, nome) {

      axios.get('http://localhost:3001/buscarProjeto/' + nome).then(resp => {
        // console.log(resp.data)
        context.commit('projetoPesquisado', resp.data)
      }).catch((err) => {
        console.log(err)
        return err
      })
    },

    limparProjetoPesquisado(context) {
      context.commit('projetoPesquisado', "")
    },
    // filtrarProjeto(context, filtro) {

    // },

    // ISSUES
    listarIssues(context) {
      axios.get('http://localhost:3001/issues').then(resp => {
        console.log("lista de issues: ")
        console.log(resp.data)
        context.commit('issues', resp.data)
      })
    },


  },
  modules: {
  }
})
