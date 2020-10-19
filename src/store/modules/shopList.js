import {getShopList} from '@/api'
const state ={
    shopList:[],//商店列表
    shopLikeList:[],//猜你喜欢商家列表
}
const mutations ={
    //获取商店列表mutations
    getShopListMutations(stata,shopList){
        stata.shopList = shopList
    },
    //获取猜你喜欢商店列表mutations
    getShopLikeListMutations(stata,shopList){
        stata.shopList = shopList
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
        let result = await getShopList()
        commit('getShopLikeListMutations',result)
    },
}
const getters ={}
export default {
    state,
    mutations,
    actions,
    getters
}