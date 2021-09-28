import axios from './api' // 倒入 api
import { cddSrv } from './config'
// 我的任务
export const myTask = data => {
    return axios({
      baseURL: cddSrv,
      url: '/myTasks/myTasking',
      method: 'post',
      data,
      loading: true
    })
  }
// 队长推荐
export const teamTaskPro = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/teamLeaderPrompting',
    method: 'post',
    data,
    loading: true
  })
}
// 队长推荐
export const taskFocus = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/taskFocus',
    method: 'post',
    data,
    loading: true
  })
}
// 战队任务
export const teamTask = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/teamTasking',
    method: 'post',
    data,
    loading: true
  })
}

// 结算中战队贡献
export const teamSet = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/myTeamSettling',
    method: 'post',
    data,
    loading: true
  })
}

// 结算中我的结算
export const mySet = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/mySettling',
    method: 'post',
    data,
    loading: true
  })
}

// 任务篮进行中的任务
export const taskLine = data => {
  return axios({
    baseURL: cddSrv,
    url: '/myTasks/taskLineing',
    method: 'post',
    data,
    loading: true
  })
}