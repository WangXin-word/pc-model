import axios from './api' // 倒入 api
import { cddSrv } from './config'

// 查询已维护银行列表
export const getAddBankList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/userBank/list',
      method: 'post',
      data,
      loading: true
    })
}

// 添加银行卡
export const deleteBan = data => {
    return axios({
      baseURL: cddSrv,
      url: '/userBank/delete',
      method: 'post',
      data,
      loading: true
    })
}
// 添加银行卡
export const addBankList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/userBank/add',
      method: 'post',
      data,
      loading: true
    })
}

// 查询银行数据列表，默认返回前20条数据
export const bankList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/bank/list',
      method: 'post',
      data,
      loading: true
    })
}

// 删除银行卡
export const delBankList = (data) => {
    return axios({
      baseURL: cddSrv,
      url: '/userBank/delete',
      method: 'post',
      data,
      loading: true
    })
}