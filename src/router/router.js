import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '@/views/EventCreate.vue'
import EventList from '@/views/EventList.vue'
import EventShow from '@/views/EventShow.vue'
import NotFound from '@/views/404.vue'
import NetworkIssue from '@/views/NetworkIssue.vue'
import store from '@/store/store'
import NProgress from 'nprogress';

import FormValidationExample from '@/views/FormValidationExample.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'event-list',
        component: EventList,
        props: true
    },
    {
        path: '/event/show/:id',
        name: 'event-show',
        component: EventShow,
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
            store.dispatch('event/fetchEvent',routeTo.params.id).then(() => {
                routeTo.params.event = store.state.event.event;
                next();
            }).catch(err => {
                const status = err && err.response && err.response.status ? err.response.status : -1;
                if(status == 404){
                    next({name: '404', params: {resource: 'event'}})
                } else{
                    next({name: 'network-issue'});
                }
            })
        }
    },
    {
        path: '/event/create',
        name: 'event-create',
        component: EventCreate
    },
    {
        path: '/example',
        name: 'example',
        component: FormValidationExample
    },
    {
        path: '/NotFound',
        name: '404',
        component: NotFound,
        props: true
    },
    {
        path: '/network-issue',
        name: 'network-issue',
        component: NetworkIssue
    },
    {
        path: '*',
        redirect: {name: '404'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((routeTo, routeFrom, next) =>{
    NProgress.start();
    next();
});

router.afterEach(() =>{
    NProgress.done();
})

export default router
