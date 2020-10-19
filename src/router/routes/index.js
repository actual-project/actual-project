
//引入Login组件
import Login from '../../pages/Login'
//引入Register组件
import Register from '../../pages/Register'
//引入美食详情
import FoodDtaile from '@/pages/FoodDtaile'

//以下为我的美团相关组件
//--------------------------------------------
import MyTuan from '@/pages/MyTuan'
import Tuan from '@/pages/Tuan'
import Order from '@/pages/Order'
import Enshrine from '@/pages/Enshrine'
import Ticket from '@/pages/Ticket'
import User from '@/pages/User'
// --------------------------------------------
export default [
    //注册Login路由组件
    {
        path:'/login',
        component:Login
    },
    //注册Register路由组件
    {
        path:'/register',
        component:Register
    },
    //注册美食详情
    {
        path:"/fooddtaile/:id",
        component:FoodDtaile,
        //判断是否由美食页面跳转
        // beforeEnter: (to, from, next) => {
        //     if(from.path === '/food'){
        //         next()
        //     }else{
        //         next('/food')
        //     }
        // }
    },
    //以下为我的美团路由
    {
		path:'/mytuan',
        component:MyTuan,
        children:[
            {
                path:'/',
                component:Tuan
            },
            {   //收藏
                path:'/mytuan/enshrine',
                component:Enshrine
            },
            {
                //券
                path:'/mytuan/ticket',
                component:Ticket
            },
            {   //个人信息
                path:'/mytuan/user',
                component:User
            },
            {   //个人信息
                path:'/mytuan/order',
                component:Order
            }
        ]
	}
]