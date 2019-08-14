import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/index')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home 
        },
    ]
})