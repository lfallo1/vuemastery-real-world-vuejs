import {getEvent, getEvents, postEvent} from "@/services/EventService";

//exporting individual objects example

export const namespaced = true;

export const state = {
    events: [],
    event: {},
    eventsCount: 0
}

export const getters = {
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}

export const mutations = {
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
}

export const actions = {
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
    createEvent({commit, rootState}, event){
        console.log(`Creating state for ${rootState.user.user.name}`);

        //dispatch('someModule/someAction', payload, {root: true})

        if(new Date().getTime() < 0){
            return postEvent(event)
                .then(() => {
                    commit('ADD_EVENT', event);
                })
                .catch(err => console.log(err))
        }
    }
}