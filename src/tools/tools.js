// window.fetcher = fetcher
// Vue.prototype.fetcher = fetcher
// Object.defineProperty(Vue.prototype, '$http', {
//   value: fetcher
// })
import fetcher from './fetcher.js'
import axios from 'axios'
window.fetcher = fetcher
export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: fetcher
    })
    Object.defineProperty(Vue.prototype, 'axios', {
      value: axios
    })
  }
}

