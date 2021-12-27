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
    path: '/produtos',
    name: 'Produtos',
    component: () => import('../views/Produtos.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
