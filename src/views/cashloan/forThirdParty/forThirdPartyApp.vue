<template>
  <div class="wrapper">
      <div class="banner">
        <img src="./assets/banner.jpg">
        <img class="ad" src="./assets/ad.png">
      </div>
      <div class="main" v-show="page===1">
        <p class="tip1">已注册用户请<span @click="openApp">使用App登录</span></p>
        <div class="input">
          <input placeholder="请输入手机号" v-model="phoneNum" maxlength="11" style="width:100%">
        </div>
        <div class="input">
          <input placeholder="请设置密码" v-model="password" maxlength="16" type="password" style="width:100%">
        </div>
        <div class="input">
          <input placeholder="请输入验证码" v-model="verifyCode" maxlength="11">
          <div class="d-button">
            <div v-show="start" >
              <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.1rem">s</span>
            </div>
            <div v-show="!start" @click="begin1">{{countDownText}}</div>
          </div>
        </div>
        <div class="btn" @click="clickBtn">点此领钱</div>
        <p class="tip2">*注册即代表阅读并同意
          <span @click="$router.push('userAgreement')">《注册协议》</span>
        </p>
        <p class="tip2" style="margin-top:0">及
          <span @click="$router.push('privacyAgreement')">《隐私政策及授权使用协议》</span>
        </p>
        <p class="tip3">借贷有风险，需谨慎</p>
      </div>
      <div class="main" v-show="page===2">
        <div class="main-con">
          <img src="./assets/right.png">
          <div class="congratulation">恭喜您，注册成功!</div>
          <div class="btn" @click="openApp">去借款</div>
          <p>*下载【现金斗士APP】后，用手机号登录即可借款！</p>
        </div>
        <p class="tip3" style="margin-top:2.5rem">借贷有风险，需谨慎</p>
      </div>
      
      <div class="footer">
        <img src="./assets/footer.png">
      </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib'
import Sha1 from './sha1'
import { Countdown } from 'vux'

export default {
  components: {
    Countdown
  },
  data () {
    return {
      channel:'', //渠道标志
      phoneNum: '',
      password:'',
      verifyCode:'',
      page:1,
      /* countdown所需参数 */
      time1: 60,
      start: false,
      countDownText:'获取验证码'
    }
  },
  mounted(){
    //获得渠道
    this.channel = Lib.M.GetQueryString('channel')

    document.getElementsByTagName('body')[0].style.paddingBottom = 0;
    this.getToken();
  },
  methods: {
    openApp(){
      /*
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var isWX = (u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');
      // window.location.href = 'moneyboom://'
      if(isiOS){
        window.location.href = "https://itunes.apple.com/cn/app/id477927812"
      }else{
        if(isWX){
          this.$vux.toast.text('请用浏览器打开此网页，并点击此处下载apk', 'middle')
        }else{
          window.location.href = "https://moneyboom.cn/apk/v101/cash_1.0.1_getui.apk"
        }*/
      window.location.href = "https://www.pgyer.com/Cash";
    },
    /* 开始倒计时 */
    begin1(){
      if(this.phoneVerify()===false){
        this.$vux.toast.text('手机号格式不正确', 'middle')
      }else{
        this.start = true;
        this.sendVerify();
      }
    },
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 60
      this.countDownText = '重新发送'
    },
    /* 验证填写参数是否为空 */
    isParamsEmpty(){
      if(this.phoneNum == ''|| this.password == ''|| this.verifyCode == '') 
        return true 
      else 
        return false
    },
    /* 验证手机格式 */
    phoneVerify(){
      if (!this.phoneNum || !this.phoneNum.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/)) {
          /*this.$vux.toast.text('手机号格式不正确', 'middle')*/
        return false
      } else {
        return true;
      }
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
    },
    /* 获取token */
    getToken(){
      var self = this;
      Lib.M.ajax({
        url : '/uaa/oauth/token',
        headers: {
          Accept:'application/json',
          Authorization:'Basic anVoZV9jYXNobG9hbjpKdWhlMTIzNjc4IUAj'
        },
        params:{
          username:'juhe',
          password:'Juhe2017!@#',
          grant_type:'password',
          scope:'read write'
        },
        success:function(data){
          localStorage.token = data.access_token;
        },
        error:function(err){
          console.error(err);
        }
      });
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
    checkVerify(){
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
            //校验成功注册
            self.regist();
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
        }
      });
    },
    /* 点击注册按钮 */
    clickBtn(){
      if(this.isParamsEmpty()){ //判空
        this.$vux.toast.text('内容请填写完整！', 'middle')
      }else if(this.phoneVerify() === false){  //判断手机格式
        this.$vux.toast.text('手机号格式不正确', 'middle')
      }else if(this.checkPassword(this.password) === false){ //判断密码格式
        // 提示在方法内已做
      }else{
        //校验验证码
        this.checkVerify();
      }
    },
    /* 调用注册接口 */
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
            /* 注册成功跳转 */
            self.$vux.toast.text('注册成功', 'middle');
            self.page = 2;
          }else if(data.code == -100){
            self.$vux.toast.text(data.error, 'middle');
          }
        }
      });
    }
  }
}
</script>

