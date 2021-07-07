<template>
  <span ref="whButton" class="wh-button">
    <template>
      <slot name="btn-left" :row="row" />
      <span v-if="getButtonList.btnlist&&getButtonList.btnlist.length>0" style="marginRight: 10px;">
        <span
          v-for="(item , j) in getButtonList.btnlist"
          :key="j+item.name"
          style="margin: 0 10px 0 0;"
          @click.stop.prevent="handleEmite(item,row)"
        >
          <template v-if="isvisibility(item,getButtonList.dropdownItem.visibilityAll)">
            <el-tooltip
              v-if="item.tooltip==='1'"
              class="item"
              effect="dark"
              :content="item.label"
              placement="top-start"
            >
              <el-button
                :size="item.size || 'mini'"
                :type="item.type || 'primary'"
                :plain="!item.plain || item.plain==='1'"
                :circle="!item.circle || item.circle==='1'"
                :disabled="item.disabled==='1'"
                :icon="item.icon || 'el-icon-edit'"
                :loading="item.loading==='1'"
              />
            </el-tooltip>

            <el-button
              v-else
              :size="item.size || 'mini'"
              :type="item.type || 'primary'"
              :plain="!item.plain || item.plain==='1'"
              :circle="item.circle==='1'"
              :disabled="item.disabled && item.disabled==='1'"
              :icon="item.icon"
              :loading="item.loading==='1'"
            >{{ item.label }}
            </el-button>

          </template>
        </span>
      </span>
      <el-dropdown v-if="getButtonList.dropdownlist&&getButtonList.dropdownlist.length>0&&(isvisibility(getButtonList.dropdownItem,getButtonList.dropdownItem.visibilityAll) )" :size="getButtonList.dropdownItem.dropdownSize" :hide-on-click="false" :trigger="getButtonList.dropdownItem.trigger">
        <el-button :loading="getButtonList.dropdownItem.loading === '1'" :disabled="getButtonList.dropdownItem.disabled ==='1' " :type="getButtonList.dropdownItem.btnType" :size="getButtonList.dropdownItem.btnSize">
          {{ getButtonList.dropdownItem.label }}
          <i
            class="el-icon-arrow-down el-icon--right"
          />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <template v-for="(item , i) in getButtonList.dropdownlist">
            <el-dropdown-item
              v-if="isvisibility(item, getButtonList.dropdownItem.visibilityAll)"
              :key="i+item.name"
              v-loading="item.loading==='1'"
              element-loading-spinner="el-icon-loading"
              :icon=" item.icon || 'el-icon-check'"
              @click.native.stop.prevent="handleEmite(item,row)"
            >{{ item.label }}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
      <slot name="btn-right" :row="row" />
    </template>
  </span>
</template>

<script>
export default {
  name: 'WhButton',

  props: {
    buttonConfig: {
      type: Array,
      default: () => []
    },
    row: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    getButtonList() {
      return this.buttonConfig.reduce(
        (parv, next) => {
          if (next.type === 'dropdown') {
            parv.dropdownlist.push(next)
          } else if (next.type === 'dropdownItem') {
            parv.dropdownItem = { ...parv.dropdownItem, ...next }
          } else {
            parv.btnlist.push(next)
          }
          return parv
        },
        {
          btnlist: [],
          dropdownlist: [],
          dropdownItem: {
            trigger: 'hover',
            dropdownSize: 'medium',
            loading: '0',
            disabled: '0',
            label: '批量操作',
            btnType: 'primary',
            btnSize: 'small',
            visibilityAll: () => true
          }
        }
      )
    }
  },
  created() {},
  methods: {
    // button 事件
    handleEmite(item, row) {
      if (item.loading && item.loading !== '0') return false
      if (item.type === 'dropdown') {
        this.$emit('handleAall', item, row, (val, key = 'loading') => {
          const keys = `drop${key}`
          this[keys] = val
          this.$set(item, 'loading', val)
        })
        return
      }
      this.$emit('handleAall', item, row, (val, key = 'loading') => {
        this.$set(item, key, val)
      })
    },
    isvisibility(item, fuc) {
      const row = this.row
      const visibilityAll = typeof fuc === 'function' ? fuc(item, row) : fuc === '1'
      if ((!item.visibility || item.visibility === '1') && visibilityAll) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
