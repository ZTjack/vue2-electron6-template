/*
 * @Author: Jack
 * @Date: 2019-04-04 22:12:42
 * @LastEditors: Jack
 * @LastEditTime: 2019-08-20 17:38:04
 * @Description: 
 */
import Vue from 'vue'
import '@/styles/normalize/base.scss' // global css
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
