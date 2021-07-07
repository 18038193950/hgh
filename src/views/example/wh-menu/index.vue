<template>
  <div class="app-container">
    <el-radio-group v-if="menuSetting.mode === 'vertical'" v-model="menuSetting.collapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-radio-group v-if="menuSetting.collapse === false" v-model="menuSetting.mode" style="margin-bottom: 20px;">
      <el-radio-button label="vertical">侧边栏</el-radio-button>
      <el-radio-button label="horizontal">导航栏</el-radio-button>
    </el-radio-group>
    <wh-menu
      :menu-list="menuList"
      :menu-setting="menuSetting"
    />
  </div>
</template>

<script>
export const constantRoutes = [
  // {
  //   path: '/login',
  //   hidden: true
  // },

  // {
  //   path: '/404',
  //   hidden: true
  // },

  {
    path: '/',
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    children: [
      {
        path: 'index',
        name: 'Form',
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        meta: { title: 'Menu1', icon: 'aaa' },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]
import whMenu from '@/components/wh-component/wh-menu/index.vue'
export default {
  name: 'Menu',
  components: {
    whMenu
  },
  data() {
    return {
      menuSetting: {
        backgroundColor: '#545c64',
        textColor: '#fff',
        activeTextColor: '#ffd04b',
        defaultOpeneds: [],
        uniqueOpened: true,
        router: true,
        collapseTransition: true,
        mode: 'horizontal', // vertical,horizontal
        collapse: false
      },
      menuList: constantRoutes

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
