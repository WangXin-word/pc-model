import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 提现申请
export const getWithdraw = data => {
    return axios({
      baseURL: cddSrv,
      url: '/withdraw/apply',
      method: 'post',
      data,
      loading: true
    })
}

//查询提现列表
export const getWithdrawList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/withdraw/list',
      method: 'post',
      data,
      loading: true
    })
}