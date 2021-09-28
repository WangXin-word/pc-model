import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 添加购物车
export const addCar = data => {
    return axios({
      baseURL: cddSrv,
      url: '/shopCar/add',
      method: 'post',
      data,
      loading: true
    })
}

// 删除
export const batchDelete = data => {
    return axios({
      baseURL: cddSrv,
      url: '/shopCar/batchDelete',
      method: 'post',
      data,
      loading: true
    })
}



// 查询
export const cartList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/shopCar/list',
      method: 'post',
      data,
      loading: true
    })
}

// /shopCar/findCount
export const shopCount = data => {
    return axios({
      baseURL: cddSrv,
      url: '/shopCar/findCount',
      method: 'post',
      data,
      loading: false
    })
}
