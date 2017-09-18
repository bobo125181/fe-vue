import {
  SETTITLE
} from '../module_types'
const state = {
  title: ''
}
const actions = {
  setTitle ({commit}, conditions) {
    commit('SETTITLE', conditions)
  }
}
const mutations = {
  [SETTITLE] (state, title) {
    state.title = title
  }
}
export default {
  state,
  actions,
  mutations
}

