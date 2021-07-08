
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import Vue from 'vue'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from './lang' // internationalization
import '@/icons'
import 'element-ui/lib/theme-chalk/index.css'
import WhComponents from '@/components/wh-component'
import '@/utils/myPromise'
import hljs from 'highlight.js'
import 'highlight.js/scss/tomorrow-night-eighties.scss'
Vue.directive('highlight', function(el) {
  // hljs.configure({ useBR: true })
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
}).use(WhComponents)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
