<template>
  <div>
    <el-table
      ref="dataTable"
      :data="dataList"
      :header-row-style="{ align: 'left', color: 'black' }"
      width="100%"
      stripe
      fit
      class="wh-table"
      :height="height"
      :max-height="maxHeight"
      :border="border"
      :row-key="dataKey"
      @row-click="(row)=>handleEmite('row',row)"
      @selection-change="onSelect"
    >
      <template v-for="(i, index) in tableConfig">
        <!-- 选择/序号列 -->
        <el-table-column
          v-if="['index', 'selection'].includes(i.type)"
          :key="index+i.name"
          :label="i.label"
          :fixed="i.fixed"
          :type="i.type"
          :width="i.width || 50"
          align="center"
        />
        <!-- 普通文字列 -->
        <el-table-column
          v-else-if="!i.type || i.type === 'text'"
          :key="index+i.name"
          :sortable="i.sortable"
          :label="i.label"
          :fixed="i.fixed"
          :prop="i.name"
          :width="i.width"
        />
        <!-- 时间列 -->
        <!-- 可以设置是否排序 -->
        <el-table-column
          v-else-if="i.type === 'date'"
          :key="index+i.name"
          :sortable="i.sortable"
          :fixed="i.fixed"
          :label="i.label"
          :prop="i.name"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <i class="el-icon-time" />
            {{ row[i.name] | formatDate(i.setting) }}
          </template>
        </el-table-column>
        <!-- 输入框input列 -->
        <el-table-column
          v-else-if="i.type === 'input'"
          :key="index+i.name"
          :label="i.label"
          :prop="i.name"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <el-input v-model="row[i.name]" placeholder="请输入..." />
          </template>
        </el-table-column>
        <!-- tooltip列 -->
        <el-table-column
          v-else-if="i.type === 'tooltip'"
          :key="index+i.name"
          :label="i.label"
          :prop="i.name"
          :fixed="i.fixed"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <el-tooltip
              popper-class="tablerow-tooltip"
              class="item"
              :style="{width: i.tipwidth || '300px'}"
              effect="dark"
              :content="row[i.name]"
              placement="top"
            >
              <span>{{ String(row[i.name]).length>10? String(row[i.name]).substring(0,30) + '...':row[i.name] }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <!-- 数据连接列 -->
        <el-table-column
          v-else-if="i.type === 'urlLink'"
          :key="index+i.name"
          :sortable="i.sortable"
          :fixed="i.fixed"
          :label="i.label"
          :prop="i.name"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <router-link
              class="urlLink"
              :to="{ path: i.url, query: { params: row } }"
            >{{ row[i.name] }}</router-link>
          </template>
        </el-table-column>
        <!-- 状态 列-->
        <el-table-column
          v-else-if="i.type === 'tal'"
          :key="index+i.name"
          :label="i.label"
          :width="i.width"
          :fixed="i.fixed"
        >
          <template slot-scope="{ row }">{{ row[i.name] | tagAll(i.map) }}</template>
        </el-table-column>
        <!-- 标签列 -->
        <el-table-column
          v-else-if="i.type === 'tagAll'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <el-tag :type="tagColor[row[i.name]]">
              {{
                row[i.name] | tagAll(i.map)
              }}
            </el-tag>
          </template>
        </el-table-column>
        <!-- 头像 -->
        <el-table-column
          v-else-if="i.type === 'avatar'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <el-avatar :src="row[i.name]" :size="i.size || 40" />
          </template>
        </el-table-column>

        <!-- image -->
        <el-table-column
          v-else-if="i.type === 'image'"
          :key="index+i.name"
          :fixed="i.fixed"
          :label="i.label"
          :width="i.width"
        >
          <template slot-scope="{ row }">
            <el-image
              :src="row[i.name]"
              :fit="i.fit || 'contain'"
            >
              <div slot="error" class="image-slot">
                <!-- <i class="el-icon-picture-outline"></i> -->
                &nbsp;
              </div>
            </el-image>
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
          <template slot-scope="{ row }">
            <slot :name="i.name" :row="row" />
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
        <!-- 操作 -->
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
    <div v-if="paginationShow" class="pagination-container">
      <el-pagination
        :current-page="listQuery.page ||0"
        :page-sizes="[2, 5, 10, 20, 30, 50]"
        :page-size="listQuery.pageSize ||5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listQuery.pageCount ||0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhTable',
  filters: {
    tagAll(value, map) {
      if (map) return map[value]
    },
    formatDate(value, fmt = 'yyyy-MM-dd HH:mm:ss') {
      if (value) {
        var d = new Date(value)
        var o = {
          'M+': d.getMonth() + 1, // 月份
          'd+': d.getDate(), // 日
          'H+': d.getHours(), // 小时
          'm+': d.getMinutes(), // 分
          's+': d.getSeconds(), // 秒
          'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
          S: d.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (d.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
          }
        }
        return fmt
      }
    }
  },
  props: {
    tableConfig: {
      type: Array,
      default: () => []
    },
    paginationShow: {
      type: Boolean,
      default: () => true
    },
    dataList: {
      type: Array,
      default: () => []
    },
    selectedList: {
      type: Array,
      default: () => []
    },
    dataKey: {
      type: String,
      default: () => 'id'
    },
    listQuery: {
      type: Object,
      default: () => ({})
    },
    tagColor: {
      type: Object,
      default: () => {
        return {
          0: 'danger',
          1: null,
          2: 'success',
          3: 'info',
          4: 'warning'
        }
      }
    },
    height: {
      type: [String, Number],
      default: () => undefined
    },
    maxHeight: {
      type: [String, Number],
      default: () => undefined
    },
    border: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      search: ''
    }
  },
  watch: {
    dataList() {
      this.selectRowsBySelectedList()
      // 刷新数据时手动维持选中状态
    }
  },
  methods: {
    onSelect(selectedList) {
      // 当表格行被选中
      this.$emit('onSelectedList', selectedList)
    },
    // button 事件
    handleEmite(item, row, index) {
      this.$emit('submitTable', item, row, index)
    },
    selectRowsBySelectedList() {
      // 根据selectedList选择行
      for (const i of this.selectedList) {
        for (const item of this.dataList) {
          setTimeout(() => {
            // 异步执行选中，防止因事件执行顺序被挤掉
            if (i[this.dataKey] === item[this.dataKey]) {
              this.$refs.dataTable.toggleRowSelection(item, true)
            }
          }, 0)
        }
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.listQuery.pageSize = val
      this.$emit('submitTable', 'query')
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.listQuery.page = val
      this.$emit('submitTable', 'query')
    }
  }
}
</script>
<style lang="scss" scoped>
.wh-table {
  & /deep/ th {
    background: #f5f5f5;
  }
}
.urlLink:hover {
  color: #1890ff;
}
.pagination-container {
  padding: 15px 0;
  text-align: initial;
}
</style>
