//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store对象
import store from '@/store'
//引入路由器对象
import router from './router'
import './utils/element.js'
Vue.config.productionTip = false
Vue.config.productionTip = false
new Vue({
  //绑定全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  //注册store
  store,
  //注册路由
  router
}).$mount('#app')
