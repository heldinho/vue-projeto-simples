import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, actions } from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
  // modules: {}
})
