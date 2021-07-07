
<script>
/* eslint-disable vue/no-unused-components */
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
// const Item = Item
// const AppLink = AppLink
export default {
  name: 'SidebarItem',
  // functional: true,
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    Item(title, icon) {
      return <item title={title} icon={icon}></item>
    },
    submenu(children) {
      return children.map((item) => this.meunItem(item))
    },
    meunItem(items) {
      if (!items.hidden) {
        console.log('aaa')
        if (this.hasOneShowingChild(items.children, items) && (!this.onlyOneChild.children || this.onlyOneChild.noShowingChildren) && !items.alwaysShow) {
          return (<el-menu-item
            index={this.resolvePath(items.path)}
            class={{ 'submenu-title-noDropdown': !this.isNest }}
          >{
              this.Item(this.onlyOneChild.meta.title || (items.meta && items.meta.icon), this.onlyOneChild.meta.title) }
          </el-menu-item>)
        } else {
          const submenu = (
            <li class='el-submenu'>
              <el-submenu ref='subMenu' index={this.resolvePath(items.path)} popper-append-to-body>
                <template slot='title'>
                  {items.meta ? this.Item(items.meta && items.meta.title, items.meta.inco) : null}
                </template>
                {items.children.length > 0 ? this.submenu(items.children) : null}
              </el-submenu>
            </li>
          )

          return submenu
        }
      }
    }
  },
  render() {
    const { item } = this.$props
    // return <li class={{ 'el-menu-item': this.hasOneShowingChild(item.children, item) && (!this.onlyOneChild.children), 'el-submenu': !this.hasOneShowingChild(item.children, item) && (!this.onlyOneChild.children) }} > {this.meunItem(item)}</ li>
    return this.meunItem(item)
  }

}
</script>
