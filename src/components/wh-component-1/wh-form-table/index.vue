<template>
  <el-form ref="monitorForm" class="wh-form-tabel" :model="formData" :rules="newrules">
    <el-table
      ref="dragTable"
      v-loading="disabled"
      :data="tableList"
      style="width: 100%"
      element-loading-text="Loading"
      :header-row-style="{ align: 'center', color: 'black' }"
      width="100%"
      stripe
      fit
      :border="border"
      class="query-table"
      :height="height"
      :max-height="maxHeight"
      :row-key="dataKey"
      @selection-change="onSelect"
    >
      <template v-for="(i, index) in formData.tableConfig">
        <!-- 选择/序号列 -->
        <el-table-column
          v-if="['index', 'selection'].includes(i.type)"
          :key="index+i.type"
          :fixed="i.fixed"
          :label="i.label"
          :type="i.type"
          :width="i.width || 50"
          align="center"
        />
        <el-table-column v-else-if="i.type === 'id'" :key="index+i.type" label="序号" width="65">
          <template slot-scope="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <!-- 输入框input列 -->
        <el-table-column
          v-else-if="i.type === 'input' || i.type === 'number' "
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{row , $index}">
            <el-form-item :prop="`tableList.${$index}.${i.name}`" :rules="rules[i.name]">
              <el-input v-model="row[i.name]" :placeholder="i.placeholder ||'请输入' + i.label" :type="i.type" :size="i.size || 'mini'" />
            </el-form-item>
          </template>
        </el-table-column>

        <!-- 选择框select列 -->
        <el-table-column
          v-else-if="i.type === 'select'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{row , $index}">
            <el-form-item :prop="`tableList.${$index}.${i.name}`" :rules="rules[i.name]">
              <el-select
                v-model="row[i.name]"
                style="width:100%"
                clearable
                :size="i.size || 'mini'"
                :placeholder="i.placeholder ||'请选择' + i.label"
              >
                <el-option
                  v-for="ite in i.options"
                  :key="ite.value"
                  :label="ite.label"
                  :value="ite.value"
                />
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <!-- 日期框date列 -->
        <el-table-column
          v-else-if="i.type === 'date'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{row , $index}">
            <el-form-item :prop="`tableList.${$index}.${i.name}`" :rules="rules[i.name]">
              <el-date-picker
                v-model="row[i.name]"
                :size="i.size || 'mini'"
                type="date"
                :format="i.format || `yyyy-MM-dd`"
                :value-format="i.valueFormat|| 'timestamp'"
                :placeholder="i.placeholder || `请选择${i.label}`"
              />
            </el-form-item>
          </template>
        </el-table-column>

        <!-- 槽口列 -->
        <el-table-column
          v-else-if="i.type === 'slot'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{ row, $index }">
            <slot :name="i.name" :row="{ row, $index }" />
          </template>
        </el-table-column>

        <!-- 自定义表头槽口 -->
        <el-table-column v-else-if="i.type === 'slots'" :key="index+i.name" :fixed="i.fixed" :width="i.width">
          <template slot="header" slot-scope="{ row, $index }">
            <slot :name="'header'+i.name" :row="{ row, $index }" />
          </template>
          <template slot-scope="{ row, $index }">
            <slot :name="'inline'+i.name" :row="{ row, $index }" />
          </template>
        </el-table-column>
        <!-- button操作列 -->
        <el-table-column
          v-else-if="i.type === 'button'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{ row, $index }">
            <span>
              <wh-button :row="row" :button-config="i.options" @handleAall="(item)=>handleEmite(item, row, $index)" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </el-form>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: 'WhFormTabel',
  props: {
    formData: {
      type: Object,
      default: () => ({
        tableList: [
          {
            name: null,
            address: null,
            name1: null
          }
        ],
        tableConfig: [
          { label: '序号', type: 'index', width: 180 },
          { name: 'name', label: '名称', type: 'input', width: 300 },
          {
            name: 'address',
            label: '备注',
            type: 'select',
            options: [
              { label: '武汉', value: 1 },
              { label: '武1汉', value: 11 }
            ]
          },
          { name: 'name1', label: '出生日期', type: 'date', width: 300 },
          {
            type: 'button',
            button: [
              { state: 'delete', circle: true, plain: true, label: '删除' }
            ]
          }
        ]
      })
    },
    dataKey: {
      type: String,
      default: 'id'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    getSort: {
      type: Boolean,
      default: () => false
    },
    rules: {
      type: Object,
      default: () => ({
        // name: { required: true, message: '请输入姓名', trigger: 'blur' },
        // address: { required: true, message: '请选择地址', trigger: 'change' },
        // name1: { required: true, message: '请选择出生日期', trigger: 'change' }
      })
    },
    border: {
      type: Boolean,
      default: () => false
    },
    height: {
      type: [String, Number],
      default: () => undefined
    },
    maxHeight: {
      type: [String, Number],
      default: () => 300
    }
  },
  data() {
    return {
      sortable: null
    }
  },
  computed: {
    newrules() {
      return this.rules
    },
    tableList() {
      console.log('aaaaa')
      return this.formData.tableList
    }
  },
  created() {
    this.$nextTick(() => {
      // 拖拽的方法
      if (this.getSort) {
        this.setSort()
      }
    })
  },
  methods: {
    onSelect(selectedList) {
      // 当表格行被选中
      this.$emit('onSelect', selectedList)
    },
    // button 事件
    handleEmite(item, row, index) {
      this.$emit('submitFormTable', item, row, index)
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody'
      )[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.formData.tableList.splice(evt.oldIndex, 1)[0]
          this.formData.tableList.splice(evt.newIndex, 0, targetRow)
          // this.$emit('setSort', evt)

          // for show the changes, you can delete in you code
          // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          // this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    },
    submitFormTable() {
      return new Promise((resolve, reject) => {
        this.$refs['monitorForm'].validate((valid) => {
          if (valid) {
            resolve(true)
          } else {
            reject(false)
          }
        })
      })
    }

  }
}
</script>
<style lang='scss' scoped>
.el-form-item {
  margin-bottom: 0;
}
.query-table /deep/ .el-table__body-wrapper {
  .cell {
    overflow: visible;
    .el-form-item__error {
      z-index: 9999;
    }
  }
}
</style>
