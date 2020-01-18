import {getEvent, getEvents, postEvent} from "@/services/EventService";
import {logError,logSuccess} from "../../services/LoggerService";

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
    fetchEvents({commit, dispatch}, {perPage, page}) {
        commit('SET_EVENTS', [])
        getEvents(perPage, page)
            .then(res => {
                commit('SET_EVENTS_COUNT', res.headers['x-total-count']);
                commit('SET_EVENTS', res.data)
            })
            .catch(err => logError(dispatch, 'There was an error loading events: ' + err.message));
    },
    fetchEvent({commit, dispatch, getters}, id) {
        const event = getters.getEventById(id)
        if(event){
            commit('SET_EVENT', event);
        }
        else {
            return getEvent(id)
                .then(res => commit('SET_EVENT', res.data))
                .catch(err => logError(dispatch, 'There was an error loading this event: ' + err.message));
        }
    },
    createEvent({commit, dispatch, rootState}, event){
        console.log(`Creating state for ${rootState.user.user.name}`);

        return postEvent(event)
            .then(() => {
                commit('ADD_EVENT', event);
                logSuccess(dispatch, 'Event created successfully!');
            })
            .catch(err => logError(dispatch, 'There was an error creating this event: ' + err.message, err))
    }
}

