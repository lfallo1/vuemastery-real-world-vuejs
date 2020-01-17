import Vue from 'vue'
import Vuex from 'vuex'
import {getEvent, getEvents, postEvent} from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:{
            id: 'abc12345', name: 'TestUser'
        },
        categories: ['food', 'nature', 'drinking', 'sports', 'fight me'],
        events: [],
        event: {},
        eventsCount: 0
    },
    getters: {
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        }
    },
    mutations: {
        SET_EVENTS(state, events) {
            state.events = events
        },
        SET_EVENT(state, event) {
            state.event = event;
        },
        SET_EVENTS_COUNT(state, eventsCount){
            state.eventsCount = eventsCount;
        },
        ADD_EVENT(state, event){
            state.events.push(event);
        }
    },
    actions: {
        fetchEvents({commit}, {perPage, page}) {
            getEvents(perPage, page)
                .then(res => {
                    commit('SET_EVENTS_COUNT', res.headers['x-total-count']);
                    commit('SET_EVENTS', res.data)
                })
                .catch(err => console.log(err));
        },
        fetchEvent({commit, getters}, id) {
            const event = getters.getEventById(id)
            if(event){
                commit('SET_EVENT', event);
            }
            else {
                getEvent(id).then(res => commit('SET_EVENT', res.data))
                    .catch(err => console.log(err));
            }
        },
        createEvent({commit}, event){
            return postEvent(event)
                .then(() => {
                    commit('ADD_EVENT', event);
                })
                .catch(err => console.log(err))
        }
    },
    modules: {}
})
