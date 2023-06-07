import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

// Create a new store instance.
const store = createStore({
    state,
    actions,
    mutations,
    getters
});

export default store;