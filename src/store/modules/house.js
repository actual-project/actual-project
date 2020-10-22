import {getHouse}  from '@/api'
const state = {
  houseList:[] // 民宿列表
}
const mutations  = {
  // 获取民宿列表的mutations
  getHouseMutations(state,houseList){
    state.houseList = houseList
  },
}

const actions = {
  //  获取民宿列表的actions
  async getHouseActions({commit}){
    let result = await getHouse()
    console.log(result);
    commit('getHouseMutations',result.productList)
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}