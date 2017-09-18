import {
  SETCONDITIONS,
  SETTOTAL,
  SETDATA
} from '../module_types'
// import axios from 'axios'
const state = {
  conditions: {
    pageNum: 1,
    pageSize: 10
  },
  total: 0,
  data: [],
  currentPage: 1
}
const actions = {
  setConditions ({commit}, conditions) {
    commit('SETCONDITIONS', conditions)
  },
  accountSearch ({commit, state}) {
    // fetcher.get('/wecashMarketSystem/system/product/order/list')
    // .then((res) => {
    //   console.log(res)
    // })
    // /account/list
    // /wecashMarketSystem/system/settle/order
    fetcher.get('/wecashMarketSystem/system/product/order/list')
    .then((res) => {
      console.log(res.data)
    })
    // axios.get('/account/list', {
    //   ...state.conditions})
    // .then((res) => {
    //   res.data.data.forEach((v) => {
    //     switch (v.isSettlement[0]) {
    //       case 2 :
    //         v.isSettlement[0] = '已结算'
    //         break
    //       case 1 :
    //         v.isSettlement[0] = '未结算'
    //         break
    //     }
    //   })
    //   res.data.data.forEach((v) => {
    //     switch (v.isRefund[0]) {
    //       case 2 :
    //         v.isRefund[0] = '是'
    //         break
    //       case 1 :
    //         v.isRefund[0] = '否'
    //         break
    //     }
    //   })
    //   commit('SETTOTAL', res.data.Total)
    //   commit('SETDATA', res.data.data)
    // })
  }
}
const mutations = {
  [SETCONDITIONS] (state, conditions) {
    Object.assign(state.conditions, conditions)
  },
  [SETTOTAL] (state, total) {
    state.total = total
  },
  [SETDATA] (state, data) {
    state.data = data
  }
}
export default {
  state,
  actions,
  mutations
}

