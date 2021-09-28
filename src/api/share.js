import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 签到
export const shareProduct = data => {
    return axios({
      baseURL: cddSrv,
      url: '/share/product',
      method: 'post',
      data,
      loading: true
    })
}

// 查询当前一周的签到数据
export const shareNotice = data => {
    return axios({
      baseURL: cddSrv,
      url: '/share/notice',
      method: 'post',
      data,
      loading: true
    })
}