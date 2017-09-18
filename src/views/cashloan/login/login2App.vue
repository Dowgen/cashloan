<template>
  <div>
  	<hb-head headfont="登录"></hb-head>
    
    <div class="welcome">
      <h2>欢迎登录现金贷</h2>
      <p>13555567890</p>
    </div>
    <div class="input">
      <img src="./assets/code_key.png" class="img-icon">
      <input placeholder="请输入登录密码" v-model="password"></input>
      <img src="./assets/delete.png" class="img-del" 
           v-show="password!=''" @click="password=''">
    </div>
		<router-link to='/'>
  		<x-button type="primary" class="btn">登录</x-button>
  	</router-link>
    <router-link to='/regist'>
  		<div class="fgtPassword">
        忘记密码？短信验证码登录  
      </div>
    </router-link>
    <div class="pad-btm"></div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'

import HbHead from 'components/HbHead';

export default {
  components: {
    HbHead,XButton
  },
  data () {
    return {
      password:''
    }
  },
  methods: {


  }
}
</script>

<style>
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
