<template>
  <div>
    <h1>wh-table Attributes</h1>
    <wh-table class="example" :data-list="datalists" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-table-Item Attributes</h1>
    <wh-table class="example" :data-list="datalistsItem" :table-config="tableConfig" :pagination-show="false" />
    <h1>wh-table  Slots</h1>
    <wh-table class="example" :data-list="datalistsSlots" :table-config="tableConfigSlots" :pagination-show="false" />
    <h1>wh-table  Events</h1>
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
        { Parameter: 'tableConfig', description: '显示表头的数据和内容有关联关系 详情请看wh-table-Item', type: 'array', optional: '-', default: '-' },
        { Parameter: 'paginationShow', description: '是否显示分页器', type: 'boolean', optional: ' true | false', default: ' true ' },
        { Parameter: 'dataList', description: '表格内容的数据', type: 'array', optional: '-', default: '-' },
        { Parameter: 'selectedList', description: '用来存储用户选中的数据', type: 'array', optional: '-', default: '-' },
        { Parameter: 'dataKey', description: '表格数据唯一的key', type: 'string', optional: '-', default: 'id' },
        { Parameter: 'listQuery', description: ' 当 paginationShow = true 时 为必填 	', type: 'object', optional: '{page:1,pageSize:5,pageCount:100}', default: '-' },
        { Parameter: 'tagColor', description: '当tableConfig item 中有type = "tagAll" 时 可以定义 tag 的状态 ', type: 'object', optional: `{
          0: 'danger',1: null,2: 'success',3: 'info',
          4: 'warning'
        }`, default: `{0: 'danger',1: null,2: 'success',
          3: 'info',
          4: 'warning'
        }` },

        { Parameter: 'border', description: '是否带有纵向边框	', type: 'boolean', optional: 'true | false', default: 'false' },
        { Parameter: 'height', description: 'Table 的高度，默认为自动高度', type: 'string', optional: '-', default: '-' },
        { Parameter: 'maxHeight', description: 'Table 的最大高度', type: 'string', optional: '-', default: '-' }
      ],
      datalistsItem: [
        { Parameter: 'name', description: '表格的name 用来对应列表的数据 必填 唯一', type: 'string', optional: '-', default: '-' },
        { Parameter: 'type', description: '表格的类型', type: 'string', optional: 'index / selection / text / date / input / tooltip / urlLink / tal / tagAll / avatar / image / slot / slots / button ', default: 'input' },
        { Parameter: 'fixed', description: '列是否固定在左侧或者右侧，true 表示固定在左侧	', type: 'string | boolean	', optional: 'true, left, right', default: '-' },
        { Parameter: 'width', description: '对应列的宽度', type: 'string', optional: '-', default: '-' },
        { Parameter: 'sortable', description: '	对应列是否可以排序 ', type: 'boolean', optional: 'true | false', default: 'false' },
        { Parameter: 'tipwidth', description: ' 当 type = "tooltip" 根据此属性设置 tooltip的 width 	 ', type: 'string', optional: '-', default: ' 300px ' },
        { Parameter: 'url', description: ' 当 type = "urlLink" 根据此属性设置 路由跳转 地址	 ', type: 'string', optional: '-', default: ' - ' },
        { Parameter: 'map', description: '  当 type = "tal | tagAll " 根据此属性设置 需要显示的内容 和状态	 ', type: 'object', optional: '-', default: ' - ' },
        { Parameter: 'fit', description: ' 当 type = "image" 根据此属性设置 图片如何适应容器框  ', type: 'string', optional: '	fill / contain / cover / none / scale-down', default: ' contain ' },
        { Parameter: 'options', description: ' 当 type = "options" 根据此属性设置  wh-button 的	 buttonConfig', type: 'Array', optional: '-', default: '-' }
      ],
      datalistsSlots: [
        { Parameter: ' item 中 type = "slot" 的 name ', description: '当 type = "slot" 时 会新增一次槽口 name 就是item 的name 参数 { row }' },
        { Parameter: ' item 中 type = "slots" 的 header+ name inline + name ', description: '当 type = "slots" 时 会新两个槽口 表头 就是header + item 的 name 内容就是 inline + item 的 name 参数 { row }' }
      ],
      datalistsEvents: [
        { name: 'submitTable', description: '当item 中有 type 等于 button 点击按钮 或者点击行 的时候 会触发该方法 返回三个参数 item, row, index ', Parameter: 'item, row, index' },
        { name: 'onSelectedList', description: '当item 中有 type 等于 selection 点击多选框会触发该方法 返回一个参数 selectedList ', Parameter: 'selectedList' }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
