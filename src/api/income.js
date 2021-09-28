import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 收益记录
export const getIncome = data => {
    return axios({
      baseURL: cddSrv,
      url: '/amountlog/list',
      method: 'post',
      data,
      loading: true
    })
}