<style scoped>
  .wrapper{
    position: relative;
    height: 41.69rem;
    overflow: hidden;
    background: white;
    letter-spacing: 1px;
  }
  .banner{
    width: 100%;
    height: 19.22rem;
    position: absolute;
    top: 0;
  }
  .banner>img:nth-child(1){
    width: 100%;
    height: 19.22rem;
  }
  .ad{
    width: 3rem;
    height: 1.1rem;
    position: absolute;
    right: 0.7rem;
    top: 0.5rem;
  }
  .main{
    width: 21rem;
    height: 25rem;
    background: #fff8e2;
    margin:0 auto;
    margin-top: 15.065rem;
    padding-top: 4.405rem;
  }  
  .tip1{
    box-sizing: border-box;
    width: 100%;
    text-align: right;
    color: #c9c9c8;
    font-size: 0.565rem;
    margin-top: 0.75rem;
    padding-right: 0.9rem;
  }
  .tip1>span{
    color: #ff7e00;
  }
  .input{
    position: relative;
    display: flex;
    align-items: center;
    width: 17.53rem;
    margin: 0 auto;
    margin-top: 0.65rem;
    height: 2.34rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 8px 5px #fff5d6;
  }
  .input>input{
    outline: none;
    border: none;
    margin-left: 1.22rem;
    font-size: 0.875rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .btn{
    background: #ffc100;
    color: white;
    border-radius: 16px;
    width: 13.44rem;
    height: 2rem;
    line-height: 2rem;
    margin:0 auto;
    margin-top: 1.54rem;
    text-align: center;
    font-size: 1.065rem;
    box-shadow: 0px 4px 5px #ffedb5;
  }
  .tip2{
    width: 100%;
    height: 0.8rem;
    text-align: center;
    margin-top: 0.4rem;
    color: #ff7e00;
    font-size: 0.6rem;
  }
  .icon-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14.11rem;
    margin: 0 auto;
  }
  .icon-list>img{
    width: 3.09rem;
    height: 3.535rem;
  }
  .footer{
    width: 100%;
    height: 3.125rem;
    position: absolute;
    bottom: 0;
  }
  .footer>img{
    width: 100%;
    height: 3.125rem;
  }
  .d-button{
    position:absolute;
    right: 1rem;
    text-align: center;
    font-size:0.815rem;
    color:#ff7e00;
    height:1.5rem;
    line-height:1.5rem;
  }
  .tip3{
    font-size: 0.5rem;
    text-align: center;
    margin-top: 1rem;
  }
  .main-con{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main-con>img{
    width: 3.78rem;
    height: 3.78rem;
    margin-top: 3.5rem;
  }
  .main-con>.congratulation{
    font-size: 0.875rem;
    color: #ffc100;
    margin-top: 1rem;
  }
  .main-con>p{
    font-size: 0.5rem;
    color: #ff7e00;
    margin-top: 0.625rem;
  }
</style>
