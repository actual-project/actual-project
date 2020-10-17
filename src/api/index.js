import ajax from '@/api/axios'
export const getFoodDetail = ()=>ajax.get('/fooddetail')