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
    },
    {
      path: '/PCView/admin/storage',
      component: () => import('../PCView/admin/storage')
    },
    {
      path: '/PCView/admin/sending',
      component: () => import('../PCView/admin/sending')
    },
    {
      path: '/PCView/admin/packageHistory',
      component: () => import('../PCView/admin/packageHistory')
    },
    {
      path: '/PCView/admin/userFeedback',
      component: () => import('../PCView/admin/userFeedback')
    },
    {
      path: '/PCView/admin/adminInfo',
      component: () => import('../PCView/admin/adminInfo')
    },
    {
      path: '/PCView/superAdmin/superAdmin',
      component: () => import('../PCView/superAdmin/adminManage')
    },
    {
      path: '/PCView/superAdmin/areaManage',
      component: () => import('../PCView/superAdmin/areaManage')
    },
    {
      path: '/PCView/superAdmin/packageManage',
      component: () => import('../PCView/superAdmin/packageManage')
    },
    {
      path: '/PCView/superAdmin/superAdminInfo',
      component: () => import('../PCView/superAdmin/superAdminInfo')
    }
  ]
})
