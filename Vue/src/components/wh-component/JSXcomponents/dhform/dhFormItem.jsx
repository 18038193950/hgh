import {
  FormModel,
  Input,
  Select,
  Switch,
  Checkbox,
  Radio,
  DatePicker,
  InputNumber
  // Icon
} from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
import DhButton from '../dhbutton'
import { filterProp } from '@/utils/filterProps'
const DhForm = {
  props: {
    formParams: {
      type: Object,
      default: () => ({})
    }
  },
  name: 'dhFormItem',
  inheritAttrs: false,
  methods: {
    dhFormItem(htmlType, props, on) {
      const { scopedSlots, ...prop } = props || {}
      const PropsOrEvent = {
        props: { ...prop },
        scopedSlots,
        on: { ...on }
      }
      const FormItem = [
        {
          htmlType: 'input',
          createHtml: (field) => {
            return <Input
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            >
            </Input>
          }
        },
        {
          htmlType: 'textarea',
          createHtml: (field) => {
            return <Input.TextArea
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            >
            </Input.TextArea>
          }
        },
        // 日期
        {
          htmlType: 'date',
          createHtml: (field) => {
            return <DatePicker
              {...{ props: { ...props }, on }}
              vModel={this.formParams[field]}
            ></DatePicker>
          }
        },
        // 单选按钮
        {
          htmlType: 'radio',
          createHtml: (field) => {
            return <Radio.Group
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            ></Radio.Group>
          }
        },
        // 多选按钮
        {
          htmlType: 'checkbox',
          createHtml: (field) => {
            return <Checkbox.Group
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            ></Checkbox.Group>
          }
        },
        // 计数器
        {
          htmlType: 'inputnumber',
          createHtml: (field) => {
            return <InputNumber
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            ></InputNumber>
          }
        },
        // 下拉框
        {
          htmlType: 'select',
          createHtml: (field) => {
            return <Select
              {...PropsOrEvent}
              vModel={this.formParams[field]}
            >
            </Select>
          }
        },
        // switch
        {
          htmlType: 'switch',
          createHtml: (field) => {
            return <Switch
              {...PropsOrEvent}
              vModel={this.formParams[field]}
              active-color='#13ce66'
              inactive-color='#ff4949'>
            </Switch>
          }
        },
        // button
        {
          htmlType: 'button',
          createHtml: () => {
            // console.log(props.customRender())
            return <DhButton {...PropsOrEvent} buttonConfig={ prop.options }/>
          }
        },
        // slot
        {
          htmlType: 'slot',
          createHtml: () => {
            return props.customRender && props.customRender({ ...props })
          }
        }

      ]
      return FormItem.find((item) => item.htmlType === htmlType)
    }
  },
  render() {
    const { dhFormItem, $attrs, $listeners } = this
    const { htmlType = 'input', on } = $attrs
    const propGroup = filterProp($attrs, FormModel.Item)
    const FormModel_Item_Props = propGroup[FormModel.Item['name']]
    return (
      <FormModel.Item {...{ props: { ...FormModel_Item_Props }}} style='width:100%'>
        {
          dhFormItem(htmlType) && dhFormItem(htmlType, propGroup.other, { ...on, ...$listeners }).createHtml(FormModel_Item_Props.prop)
        }
      </FormModel.Item>
    )
  }
}
export default DhForm
