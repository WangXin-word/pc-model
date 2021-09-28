import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 用户地址查看
export const getaddressList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/address/list',
      method: 'get',
      data,
      loading: true
    })
}


