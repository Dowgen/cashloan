<template>
  <div class="wrapper">
  	<hb-head headfont="手机验证"></hb-head>
    
    <div class="welcome">
      <h2>已发送验证短信到号码</h2
      <p>{{phoneNum}}</p>
    </div>
    <div class="input input-regist">
      <img src="./assets/icon_key.png" class="img-icon" style="width:0.5rem;padding:0 0.125rem">
      <input type="number" placeholder="短信验证码" v-model="verifyCode"
             oninput="if(value.length>4)value=value.slice(0,4)">
      <div class="d-button">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="begin1">{{countDownText}}</div>
      </div>
    </div>
    <div class="input input-regist" style="margin-top:2.2rem;">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请设置登录密码" v-model="password">
      <img src="./assets/delete.png" class="img-del" 
           v-show="password!=''" @click="password=''">
    </div>
  	<x-button type="primary" style="margin-top:5.19rem" @click.native="checkVerify">登录</x-button>
		<div class="agreeProto">
      开始使用即同意<span style="color:#1abc9c">《用户服务协议》</span>
    </div>

    <div class="pad-btm"></div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton, Countdown } from 'vux'

import HbHead from 'components/HbHead';

export default {
  components: {
    HbHead,XButton,Countdown
  },
  data () {
    return {
      phoneNum:'',
      token: '',
      password:'',
      verifyCode: null,       //用户输入的 验证码

      /* countdown所需参数 */
      time1: 5,
      start: false,
      countDownText:'获取验证码'
    }
  },
  mounted(){
    this.phoneNum = this.$store.state.phoneNum;
    this.token = this.$store.state.token;
  },
  methods: {
    /* 开始倒计时 */
    begin1(){
      this.start = true;
      this.sendVerify();
    },
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 5
      this.countDownText = '重新发送'
    },
    regist(){
      
    },
    /* 发送验证码 */
    sendVerify(){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/sendVerify/'+ self.phoneNum,
        headers: {
          Authorization:'Bearer '+ self.token
        },
        success:function(data){
          if(data=='success'){
            self.$vux.toast.text('发送成功！', 'middle')
          }
        },
        error:function(err){
          if(err.error = 'invalid_token'){
            self.$vux.toast.text('token过期，请重新输入！', 'middle')
            self.$router.replace('./')
          }else{
            self.$vux.toast.text('发送验证码失败，请重试！', 'middle')
          }
          console.error(err);
        }
      });
    },
    /* 验证验证码 */
    checkVerify(){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/checkVerify/'+ self.phoneNum+'/'+ self.verifyCode,
        headers: {
          Authorization:'Bearer '+ self.token
        },
        success:function(data){
          if(data=='success'){
            self.$vux.toast.text('验证成功！', 'middle')
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
        },
        error:function(err){
          if(err.error = 'invalid_token'){
            self.$vux.toast.text('token过期，请重新输入！', 'middle')
            self.$router.replace('./')
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
          console.error(err);
        }
      });
    },
  }
}
</script>

<style>
.input-regist{
  margin-top: 2.72rem;
  height: 2.22rem;
}
.agreeProto{
  text-align: center;
  color: #545454;
  font-size: 0.75rem;
  margin-top: 0.72rem;
}
.d-button{
  position:absolute;
  width: 5rem;
  text-align: center;
  font-size:0.815rem;
  color:#1abc9c;
  right: 0;
  height:1.5rem;
  line-height:1.5rem;
  border-left: solid 1px #b5b5b5;
}
</style>
