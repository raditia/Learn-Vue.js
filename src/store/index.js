import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {        //Repository
      increment (state) {
        state.count++
      }
    },
    getters: {
        getCount: (state) => {
            return state.count
        }
    },
    actions: {          //Service
        doIncrement: ({commit}) => {
            commit('increment')
        }
    }
})

export default store

// store.commit('increment')

// console.log(store.state.count) // -> 1