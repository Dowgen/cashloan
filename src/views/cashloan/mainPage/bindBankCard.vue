<template>
  <div>
    <hb-head-green headfont="绑定银行卡"></hb-head-green>
    <div class="warning">您只能绑定与实名认证信息一致的银行卡</div>
    <group>
      <x-input title='持卡人姓名' disabled v-model="realName"></x-input>
      <x-input title='银行卡号 ' placeholder="请输入银行卡号" v-model="bankCard"></x-input>
    </group>
    <div class="button">
      <form id="myForm" v-on:submit.prevent="click" action="https://wap.lianlianpay.com/signApply.htm" method="post">
        <input id="backParams" type="text" name="req_data" value=""/>
        <input type="submit" value="确定"/>
      </form>
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton,XInput,Group } from 'vux'


import HbHeadGreen from 'components/HbHeadGreen';

export default {
  name: 'add',	
  components: {
    HbHeadGreen, XButton, XInput, Group
  },
  data () {
    return {
      bankCard:'',
      userInfo:{},
      realName: '', //姓名（固定）
      backParams:'' //后台返回的参数，用来传给连连支付
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.realName = this.userInfo.idInfo.name;
    /* 进页面判断一下是否是从连连跳过来的 */
    this.isBindCard();
  },
  methods: {
    /* 点击按钮 */
    click(){
      if(this.bankCard!=''){
        this.getBindCardParams();
      }else{
        this.$vux.toast.text('信息请填写完整!', 'middle')
      }
    },
    /* 得到绑卡所需参数 */
    getBindCardParams(){
      var self = this;
      localStorage.bankCard = self.bankCard
      Lib.M.ajax({
        url : 'pay/repayment/requestDataForSign',
        data:{
          user_id:self.userInfo.userInfo.userId,
          phone_num:self.userInfo.userInfo.phone,
          register_time: self.userInfo.idInfo.create_time,
          id_no: self.userInfo.idInfo.idCardNumber,
          acct_name: self.userInfo.idInfo.name,
          card_no: localStorage.bankCard,
          url_return: 'https://moneyboom.cn/views/cashloan/mainPage.html#/bindBankCard'
        },
        success:function(data){
          if(data.code == '0000'){
            document.getElementById('backParams').value = JSON.stringify(data.data);
            document.getElementById('myForm').submit()
          }else{
            self.$vux.toast.text(data.error,'middle')
          }
        }
      });
    },
    /* 判断是否绑定了银行卡，如果绑定了的话就推一下后端 */
    isBindCard(){
      var self = this;
      console.log(self.$route.query.status)
      if( self.$route.query.status == null){
        /* 没绑卡，啥也不干 */
      }else{
        /* 绑了判断一下是成功还是失败 */
        if(self.$route.query.status=='0000'){
          self.trigBackLLPay();
        }else{
          self.$vux.toast.text(self.$route.query.result, 'middle')
        }
      }
    },
    /* 触发后端查询连连支付信息 */
    trigBackLLPay(){
      let self = this;
      Lib.M.ajax({
        url : '/pay/repayment/instalmentSignData',
        data:{
          card_no: localStorage.bankCard,
          acct_name:self.userInfo.idInfo.name,
          id_no:self.userInfo.idInfo.idCardNumber,
          user_id: self.userInfo.userInfo.userId
        },
        success:function (data){
          if(data.code == '0000'){
            self.$vux.toast.text('绑定成功!请确认借款信息', 'middle')
            self.$router.replace('./confirmRent');
          }else{
            self.$vux.toast.text(data.error,'middle')
          }
        }
      });
    }
  }
}
</script>

<style scoped>
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
  .warning{
    background: #fff3ca;
    color: #f66464;
    height:2rem;
    line-height: 2rem;
    text-align: center;
    margin-top: -5px;
  }
  .button{
    position: relative;
  }
  .button>form{

  }
  .button>form>input{
    visibility: hidden;
  }
  .button>form>input[type="submit"]{
    visibility: visible;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.33333333;
    border-radius: 0.5rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    font-size: 1.125rem;
    width: 21.44rem;
    background-color: #1abc9c;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  .btn3{
    margin-top: 2.22rem;
  }
</style>
