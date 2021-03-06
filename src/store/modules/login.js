import { getLogin } from '@/api'

const state = {
    //
    userInfo: {}
}
const mutations = {
    //登录
    RECIVE_USER(state, userInfo) {
        state.userInfo = userInfo
    }
}
const actions = {
    //
    async login({ commit }, userInfo) {

        const result = await getLogin(userInfo)
        commit('RECIVE_USER', userInfo)
        
        if (result.code == 200) {
            alert('成功登录')  
            localStorage.setItem('MTuserInfo',JSON.stringify(result.userInfo))
        } else{
            
            if(result.code == 502){
                alert('密码错误')
                return
            }else if(result.code == 400) {
                alert('用户名不存在')
                return
            }else{
                throw new Error(result.message || '登录失败')  
            }       
        }
    }

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}