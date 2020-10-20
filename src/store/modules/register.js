import {getRegister} from '@/api'

const state = {
    //用户信息对象
    userInfo:{}
}

const mutations ={
    //注册
    RECEIVE_USER_INFO (state, userInfo) {
        state.userInfo = userInfo
      }, 
    
}
const actions ={
    async register ({commit},userInfo){
        // console.log(userInfo);
        const result = await getRegister(userInfo)
        // console.log(result);

        commit('RECEIVE_USER_INFO',userInfo)
        // 
        if (result.code == 200) {
            alert('注册成功,即将跳转登录界面')
            if(result.code == 402){
                alert('手机号已存在')
                
            }
        }else  {
            throw new Error(result.message || '注册失败了')
        }
        
        
      
        
        
    }
}
const gettters ={

}

export default {
    state,
    mutations,
    actions,
    gettters
}