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
// 引入element-ui 组件库----所有的和这个库相关的组件都引入进来了
///import ElementUI from 'element-ui';
// // 引入element-ui 组件库中所有的样式
//import 'element-ui/lib/theme-chalk/index.css';
// 声明使用插件
//Vue.use(ElementUI);
 //import { Button } from 'element-ui';
// Vue.component(Button.name, Button);

// 引入element.js---该文件中的代码会执行一次
//import './utils/element.js'


new Vue({
  render: h => h(App),
  //注册store
  store,
  //注册路由
  router
}).$mount('#app')
