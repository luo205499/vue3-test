import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10,
        user: ''
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        setUser(state,user){
            state.user=user;
        }
    },
    actions: {
        CommitIncrement({commit}) {
            setTimeout(() => {
                commit('increment')
            }, 600)
        },
        CommitDecrement({commit}) {
            setTimeout(() => {
                commit('decrement')
            }, 600)
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    }
})
