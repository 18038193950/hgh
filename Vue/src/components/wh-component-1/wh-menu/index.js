// 导入组件，组件必须声明 name
import Index from './index.vue'

// 为组件添加 install 方法，用于按需引入
Index.install = function(Vue) {
  Vue.component(Index.name, Index)
}

export default Index
