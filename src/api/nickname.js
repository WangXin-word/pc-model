import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 用户地址查看
export const getnickName = data => {
    return axios({
      baseURL: cddSrv,
      url: '/user/updateNickName',
      method: 'post',
      data,
      loading: true
    })
}