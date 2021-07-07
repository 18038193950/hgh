<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        router
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" />
            <span>例子</span>
          </template>
          <el-menu-item index="boot">综合</el-menu-item>
          <el-menu-item index="form">表单</el-menu-item>
          <el-menu-item index="table">表格</el-menu-item>
          <el-menu-item index="tableform">表格嵌套表单</el-menu-item>
          <el-menu-item index="button">按钮</el-menu-item>
          <el-menu-item index="dialog">弹窗</el-menu-item>
          <el-menu-item index="drawer">抽屉</el-menu-item>
          <el-menu-item index="menu">菜单</el-menu-item>
        </el-submenu>
        <el-menu-item index="2" disabled>
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document" />
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
