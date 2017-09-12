<template>
  <div>
  <!-- <hb-head headfont="注册"></hb-head> -->
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <div class="input">
      <img src="./assets/phone.png" class="img-icon">
      <input placeholder="请输入手机号" v-model="phoneNum" maxlength="11"></input>
      <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
    </div>
    <x-button type="primary" class="btn" @click.native="phoneVerify">开始使用</x-button>
    
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Divider, XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,  XButton
  },
  data () {
    return {
      phoneNum:'',
    }
  },
  methods: {
    phoneVerify(){
      if (!this.phoneNum || !this.phoneNum.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/)) {
          layer.msg('请输入合法的手机号', {
            time: 1500
          });
          return false;
      } else {
        this.$router.push({path:'/regist',query:{phoneNum:this.phoneNum}});
        /*Lib.M.sendVcode(13666604580)*/
      }
    }
  }
}
</script>

<style>
  body{
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: 180vw 100vh;
    background-position: center 65px;
  }
  .logo{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8.1rem;
  }
  .logo>img{
    width:15.4667vw;
    height: 15.4667vw;
  }
  .input{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 86.6667vw;
    margin: 0 auto;
    margin-top: 27.8vw;
    height: 12.6vw;
    border-bottom: solid 1px #e6e6e6;
    font-family: "PingFang-SC-Regular" !important;
  }
  .img-icon{
    width: 3.2vw;
    height: 4.5334vw;
    margin-left: 1vw;
  }
  .img-del{
    width: 3.334vw;
    height: 3.334vw;
    margin-left:0;
    position: absolute;
    right: 2vw;
  }
  .input>input{
    outline: none;
    border: none;
    margin-left: 7.2vw;
  }
  .btn{
    width: 86.6667vw;
    margin-top: 9.4667vw;
  }
</style>
