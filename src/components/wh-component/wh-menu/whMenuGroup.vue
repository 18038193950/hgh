<template>
  <el-menu-item-group>
    <template v-if="menu.lable !== null" slot="title">
      <i :class="menu.icon" />
      <span slot="title">{{ menu.lable }}</span>
    </template>
    <template v-if="menu.childs !== null">
      <template v-for="menuItem in menu.childs">
        <template v-if="menuItem.type === 'item'">
          <wh-menu-item :key="menuItem.id" :menu="menuItem" />
        </template>
        <template v-if="menuItem.type === 'submenu'">
          <wh-sub-menu :key="menuItem.id" :menu="menuItem" />
        </template>
      </template>
    </template>
  </el-menu-item-group>
</template>

<script>
import whMenuItem from './whMenuItem'
import whSubMenu from './whSubMenu'

export default {
  name: 'WhMenuGroup',
  components: { whMenuItem, whSubMenu },
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
