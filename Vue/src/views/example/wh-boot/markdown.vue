<template>
  <div>
    <h1>wh-boot Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-boot-Item Attributes</h1>
    <wh-table class="example" :data-list="datalistsItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-boot  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-boot  Events</h1>
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
      tableConfigMethods: [
        { name: 'name', label: '方法名' },
        { name: 'description', label: '说明' },
        { name: 'Parameter', label: '参数' }
      ],
       tableConfigEvents: [
        { name: 'name', label: '事件名称' },
        { name: 'description', label: '说明' },
        { name: 'Parameter', label: '参数' }
      ],
      datalists: [
        { Parameter: 'queryConfig', description: '显示的数据', type: 'array', optional: '-', default: '-' },
        { Parameter: '......', description: 'wh-form 所有属性', type: 'object', optional: '-', default: '-' },
        { Parameter: 'buttonConfig', description: '-', type: 'array', optional: '-', default: '-' },
        { Parameter: 'tableConfig', description: '-', type: 'array', optional: '-', default: '-' },
        { Parameter: ' ...... ', description: 'wh-table 所有属性', type: 'array', optional: '-', default: '-' },
        { Parameter: 'modalConfig', description: '用来存放 多个 wh-dialog | wh-drawer', type: 'object', optional: '-', default: '-' },
      ],
      datalistsItem: [
        { Parameter: '......', description: 'wh-Form-Item 所有属性', type: '-', optional: '-', default: '-' },
        { Parameter: '......', description: 'wh-button-Item 所有属性', type: '-', optional: '-', default: '-' },
        { Parameter: '......', description: 'wh-button-Item-dropdownItem 所有属性', type: '-', optional: '-', default: '-' },
        { Parameter: '......', description: 'wh-table-Item 所有属性', type: '-', optional: '-', default: '-' },
      ],
      datalistsSlots: [
        { Parameter: 'top-btn-left', description: 'buttonConfig 按钮的左边 ' },
        { Parameter: 'top-btn-right', description: 'buttonConfig 按钮的右边 ' },
        { Parameter: ' modalConfig 有 slotAll = "1" , name =  drawer + slotName 或者drawer + slotName   ', description: 'modalConfig 有 slotAll = "1" 的 drawer + slotName 或者drawer+slotName 具体根据 type 来定   参数{ row }' }
      ],
      datalistsEvents: [
        { name: 'handleChange', description: '当wh-Form-item 中有 change 等于true 的时候 当前表单元素的change事件 会触发该方法 返回两个参数 选择的val 和当前item', Parameter: 'value, item' },
        { name: 'submitForm', description: '当wh-Form-item 中有 type 等于 button 的时候 且 name !== "resetForm" 点击按钮会触发该方法 返回三个参数 item, row, callback  callback可以控制按钮的状态 否则如果name === resetForm 点击按钮会重置表单 ', Parameter: 'item, row, callback' },
        { name: 'handleAall', description: 'wh-button 的方法  点击按钮会触发该方法 返回三个参数 item, row, callback  callback可以控制按钮的状态 ', Parameter: 'item, row, callback' },
        { name: 'submitTable', description: 'wh-table 的方法  点击按钮会触发该方法 返回三个参数 item, row, index  ', Parameter: 'item, row, callback' },
        { name: 'onSelectedList', description: 'wh-table 的方法  当选择项发生变化时会触发该事件	返回一个参数 list ', Parameter: 'list' },
        { name: 'submitDialog', description: 'wh-dialog 的方法  点击 wh-dialog 的  按钮会触发该方法 返回三个参数 item, row, callback  callback可以控制按钮的状态 ', Parameter: 'item, row, callback' },
        { name: 'submitDrawer', description: 'wh-drawer 的方法  点击 wh-drawer 的  按钮会触发该方法 返回三个参数 item, row, callback  callback可以控制按钮的状态 ', Parameter: 'item, row, callback' },
        { name: 'dialogChange', description: 'wh-dialog slotAll ="0" && wh-form-item 有中change 等于 true  触发表单的change 事件 会触发该方法 返回三个参数 key, val, item  item 当前表单挂载的所有属性 ', Parameter: 'key, val, item' },
        { name: 'drawerChange', description: 'wh-drawer slotAll ="0" && wh-form-item 有中change 等于 true  触发表单的change 事件 会触发该方法 返回三个参数 key, val, item  item 当前表单挂载的所有属性 ', Parameter: 'key, val, item' },
      ]

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
