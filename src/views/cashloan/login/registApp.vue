<template>
  <div>
  	<hb-head headfont="手机验证"></hb-head>
    
    <div class="welcome">
      <h2>已发送验证短信到号码</h2>
      <p>{{$route.query.phoneNum}}</p>
    </div>
    <div class="input">
      <img src="./assets/icon_key.png" class="img-icon" style="width:2.1334vw;padding-right:1.5vw">
      <input type="number" placeholder="短信验证码" v-model="verifyCode">
      <div type="default" class="d-button" @click="confirmPhone" ref="d_btn">
          <span v-if="!sendMessage">{{btn_words}}</span>
          <span v-if="sendMessage">{{countdown}}s</span>
      </div>
    </div><!-- 
    <countdown slot="value" v-model="time1" :start="start" v-show="show"
       @on-start="begin" @on-finish="finish"></countdown>
    <button @click="start=true">倒计时开始</button> -->
    <div class="input" style="margin-top:2.2rem;">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请设置登录密码">
    </div>
		<router-link to='/'>
  		<x-button type="primary" class="btn" style="margin-top:22.1334vw">登录</x-button>
  	</router-link>
		<div class="fgtPassword">
      开始使用即同意<span style="color:#1abc9c">《用户服务协议》</span>
    </div>
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
      /*show: true,
      time1: 5,
      value: '',
      start: false*/
      btn_words:'获取验证码', //验证框按钮的文字
      verifyCode: null,       //用户输入的 验证码
      sendMessage: false,     //决定显示文字还是倒计时
      countdown: 60,          //倒计时数
      runCount: true,         //是否正在倒计时
    }
  },
  mounted(){
    console.info(this.$route.query.phoneNum)
  },
  methods: {
    //手机验证模块
    startCount: function() {
      if (this.runCount) {
        this.$refs.d_btn.setAttribute("disabled", true);
        if (this.countdown == 0) {
          this.resetBtn();
        } else {
          this.sendMessage = true;
          this.countdown--;
          setTimeout(this.startCount, 1000);
        }
      }
    },
    init: function() {
      this.verifyCode = null;
      this.resetBtn();
    },
    confirmPhone: function() {
      if (!this.verifyCode) {
        layer.msg('请输入验证码', {
          time: 1500
        });
        return false;
      }
      var params = {
        checkCode: this.verifyCode,
      }
      this.sended(params);
    },
    sended: function(params) {

      var that = this;
      that.$refs.ensure_btn.setAttribute("disabled", true);
      $.ajax({
        type: "Post",
        url: "${pageContext.request.contextPath}/w/cashUser/checkMsg",
        data: {
          phoneNum: params.phoneNum,
          checkCode: that.verifyCode
        },
        success: function(data) {

          if (data.status == 0) {
            layer.msg("验证码错误!", {
              time: 1500
            });
            that.resetBtn();
          }
          if (data.status == 1) {
            layer.msg("验证成功！", {
              time: 1500
            });
            that.init();
            that.user_info = JSON.parse(data.loanUser);
            localStorage.user_info = data.loanUser; //保存用户所有信息
            localStorage.login = true;
            //顺便把sessionid放入localStorage
            localStorage.sessionid = data.sessionid;
          }
          that.$refs.ensure_btn.removeAttribute("disabled");
          that.$refs.ensure_btn.style.background = "#1abc9c";

        },
        error: function(data) {
          layer.msg("验证码错误!", {
            time: 1500
          });
          that.resetBtn();
          that.$refs.ensure_btn.removeAttribute("disabled");
          that.$refs.ensure_btn.style.background = "#1abc9c";
        }
      });
    },
    //按钮重置
    resetBtn: function() {
      this.sendMessage = false;
      this.btn_words = '重新发送';
      this.$refs.d_btn.removeAttribute("disabled");
      this.runCount = false;
      this.countdown = 60;
    }
  }
}
</script>

<style>
.input{
  margin-top: 8.6667vw;
  height: 10vw;
}
.fgtPassword{
  width: 25.5rem;
  margin: 0 auto;
  text-align: center;
  color: #545454;
  font-size: 1.3rem;
  margin-top: 1.15rem;
}
.d-button{
  position:absolute;
  font-size:14px;
  color:#1abc9c;
  right:20px;
  top:0;
  height:10vw;
  line-height:10vw;
}
</style>
