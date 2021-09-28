import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 添加收货地址
export const increaseAddress = data => {
    return axios({
      baseURL: cddSrv,
      url: '/area/list',
      method: 'get',
      data,
      loading: true
    })
  }


// 用户地址添加
export const getAddressAdd = data => {
  return axios({
    baseURL: cddSrv,
    url: '/address/add',
    method: 'post',
    data,
    loading: true
  })
}


// 用户地址添加
export const updateAddress = data => {
  return axios({
    baseURL: cddSrv,
    url: '/address/update',
    method: 'post',
    data,
    loading: true
  })
}

// 用户地址删除
export const deleteAddress = (data,id) => {
  return axios({
    baseURL: cddSrv,
    url: `/address/delete/${id}`,
    method: 'post',
    data,
    loading: true
  })
}