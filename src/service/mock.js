import axios from 'axios'
import Mock from 'axios-mock-adapter'
import { account } from './account/account.js'
let accountObj = {
  Total: 100,
  data: account,
  errorDescription: '操作成功',
  page: 1,
  pageSize: 10,
  successful: '1'
}
export default {
  bootstrap () {
    let mock = new Mock(axios)
    mock.onGet('/account/list').reply(config => {
      let pageAccount = account.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      accountObj.data = pageAccount
      let statusAccount = []
      if (config.settleStatus === '2') {
        for (let i = 0; i < account.length; i++) {
          if ((i % 2) === 0) {
            statusAccount.push(account[i])
          }
        }
        accountObj.data = statusAccount.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      }
      if (config.settleStatus === '3') {
        for (let i = 0; i < account.length; i++) {
          if ((i % 2) === 1) {
            statusAccount.push(account[i])
          }
        }
        accountObj.data = statusAccount.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      }
      if (config.ordervalue) {
        account.some((val) => {
          if (Number(val.isRefund[0]) === Number(config.ordervalue)) {
            statusAccount.push(val)
          }
        })
        accountObj.data = statusAccount.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      }
      return new Promise((resolve, reject) => {
        resolve([200, accountObj])
      })
    })
  }
}
