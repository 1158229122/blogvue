// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpServer from '../src/http/http'
import ApiSetting from './http/ApiUser'

Vue.config.productionTip = false
Vue.prototype.$http=httpServer
Vue.prototype.$apiUser=ApiSetting
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
