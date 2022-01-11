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

  state: {
    artigos: [],
    artigo: [],
    logado: true,
    usuario: []
  },

  mutations: {

    // Artigos
    listar(state, payload) {
      state.artigos = payload
    },

    excluir(state, payload) {
      state.artigos = payload
    },

    cadastrarArtigo(state, payload) {
      state.artigos = payload
    },

    buscarArtigo(state, payload) {
      state.artigo = payload
    },
    atualizarArtigo(state, payload) {
      state.artigo = payload
    },
    logar(state, payload) {
      state.logado = payload
    },
    // Usuários
    cadastrarUsuario(state, payload) {
      state.usuario = payload
    },
    testeLogar(state, payload) {
      state.logado = payload
    }


  },


  actions: {
    // Artigos
    listar(context) {
      axios.get('http://localhost:3001').then(resp => {
        console.log(resp.data)
        context.commit('listar', resp.data)
      })
    },

    cadastrarArtigo(context, payload) {
      axios.post('http://localhost:3001/admin/cadastrar', payload).then((resp) => {
        context.commit('cadastrarArtigo', resp.data)
        // return(resp.data)
      })
    },

    excluir(context, id) {
      axios.delete('http://localhost:3001/admin/excluir/' + id).then(resp => {
        context.commit('excluir', resp.data)
      })
    },

    buscarArtigo(context, id) {
      axios.get('http://localhost:3001/admin/buscar/' + id).then(resp => {
        context.commit('buscarArtigo', resp.data)
      })
    },

    atualizarArtigo(context, payload) {
      axios.put('http://localhost:3001/admin/editar/', payload).then(resp => {
        context.commit('atualizarArtigo', resp.data)
      })
    },

    cadastrarUsuario(context, payload) {
      axios.post('http://localhost:3001/usuario/cadastrar', payload).then((resp) => {
        context.commit('cadastrarUsuario', resp.data)
        // return(resp.data)
      })
    },
    testeLogar(context, payload) {
      context.commit('testeLogar', payload)
    },

  },


  // Usuários


})




