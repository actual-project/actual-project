import {catagoryInfo} from '@/api'
const state ={
  catagoryList:[]
}
const mutations={
  getCatagoryMutations(state,catagoryList){
    state.catagoryList = catagoryList
  }
}
const actions ={
  async getCatagoryAction({commit}){
    let result = await catagoryInfo()
    commit('getCatagoryMutations',result.catagoryList)
  }
}
const getters={

}
export default{
  state,
  mutations,
  actions,
  getters
}