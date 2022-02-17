import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    projetos: []
  },
  mutations: {
    projetos(state, payload) {
      state.projetos = payload
    },
  },
  actions: {
    listarProjetos(context) {
      axios.get('http://localhost:3001').then(resp => {
        context.commit('projetos', resp.data)
      })
    },

  },
  modules: {
  }
})
