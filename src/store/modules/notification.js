export const namespaced = true;

export const state = {
    notifications: []
}

let nextId = 1;

export const mutations = {
    PUSH(state, notification){
        state.notifications.push(notification)
    },
    DELETE(state, id){
        state.notifications = state.notifications.filter(n => n.id !== id)
    }
}

export const actions = {
    add({commit}, notification){
        const payload = {...notification, id: nextId++};
        commit('PUSH', payload);
    },
    remove({commit}, id){
        commit('DELETE', id);
    }
}