import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes,
    //
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}
    }
})
//全局前置路由守卫
router.beforeEach((to,from,next)=>{
    //to指的目标路由的route对象
    //当前导航即将要离开的路由对象
    //next() 是个函数 是放行的意思 可以跳转
    // 如果next 传入path 是强制跳转的意思
    //如果不传参数 就不做任何跳转 等着
    //1.只有登录的时候才能查看 cart submitorder paysuccess界面
    const checkPath =['/cart','/submitorder','/paysuccess']
    const targetPath = to.path;
    if(checkPath.find(path=>(targetPath.indexOf(path)===0))){
        //要去这三个地方的一个 考虑二级路由的情况 /cart/app
        //看 要去的路径中是否包含这个数组的元素
        //如果存在
        //判断当前有没有登陆 从vuex中看
        if(JSON.parse(localStorage.getItem("MTuserInfo"))){
            if(JSON.parse(localStorage.getItem("MTuserInfo")).username){    
            next()
            }
        }else{
           // console.log('去登陆')
            next('/login')
        }       
    }else{
        //不去这三个地方 放行
        next()
    }
})
export default router