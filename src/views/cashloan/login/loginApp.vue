<template>
  <div>
  <!-- <hb-head headfont="注册"></hb-head> -->
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <div class="input">
      <img src="./assets/phone.png" class="img-icon">
      <input placeholder="请输入手机号" v-model="phoneNum" maxlength="11">
      <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
    </div>
    <x-button type="primary" class="btn" @click.native="phoneVerify">开始使用</x-button>
    <div class="pad-btm"></div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'


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
/*  body{
    background-color: white;
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center 65px;
  }*/
  .weui-btn{
    width: 20.315rem !important;
  }
  body{
    background: white !important;
  }
  .logo{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8.1rem;
  }
  .logo>img{
    width:3.19rem;
    height: 3.5rem;
  }
  .input{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20.315rem;
    margin: 0 auto;
    margin-top: 5.31rem;
    height: 1.69rem;
    border-bottom: solid 1px #e6e6e6;
  }
  .img-icon{
    width: 0.75rem;
    height: 1.065rem;
    margin-left: .2rem;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
  .input>input{
    outline: none;
    border: none;
    margin-left: 1.375rem;
  }
  .btn{
    margin-top: 2.25rem;
  }
  .pad-btm{
    height: 3rem;
    visibility: hidden;
  }
</style>
