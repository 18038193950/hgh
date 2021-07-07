<template>
  <div>
    <h1>wh-form-tabel Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-form-tabel-Item Attributes</h1>
    <wh-table class="example" :data-list="datalistsItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-form-tabel  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-form-tabel  Events</h1>
    <wh-table class="example" :data-list="datalistsEvents" :table-config="tableConfigEvents" :pagination-show="false" />
    <h1>wh-form-tabel  Methods</h1>
    <wh-table class="example" :data-list="datalistsMethods" :table-config="tableConfigMethods" :pagination-show="false" />
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
      tableConfigMethods: [
        { name: 'name', label: '方法名' },
        { name: 'description', label: '说明' },
        { name: 'Parameter', label: '参数' }
      ],

      datalists: [
        { Parameter: 'formData ', description: '表格和表单的数据对象', type: 'object', optional: '-', default: '-' },
        { Parameter: 'formData.tableConfig', description: '显示表头的数据和内容有关联关系 详情请看wh-table-Item', type: 'array', optional: '-', default: '-' },
        { Parameter: 'formData.tableList', description: '表格内容的数据', type: 'array', optional: '-', default: '-' },
        { Parameter: 'dataKey', description: '表格数据唯一的key', type: 'string', optional: '-', default: 'id' },
        { Parameter: 'border', description: '是否带有纵向边框	', type: 'boolean', optional: '-', default: 'false' },
        { Parameter: 'height', description: 'Table 的高度，默认为自动高度', type: 'string', optional: '-', default: '-' },
        { Parameter: 'maxHeight', description: 'Table 的最大高度', type: 'string', optional: '-', default: '-' },
        { Parameter: 'getSort', description: '是否支持拖拽', type: 'boolean', optional: ' true | false', default: 'false' },
        { Parameter: 'rules', description: '表单验证规则', type: 'object', optional: '-', default: '-' }
      ],
      datalistsItem: [
        { Parameter: 'name', description: '表格的name 用来对应列表的数据 必填 唯一', type: 'string', optional: '-', default: '-' },
        { Parameter: 'type', description: '表格的类型', type: 'string', optional: 'index / selection / text / date / input / number / select / date / slot / slots / button ', default: 'input' },
        { Parameter: 'fixed', description: '列是否固定在左侧或者右侧，true 表示固定在左侧	', type: 'string | boolean	', optional: 'true, left, right', default: '-' },
        { Parameter: 'format', description: ' 显示在输入框中的格式 只对 type="date" 有效 参考日期格式	 ', type: 'string', optional: ' yyyy-MM-dd HH-mm-ss', default: ' yyyy-MM-dd ' },
        { Parameter: 'value-format', description: ' 绑定值的格式。不指定则绑定值为 Date 对象 只对 type="date" 有效 	 ', type: 'string', optional: ' 默认  yyyy-MM-dd   时间戳 timestamp ', default: ' yyyy-MM-dd ' },
        { Parameter: 'options', description: ' 如果type = select   [{value:"xxxx",label:"xxxxx"},...] 这样配置即可 | 如果type = "button" options 参考 wh-buttn 组件的buttonConfig配置 ', type: 'string', optional: '-', default: '-' },
        { Parameter: 'width', description: '对应列的宽度', type: 'string', optional: '-', default: '-' }
      ],
      datalistsSlots: [
        { Parameter: ' item 中 type = "slot" 的 name ', description: '当 type = "slot" 时 会新增一次槽口 name 就是item 的name 参数 { row }' },
        { Parameter: ' item 中 type = "slots" 的 header+ name inline + name ', description: '当 type = "slots" 时 会新两个槽口 表头 就是header + item 的 name 内容就是 inline + item 的 name 参数 { row }' }
      ],
      datalistsEvents: [
        { name: 'submitFormTable', description: '当item 中有 type 等于 button  点击按钮会触发该方法 返回三个参数 item, row, index ', Parameter: 'item, row, index' },
        { name: 'onSelect', description: '当item 中有 type 等于 selection 点击多选框会触发该方法 返回一个参数 selectedList ', Parameter: 'selectedList' }
      ],
      datalistsMethods: [
        { name: 'submitFormTable', description: '表单校验方法 返回一个 Promise ', Parameter: '-' }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
