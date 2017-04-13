import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import Router from './routes.js'
import Auth from './packages/auth/Auth.js'

Vue.use(VueAxios, axios)
Vue.use(Auth)

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
