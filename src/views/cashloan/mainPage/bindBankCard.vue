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
           v-show="bankCard!=''" @click="bankCard=''">
      </div>
      <div class="inputer">
        <input placeholder="发卡行"/>
      </div>
      <div class="inputer">
        <input placeholder="银行预留手机号" type="number" maxlength="11" v-model="phoneNum"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
      </div>
      <div class="inputer">
        <input type="number" placeholder="验证码" v-model="verifyCode">
        <div class="d-button">
          <div v-show="start" >
            <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
          </div>
          <div v-show="!start" @click="begin1">{{countDownText}}</div>
        </div>
      </div>
    </div>
    <x-button type="primary" class="btn3" @click.native="click">下一步</x-button>

    <form action="https://test.yintong.com.cn/payment/authsign.htm" method="post">
      <input type="text" name="version" value="1.0"/>
      <input type="text" name="oid_partner" value="201608101001022519"/>
      <input type="text" name="user_id" value="303944689303944689"/>
      <input type="text" name="timestamp" value="20140808142114"/>
      <input type="text" name="sign_type" value="RSA"/>
      <input type="text" name="sign" value="RSA签名结果"/>
      <input type="text" name="url_return" value=" http://localhost:8999/views/cashloan/mainPage.html"/>
      <input type="text" name=" risk_item"
      value=’{"user_info_bind_phone":"13666604580"}’/>
      <input type="text" name=" id_type" value="0"/>
      <input type="text" name=" id_no" value="331003199205170810"/>
      <input type="text" name=" acct_name" value="徐文斌"/>
      <input type="text" name=" card_no" value="6214830219947248"/>
      <input type="text" name=" back_url" value="http://localhost:8999/views/cashloan/mainPage.html#/bindBankCard"/>
      <input type="submit" value="请求签约"/>
    </form>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { PopupPicker, XButton, Countdown } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead, PopupPicker, XButton, Countdown
  },
  data () {
    return {
      bankCard:'',
      phoneNum:'',
      verifyCode: '',       //用户输入的 验证码
      userInfo:{},
      paramsFromBackend:{}, //后台返回的参数，用来传给连连支付
      /* countdown所需参数 */
      time1: 5,
      start: false,
      countDownText:'发送验证码'
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.getBindCardParams();
  },
  methods: {
    /* 倒计时结束时触发 */
    begin1(){
      this.start = true;
      this.sendVerify();
    },
    finish1 (index) {
      this.start = false
      this.time1 = 5
      this.countDownText = '重新发送'
    },
    /* 发送验证码 */
    sendVerify(){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/sendVerify/'+ self.userInfo.userInfo.phone,
        headers: {
          Authorization:'Bearer '+ self.userInfo.token
        },
        success:function(data){
          if(data=='success'){
            self.$vux.toast.text('发送成功！', 'middle')
          }
        },
        error:function(err){
          if(err.error = 'invalid_token'){
            self.$vux.toast.text('token过期，请重新输入！', 'middle')
            window.location.href = 'login.html'
          }else{
            self.$vux.toast.text('发送验证码失败，请重试！', 'middle')
          }
          console.error(err);
        }
      });
    },
    /* 点击按钮 */
    click(){
      if(this.bankCard!='' && this.phoneNum!='' && this.verifyCode!=''){
        this.checkVerify();   
      }else{
        this.$vux.toast.text('信息请填写完整!', 'middle')
      }
    },
    /* 验证验证码 */
    checkVerify(type){
      var self = this;
      Lib.M.ajax({
        type:'get',
        url : 'cash-account/msg/checkVerify/'+ self.userInfo.userInfo.phone
              +'/'+ self.verifyCode,
        headers: {
          Authorization:'Bearer '+ self.userInfo.token
        },
        dataType:'text',
        success:function(data){
          if(data=='success'){
            if(type == 'change'){
              self.changePassword();
            }else{
              self.bindCard();
            }
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
        },
        error:function(err){
          if(err.error = 'invalid_token'){
            self.$vux.toast.text('token过期，请重新输入！', 'middle')
            window.location.href = 'login.html'
          }else{
            self.$vux.toast.text('验证失败，请重试！', 'middle')
          }
          console.error(err);
        }
      });
    },
    getBindCardParams(){
      var self = this;
      Lib.M.ajax({
        url : 'pay/repayment/requestDataForSign',
        data:{
          user_id:self.userInfo.userInfo.userId,
          phone_num:self.userInfo.userInfo.phone,
          /*id_no: self.userInfo.idInfo.idCardNumber,
          acct_name: self.userInfo.idInfo.name,
          card_no: self.bankCard*/
          id_no: '331003199205170810',
          acct_name: '徐文斌',
          phone_num:'13666604580',
          card_no:'6214830219947248',
          url_return: 'https://www.baidu.com'
        },
        success:function(data){
          self.paramsFromBackend = data.data;
        },
        error:function(err){
          console.log('bindCard2:'+err);
        }
      });
   /*   let a = 1
      if(a === 1){
        this.$vux.confirm.show({
          content: '银行卡绑定成功，去借款吧!',
          onCancel () {
            self.$router.replace('./')
          },
          onConfirm () {
            self.$router.replace('./confirmRent');
          }
        })
      }*/
    },
    realBindCard(){
      var self = this;
      Lib.M.ajax({
        url : 'https://cashier.lianlianpay.com/payment/instalmentsign.htm',
        data: self.paramsFromBackend,
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        success:function(data){
          console.log('realbindCard1:'+data);
        },
        error:function(err){
          console.log('realbindCard2:'+err);
        }
      });
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
    position:absolute;
    width: 5rem;
    text-align: center;
    font-size:0.815rem;
    color:#1abc9c;
    right: 0;
    height:1.5rem;
    line-height:1.5rem;
  }
  .btn3{
    margin-top: 0.815rem;
  }
</style>
