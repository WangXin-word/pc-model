import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 用户优惠劵
export const getCoupon = data => {
    return axios({
      baseURL: cddSrv,
      url: '/user/coupon/list',
      method: 'post',
      data,
      loading: true
    })
}