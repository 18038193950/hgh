<template>
  <div>
    <h1>wh-Form Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-Form-Item Attributes</h1>
    <wh-table class="example" :data-list="datalistsItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-Form  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-Form  Events</h1>
    <wh-table class="example" :data-list="datalistsEvents" :table-config="tableConfigEvents" :pagination-show="false" />
    <h1>wh-Form  Methods</h1>
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
        { Parameter: 'params', description: '表单数据对象 - 也可以设置默认值', type: 'object', optional: '-', default: '-' },
        { Parameter: 'rules', description: '表单验证规则', type: 'object', optional: '-', default: '-' },
        { Parameter: 'layout', description: '表单布局对象', type: 'object', optional: 'row 代表间隔 col 代表一行几列', default: `{
          row: 20,
          col: 4
        }` },
        { Parameter: 'size', description: '用于控制该表单内组件的尺寸	', type: 'string', optional: 'medium | small | mini', default: 'medium' },
        { Parameter: 'labelWidth', description: '表单域标签的宽度，例如 50px	', type: 'string', optional: '-', default: '100px' },
        { Parameter: 'labelPosition', description: '表单域标签的位置	', type: 'string', optional: 'right | left | top', default: 'left' }

      ],
      datalistsItem: [
        { Parameter: 'name', description: '表单的name 用来存储form的数据 唯一 必填', type: 'string', optional: '-', default: '-' },
        { Parameter: 'type', description: '表单的类型', type: 'string', optional: 'input / number / password / textarea / date / select / selectfilter / radio / checkbox / collapse / slot / button  ', default: 'input' },
        { Parameter: 'label', description: '标签文本', type: 'string', optional: '-', default: '-' },
        { Parameter: 'rules', description: '表单验证规则', type: 'object', optional: '-', default: '-' },
        { Parameter: 'labelWidth', description: '	表单域标签的的宽度，例如 50px 支持 auto ', type: 'string', optional: '-', default: '-' },
        { Parameter: 'clearable', description: ' 是否可清空	 ', type: 'string', optional: ' 1 | 0', default: ' 1 ' },
        { Parameter: 'placeholder', description: ' 输入框占位文本	 ', type: 'string', optional: '-', default: ' 请输入 + label ' },
        { Parameter: 'resize', description: ' 控制是否能被用户缩放	 ', type: 'string', optional: 'none | both | horizontal | vertical', default: ' - ' },
        { Parameter: 'autosize', description: ' 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } ', type: 'string', optional: '-', default: ' { minRows: 4, maxRows: 4} ' },
        { Parameter: 'format', description: ' 显示在输入框中的格式 只对 type="date" 有效 参考日期格式	 ', type: 'string', optional: ' yyyy-MM-dd HH-mm-ss', default: ' yyyy-MM-dd ' },
        { Parameter: 'valueFormat', description: ' 绑定值的格式。不指定则绑定值为 Date 对象 只对 type="date" 有效 	 ', type: 'string', optional: ' 默认  yyyy-MM-dd   时间戳 timestamp ', default: ' yyyy-MM-dd ' },
        { Parameter: 'inco', description: ' 是否显示 箭头图标  1 是 0 否 只对 type="collapse" 有效 	 ', type: 'string', optional: ' 1 | 0 ', default: ' 1 ' },
        { Parameter: 'incopos', description: ' 选择 1 箭头 向下 0 箭头向上 只对 type="collapse" 有效 	 ', type: 'string', optional: ' 1 | 0 ', default: ' 1 ' },
        { Parameter: 'btnAlign', description: '表单的按钮的位置', type: 'string', optional: 'center | left | right', default: 'center' },
        { Parameter: 'visibility', description: ' 是否显示 1 是 ， 0 否 ', type: 'string', optional: ' 1 | 0 ', default: ' 1 ' },
        { Parameter: 'change', description: ' 是否有点击事件 true 是 ， false 否  目前只对 type = select , radio 有效 ', type: 'boolean', optional: ' true | false ', default: ' false ' },
        { Parameter: 'options', description: ' 如果type = select ,radio , checkbox [{value:"xxxx",label:"xxxxx"},...] 这样配置即可 | 如果type = "button" options 参考 wh-buttn 组件的buttonConfig配置 ', type: 'string', optional: '-', default: '-' },
        { Parameter: 'span', description: ' 表单元素的width  24 / span ', type: 'string', optional: '-', default: '24 / row/col' }
      ],
      datalistsSlots: [
        { Parameter: ' item 中 type = "slot" 的 name ', description: '当 type = "slot" 时 会新增一次槽口 name 就是item 的name 参数 { item }' }
      ],
      datalistsEvents: [
        { name: 'handleChange', description: '当item 中有 change 等于true 的时候 当前表单元素的change事件 会触发该方法 返回两个参数 选择的val 和当前item', Parameter: 'value, item' },
        { name: 'submitForm', description: '当item 中有 type 等于 button 的时候 且 name !== "resetForm" 点击按钮会触发该方法 返回三个参数 item, row, callback  callback可以控制按钮的状态 否则如果name === resetForm 点击按钮会重置表单 ', Parameter: 'item, row, callback' }
      ],
      datalistsMethods: [
        { name: 'submitForm', description: '表单校验方法 返回一个 Promise ', Parameter: '-' },
        { name: 'resetForm', description: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 ', Parameter: '-' }
      ]

    }
  }
}
</script>
<style lang='scss' scoped>

</style>
