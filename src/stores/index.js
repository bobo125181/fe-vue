import vue from 'vue'
import vuex from 'vuex'
import mudules from './modules'
vue.use(vuex)

export default new vuex.Store({
  modules: mudules
})
