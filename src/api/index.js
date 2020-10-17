import ajax from '@/api/axios'
export const getFoodDetail = ()=>ajax.get('/fooddetail')

export const getLikeList = ()=>ajax.get('/like')
