const ApiUser = {
  //是否登录中
  isLogin:{
    url:'api/user/isLogin',
    method:'get'
  },
  //用户登录
  login: {
        url: 'api/user/login',
        method: "post"
  },
  //用户注册
  register:{
        url:'api/user/register',
        method: "post"
  },
  //获取验证码
  getCheck:{
    url:"api/user/getCheck",
    method:"get"
  },
  //退出登录
  quitLogin:{
    url:"api/user/quitLogin",
    method:"get"
  },

}

export default ApiUser
