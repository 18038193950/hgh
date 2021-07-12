import {
  Table
} from 'ant-design-vue'
import { filterProp } from '@/utils/filterProps'

export default {
  name: 'DhTable',
  inheritAttrs: false,
  props: {
    pagination: {
      type: Object,
      default: () => ({})
    },
    tableConfig: {
      type: Array,
      default: () => []
    },
    dataList: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: () => 'id'
    }
  },
  computed: {
    paginationAssign() {
      return Object.assign({
        pageSize: 5, // 默认每页显示数量
        showSizeChanger: true, // 显示可改变每页数量
        showQuickJumper: true, // 是否可以快速跳转至某页
        pageSizeOptions: ['5', '10', '20', '50'], // 每页数量选项
        showTotal: total => `共 ${total} 条数据`, // 显示总数
        onChange: (page, pageSize) => {
          this.$emit('handlePageOrSize', { page, pageSize })
        },
        onShowSizeChange: (page, pageSize) => {
          this.$emit('handlePageOrSize', { page, pageSize }) // 改变每页数量时更新显示
        }
      }, { ...this.pagination })
    }
  },
  render() {
    const { $attrs, rowKey, tableConfig, dataList, paginationAssign, on } = this
    const propGroup = filterProp($attrs, Table)
    return <Table {...{ props: { rowKey, pagination: paginationAssign, columns: tableConfig, dataSource: dataList, ...propGroup[Table.name] }, on } } />
  }
}
