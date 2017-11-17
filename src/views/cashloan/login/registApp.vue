<template>
  <div class="wrapper">
  	<hb-head headfont="手机验证"></hb-head>
    
    <div class="welcome">
      <img src="./assets/logo.png">
      <h2>已发送验证短信到号码</h2>
      <p>{{phoneNum}}</p>
    </div>
    <div class="input input-regist">
      <img src="./assets/icon_key.png" class="img-icon" style="width:0.5rem;padding:0 0.125rem">
      <input type="number" placeholder="请输入短信验证码" v-model="verifyCode"
             oninput="if(value.length>4)value=value.slice(0,4)">
      <div class="d-button">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="begin1">{{countDownText}}</div>
      </div>
    </div>
    <div class="input input-regist" style="margin-top:1.69rem;">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请设置登录密码" v-model="password" maxlength="16" type="password" v-show="!pswdShow">
      <input placeholder="请设置登录密码" v-model="password" maxlength="16" type="text" v-show="pswdShow">
      <div class="password-icon">
        <img src="./assets/delete.png" class="icon-del" 
             v-show="password!=''" @click="password=''">
        <img src="./assets/eye_close.png" class="icon-eye icon-eye-close" v-show="!pswdShow" @click="pswdShow=true">
        <img src="./assets/eye_open.png" class="icon-eye icon-eye-open" v-show="pswdShow" @click="pswdShow=false">
      </div>
    </div>
  	<div type="primary" class="btn" @click="registOrchange">登录</div>
		<div class="agreeProto">
      开始使用即同意<span style="color:#1abc9c" @click="$router.push({path:'/userAgreement'})">《用户服务协议》</span>
    </div>
    <div class="footer">
      <img src="./assets/footer.png">
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
      password:'',
      pswdShow: false,        //决定密码是否明文
      verifyCode: '',       //用户输入的 验证码

      /* countdown所需参数 */
      time1: 60,
      start: false,
      countDownText:'获取验证码',

      channel: '' //渠道商
    }
  },
  mounted(){
    this.phoneNum = this.$store.state.phoneNum;
    this.begin1();

    /* 获取渠道信息 */
    if(localStorage.channel!=null){
      this.channel = localStorage.channel;
    }
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
      this.time1 = 60
      this.countDownText = '重新发送'
    },
    registOrchange(){
      if(this.verifyCode==='' || this.password === ''){
        this.$vux.toast.text('参数请填写完整！', 'middle')
      }else{
        if(!this.checkPassword(this.password)){

        }else{
          /* 先验证短信，然后根据登录方式决定是注册还是更改密码 */
          this.checkVerify(this.$store.state.registType);
        }
      }
    },
    /* 发送验证码 */
    sendVerify(){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/sendVerify/'+ self.phoneNum,
        headers: {
          Authorization:'Bearer '+ localStorage.token
        },
        success:function(data){
          if(data=='success'){
            self.$vux.toast.text('发送成功！', 'middle')
          }
        }
      });
    },
    /* 验证验证码 */
    checkVerify(type){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/checkVerify/'+ self.phoneNum+'/'+ self.verifyCode,
        headers: {
          Authorization:'Bearer '+ localStorage.token
        },
        dataType:'text',
        success:function(data){
          if(data=='success'){
            if(type == 'change'){
              self.changePassword();
            }else{
              self.regist();
            }
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
        }
      });
    },
    /* 注册 */
    regist(){
      var self = this;
      Lib.M.ajax({
        url : 'cash-account/user/account/regist?channel='+self.channel,
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
            localStorage.userInfo = JSON.stringify(data.data);
            localStorage.authKey = data.data.authKey;
            localStorage.sessionId = data.data.sessionId;
            localStorage.phoneNum = data.data.userInfo.phone;
            self.$vux.toast.text('注册成功，正在跳转', 'middle');
            setTimeout("window.location.href = '/views/cashloan/mainPage.html'",1000);
          }else if(data.code == -100){
            self.$vux.toast.text(data.error, 'middle');
          }
        }
      });
    },
    /* 修改密码 */
    changePassword(){
      var self = this;
      Lib.M.ajax({
        url : 'cash-account/user/account/login/message',
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
            localStorage.userInfo = JSON.stringify(data.data);
            localStorage.authKey = data.data.authKey;
            localStorage.sessionId = data.data.sessionId;
            localStorage.phoneNum = data.data.userInfo.phone;
            self.$vux.toast.text('密码设置成功，正在跳转', 'middle');
            setTimeout("window.location.href = '/views/cashloan/mainPage.html'",1000);
          }else if(data.code==-100){
            self.$vux.toast.text(data.error, 'middle');
          }
        }
      });
    },
    /* 校验密码 */
    checkPassword(num){
      let reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
      let pass1 = reg.test(num);
      let pass2 = num.length>=6 && num.length<=16;
      if(!pass2){
        this.$vux.toast.text('密码长度必须大于6位且小于16位','middle')
        return false
      }else if(!pass1){
        this.$vux.toast.text('密码必须同时包含字母和数字','middle')
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style>
.input-regist{
  margin-top: 2.3rem;
  height: 2.22rem;
}
.agreeProto{
  text-align: center;
  color: #919499;
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
<style scoped>
  input::-webkit-input-placeholder{text-align: left;} 
  .input>input{
    margin:0 2rem;
  }
</style>
