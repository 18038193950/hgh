import { Modal, message } from 'ant-design-vue'
import DhForm from '@/components/dhform'

export default (Vue) => {
  function dialog(componentProps, modalProps, component = DhForm) {
    const _vm = this
    modalProps = modalProps || {}
    if (!_vm || !_vm._isVue) {
      return
    }
    let dialogDiv = document.querySelector('body>div[type=dialog]')
    if (!dialogDiv) {
      dialogDiv = document.createElement('div')
      dialogDiv.setAttribute('type', 'dialog')
      document.body.appendChild(dialogDiv)
    }
    let DialogInstance = Vue.extend({
      name: 'Dhdialog',
      inheritAttrs: false,
      data() {
        return {
          visible: true,
          confirmLoading: false
        }
      },
      router: _vm.$router,
      store: _vm.$store,
      computed: {
        dhForm() { // dhForm ref
          return this.$refs._dhForm
        },
        dhDialog() { // dhForm ref
          return this.$refs._dhDialog
        }
      },
      mounted() {
        this.$on('close', (v) => {
          this.visible = false
          this.$refs._component.$emit('close')
          DialogInstance.$destroy()
        })
      },
      methods: {
        handleClose() {
          this.visible = false
          DialogInstance.$destroy()
        },
        handleCallack() {
          this.confirmLoading = true
          const { dialogEvent } = this.dhDialog.$listeners || {}
          dialogEvent && dialogEvent({ props: { name: 'onOk' }, refs: DialogInstance, close: () => {
            this.visible = false
            this.confirmLoading = false
            DialogInstance.$destroy()
          } })
          // this.$emit('handleCallack', () => {

          // })
        }
      },
      render(h) {
        const that = this
        const modalModel = modalProps && modalProps.model
        if (modalModel) {
          delete modalProps.model
        }
        const ModalProps = Object.assign({
          ref: '_dhDialog'
        },
        {
          attrs: Object.assign({}, {
            ...(modalProps.attrs || modalProps)
          }, {
            okText: '确定',
            cancelText: '关闭',
            confirmLoading: this.confirmLoading,
            visible: this.visible
          }),
          on: Object.assign({}, {
            ...(modalProps.on || {})
          }, {
            ok: () => {
              that.handleCallack()
            },
            cancel: (e) => {
              that.handleClose()
            }
          })
        })

        const componentModel = componentProps && componentProps.model
        if (componentModel) {
          delete componentProps.model
        }
        const ComponentProps = Object.assign({},
          {
            ref: '_dhForm',
            attrs: Object.assign({ gutter: 48, type: 'flex', layout: 'inline' }, {
              ...((componentProps && componentProps.attrs) || componentProps)
            }),
            on: Object.assign({}, {
              ...(componentProps && componentProps.on)
            })
          })

        return h(Modal, ModalProps, [h(component, ComponentProps)])
      }
    })
    const eventCallback = new Promise((resolve, reject) => {
      DialogInstance = new DialogInstance().$mount(dialogDiv)
      resolve(DialogInstance)
    })
    return eventCallback
  }

  Object.defineProperty(Vue.prototype, '$dialog', {
    get: () => {
      return function() {
        return dialog.apply(this, arguments)
      }
    }
  })
  Object.defineProperty(Vue.prototype, '$message', {
    get: () => {
      return message
    }
  })
  Object.defineProperty(Vue.prototype, '$confirm', {
    get: () => {
      return Modal.confirm
    }
  })
}
