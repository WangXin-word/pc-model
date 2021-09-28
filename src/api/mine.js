import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 用户信息
export const getUserInfo = data => {
    return axios({
      baseURL: cddSrv,
      url: '/user/refresh',
      method: 'post',
      data,
      loading: false
    })
  }

// 关注
export const interestPro = data => {
  return axios({
    baseURL: cddSrv,
    url: '/interest/product',
    method: 'post',
    data,
    loading: true
  })
}