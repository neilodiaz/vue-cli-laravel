import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import Router from './routes.js'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
