import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQuillEditor from 'vue-quill-editor';
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  // connection: 'http://metinseylan.com:1992',
  connection: 'http://localhost:3001',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  // options: { path: "./index.js/" } //Optional options
}))

// import 'quill/dist/quill.snow.css'
Vue.use(VueQuillEditor /* { default global options } */);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // VueWebsocket,
  render: h => h(App)
}).$mount('#app')
