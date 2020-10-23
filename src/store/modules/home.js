import {getCatMovies} from '@/api'
const state = {
  cartMovies:[], // 电影列表

}

const mutations = {
  // 获取商店列表mutations
  getCatMoviesMutations(state,cartMovies){
    state.cartMovies = cartMovies
  },
  
}

const actions = {
  // 获取商店列表actions
  async getCatMoviesActions({commit}){
    let result = await getCatMovies()
    commit('getCatMoviesMutations',result.hot)
  }
}

const getters = {
  
}
export default  {
  state,
  mutations,
  actions,
  getters
}