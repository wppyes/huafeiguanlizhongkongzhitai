

import Layout from '@/view/layout/Layout'
const managerRouter = {
  path: '/manager',
  component: Layout,
  alwaysShow: true,
  redirect: '/manager/menus',
  name:'manager',
  title: 'title',
  children: [
    {
      path: 'menus',
      component: () => import('@/view/manager/menus'),
      meta: {
        title: '菜单管理'
      }
    },
    {
      path: 'menuscusror',
      component: () => import('@/view/manager/menuscusror'),
      meta: {
        title: '客户菜单管理'
      }
    },
    {
      path: 'role',
      component: () => import('@/view/manager/role'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'rolecusror',
      component: () => import('@/view/manager/rolecusror'),
      meta: {
        title: '客户角色管理'
      }
    },
    {
      path: 'users',
      component: () => import('@/view/manager/users'),
      meta: {
        title: '用户管理'
      }
    },
  ]
}
export default managerRouter
