<template>
  <div>
    <hb-head headfont="绑定银行卡"></hb-head>
    <div class="tip">
      <p>持卡人姓名张均瑞</p>
      <p>您只能绑定与实名认证信息一致的银行卡</p>
    </div>
    <div class="infoFill">
      <div class="inputer">
        <input placeholder="银行卡号" type="number" v-model="bankCard"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="bankCard!=null" @click="bankCard=null">
      </div>
      <div class="inputer">
        <input placeholder="发卡行"/>
      </div>
      <div class="inputer">
        <input placeholder="银行预留手机号" type="number" maxlength="11" v-model="phoneNum"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=null" @click="phoneNum=null">
      </div>
      <div class="inputer">
        <input type="number" placeholder="验证码" v-model="verifyCode">
        <div type="default" class="d-button" ref="d_btn">
          <span v-if="!sendMessage">{{btn_words}}</span>
          <span v-if="sendMessage">{{countdown}}s</span>
        </div>
      </div>
    </div>
    <x-button type="primary" class="btn3" @click.native="bindCard">下一步</x-button>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { PopupPicker, XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,  PopupPicker, XButton
  },
  data () {
    return {
      bankCard:null,
      phoneNum:null,
      btn_words:'获取验证码', //验证框按钮的文字
      verifyCode: null,       //用户输入的 验证码
      sendMessage: false,     //决定显示文字还是倒计时
      countdown: 60,          //倒计时数
      runCount: true         //是否正在倒计时
    }
  },
  methods: {
    bindCard(){
      var that = this;
      let a = 1
      if(a === 1){
        this.$vux.confirm.show({
          content: '银行卡绑定成功，去借款吧!',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            that.$router.replace('./')
          },
          onConfirm () {
            that.$router.replace('./confirmRent');
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .tip{
    color: #737373;
    font-size: 0.875rem;
    width: 100%;
    text-align: center;
    margin-top: 1.1rem;
  }
  .tip>p:last-child{
    font-size: 0.75rem;
    margin-top: 0.3rem;
  }
  .infoFill{
    box-sizing: border-box;
    width: 21.44rem;
    height: 14.5rem;
    background: white;
    margin: 0 auto;
    margin-top: 1.1rem;
    padding: 1.47rem 1.37rem;
    border-radius: 10px;
  }
  .inputer{
    box-sizing: border-box;
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 18.75rem;
    height: 2.85rem;
    border-bottom: solid 1px #e6e6e6;
    font-size: 0.815rem;
    color: #c6c7cc;
    padding-top: .8rem;
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
  .sel{
    background: url('./assets/arrow_down.png') no-repeat center center;
    background-size: 100% 100%;
    width: 0.69rem;
    height: 0.375rem;
    overflow: hidden;
    position: absolute;
    right: 1rem;
  }
  .d-button{
    margin-right: .1rem;
  }
  .btn3{
    margin-top: 0.815rem;
  }
</style>
