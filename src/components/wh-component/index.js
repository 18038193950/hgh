// 导入单个组件
import WhForm from './wh-form/index.js'
import Vue from 'vue'
import WhFormTabel from './wh-form-table/index.js'
import WhTable from './wh-table/index.js'
import WhButton from './wh-button/index.js'
import WhDialog from './wh-dialog/index.js'
import WhDrawer from './wh-drawer/index.js'
import WhBoot from './wh-boot/index.js'

// 以数组的结构保存组件，便于遍历
// const components = [WhForm, WhTableForm, WhTable, WhButton, WhDialog, WhBoot]
const components = [WhForm, WhFormTabel, WhTable, WhButton, WhDrawer, WhDialog, WhBoot]

const VueGlobalMethod = {
  $updataFn: (fn) => (fn.forEach((fns) => typeof fns === 'function' && fns())),
  $formDataCallback: async({ promise, optioncallback, name, queryParams = [] }) => {
    try {
      const data = await promise() // 执行api
      const options = optioncallback(data) // 回调
      for (let i = 0, j = queryParams.length; i < j; i++) {
        if (queryParams[i].name === name) {
          Vue.set(queryParams[i], 'options', options)// 赋值
          break
        }
      }
    } catch (error) {
      console.log('获取数据失败')
    }
  },
  $findIndex: (name, list) => {
    return list.findIndex((item) => item.name === name)
  }
}

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  Object.entries(VueGlobalMethod).forEach(([key, val]) => {
    Object.defineProperty(Vue.prototype, key, {
      writable: false,
      value: val
    })
  })
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}
