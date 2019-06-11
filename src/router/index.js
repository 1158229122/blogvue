import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component:resolve => require(["@/page/index"], resolve),
    },
    {
      path:"/login",
      name:"登录",
      component:resolve => require(["@/page/login"], resolve),
      
    },
    {
      path:"/register",
      name:"注册",
      component:resolve => require(["@/page/register"], resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
  ]
})
