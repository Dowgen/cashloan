<template>
  <div>
    <hb-head-green headfont="绑定银行卡"></hb-head-green>
    <div class="warning">您只能绑定与实名认证信息一致的银行卡</div>
    <!-- <div class="infoFill">
      <div class="inputer">
        <input placeholder="银行卡号" type="number" v-model="bankCard"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="bankCard!=''" @click="bankCard=''">
      </div>
      <div class="inputer">
        <input placeholder="发卡行"/>
      </div>
    </div> -->
    <group>
      <x-input title='持卡人姓名' disabled v-model="realName"></x-input>
      <x-input title='银行卡号 ' placeholder="请输入银行卡号" v-model="bankCard"></x-input>
    </group>
    <x-button type="primary" class="btn3" @click.native="click">确定</x-button>

    <!-- <form action="https://cashier.lianlianpay.com/payment/instalmentsign.htm" method="post">
      <input type="text" name="version" :value="backParams.version"/>
      <input type="text" name="oid_partner" :value="backParams.oid_partner"/>
      <input type="text" name="user_id" :value="backParams.user_id"/>
      <input type="text" name="timestamp" :value="backParams.timestamp"/>
      <input type="text" name="sign_type" :value="backParams.sign_type"/>
      <input type="text" name="sign" :value="backParams.sign"/>
      <input type="text" name="url_return" :value="backParams.url_return"/>
      <input type="text" name="risk_item" :value="backParams.risk_item"/>
      <input type="text" name="id_no" :value="backParams.id_no"/>
      <input type="text" name="acct_name" :value="backParams.acct_name"/>
      <input type="text" name="card_no" :value="backParams.card_no"/>
      <input type="submit" value="请求签约"/>
    </form> -->
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
      /* countdown所需参数 */
/*      phoneNum:'',
      verifyCode: '',       //用户输入的 验证码
      time1: 5,
      start: false,
      countDownText:'发送验证码'*/
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.realName = this.userInfo.idInfo.name;
    this.getBindCardParams();
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
          url_return: 'https://www.baidu.com'
        },
        success:function(data){
          console.log('backParams:'+JSON.stringify(data.data))
          self.backParams = JSON.stringify(data.data);
          self.realBindCard();
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
      console.log('backParams:'+self.backParams)
      Lib.M.ajax({
        url : 'https://wap.lianlianpay.com/signApply.htm',
        data: self.backParams,
        /*transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],*/
        success:function(data){
          console.log('realbindCard1:'+data);
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
  .btn3{
    margin-top: 2.22rem;
  }
</style>
