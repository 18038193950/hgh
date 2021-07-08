import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'example',
    redirect: '/example/boot',
    children: [
      {
        path: '/example/boot',
        name: 'wh-boot',
        meta: {
          title: '综合'
        },
        component: () => import('@/views/example/wh-boot')
      },
      {
        path: '/example/form',
        name: 'wh-form',
        meta: {
          title: '表单'
        },
        component: () => import('@/views/example/wh-form')
      },
      {
        meta: {
          title: '表格'
        },
        path: '/example/table',
        name: 'wh-table',
        component: () => import('@/views/example/wh-table')
      },
      {
        meta: {
          title: '表格嵌套表单'
        },
        path: '/example/tableform',
        name: 'wh-tableform',
        component: () => import('@/views/example/wh-table-form')
      },
      {
        meta: {
          title: '按钮'
        },
        path: '/example/button',
        name: 'wh-button',
        component: () => import('@/views/example/wh-button')
      },
      {
        meta: {
          title: '弹窗'
        },
        path: '/example/dialog',
        name: 'wh-dialog',
        component: () => import('@/views/example/wh-dialog')
      },
      {
        meta: {
          title: '抽屉'
        },
        path: '/example/drawer',
        name: 'wh-drawer',
        component: () => import('@/views/example/wh-drawer')
      },
      {
        meta: {
          title: '菜单'
        },
        path: '/example/menu',
        name: 'wh-whmenu',
        component: () => import('@/views/example/wh-menu')
      },
      {
        meta: {
          title: 'OpenUrl'
        },
        path: '/example/openurl',
        name: 'wh-OpenUrl',
        component: () => import('@/views/example/wh-openurl')
      },
      {
        meta: {
          title: 'Vue'
        },
        path: '/example/vue',
        name: 'wh-vue',
        component: () => import('@/views/example/wh-vue')
      },
      {
        meta: {
          title: 'Npm'
        },
        path: '/example/npm',
        name: 'wh-npm',
        component: () => import('@/views/example/wh-npm')
      },
      {
        meta: {
          title: 'Rules'
        },
        path: '/example/rules',
        name: 'wh-vue',
        component: () => import('@/views/example/wh-rules/index.vue')
      },
      {
        meta: {
          title: 'Js'
        },
        path: '/example/js',
        name: 'wh-js',
        component: () => import('@/views/example/wh-js')
      },
      {
        meta: {
          title: 'Request'
        },
        path: '/example/request',
        name: 'wh-request',
        component: () => import('@/views/example/wh-request')
      },
      {
        meta: {
          title: 'Css'
        },
        path: '/example/css',
        name: 'wh-css',
        component: () => import('@/views/example/wh-css')
      }
    ]
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

export default router
