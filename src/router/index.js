import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../mobileView/login/login')
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
    },
    {
      path: '/storageOrder',
      name: 'storageOrder',
      component: () => import('../mobileView/order/storageOrder')
    },
    {
      path: '/sendingOrder',
      name: 'sendingOrder',
      component: () => import('../mobileView/order/sendingOrder')
    }
  ]
})
