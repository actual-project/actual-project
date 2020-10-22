// 引入vuex
import Vue from 'vue'
// 引入对话框和消息框的组件

import {Message,MessageBox,Button,Rate,Tabs,TableColumn,TabPane,Table,Card,Pagination} from 'element-ui'
// 把相关的组件或者组件中的属性或者方法挂载到Vue的组件中
Vue.use(Button)
Vue.use(Rate)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TabPane)
Vue.use(Tabs)
//Vue.use(Rate)
Vue.use(Pagination);
Vue.use(Card);


Vue.prototype.$msgbox = MessageBox; // 组件中通过this.$msgbox()显示提示框
Vue.prototype.$alert = MessageBox.alert; // 组件中通过this.$alert()显示对话框
Vue.prototype.$message = Message; // 组件中通过this.$message()显示消息框