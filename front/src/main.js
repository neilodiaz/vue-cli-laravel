import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import Router from './routes.js'
import Auth from './packages/auth/Auth.js'

import HeaderComponent from './components/partials/Header.vue'

import { APP_URL } from './config.js'

Vue.use(VueAxios, axios)
Vue.use(Auth)

Vue.component('header-menu', HeaderComponent)

axios.defaults.baseURL = APP_URL

if (Vue.auth.isAuthenticated()) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
}

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitor)) {
            if (Vue.auth.isAuthenticated()) {
                next({
                    path: '/'
                })
            } else {
                next()
            }
        } else if (to.matched.some(record => record.meta.forAuth)) {
            if (!Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
