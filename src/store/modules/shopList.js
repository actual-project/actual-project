import {getShopList,getShopLike,getLeftLikeList,getCommentList} from '@/api'
const state ={
    shopList:[],//商店列表
    shopLikeList:[],//猜你喜欢商家列表
    rightLikeList:[],//右侧猜你喜欢商家列表
    commentInfo:{},//食客评论
}
const mutations ={
    //获取商店列表mutations
    getShopListMutations(state,shopList){
        state.shopList = shopList
    },
    //获取猜你喜欢商店列表mutations
    getShopLikeListMutations(state,shopLikeList){
        state.shopLikeList = shopLikeList
        // console.log(state)
    },
    //获取右侧猜你喜欢商店列表mutations
    getRightShopLikeListMutations(state,rightLikeList){
        state.rightLikeList = rightLikeList
    },
    //获取食客评论mutations
    getCommentMutations(state,commentInfo){
        state.commentInfo = commentInfo
    },
}
const actions ={
    //获取商店列表actions
    async getShopListActions({commit}){
        let result = await getShopList()
        commit('getShopListMutations',result.poiInfos)
    },
    //获取猜你喜欢商店列表actions
    async getShopLikeListActions({commit}){
        let result = await getShopLike()
        // console.log(result)
        commit('getShopLikeListMutations',result)
    },
    //获取右侧猜你喜欢商店列表actions
    async getRightShopLikeListActions({commit}){
        let result = await getLeftLikeList()
        // console.log(result)
        commit('getRightShopLikeListMutations',result)
    },
    //获取食客评论列表actions
    async getCommentListActions({commit}){
        let result = await getCommentList()
        console.log(result)
        commit('getCommentMutations',result)
    },

}
const getters ={}
export default {
    state,
    mutations,
    actions,
    getters
}