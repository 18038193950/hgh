<template>
  <el-menu
    :background-color="menuSetting.backgroundColor"
    :text-color="menuSetting.textColor"
    :collapse="menuSetting.collapse"
    :router="menuSetting.router"
    :active-text-color="menuSetting.activeTextColor"
    :unique-opened="menuSetting.uniqueOpened"
    :mode="menuSetting.mode"
  >
    <template v-for="route in MenuLists">
      <wh-menu-item :key="route.path" :item="route" :base-path="route.path" />
    </template>
    <!-- horizontal / vertical	 -->
  </el-menu>
</template>

<script>
import whMenuItem from './whMenuItem'
export default {
  name: 'WhMenu',
  components: { whMenuItem },
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    menuSetting: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    MenuLists() {
      return this.menuList
    }
  }
}
</script>

