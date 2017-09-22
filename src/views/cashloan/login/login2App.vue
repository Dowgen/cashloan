<template>
  <div class="wrapper">
  	<hb-head headfont="登录"></hb-head>
    
    <div class="welcome">
      <h2>欢迎登录现金贷</h2>
      <p>{{phoneNum}}</p>
    </div>
    <div class="input">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请输入登录密码" v-model="password">
      <img src="./assets/delete.png" class="img-del" 
           v-show="password!=''" @click="password=''">
    </div>
  	<x-button type="primary" class="btn" @click.native="login">登录</x-button>
    <router-link to='/regist'>
  		<div class="fgtPassword">
        忘记密码？短信验证码登录  
      </div>
    </router-link>
    <div class="pad-btm"></div>

    <toast v-model="toastWarn" type="warn">{{WarnText}}</toast>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton,Toast } from 'vux'

import HbHead from 'components/HbHead';

export default {
  components: {
    HbHead,XButton,Toast
  },
  data () {
    return {
      phoneNum:'',
      token:'',
      password:'',
      toastWarn: false,
      WarnText: ''
    }
  },
  mounted(){
    this.phoneNum = this.$store.state.phoneNum;
    this.token = this.$store.state.token;
  },
  methods: {
    login(){
      if(this.password == ''){
        this.$vux.toast.text('请输入密码！', 'middle')
      }else{
        var self = this;
        this.$vux.loading.show({
          text: '请稍等'
        });
        Lib.M.ajax({
          url : 'cash-account/user/account/login/password',
          headers: {
            Authorization:'Bearer '+ self.token
          },
          data:{
            phone: self.phoneNum,
            password: self.password
          },
          success:function(data){
            self.$vux.loading.hide();  
            if(data.code==200){
              self.$vux.toast.text('登陆成功！', 'middle');
            }else if(data.code==-100){
              if(data.error=='密码错误'){
                self.$vux.toast.text('密码错误，请重试！', 'middle')
              }else{
                self.$vux.toast.text('登陆失败，请重试！', 'middle')
              }
            }
          },
          error:function(err){
            self.$vux.loading.hide();
            self.$vux.toast.text('登陆失败，请重试！', 'middle')
            console.error(err);
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
</style>
