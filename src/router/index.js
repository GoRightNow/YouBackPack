import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../mobileView/login/login')
    },
    {
      path: '/register',
      name: 'Rigister',
      component: () => import('../mobileView/login/register')
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
      path: '/mobileView/business/chooseBusiness',
      name: 'chooseBusiness',
      component: () => import('../mobileView/business/chooseBusiness')
    },
    {
      path: '/mobileView/order/storageOrder',
      name: 'storageOrder',
      component: () => import('../mobileView/order/storageOrder')
    },
    {
      path: '/mobileView/order/sendingOrder',
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
