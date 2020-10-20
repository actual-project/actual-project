import ajax from '@/api/axios'
//获取美食详细列表
export const getFoodDetail = ()=>ajax.get('/fooddetail')
//获取商家评论
export const getDiscuss = ()=>ajax.get('/pinglun')
//获取猜你喜欢的商家列表
export const getShopLike = ()=>ajax.get('/shopLike')
//获取猜你喜欢
export const getLike = ()=>ajax.get('/like')
//获取商店列表（美食列表）
export const getShopList = ()=>ajax.get('/getpoilist')

export const getLikeList = ()=>ajax.get('/like')

//获取注册请求
export const getRegister = (username,password)=>ajax.post('/regiset',{username,password})
