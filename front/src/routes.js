import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'
import Login from './components/auth/Login.vue'
import Registration from './components/auth/Registration.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                forAuth: true
            }
        },

        {
            path: '/login',
            component: Login,
            meta: {
                forVisitor: true
            }
        },

        {
            path: '/register',
            component: Registration,
            meta: {
                forVisitor: true
            }
        }
    ]
})

export default router