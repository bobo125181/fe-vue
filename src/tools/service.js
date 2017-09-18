import service from './axios.js'
export default {
  login: function (params, callback) {
    service.post('/account/list', params, callback)
  }
}
