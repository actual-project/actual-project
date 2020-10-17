
//引入Login组件
import Login from '../../pages/Login'
//引入Register组件
import Register from '../../pages/Register'
import Like from '../../pages/Mytuan'

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
    //以下为我的美团路由
    {
		path:'/like',
		component:Like
	}
]