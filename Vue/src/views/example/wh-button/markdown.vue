<template>
  <div>
    <h1>wh-button Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-button-Item Attributes</h1>
    <wh-table class="example" :data-list="datalistsItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-button-Item-dropdownItem Attributes</h1>
    <wh-table class="example" :data-list="datalistsItemdropdownItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-button  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-button  Events</h1>
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
        { Parameter: 'buttonConfig', description: '显示的数据', type: 'array', optional: '-', default: '-' },
        { id: '2', Parameter: 'row', description: '按钮点击时需要传递的参数', type: 'object', optional: '-', default: '-' }
      ],
      datalistsItem: [
        { Parameter: 'type', description: '按钮的类型', type: 'string', optional: 'primary / success / warning / danger / info / text / dropdown / dropdownItem ', default: 'primary' },
        { Parameter: 'name', description: '按钮的key 唯一 必填', type: 'string', optional: '-', default: '-' },
        { Parameter: 'plain', description: '是否朴素按钮 1 是 ， 0 否', type: 'string', optional: '1 | 0 ', default: '1' },
        { Parameter: 'circle', description: '是否圆形按钮 1 是 ， 0 否', type: 'string', optional: '1 | 0 ', default: '0' },
        { Parameter: 'disabled', description: '是否禁用状态 1 是 ， 0 否', type: 'string', optional: '1 | 0 ', default: '0' },
        { Parameter: 'icon', description: ' 图标类名 ', type: 'string', optional: '-', default: ' - ' },
        { Parameter: 'loading', description: ' 是否加载中状态 1 是 ， 0 否 ', type: 'string', optional: '1 | 0', default: ' 0 ' },
        { Parameter: 'tooltip', description: ' 是否需要文字提示 1 是 ， 0 否 ', type: 'string', optional: '1 | 0', default: ' 0 ' },
        { Parameter: 'size', description: ' 尺寸 ', type: 'string', optional: 'medium | small | mini', default: ' mini ' },
        { Parameter: 'visibility', description: ' 是否显示 1 是 ， 0 否 ', type: 'string', optional: ' 1 | 0 ', default: ' 1 ' }
      ],
      datalistsItemdropdownItem: [
        { Parameter: 'trigger', description: ' 触发下拉的行为 ', type: 'string', optional: 'hover | click', default: ' hover ' },
        { Parameter: 'dropdownSize', description: ' 菜单尺寸 ', type: 'string', optional: 'medium | small | mini', default: ' medium ' },
        { Parameter: 'label', description: ' 菜单title ', type: 'string', optional: '-', default: ' 批量操作 ' },
        { Parameter: 'disabled', description: ' 是否禁用状态 1 是 ， 0 否 ', type: 'string', optional: '1 | 0 ', default: '0' },
        { Parameter: 'loading', description: ' 是否加载中状态 1 是 ， 0 否 ', type: 'string', optional: '1 | 0', default: ' 0 ' },
        { Parameter: 'btnType', description: '按钮的类型', type: 'string', optional: 'primary / success / warning / danger / info / text  ', default: 'primary' },
        { Parameter: 'btnSize', description: ' 尺寸 ', type: 'string', optional: 'medium | small | mini', default: ' small ' },
        { Parameter: 'visibility', description: ' 是否显示 1 是 ， 0 否 ', type: 'string', optional: ' 1 | 0 ', default: ' 1 ' }
      ],
      datalistsSlots: [
        { Parameter: 'btn-left', description: '组件左边的内容 参数为{ row }' },
        { Parameter: 'btn-right', description: '组件右边的内容 参数为{ row }' }
      ],
      datalistsEvents: [
        { name: 'handleAall', description: '当某个按钮或者某个下拉菜单被点击触发的该事件, 返回三个参数 item, row,callback callback接受两个参数 val, key 可以通过这两个参数改变 按钮或者下拉菜单 的状态', Parameter: 'item, row,callback' }
      ]

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
