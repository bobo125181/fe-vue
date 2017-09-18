import {
  SETEDITTYPE
} from '../module_types.js'
const state = {
  count: 0,
  type: '',
  total: 0
}
const actions = {
  setEditType ({commit}, load) {
    console.log(load.editType)
    commit('SETEDITTYPE', load.editType)
  }
}
const mutations = {
  [SETEDITTYPE] (state, num) {
    state.type = num
  }
}
export default {
  state,
  actions,
  mutations
}
