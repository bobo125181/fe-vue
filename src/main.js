import Vue from 'vue'
import App from './App'
import store from './stores'
import router from './router'
import 'whatwg-fetch'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import tools from './tools/tools'
import mock from './service'
mock.bootstrap()
// import rem from '../static/js/rem.js'
// Vue.use(rem)
Vue.use(MintUI)
Vue.use(tools)
Vue.use(ElementUi)
Vue.config.productionTip = false

// const tit = document.createElement('div')
// tit.className = 'titleinfo'
// router.afterEach((to, from, next) => {
//   tit.innerHTML = to.name
// })
// document.body.appendChild(tit)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
