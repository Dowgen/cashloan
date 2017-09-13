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
        <x-button type="primary" class="btn2">下一步</x-button>
      </router-link> 
      <div class="agreement">
        <img src="./assets/agreeProto.png">
        已阅读及同意<span style="color:#1abc9c">《用户服务协议》</span>
      </div>
      <div>
        <p>温馨提示:</p>
        <p>1.请授权本人实名认证的手机号。（使用满3个月）</p>
        <p>3.根据运营商网络情况不同，授权服务需要1-3分钟时间才能完成，请耐心等待，如果您发现等待时间过长，可以选择非网络高峰期的时间重新授权</p>
        <p>4.如账户名与密码不匹配，建议先到运营商官网查询能否登录，如登录
失败，请联系运营商客服。</p>
        <p>5.授权不成功可拨打客服电话<span>5.授权不成功可拨打客服电话</span></p>
      </div>
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
    height: 4.8vh;
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
    height: 3.8vh;
    text-align: center;
    line-height: 3.8vh;
    margin-bottom: 1vh;
  }
  .agreement{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25.5rem;
    margin: 0 auto;
    text-align: center;
    color: #545454;
    font-size: 1.3rem;
    margin-top: 1.15rem;
  }
  .agreement>img{
    width:1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  .btn2{
    margin-top: 6.7vh;
  }
</style>
