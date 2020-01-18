import Vue from 'vue'
import Vuex from 'vuex'

//exporting user/event differently just for example purposes
import user from '@/store/modules/user'
import * as event from '@/store/modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        categories: ['food', 'nature', 'drinking', 'sports', 'fight me'],
    },
    modules: {
        user,
        event
    }
})