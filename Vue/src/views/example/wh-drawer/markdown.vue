<template>
  <div>
    <h1>wh-Drawer Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-Drawer  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-Drawer  Events</h1>
    <wh-table class="example" :data-list="datalistsEvents" :table-config="tableConfigEvents" :pagination-show="false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableConfig: [
        { name: 'Parameter', label: '参数' },
        { name: 'description', label: '说明' },
        { name: 'type', label: '类型' },
        { name: 'optional', label: '可选值' },
        { name: 'default', label: '默认值' }
      ],
      tableConfigSlots: [
        { name: 'Parameter', label: 'Name' },
        { name: 'description', label: '说明' }
      ],
      tableConfigEvents: [
        { name: 'name', label: '事件名称' },
        { name: 'description', label: '说明' },
        { name: 'Parameter', label: '参数' }
      ],
      datalists: [
        { Parameter: 'modalKey', description: 'Drawer key 结合wh-boot 使用', type: 'string', optional: '-', default: '-' },
        { Parameter: 'titleText', description: 'Drawer 的标题', type: 'boolean,string', optional: '-', default: '标题' },
        { Parameter: 'dialogType', description: '是否显示 Drawer 如果等于close 关闭状态 其他为显示状态', type: 'stirng', optional: '-', default: 'close' },
        { Parameter: 'width', description: 'Drawer 的宽', type: 'string', optional: '-', default: '50%' },
        { Parameter: 'waitingDialog', description: '是否可以通过点击 遮罩层 或按下 ESC 关闭 Dialog		', type: 'boolean', optional: 'false | true', default: 'false' },
        { Parameter: 'toBody', description: 'Drawer 自身 和 遮罩层是否插入至 body 元素上		', type: 'boolean', optional: 'false | true', default: 'true' },
        { Parameter: 'direction', description: 'Drawer 打开的方向			', type: 'string', optional: 'rtl | ltr | ttb | btte', default: 'rtl' },
        { Parameter: 'styletext', description: '标题和 按钮 的位置 支持 left center right	', type: 'object', optional: `{
        titleAlign: 'left',
        btnAlign: 'right'
      }`, default: `{
        titleAlign: 'left',
        btnAlign: 'right'
      }` },
        { Parameter: 'buttonVisible', description: '是否显示按钮 1 是 0 否', type: 'string', optional: ' 1 | 0', default: '1' },
        { Parameter: 'withHeader', description: '是否显示标题 true 是 false 否', type: 'boolean', optional: ' true | false', default: 'false' },
        { Parameter: 'slotAll', description: '是否需要特殊组件槽口 1 是 0 否	', type: 'stirng', optional: ' 1 | 0', default: '1' },
        { Parameter: 'queryConfig', description: '参考表单queryConfig', type: 'array', optional: ' - ', default: ' - ' },
        { Parameter: 'queryParams', description: '参考表单queryParams', type: 'object', optional: ' - ', default: ' - ' },
        { Parameter: '...', description: '当slotAll 为 0  的时候 所有表单元素都可以绑定在此组件上', type: 'object', optional: ' - ', default: ' - ' }

      ],
      datalistsSlots: [
        { Parameter: ' - ', description: '当 slotAll = "0" 时 会有一个槽口 Dialog 的内容' }
      ],
      datalistsEvents: [
        { name: 'submitDrawer', description: 'dialog 按钮点击 点击会触发该事件返回三个参数 item, row, callback callback可以改变按钮的状态', Parameter: 'item, row, callback' },
        { name: 'drawerChange', description: '当form-item 中有 change 等于 true 的时候  触发change事件 会触发该方法 返回三个参数 modalKey, val, item ', Parameter: 'modalKey, val, item' }
      ]

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
