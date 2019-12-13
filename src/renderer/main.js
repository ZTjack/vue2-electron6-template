/*
 * @Author: Jack
 * @Date: 2019-04-04 22:12:42
 * @LastEditors: Jack
 * @LastEditTime: 2019-12-13 11:21:21
 * @Description:
 */
import Vue from 'vue'
import '@/styles/normalize/base.scss' // global css
import App from './layout/Index'
import router from './router'
import store from './vuex/store'

const isDev = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
