<template>
  <div class="login_bj">
    <div class="zhuce_body">
    <div class="zhuce_kong">
      <div class="zc">
        <div class="bj_bai">
          <h3>欢迎注册</h3>
          <form action="" method="get">
            <input name="" type="text" class="kuang_txt phone" v-model="user.nickName" placeholder="博客的昵称">
            <input name="" type="text" class="kuang_txt phone" v-model="user.phone" placeholder="手机号">
            <input name="" type="text" class="kuang_txt email" v-model="user.email" placeholder="邮箱">
            <input name="" type="text" class="kuang_txt possword" v-model="user.password" placeholder="密码">
            <input name="" type="text" class="kuang_txt possword" v-model="checkPassword" placeholder="确认密码">
            <input name="" style="width: 150px;" type="text" v-model="check" class="kuang_txt yanzm" placeholder="邮箱验证码">
            <input style="width: 80px;font-size: 12px" name="" type="button" class="btn_zhuce" @click="getCheck" value="获取验证码">
            <div>
              <input name="" type="checkbox" value=""><span>已阅读并同意<a href="#" target="_blank"><span class="lan">《gtc博客使用协议》</span></a></span>
            </div>
            <input name="注册" type="button" class="btn_zhuce" @click="register" value="注册">

          </form>
        </div>
        <div class="bj_right">
          <p>使用以下账号直接登录</p>
          <a href="#" class="zhuce_qq">QQ注册</a>
          <a href="#" class="zhuce_wb">微博注册</a>
          <a href="#" class="zhuce_wx">微信注册</a>
          <p>已有账号？<a  @click="login">立即登录</a></p>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "register",
        data(){
          return{
            user:{
              nickName:'',
              phone:'',
              email:'',
              password:'',
            },
            check:'',
            checkPassword:''
          }
        },
      methods:{
          login(){
            this.$router.push({
              path:"/login"
            })
          },
        register(){
            this.$http(this.$apiUser.register,this.user).then(res=>{

            }).catch(reason => {

            })
        },
        getCheck(){
          this.$http(this.$apiUser.getCheck,this.user).then(res=>{
            
          }).catch(res=>{

          })
        },
      }
    }

</script>

<style scoped>
  @import "../css/register/register.css";
</style>
