<template>
  <div>
    <hb-head-green headfont="绑定银行卡"></hb-head-green>
    <div class="warning">您只能绑定与实名认证信息一致的银行卡</div>
    <group>
      <x-input title='持卡人姓名' disabled v-model="realName"></x-input>
      <x-input title='银行卡号 ' placeholder="请输入银行卡号" v-model="bankCard"></x-input>
    </group>
    <div class="button">
      <x-button type="primary" class="btn3" @click.native="unbind">解绑</x-button>

      <form action="https://wap.lianlianpay.com/signApply.htm" method="post">
        <input name="req_data" :value="backParams"/>
        <input type="submit" value="请求签约"/>
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
      backParams:{}, //后台返回的参数，用来传给连连支付
      cardData:[]    //用户绑定的银行卡信息
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.realName = this.userInfo.idInfo.name;
    /* 进页面判断一下是否是从连连跳过来的 */
    this.isBindCard();

    this.bankCardCheck();
    this.getBindCardParams();
  },
  methods: {
    /* 点击按钮 */
    click(){
      if(this.bankCard!=''){
        
      }else{
        this.$vux.toast.text('信息请填写完整!', 'middle')
      }
    },
    /* 得到银行卡信息 */
    bankCardCheck(){
      var self = this;
      Lib.M.ajax({
        url : '/pay/repayment/bankCardCheckList',
        data:{
          user_id: self.userInfo.userInfo.userId
        },
        success:function (res){
          self.cardData = res.data;
        }
      });
    },
    /* 得到绑卡所需参数 */
    getBindCardParams(){
      var self = this;
      Lib.M.ajax({
        url : 'pay/repayment/requestDataForSign',
        data:{
          user_id:self.userInfo.userInfo.userId,
          /*phone_num:self.userInfo.userInfo.phone,
          register_time: self.userInfo.idInfo.create_time,
          id_no: self.userInfo.idInfo.idCardNumber,
          acct_name: self.userInfo.idInfo.name,
          card_no: self.bankCard*/
          phone_num:'13666604580',
          register_time: '2017-10-07',
          id_no: '331003199205170810',
          acct_name: '徐文斌',
          card_no:'6212261202040138076',
          url_return: 'http://localhost:8999/views/cashloan/mainPage.html#/bindBankCard'
        },
        success:function(data){
          /*console.log('backParams:'+JSON.stringify(data.data))*/
          self.backParams = JSON.stringify(data.data);
        }
      });
    },
    /* 解绑银行卡 */
    unbind(){
      var self = this;
      Lib.M.ajax({
        url : '/pay/repayment/bankCardUnbind',
        data: {
          user_id: self.userInfo.userInfo.userId,
          no_agree: self.cardData[0].no_agree
        },
        success:function(data){
          console.log('realbindCard1:'+data);
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
          this.$vux.toast.text(self.$route.query.result, 'middle')
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
          self.$vux.toast.text('绑定成功!请确认借款信息', 'middle')
          self.$router.replace('./confirmRent');
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
