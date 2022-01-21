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
    dadosLogin: {
      nome: localStorage.getItem("autor"),
      token: localStorage.getItem("token")
    },
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
    cadastrarArtigoComSocket(state, payload) {
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
    },
    login(state, payload) {
      state.dadosLogin = payload
    },
    logout(state) {
      state.dadosLogin = ""
      localStorage.removeItem('token');
      localStorage.removeItem('autor');

    },
    alterarArtigo(state, payload) {
      state.artigo = payload
    }



  },


  actions: {
    // Artigos
    alterarArtigo(context, payload) {
      context.commit('alterarArtigo', payload)
    },
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
    cadastrarArtigoComSocket() {

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

    login(context, payload) {
      axios.post('http://localhost:3001/usuario/login', payload).then((resp) => {
        // localStorage.setItem("autor", resp.data.author);
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("autor", resp.data.author);

        // context.commit('login', resp.data)
        console.log(resp)
      })

    },
    logout(context) {
      context.commit('logout')
    },

  },


  // Usuários


})




