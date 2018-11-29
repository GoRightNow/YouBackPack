import Vue from 'vue'
import Router from 'vue-router'
import Login from '../mobileView/login/login'
import S from '../PCView/admin/storage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login
      }
    },
    {
      path: '/PCView',
      name: 'PCView',
      component: () => import('../PCView/login')
    },
    {
      path: '/PCView/admin',
      name: 'admin',
      components: {
        default: S
      }
    }
  ]
})
