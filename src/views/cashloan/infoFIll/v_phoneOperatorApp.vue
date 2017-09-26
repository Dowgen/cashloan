<template>
  <div>
    <hb-head headfont="手机运营商"></hb-head>
    <div class="infoFill">
      <div class="inputer">
        <input placeholder="请输入手机号" v-model="phoneNum"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
      </div>
      <div class="inputer">
        <input placeholder="请输入运营商服务密码"/>
        <div class="fgt-password">忘记密码？</div>
      </div>
      <div class="inputer">
        <input placeholder="请输入校验码"/>
        <div class="btn-getCode">免费获取</div>
      </div>
    </div>
    <x-button type="primary" class="btn2">确定</x-button>
    <div class="agreement">
      <img src="./assets/agreeProto.png">
      已阅读及同意<span style="color:#1abc9c">《运营商授权协议》</span>
    </div>
    <div class="tip">
      <p style="margin-bottom:1.065rem">温馨提示:</p>
      <p>1.请授权本人实名认证的手机号。（使用满3个月）</p>
      <p>2.根据运营商网络情况不同，授权服务需要1-3分钟时间才能完成，请耐心等待。</p>
      <p>3.忘记服务密码，可以联系运营商客服或登录运营商官网进行查询或修改。</p>
      <p>4.授权不成功可拨打客服电话<span>0571-28121621</span></p>
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
      phoneNum:''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .infoFill{
    height: 12.1rem;
    background: white;
    margin-top: 1rem;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
  .inputer{
    box-sizing: border-box;
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 21.065rem;
    height: 3.445rem;
    border-bottom: solid 1px #e6e6e6;
    font-size: 0.815rem;
    color: #c6c7cc;
    padding-top: 1rem;
  }
  .inputer>div{
    color: #1abc9c;
  }
  .inputer>input{
    outline: none;
    border: none;
    font-size: 0.94rem;
    padding-left: 0.5rem;
  }
  .inputer .btn-getCode{
    border: solid 1px #1abc9c;
    border-radius: 5px;
    width: 4.065rem;
    height: 1.65rem;
    text-align: center;
    line-height: 1.65rem;
  }
  .agreement{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #919499;
    font-size: 0.75rem;
    margin-top: 0.6rem;
  }
  .agreement>img{
    width: 0.6rem;
    height:  0.6rem;
    margin-right: 0.5rem;
  }
  .btn2{
    margin-top: 2.78rem;
  }
  .tip{
    margin-top: 2.845rem;
    padding: 0 1rem;
    color: #a9a9a9;
    font-size: 0.69rem;
    text-align: left;
  }
  .tip>p:not(:first-child){
    margin-bottom: 0.5rem;
    color: #b0b0b0;
  }
  .tip span{
    color: #1abc9c;
  }
</style>
