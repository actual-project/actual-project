//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store对象
import store from '@/store'
//引入路由器对象
import router from './router'
import './utils/element.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  render: h => h(App),
  //注册store
  store,
  //注册路由
  router
}).$mount('#app')
