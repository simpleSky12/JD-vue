import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 定义HTML 的 fontSize大小
import '@js/htmlFontSize.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
