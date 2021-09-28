import axios from './api' // 倒入 api
import { cddSrv } from './config'
// 手机注册登录
export const login = data => {
  return axios({
    baseURL: cddSrv,
    url: '/login/phone',
    method: 'post',
    data,
    loading: true
  })
}
// 获取验证码
export const getSMS = data => {
    return axios({
      baseURL: cddSrv,
      url: '/sms/send',
      method: 'post',
      data,
      loading: true
    })
  }

// 判断微信号是否绑定
export const loginWechat = data => {
    return axios({
      baseURL: cddSrv,
      url: '/login/wechat',
      method: 'post',
      data,
      loading: true
    })
  }

// 绑定微信号
export const bindWeChat = data => {
    return axios({
      baseURL: cddSrv,
      url: '/login/bindWeChat',
      method: 'post',
      data,
      loading: true
    })
  }

// 绑定手机
export const bindPhone = data => {
    return axios({
      baseURL: cddSrv,
      url: '/login/bindPhone',
      method: 'post',
      data,
      loading: true
    })
  }

// 校验手机号是否需要填写邀请码
export const phoneVerify = data => {
    return axios({
      baseURL: cddSrv,
      url: '/login/phoneVerify',
      method: 'post',
      data,
      loading: true
    })
  }

// token 刷新
 export const refreshToken = data => {
   return axios({
     baseURL:cddSrv,
     url: 'cust/refreshToken',
     method: 'post',
     data,
     loading: true
   })
 }

// 退出
export const exit = data => {
  return axios({
    baseURL:cddSrv,
    url: 'logout',
    method: 'get',
    data,
    loading: true
  })
}