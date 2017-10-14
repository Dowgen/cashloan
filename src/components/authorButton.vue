<template>
  <div>
	<x-button type="primary" :style="btnStype" @click.native="jump">{{text}}</x-button>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'

export default {
  data() {
    return {
      authPassed:0,
      cardBinded:false,
      hasOrder:false,
      loanStatus:0,
      userInfo:{},
      btnStype:{
        'margin-top':this.marginTop + 'rem'
      }
    }
  },
  components: {
	  XButton
  },
  props: {
    text: {
      type: String,
      required: true
    },
    page:{
      type: String,
      required: true
    },
    marginTop:{
      type: String,
      required: true
    }
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){


  },
  //在挂载开始之前被调用
  beforeMount(){


  },
  //已成功挂载，相当ready()
  mounted(){
    console.log(this.page=='mainPage')
    this.userInfo = JSON.parse(localStorage.userInfo);
    /* 得到绑卡数据 */
    this.bankCardCheck();
    /* 得到认证通过标志 */
    this.getauthStatus();
    /* 得到用户是否有正在进行中的订单 */
    this.getOrderStatus();
  },
  //相关操作事件
  methods: {
    jump(){
      var self = this
      let a = 2;
      if(this.authPassed != 4){
        this.$vux.confirm.show({
          content: '亲,您的基础信息尚未完善，请先完善资料!',
          onConfirm () {
            window.location.href = '/views/cashloan/infoFill.html'
          }
        })
      }else if( this.cardBinded === false){
        this.$vux.confirm.show({
          content: '亲,请先绑定银行卡再借款!',
          onConfirm () {
            self.$router.push('./bindBankCard')
          }
        })
      }else if( this.hasOrder){
        if(this.loanStatus == 2){
          self.$vux.toast.text('对不起，您未通过借款审核','middle')
        }else{
          self.$vux.toast.text('已有正在进行中的订单！','middle')
        }
      }else{ /* 首页人脸识别*/
        if(self.page=='mainPage'){
          self.face_getToken()
        }else if(self.page == 'confirmRent'){ /*确认页提交订单*/
          self.$emit('createOrder')
        }else{
          self.$vux.toast.text('页面有误!','middle')
        }
      }
    },
    /* 检查认证是否全部通过 */
    getauthStatus(){
      var self = this;
      Lib.M.ajax({
        url : '/risk-manage/auth/authStatus',
        data:{
          mobile: self.userInfo.userInfo.phone,
          user_id: self.userInfo.userInfo.userId,
          certNo: self.userInfo.idInfo.idCardNumber || '',
          name: self.userInfo.idInfo.name || ''
        },
        success:function (res){
          let data = res.data;
          for(let i in data){
            if(data[i].code=='2') ++self.authPassed;
          }
        }
      });
    },
    /* 检查银行卡是否绑定 */
    bankCardCheck(){
      var self = this;
      Lib.M.ajax({
        url : '/pay/repayment/bankCardCheckList',
        data:{
          user_id: self.userInfo.userInfo.userId
        },
        success:function (res){
          if(res.data.length == 0){
            self.cardBinded = false
          }else{
            self.cardBinded = true
          }
        }
      });
    },
    /* 检查是否有正在进行中的订单 */
    getOrderStatus(){
      var self = this;
      Lib.M.ajax({
        type:'GET',
        url:'cash-account/loan/getAllProcessing/'+self.userInfo.userInfo.userId,
        success:function (res) {
          if(res.data.length != 0){
            self.hasOrder = true;
            self.loanStatus = res.data[0].loanStatus
          }else{
            self.hasOrder = false;
          }
        }
      })
    },
    /* 触发face++人脸识别 */
    face_getToken(){
      var self = this;
      Lib.M.ajax({
        url : '/risk-manage/faceid/getToken',
        params:{
          return_url: 'https://moneyboom.cn/views/cashloan/mainPage.html',
          notify_url:'https://finbridge.cn/risk-manage/faceid/notify',
          idcard_mode:0,
          idcard_name: self.userInfo.idInfo.name,
          idcard_number: self.userInfo.idInfo.idCardNumber
        },
        success:function (data){
          if(data.code == 200){
            let faceReturn = {
              token : data.data.token,
              biz_id : data.data.biz_id
            }
            localStorage.faceReturn = JSON.stringify(faceReturn);
            /* 获取token后跳转第三方 */
            window.location.href = 'https://api.megvii.com/faceid/lite/do?token='+ data.data.token;
          }else{
            self.$vux.toast.text(data.error,'middle');
          }
        }
      });
    }
  }
}
</script>

<style >
  .weui-btn{
    width: 21.44rem !important;
  }
  .btn{
    margin-top: 3.065rem;
  }
</style>
