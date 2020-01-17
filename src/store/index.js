import Vue from 'vue'
import Vuex from 'vuex'
import {getEvent, getEvents} from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:{
            id: 'abc12345', name: 'TestUser'
        },
        categories: ['food', 'nature', 'drinking', 'sports', 'fight me'],
        todos: [{id: 1, text: '....', done: true},{id: 2, text: '....', done: false},{id: 3, text: '....', done: true}],
        events: [],
        event: {}
    },
    getters: {
        catLength: state => state.categories.length,
        doneTodos: state => state.todos.filter(t => t.done),
        activeTodosCount: (state,getters) => state.todos.length - getters.doneTodos.length,
        getTodosById: (state) => (id) => state.todos.find(e => e.id === id)
    },
    mutations: {
        SET_EVENTS(state, events) {
            state.events = events
        },
        SET_EVENT(state, event) {
            state.event = event;
        }
    },
    actions: {
        fetchEvents({commit}) {
            getEvents().then(res => commit('SET_EVENTS', res.data))
                .catch(err => console.log(err));
        },
        fetchEvent({commit}, id) {
            getEvent(id).then(res => commit('SET_EVENT', res.data))
                .catch(err => console.log(err));
        }
    },
    modules: {}
})
