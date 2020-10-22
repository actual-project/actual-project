//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store对象
import store from '@/store'
//引入路由器对象
import router from './router'
//引入momentjs
//import moment from 'moment'c
import './utils/element.js'
//引入moment 进行时间格式转换
import moment from 'moment'
Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.prototype.$moment = moment
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
