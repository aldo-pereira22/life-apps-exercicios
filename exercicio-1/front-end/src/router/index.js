import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('../views/Cadastrar.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import('../views/Categoria.vue')
  },
  {
    path: '/atualizar',
    name: 'Atualizar',
    component: () => import('../components/update/Atualizar.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../components/cadastro/UploadImages')
  },
  {
    path: '/verArtigo',
    name: 'verartigo',
    component: () => import('../components/visualizar/Visualizar')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Usuarios/login/Login')
  },
  {
    path: '/cadastrarUsuario',
    name: 'CadastrarUsuario',
    component: () => import('../components/Usuarios/cadastro/Cadastro')
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
