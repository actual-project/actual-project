import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import './utils/element.js'
V1 ue.config.productionTip = false
0

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
