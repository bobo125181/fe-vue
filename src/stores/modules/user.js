const state = {
  count: 0
}
const actions = {
  add ({commit}) {
    console.log('user add')
    commit('ADD', 1)
  }
}
const mutations = {
  ADD (state, num) {
    state.count = state.count + num
  }
}
export default {
  state,
  actions,
  mutations
}
