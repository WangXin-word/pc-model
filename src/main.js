/*
 * @Author: 汪鑫
 * @Date: 2021-09-28 10:41:30
 * @Annotate: 输入这页的内容
 * @LastEditTime: 2021-09-28 11:31:58
 * @LastEditors: 汪鑫
 * @Description: 
 * @FilePath: /pc-model/src/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
