import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10,
        token: ''
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        setToken(state,token){
            state.token=token;
            console.log(JSON.stringify(token))
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
