
//引入Login组件
import Login from '../../pages/Login'
//引入Register组件
import Register from '../../pages/Register'
//引入订单组件
import Cart from '../../pages/Cart'
//引入美食详情
import FoodDtaile from '@/pages/FoodDtaile'
import Like from '../../pages/Like'

<<<<<<< HEAD
//美食页面
import Food from '../../pages/Food'
=======
>>>>>>> b677c21b69899ba5d0a8b187db518772dfa4e1ed

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
        path:'/Cart',
        component:Cart
    }
,
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
<<<<<<< HEAD
      path:'/like',
      component:Like
    },
    //美食页面的信息
    {
      path:'/food',
      component:Food
    }
=======
		path:'/like',
		component:Like
	}
>>>>>>> b677c21b69899ba5d0a8b187db518772dfa4e1ed

]