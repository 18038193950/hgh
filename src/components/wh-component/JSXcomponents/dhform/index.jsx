import {
  Col,
  //   Button,
  FormModel,
  Row
} from 'ant-design-vue'

import { filterProp } from '@/utils/filterProps'
import DhFormItem from './dhFormItem'
export default {
  name: 'DhForm',
  inheritAttrs: false,
  props: {
    formConfig: {
      type: Array,
      default: () => []
    },
    formParams: {
      type: Object,
      default: () => ({})
    },
    span: {
      type: Number,
      default: () => 12
    }
  },
  data() {
    return {
      ...this.handleForm
    }
  },
  methods: {
    ...Object.keys(FormModel.methods).reduce((hanlde, next) => { // 合并方法
      hanlde[next] = function(callback) { return this.$refs.dhForm[next](callback) }
      return hanlde
    }, {}),
    hanldeContent(formConfig) {
      const { $attrs, $listeners, span } = this
      const { labelCol, wrapperCol } = $attrs
      return formConfig.map((i) => {
        const propGroup = filterProp(i, Col)
        const colProps = { ...propGroup[Col.name], span: i.span || span }
        const { other } = propGroup
        const otherProps = {
          ...other,
          labelCol: other.labelCol || labelCol || { span: 4 },
          wrapperCol: other.wrapperCol || wrapperCol || { span: 20 }
        }
        return (
          <Col key={i.field} {...{ props: colProps }} style={{ 'display': i.display !== 'none' }} >
            <DhFormItem {...{ attrs: { ...otherProps, prop: i.field }, on: { ...$listeners }}} formParams={ this.formParams } >
            </DhFormItem>
          </Col>
        )
      })
    }
  },
  render() {
    // console.log(FormModel.methods)
    const { $attrs, formConfig, formParams, $slots } = this
    const propGroup = filterProp($attrs, FormModel, Row)
    return (
      <FormModel ref='dhForm' {... { props: { ...propGroup[FormModel.name], model: formParams }} }>
        <Row {...{ props: { ...propGroup[Row.name] }}}>
          {this.hanldeContent(formConfig)}
        </Row>
        {$slots.default}
      </FormModel>
    )
  }
}
