import ajax from '@/api/axios'
//获取美食详细列表
export const getFoodDetail = ()=>ajax.get('/fooddetail')
//获取商家评论
export const getDiscuss = ()=>ajax.get('/pinglun')
//获取猜你喜欢的商家列表
export const getShopLike = ()=>ajax.get('/shopLike')
//获取个人信息
export const getUserInfo = ()=>ajax.get('/persnal')
//获取猜你喜欢
export const getlikeList = ()=>ajax.get('/like')
//获取订单列表
export const getOrderList = ()=>ajax.get('/order')
//获取商店列表（美食列表）
export const getShopList = ()=>ajax.get('/getpoilist')
//获取注册请求
export const getRegister = (username,password)=>ajax.post('/regiset',{username,password})
//获取右侧猜你喜欢商家
export const getLeftLikeList = ()=>ajax.get('/leftLike')
//获取食客评论
export const getCommentList = ()=>ajax.get('/pinglun')
