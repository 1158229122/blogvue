<template>
  <div>
    <div id="particles-js" style="display: flex;align-items: center;justify-content: center">
    </div>
    <div class="login-page">
      <div class="login-content">
        <div class="login-tit">登录</div>
        <div class="login-input">
          <input type="text" v-model="userName" placeholder="用户名/手机号">
        </div>
        <div class="login-input">
          <input type="password" v-model="password" placeholder="密码">
        </div>
        <div class="login-btn">
          <div class="login-btn-left">
            <span @click="login">登录</span>
          </div>
          <div class="login-btn-right" onClick="changeImg()">
            <img src="../assets/img/check.png" alt="" id="picture"> 记住密码
          </div>
          <a class="login-btn-right" @click="register">
            <span>没有账号前去注册</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: "login.vue",
      data() {
        return {
          userName:'',
          password:''
        };
      },
      methods: {
        login(){
          this.$http(this.$apiUser.login,{email:this.userName,password:this.password}).then(res=>{
              console.log(res);
              // localStorage.setItem("userID",res.id);
              // localStorage.setItem("token",res.token);
              // this.$router.push({
              //   path:"/index"
              // })
          }).catch(res => {
                console.log(res);
          })
        },
        register(){
          this.$router.push({
            path:"/register"
          })
        },
        changeImg(){
          let pic = document.getElementById('picture');
          console.log(pic.src)
          if(pic.getAttribute("src",2) =="img/check.png"){
            pic.src ="img/checked.png"
          }else{
            pic.src ="img/check.png"
          }
        },
        createJs(){
          const bScript = document.createElement('script');
          bScript.type = 'text/javascript';
          bScript.src = './static/js/login/app.js';
          document.body.appendChild(bScript);
        }
      },
      mounted() {
        this.changeImg()
        this.createJs();
      },
    created() {
      const oScript = document.createElement('script');
      oScript.type = 'text/javascript';
      oScript.src = './static/js/login/particles.js';
      document.body.appendChild(oScript);
    }
  }


</script>

<style scoped>
  @import "../css/login/login.css";
</style>
