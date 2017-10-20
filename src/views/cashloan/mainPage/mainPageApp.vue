<template>
  <div>
    <div style="background:white;height:33.69rem">
      
      <div class="banner">
        <img src="./assets/banner_new.png">
      </div>
      <div class="choose" style="margin-top:1rem">
        <span>到账金额</span>
        <div>
        <div class="choose-btn" :style="loanAmount==500?styleActive:''" 
         @click="setLoanAmount(500)">
          500
          <img src="./assets/choose.png" v-show="loanAmount==500">
        </div>
        <div class="choose-btn" :style="loanAmount==1000?styleActive:''"
          @click="setLoanAmount(1000)">
          1000
          <img src="./assets/choose.png" v-show="loanAmount==1000">
        </div>
        </div>
      </div>
      <div class="choose" style="margin-top:1rem">
        <span>借款期限</span>
        <div>
        <div class="choose-btn" :style="term==7?styleActive:''" @click="setTerm(7)">
          <img src="./assets/choose.png" v-show="term==7">
          7天</div>
        <div class="choose-btn" :style="term==14?styleActive:''" @click="setTerm(14)">
          <img src="./assets/choose.png" v-show="term==14">
          14天</div>
        </div>
      </div>
      <div class="table thead">
        <span>到帐金额(元)</span>
        <span>还款日期</span>
        <span>到期应还(元)</span>
      </div>
      <div class="table tbody">
        <span>{{userGetMoney}}</span>
        <span>{{repayDate}}</span>
        <span>{{shouldPay}}</span>
      </div>
      <author-button page="mainPage" text="立即申请" marginTop="3.065"></author-button>
    </div>
    <main-nav which="mainPage"></main-nav>
    <loading :show="loading" :text="loadText"></loading>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Loading, XButton, Confirm } from 'vux'

import MainNav from 'components/mainNav'
import authorButton from 'components/authorButton'

export default {
  name: 'add',	
  components: {
    MainNav, Loading, XButton, Confirm, authorButton
  },
  data () {
    return {
      show: false,
      loanAmount:500,
      term: 7,
      styleActive:{
        'border-color': '#1abc9c',
        'color': '#1abc9c'
      },
      userInfo:{},
      loading: false,
      loadText: '请稍等'
    }
  },
  computed:{
    userGetMoney(){
       return this.loanAmount 
    },
    shouldPay(){
       return this.loanAmount*this.term*0.01 + this.loanAmount
    },
    repayDate(){
      let date = new Date(new Date().getTime() + this.term*24*60*60*1000)
      let year = date.getFullYear();
      let month = date.getMonth()+1; //0 === 1月 1===2月，因此+1
      let day = date.getDate();
      return year+'/'+month+'/'+day;
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = '3.065rem';
    this.userInfo = JSON.parse(localStorage.userInfo);
    if(document.referrer.indexOf('megvii.com')!= -1){
      this.face_getResult();
    }else if(document.referrer.indexOf('lianlianpay.com')){
      this.isBindCard();
    }
  },
  methods: {
    setLoanAmount(amount){
      this.loanAmount = amount;
    },
    setTerm(term){
      this.term = term;
    },
    /* 触发后台拿到face++认证 */
    face_getResult(){
      var self = this;
      self.loading = true
      Lib.M.ajax({
        url : '/risk-manage/faceid/getResult',
        params:{
          user_id: self.userInfo.userInfo.userId,
          biz_id: JSON.parse(localStorage.faceReturn).biz_id
        },
        success:function (data){
          self.loading = false;
          if(data.code=='200'){
            self.$vux.alert.show({
              content: '实名认证成功!',
              onShow () {
                console.log('Plugin: I\'m showing')
              },
              onHide () {
                self.$router.push('./confirmRent')
              }
            })
          }else{
            self.$vux.alert.show({
              content: '实名认证失败，请重试!'
            })
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
      self.loading = true;
      Lib.M.ajax({
        url : '/pay/repayment/instalmentSignData',
        data:{
          card_no: localStorage.bankCard,
          acct_name:self.userInfo.idInfo.name,
          id_no:self.userInfo.idInfo.idCardNumber,
          user_id: self.userInfo.userInfo.userId
        },
        success:function (data){
          self.loading = false;
          if(data.code == '0000'){
            self.$vux.toast.text('绑定成功!', 'middle')
            /*self.$router.replace('./confirmRent');
            window.location.reload();*/
          }else{
            self.$vux.toast.text(data.error,'middle')
          }
        }
      });
    }
  }
}
</script>

<style>
  .weui-btn{
    width: 21.44rem !important;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
</style>

<style scoped>
  .title{
    height: 4rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    font-size: 1.065rem;
    font-weight: 600;
  }
  .banner{
    width: 100%;
  }
  .banner>img{
    width: 100%;
    height: 10.815rem;
  }
  .choose{
    box-sizing: border-box;
    padding: 0px 7px;
    width: 21.43rem;
    margin:0 auto;
    height: 3.815rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
  }
  .choose>span{
    color: #4d4d4d;
    font-size: 0.94rem;
  }
  .choose>div{
    display: flex;
    font-size: 0.875rem;
  }
  .choose-btn{
    margin-left: 0.875rem;
    position: relative;
    width: 3.75rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border: solid 1px #c2c2c2 ;
    border-radius: 3px;
  }
  .choose-btn>img{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.565rem;
    height: 0.53rem;
  }
  .table{
    box-sizing: border-box;
    width: 21.43rem;
    margin: 0 auto;
    display: flex;
    margin-top: 2.065rem;
    padding: 0 1rem;
  }
  .table>span{
    text-align: center;
    flex: 1;
  }
  
  .thead{
    font-size: 0.88rem;
    color: #808080
  }
  .tbody{
    font-size: 1.065rem;
    color: #39394A;
    margin-top: 1.065rem;
  }
  .btn{
    margin-top: 3.065rem;
  }
</style>
