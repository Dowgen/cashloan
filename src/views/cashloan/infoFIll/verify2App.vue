<template>
  <div>
    <hb-head headfont="实名认证"></hb-head>
    <div class="body">
      <div class="infoFill" style="height: 66.6667vw;">
        <div class="step" style="height: 40%;">
          <img src="./assets/step2.png">
          <div>
            <span>实名认证</span>
            <span>手机运营商</span>
            <span>完善资料</span>
          </div>
        </div>
        <div class="inputer">
          <input placeholder="请输入手机号"/>
        </div>
        <div class="inputer" style="margin-top:3.0667vw">
          <input placeholder="请输入运营商服务密码"/>
          <div class="fgt-password">忘记密码？</div>
        </div>
        <div class="inputer" style="margin-top:3.0667vw">
          <input placeholder="请输入校验码"/>
          <div class="btn-getCode">免费获取</div>
        </div>
      </div>
      <router-link to='/verify3'>
        <x-button type="primary" class="btn">下一步</x-button>
      </router-link> 
    </div>
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

    }
  },
  methods: {

  }
}
</script>

<style>
  .inputer{
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84.5334vw;
    margin: 0 auto;
    height: 8.4vw;
    border-bottom: solid 1px #e6e6e6;
    font-size: 4vw;
    color: #c6c7cc;
  }
  .inputer>div{
    color: #1abc9c;
    font-size: 3.2vw;
  }
  .inputer .btn-getCode{
    border: solid 1px #1abc9c;
    border-radius: 5px;
    width: 17.3334vw;
    height: 7.0667vw;
    text-align: center;
    line-height: 7vw;
    margin-bottom: 2vw;
  }
  .btn{
    margin-top: 12.667vw;
  }
</style>
