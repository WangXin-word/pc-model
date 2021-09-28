import axios from './api' // 倒入 api
import { cddSrv } from './config'
// 创建任务金订单
export const createTaskOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/userTask/createOrder',
    method: 'post',
    data,
    loading: true
  })
}
// 创建任务金订单
export const payTaskOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/userTask/payOrder',
    method: 'post',
    data,
    loading: true
  })
}

// 商品下单
export const createOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/create',
    method: 'post',
    data,
    loading: true
  })
}

// 订单查询
export const listOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/list',
    method: 'post',
    data,
    loading: true
  })
}

// 订单查询-未支付
export const unPaylist = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/unPaylist',
    method: 'post',
    data,
    loading: true
  })
}
// 商品下单/order/pay
export const payOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/pay',
    method: 'post',
    data,
    loading: true
  })
}
// 订单详情
export const detailOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/detail',
    method: 'post',
    data,
    loading: true
  })
}

// 取消订单
export const cancelOrder = data => {
  return axios({
    baseURL: cddSrv,
    url: '/order/cancel',
    method: 'post',
    data,
    loading: true
  })
}