import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      mass: []
    }
  },
  getters: {
    doneMass (state) {
      return state.mass
    }
  },
  mutations: {
    incrementPush (state,e) {
      state.mass.push(e)
    },
    returnState (state) {
      state.mass = []
    }
  },
  actions: {
    incrementPush (context,e) {
      context.commit('incrementPush',e)
    },
    returnState (context) {
      context.commit('returnState')
    }
  }
})

export default store