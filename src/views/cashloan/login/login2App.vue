<template>
  <div class="wrapper" style="background-image: url('../../static/img/bg1.png');">
  	<hb-head headfont="登录"></hb-head>
    
    <div class="welcome">
      <h2>欢迎登录现金斗士</h2>
      <p>{{phoneNum}}</p>
    </div>
    <div class="input">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请输入登录密码" v-model="password" maxlength="16" type="password" v-show="!pswdShow">
      <input placeholder="请输入登录密码" v-model="password" maxlength="16" type="text" v-show="pswdShow">
      <div class="password-icon">
        <img src="./assets/delete.png" class="icon-del" 
             v-show="password!=''" @click="password=''">
        <img src="./assets/eye_close.png" class="icon-eye icon-eye-close" v-show="!pswdShow" @click="pswdShow=true">
        <img src="./assets/eye_open.png" class="icon-eye icon-eye-open" v-show="pswdShow" @click="pswdShow=false">
      </div>
    </div>
  	<x-button type="primary" class="btn" @click.native="login">登录</x-button>
  	<div class="fgtPassword" @click="fgtPassword">
        忘记密码？短信验证码登录  
    </div>
    <div class="pad-btm"></div>

    <toast v-model="toastWarn" type="warn">{{WarnText}}</toast>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Sha1 from './sha1'

import { XButton,Toast } from 'vux'

import HbHead from 'components/HbHead';

export default {
  components: {
    HbHead,XButton,Toast
  },
  data () {
    return {
      phoneNum:'',
      password:'',
      pswdShow:false,  //决定密码是否明文
      toastWarn: false,
      WarnText: ''
    }
  },
  mounted(){
    this.phoneNum = this.$store.state.phoneNum;
  },
  methods: {
    fgtPassword(){
      /* 忘记密码，就更改注册类型为 change(即更改密码) */
      this.$store.commit('changeRegistType','change');
      this.$router.push('/regist');
    },
    login(){
      if(this.password == ''){
        this.$vux.toast.text('请输入密码！', 'middle')
      }else{
        var self = this;
        Lib.M.ajax({
          url : 'cash-account/user/account/login/password',
          headers: {
            Authorization:'Bearer '+ localStorage.token
          },
          data:{
            phone: self.phoneNum,
            password: sha1(self.password).toUpperCase(),
            imei:'',
            deviceType: localStorage.deviceType
          },
          success:function(data){
            if(data.code==200){
              self.$vux.toast.text('登陆成功！', 'middle');
              localStorage.userInfo = JSON.stringify(data.data);
              localStorage.authKey = data.data.authKey;
              localStorage.sessionId = data.data.sessionId;
              localStorage.phoneNum = data.data.userInfo.phone;
              window.location.href = '/views/cashloan/mainPage.html';
            }else if(data.code==-100){
              if(data.error=='密码错误'){
                self.$vux.toast.text('密码错误，请重试！', 'middle')
              }else{
                self.$vux.toast.text('登陆失败，请重试！', 'middle')
              }
            }
          }
        });
      }
    }

  }
}
</script>

<style>
.vux-header{
  border-bottom: solid 1px #b3b3b3;
}
.welcome{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2.65rem;
}
.welcome>h2{
  font-size: 0.94rem;
  color: #535353;
  font-weight: normal;
}
.welcome>p{
  margin-top: 0.845rem;
  font-size: 0.875rem;
  color: #1abc9c;
}
.fgtPassword{
  width: 19.315rem;
  margin: 0 auto;
  text-align: right;
  color: #545454;
  font-size: 0.75rem;
  margin-top: 0.72rem;
}
.password-icon{
  position: absolute;
  right: 0.5rem;
  width: 4rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-del{
  width: 0.78rem;
  height: 0.78rem;
  margin-right: 0.97rem;
}
.icon-eye{
  position: absolute;
  right: 0;
}
.icon-eye-open{
  width: 1.065rem;
  height: 0.875rem;
}
.icon-eye-close{
  width: 1.125rem;
  height: 0.565rem;
}
</style>
