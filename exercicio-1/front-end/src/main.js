import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQuillEditor from 'vue-quill-editor';
import VueWebsocket from "vue-websocket";
Vue.use(VueWebsocket);

// import 'quill/dist/quill.snow.css'
Vue.use(VueQuillEditor /* { default global options } */);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueWebsocket,
  render: h => h(App)
}).$mount('#app')
