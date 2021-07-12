import { Card } from 'ant-design-vue'
import DhForm from '../dhform'
import DhButton from '../dhbutton'
import DhTable from '../dhtable'
const defaultFromProps = {
  gutter: 48, type: 'flex', layout: 'inline'
}
const defaultTableProps = {
  scroll: { x: 'calc(1200px + 50%)', y: 300 }
}

export default {
  name: 'DhCrud',
  functional: true,
  render(h, context) {
    const { formConfig, formParams, fromProps = {}, span = 6, buttonConfig, tableConfig, dataList, pagination, TableProps, rowKey } = context.props
    const { listeners } = context
    // const { ref } = context.data
    // console.log(ref, 'contextcontextcontext')
    return h('div', {}, [
      /*  头部 */
      h(
        Card, {}, [
          h(DhForm, { ...{ on: { ...listeners }, attrs: { ...defaultFromProps, ...fromProps }, props: { formConfig, formParams, span }, ref: 'dhForm' }})
        ]
      ),
      /*  按钮 */
      h(
        DhButton,
        { ...{ on: { ...listeners }, props: { buttonConfig }, ref: 'dhButton' }}
      ),
      /*  表格 */
      h(
        DhTable,
        { ...{ attrs: { ...defaultTableProps, ...TableProps }, on: { ...listeners }, props: { rowKey, pagination, tableConfig, dataList }, ref: 'dhTable' }}
      ),
      /*  槽口 */
      [context.children]
    ])
  }
}
