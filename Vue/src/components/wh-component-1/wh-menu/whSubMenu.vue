<template>
  <el-submenu :index="menu.url">
    <template v-if="menu.title !== null" slot="title">
      <i :class="menu.icon" />
      <span slot="title">{{ menu.title }}</span>
    </template>
    <!-- <template v-if="menu.childs !== null">
      <template v-for="menuItem in menu.childs">
        <template v-if="menuItem.type === 'item'">
          <wh-menu-item :key="menuItem.id" :menu="menuItem" />
        </template>
        <template v-if="menuItem.type === 'submenu'">
          <wh-sub-menu :key="menuItem.id" :menu="menuItem" />
        </template>
        <template v-if="menuItem.type === 'group'">
          <wh-menu-group :key="menuItem.id" :menu="menuItem" />
        </template>
      </template>
    </template> -->
  </el-submenu>
</template>

<script>
/* eslint-disable */
import whMenuItem from './whMenuItem'
import whMenuGroup from './whMenuGroup'

export default {
  name: 'WhSubMenu',
  components: { whMenuItem, whMenuGroup },
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  }
}
</script>

