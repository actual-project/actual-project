import ajax from '@/api/axios'
//获取美食详细列表
export const getFoodDetail = ()=>ajax.get('/fooddetail')
//获取商家评论
export const getDiscuss = (page)=>ajax.get(`/pinglun?page=${page}`)
//获取猜你喜欢的商家列表
export const getShopLike = ()=>ajax.get('/shopLike')
//获取个人信息
export const getUserInfo = ()=>ajax.get('/persnal')
//获取猜你喜欢
export const getlikeList = ()=>ajax.get('/like')

//我的收藏
export const getEnshrineList = ()=>ajax.get('/buying')
//获取订单列表
export const getOrderList = ()=>ajax.get('/order')
//获取商店列表（美食列表）
export const getShopList = ()=>ajax.get('/getpoilist')

//获取注册请求
export const getRegister = ({username,password})=>ajax.post('/register',{username,password})
//获取登陆请求
export const getLogin = ({username,password})=>ajax.post('/login',{username,password})

export const getLikeList = ()=>ajax.get('/like')
// 猫眼电影
export const getCatMovies  = ()=>ajax.get('/catmovie')
// 民宿
export const getHouse = ()=>ajax.get('/guesthouse')

//获取右侧猜你喜欢商家
export const getLeftLikeList = ()=>ajax.get('/leftLike')
//获取食客评论
// export const getCommentList = ()=>ajax.get('/pinglun')
