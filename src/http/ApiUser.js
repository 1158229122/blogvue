const ApiUser = {
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
  getCheck:{
    url:"api/user/getCheck",
    method:"get"
  }
}

export default ApiUser
