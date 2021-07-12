<template>
  <div class="app-container">
    <wh-button :button-config="buttonConfig" @handleAall="handleAall" />
    <wh-json :direction="direction" :json.sync="buttonConfig" :drawer.sync="drawer " />
    <mark-down />
  </div>
</template>

<script>
import WhJson from '@/components/wh-component/wh-jsonedit'
import markDown from './markdown'
export default {
  name: '',
  components: {
    WhJson,
    markDown
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      labelWidth: '150px',
      buttonConfig: [
        {
          popup: 'modal',
          modalKey: 'modalKey001',
          selection: true,
          apiKey: '001',
          label: '打标签',
          type: 'dropdown',
          emit: true,
          name: 'save',
          order: 1
        },
        {
          popup: 'modal',
          modalKey: 'modalKey007',
          apiKey: '006',
          position: 'top',
          icon: 'el-icon-plus',
          type: 'success',
          label: '新增',
          name: 'adds',
          order: 1
        },
        {
          popup: 'modal',
          modalKey: 'modalKey007',
          apiKey: '006',
          position: 'top',
          icon: 'el-icon-edit',
          type: 'info',
          label: '编辑代码',
          name: 'edit',
          order: 1
        },
        {
          popup: 'modal',
          modalKey: 'modalKey005',
          apiKey: '006',
          position: 'top',
          tooltip: '1',
          icon: 'el-icon-share',
          type: 'warning',
          label: '同步用户',
          name: 'sync',
          order: 1
        },
        {
          popup: '',
          modalKey: '',
          apiKey: '',
          position: 'top',
          label: '同步进度',
          icon: 'el-icon-loading',
          circle: '1',
          type: 'text',
          emit: true,
          name: 'async',
          order: 1
        },
        {
          popup: 'modal',
          modalKey: 'modalKey004',
          apiKey: '',
          position: 'top',
          label: '导入名单设置标签',
          type: 'danger',
          icon: 'el-icon-download',
          emit: true,
          name: 'import',
          order: 1
        },
        {
          popup: 'confirm',
          modalKey: '',
          selection: true,
          apiKey: '003',
          position: 'top',
          label: '加入黑名单',
          icon: 'el-icon-plus',
          type: 'dropdown',
          emit: true,
          name: 'add',
          order: 1
        },
        {
          popup: 'confirm',
          modalKey: '',
          selection: true,
          apiKey: '005',
          icon: 'el-icon-minus',
          position: 'top',
          label: '移除黑名单',
          type: 'dropdown',
          emit: true,
          name: 'add',
          order: 1
        }
      ]
    }
  },
  methods: {
    // 回调
    handleAall(item, row, loading) {
      loading('1')
      setTimeout(() => {
        loading('0')
        if (item.name && item.name === 'edit') {
          this.drawer = true
        }
      }, 500)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
