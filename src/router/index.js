import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import login from '@/components/user/login'
import zhuce from '@/components/user/zhuce'
import home from '@/components/home'
import Role from '@/components/Role/Role'
import Order from '@/components/order/order'
import Account from '@/components/Account/account'
import main from '@/components/computed/main'
import Operations from '@/components/operations/operations'
import {SETTITLE} from '@/stores/module_types.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: login
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/main',
      name: 'Main',
      component: main
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      children: [
        {
          path: 'role',
          name: 'role',
          component: Role,
          meta: {
            title: '角色列表'
          }
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
          meta: {
            title: '订单列表'
          }
        },
        {
          path: 'operations',
          name: 'operations',
          component: Operations,
          meta: {
            title: '运营位列表'
          }
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
          meta: {
            title: '商家结算'
          }
        }
      ]
    }
  ]
})

router.afterEach((route) => {
  setTimeout(function () {
    route.meta && router.app.$store.commit(SETTITLE, route.meta.title)
  }, 0)
})
export default router
