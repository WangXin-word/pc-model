import axios from './api' // 倒入 api
import { cddSrv } from './config'
// banner
export const bannerList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/banner/list',
      method: 'post',
      data,
      loading: true
    })
  }
// 商品列表
export const productList = data => {
    return axios({
      baseURL: cddSrv,
      url: '/product/getProductList',
      method: 'post',
      data,
      loading: false
    })
  }
// 优惠单品
export const getDiscountPrdList = data => {
  return axios({
    baseURL: cddSrv,
    url: '/product/getDiscountPrdList',
    method: 'post',
    data,
    loading: false
  })
}
// 首页活动
export const getActivityImg = data => {
  return axios({
    baseURL: cddSrv,
    url: '/activity/listAll',
    method: 'get',
    data,
    loading: true
  })
}
// 首页功能区
export const getNav = data => {
  return axios({
    baseURL: cddSrv,
    url: '/func/listAll',
    method: 'get',
    data,
    loading: true
  })
}
// 精选热门
export const getHotPrdList = data => {
  return axios({
    baseURL: cddSrv,
    url: '/product/getHotPrdList',
    method: 'post',
    data,
    loading: true
  })
}
// 商品一级分类
export const productType = data => {
    return axios({
      baseURL: cddSrv,
      url: '/product/getPrdType',
      method: 'post',
      data,
      loading: true
    })
  }

  // 商品分类
export const productDetail = data => {
    return axios({
      baseURL: cddSrv,
      url: '/product/getProductDetail',
      method: 'post',
      data,
      loading: true
    })
  }

  // 商品推荐 
  export const recommendPrd = data =>{
    return axios({
      baseURL: cddSrv,
      url: '/product/getRecommendPrdList',
      method: 'post',
      data,
      loading: true
    })
  }

  //查询全部产品分类- 最多展示2级
  export const findAllPrdType = data =>{
    return axios({
      baseURL: cddSrv,
      url: '/product/findAllPrdType',
      method: 'get',
      data,
      loading: true
    })
  }


  export const searchPro = data =>{
    return axios({
      baseURL: cddSrv,
      url: '/product/getProductList',
      method: 'post',
      data,
      loading: true
    })
  }

  export const baseConfig = data=>{
    return axios({
      baseURL: cddSrv,
      url: '/params/list',
      method: 'get',
      data,
      loading: false
    })
  }
