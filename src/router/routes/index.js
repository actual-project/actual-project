//引入Login组件
import Login from '../../pages/Login'
//引入Register组件
import Register from '../../pages/Register'
//引入订单组件
import Cart from '../../pages/Cart'
//引入美食详情
import FoodDtaile from '@/pages/FoodDtaile'

// import Like from '../../pages/Like'
import SubmitOrder from '../../pages/SubmitOrder'
import PaySuccess from '../../pages/PaySuccess'

//引入民宿
import minsu from '@/pages/minsu/minsu.vue'

//美食页面
import Food from '../../pages/Food'
import ShopList from '../../pages/ShopList'

//以下为我的美团相关组件
import MyTuan from '@/pages/MyTuan'
import Tuan from '@/pages/Tuan'
import Order from '@/pages/Order'
import Enshrine from '@/pages/Enshrine'
import Ticket from '@/pages/Ticket'
import User from '@/pages/User'

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
    {
        path:'/cart',
        component:Cart,
        props:(route)=>({shopId:route.query.shopId,foodId:route.query.foodId})
    }
    ,
    {  
        path:'/submitorder',
        component:SubmitOrder,
        props:(route)=>({foodName:route.query.foodName,totalPrice:route.query.totalPrice})
        
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
    //跳转到支付成功的界面
    {

        path:'/paysuccess',
        component:PaySuccess,
        props:(route)=>({foodName:route.query.foodName,totalPrice:route.query.totalPrice})
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
	  },
    //美食页面的信息
    {
      path:'/food',
      component:Food,
      children:[
        {
          path:'/shopList',
          component:ShopList
        }
      ]
    },
    //民宿
    {
        path:'/minsu',
        component:minsu
    }]
