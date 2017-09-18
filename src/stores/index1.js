import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0,
  type: '',
  dialogVisible: false
}
const actions = {
  get ({commit}, num) {
    console.log(num)
    commit('ADD', num)
  },
  cut ({commit}, num) {
    commit('dialog', num)
  },
  changeType ({commit}, num) {
    commit('CHANGETYPE', num)
  },
  cancel ({commit}) {
    commit('CANCEL')
  }
}
const mutations = {
  ADD (state, num) {
    state.count++
    console.log('mutations:' + num)
  },
  CHANGETYPE (state, num) {
    console.log(num)
    state.type = num
    state.dialogVisible = true
  },
  CANCEL (state) {
    state.dialogVisible = false
  }
}
const getters = {
  count (state) {
    return state.count
  },
  dia (state) {
    return state.dialogVisible
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
