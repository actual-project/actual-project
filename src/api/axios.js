//二次封装axios
import Axios from 'axios'
//引入进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const ajax = Axios.create({
    baseURL:'/api',
    timeout:20000
})
//请求拦截器
ajax.interceptors.request.use((config)=>{
    Nprogress.start()
    return config
})
//响应拦截器
ajax.interceptors.response.use((response)=>{
    Nprogress.done()
    // console.log('response',response.data)
    return response.data.data

},(err)=>{//错误统一处理
    Nprogress.done()
    console.log('错误信息:' + err.message || '未知错误')
    return Promise.reject(err)
})
export default ajax