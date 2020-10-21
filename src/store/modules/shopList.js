import {getShopList,getShopLike,getLeftLikeList,getDiscuss,getFoodDetail} from '@/api'
const state ={
    foodDetaiList:[],//商品详情的列表
    shopList:[],//商店列表
    shopLikeList:[],//猜你喜欢商家列表
    rightLikeList:[],//右侧猜你喜欢商家列表
    commentInfo:{},//食客评论
    shopInfo:{} //商家对象
}
const mutations ={
    //获取商品详情列表的mutation
    getFoodDetailMutations(state,foodDetailList){
        state.foodDetaiList = foodDetailList
    },
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
    //获取商家对象mutations
    getShopInfoMutations(state,shopInfo){
        state.shopInfo = shopInfo
    }

}
const actions ={
    //获取商品详情列表的actions
    async getFoodDetailActions({commit}){
        let result = await getFoodDetail()
       
        commit('getFoodDetailMutations',result)
    } ,
    //获取商店列表actions
    async getShopListActions({commit}){
        let result = await getShopList()
        commit('getShopListMutations',result.poiInfos)
    },
    //获取猜你喜欢商店列表actions
    async getShopLikeListActions({commit}){
        let result = await getShopLike()
        commit('getShopLikeListMutations',result)
    },
    //获取右侧猜你喜欢商店列表actions
    async getRightShopLikeListActions({commit}){
        let result = await getLeftLikeList()
        commit('getRightShopLikeListMutations',result)
    },
    //获取食客评论列表actions
    async getCommentListActions({commit},page=1){
        console.log('page',page)
        let result = await getDiscuss(page)
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