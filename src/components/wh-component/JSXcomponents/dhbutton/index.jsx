import { Button, Tooltip } from 'ant-design-vue'
export default {
  name: 'DhButton',
  props: {
    buttonConfig: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    handleEvent(props) {
      this.$emit('handleEvent', { props })
    }
  },
  render() {
    const { buttonConfig, handleEvent } = this
    return <span>
      {
        buttonConfig.map(({ htmlType, label, style = 'margin-right:10px', ...props }) =>
          (
            (!htmlType || htmlType === 'button')
              ? <Button onClick={() => handleEvent({ ...props, label })} style={style} {...{ props }} key = {label}>{ label }</Button>
              : <Tooltip title={label} key = {label}>
                <Button onClick={() => handleEvent({ ...props, label })} style={style} {...{ props }}></Button>
              </Tooltip>
          )
        )
      }
    </span>
  }
}
