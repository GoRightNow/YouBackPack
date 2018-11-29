import Vue from 'vue'
import Router from 'vue-router'
import Login from '../mobileView/login'

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
      components: () => import('../PCView/login'),
      children: [
        {
          path: '/admin',
          name: 'admin',
          components: () => import('../PCView/admin/storage')
        }
      ]
    }
  ]
})
