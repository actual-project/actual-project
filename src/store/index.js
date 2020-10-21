import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// console.log('modules',modules)
Vue.use(Vuex)
// 测试
export default new Vuex.Store({
    modules
})