import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'about',
        alias: ['/info', '/contact'],
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/about',
        redirect: {name: 'about'}
    },
    {
        path: '*',
        redirect: {name: 'home'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
