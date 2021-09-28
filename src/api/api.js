/* eslint-disable no-unused-expressions */
import axios from 'axios' // 注意先安装哦
import qs from 'qs' // 序列化请求数据，视服务端的要求
import store from '../store'
import router from '../router'
import storeCancel from './storeCancel'
import Vue from 'vue'
import Loading from '@/components/Loading'
import { Toast } from 'vant';
const CancelToken = axios.CancelToken
Vue.use(Toast);
var loadingInstance
export default function $axios (options) {
      return new Promise((resolve, reject) => {
            const instance = axios.create({
                  baseURL: options.baseURL, // config.baseURL 
                  headers: {},
                  transformResponse: [
                        function (data) {
                              data
                        }
                  ]
            })

            //  request 拦截器
            instance.interceptors.request.use(
                  config => {
                        // config.cancelToken = source.token
                        config.cancelToken = new CancelToken((cancel) => {
                              storeCancel._axiosPromiseCancel.push(cancel)
                        })
                        if (
                              config.method.toLocaleLowerCase() === 'post' ||
                              config.method.toLocaleLowerCase() === 'put' ||
                              config.method.toLocaleLowerCase() === 'get' ||
                              config.method.toLocaleLowerCase() === 'delete'
                        ) {
                              if (options['ContentType'] === 'formData') {
                                    config.headers = {
                                          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                    }
                                    config.data = qs.stringify(config.data)
                              } else {
                                    config.headers = {
                                          'Content-Type': 'application/json'
                                    }
                              }
                              if (store.state.token ) {
                                    config.headers = Object.assign({
                                          'token': store.state.token
                                    }, config.headers)
                              }
                        }
                        if (options.loading) {
                              loadingInstance = new Loading()
                              loadingInstance.show()
                        }
                        config.data = {body: config.data,"head": {
                              "channel": 0, // 0 app
                            }}
                        return config
                  },
                  error => {
                        // 请求错误时做些事(接口错误、超时等)
                        // Tip: 4
                        // 关闭loadding
                        //  1.判断请求超时
                        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
                              // console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案');
                              // return service.request(originalRequest);//例如再重复请求一次
                        }
                        //  2.需要重定向到错误页面
                        const errorInfo = error.response
                        if (errorInfo) {
                              // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
                              // const errorStatus = errorInfo.status // 404 403 500 ... 等
                              // router.push({
                              //   path: `/error/${errorStatus}`
                              // });
                        }
                        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
                  }
            )

            // response 拦截器
            instance.interceptors.response.use(
                  response => {
                        let data
                        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
                        if (response.data === undefined ) {
                              data = response.request.responseText ? JSON.parse(response.request.responseText) :{}
                        } else {
                              data = JSON.parse(response.data)
                        }
                        if ((!options.customCodeToast || toString.call(options.customCodeToast) !== '[object Array]') && !options.undefaultToast) { // customCodeToast与undefaultToast同时为否时，所有报错状态码，使用默认Toast

                              if (data.head && data.head.respCode !== '0000' ) {

                                    Toast({
                                          message: data.head.respMsg,
                                          time: 1000
                                    })
                              }
                        }

                        if ( data.head && ( data.head.respCode === 'A003'|| data.head.respCode === "EV1020")) {
                              // source.cancel() // 取消其他正在进行的请求
                              store.commit('saveUserInfo', '')
                              localStorage.clear('token')
                              store.commit('saveToken','')
                              router.replace({
                                    // 跳转到登录页面
                                    path: '/login',
                                    query: {
                                          redirect: router.currentRoute.fullPath
                                    } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                              })
                        }
                        // 若不是正确的返回code，且已经登录，就抛出错误
                        // const err = new Error(data.description)

                        // err.data = data
                        // err.response = response

                        // throw err
                        return data
                  },
                  err => {
                        if (axios.isCancel(err)) { // 取消请求的情况下，终端Promise调用链
                              return new Promise(() => { })
                        }
                        Toast({
                              message:   '网络异常，请稍后重试',
                              time: 1000
                        })
                        return Promise.reject(err) // 返回接口返回的错误信息
                  }
            )

            // 请求处理
            instance(options)
                  .then(res => {
                        options.loading && loadingInstance.close()
                        resolve(res)
                        return false
                  })
                  .catch(error => {
                        options.loading && loadingInstance.close()
                        reject(error)
                  })
      })
}
