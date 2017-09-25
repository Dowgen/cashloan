<template>
  <div class="wrapper">
  	<hb-head headfont="手机验证"></hb-head>
    
    <div class="welcome">
      <h2>已发送验证短信到号码</h2>
      <p>{{phoneNum}}</p>
    </div>
    <div class="input input-regist">
      <img src="./assets/icon_key.png" class="img-icon" style="width:2.1334vw;padding-right:1.5vw">
      <input type="number" placeholder="短信验证码" v-model="verifyCode">
      <div class="d-button">
        <div v-show="start" >
          <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
        </div>
        <div v-show="!start" @click="start=true">{{countDownText}}</div>
      </div>
    </div>
    <div class="input input-regist" style="margin-top:2.2rem;">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请设置登录密码" v-model="password">
      <img src="./assets/delete.png" class="img-del" 
           v-show="password!=''" @click="password=''">
    </div>
		<router-link to='/'>
  		<x-button type="primary" style="margin-top:5.19rem">登录</x-button>
  	</router-link>
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
      password:'',
      verifyCode: null,       //用户输入的 验证码

      /* countdown所需参数 */
      time1: 60,
      start: false,
      countDownText:'获取验证码'
    }
  },
  mounted(){
    this.phoneNum = this.$store.state.phoneNum;
    this.token = this.$store.state.token;
  },
  methods: {
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 5
      this.countDownText = '重新发送'
    }
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
