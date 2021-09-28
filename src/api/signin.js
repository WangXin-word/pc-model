import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 签到
export const getSign = data => {
    return axios({
      baseURL: cddSrv,
      url: '/user/sign',
      method: 'post',
      data,
      loading: true
    })
}

// 查询当前一周的签到数据
export const signWeekList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/user/signWeekList',
      method: 'post',
      data,
      loading: true
    })
}