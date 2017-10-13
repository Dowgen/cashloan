<template>
  <div>
    <div class="header">
      <img src="./assets/back.png" @click="$router.go(-1)">
    </div>
    <div class="confirm">
      <p>亲，请再次确认您要借款的金额与期限</p>
    </div>
    <div class="content">
      <div class="loan-info">
        <span>贷款金额</span>
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
      <div class="loan-info">
        <span>借款期限</span>
        <div>
          <div class="choose-btn" :style="term==7?styleActive:''" @click="setTerm(7)">
            <img src="./assets/choose.png" v-show="term==7">7天</div>
          <div class="choose-btn" :style="term==14?styleActive:''" @click="setTerm(14)">
            <img src="./assets/choose.png" v-show="term==14">14天</div>
        </div>
      </div>
      <div class="repay-info">
        <div>
          <p>到帐金额(元)</p>
          <p>还款日期</p>
          <p>借款费用(元)</p>
        </div>
        <div>
          <p>{{userGetMoney}}</p>
          <p>{{repayDate}}</p>
          <p>{{interest}}</p>
        </div>
      </div>
    </div>
    <x-button type="primary" class="btnEnsur" @click.native="confirm">确认借款</x-button>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'

export default {
  name: 'add',	
  components: {
    XButton
  },
  data () {
    return {
      loanAmount:500,
      term: 7,
      styleActive:{
        'border-color': '#1abc9c',
        'color': '#1abc9c'
      },
      userInfo:{}
    }
  },
  computed:{
    userGetMoney(){
       return this.loanAmount - this.loanAmount*this.term*0.01
    },
    interest(){
       return this.loanAmount*this.term*0.01
    },
    repayDate(){
      return new Date(new Date().getTime() + this.term*24*60*60*1000).toLocaleDateString();
    },
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = '3.065rem';
    this.userInfo = JSON.parse(localStorage.userInfo);
  },
  methods: {
    setLoanAmount(amount){
      this.loanAmount = amount;
    },
    setTerm(term){
      this.term = term;
    },
    confirm(){
      var self = this;
      self.$vux.confirm.show({
        content: '是否确认提交借款？',
        onConfirm () {
          self.createOrder();
        }
      })
    },
    createOrder(){
      var self = this;
      Lib.M.ajax({
        url : '/cash-account/loan/createOrder/',
        data:{
          "userId":self.userInfo.userInfo.userId,
          "phone": self.userInfo.userInfo.phone,
          /*"loanAmount": self.loanAmount,
          "receivedAmount": self.userGetMoney,
          "feeAmount": self.interest,*/
          "loanAmount": 0.01,
          "receivedAmount": 0.01,
          "feeAmount": 0.01,
          "loanPeriod": self.term
        },
        success:function (data){
          if(data.code==200){
            self.$vux.toast.text('提交成功！', 'middle')
            self.$router.replace('./submitSuccess')
            
          }else{
            self.$vux.toast.text(data.error, 'middle')
          }
        }
      });
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 3.03rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .header>img{
    width: 0.655rem;
    height: 1.065rem;
    margin-left: 1.19rem;
  }
  .confirm{
    height: 0.875rem;
    font-size: 0.875rem;
    text-align: center;
  }
  .content{
    box-sizing: border-box;
    margin:0 auto;
    padding:1.3rem;
    height: 21.34rem;
    background: white;
    overflow: hidden;
    margin-top: 3.03rem;
    border-radius: 5px;
    width: 21.065rem;
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
  .loan-info{
    box-sizing: border-box;
    padding: 0px 0.28rem;
    width: auto;
    margin:0 auto;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
    margin-top: 1.5rem;
  }
  .loan-info>span{
    color: #4d4d4d;
    font-size: 0.875rem;
  }
  .loan-info>div{
    display: flex;
    font-size: 0.875rem;
  }
  .repay-info{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .repay-info>div{
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    color: #737373;
  }
  .repay-info>div:last-child{
    font-size: 0.815rem;
    color: #b5b5b5;
    text-align: right;
  }
  .repay-info>div>p{
    margin-top: 1.125rem;
  }
</style>
