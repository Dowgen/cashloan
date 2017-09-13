<template>
  <div style="background:#f2f2f2;height:100vh;">
    <div class="congradulation">
      <p>恭喜您! <span>通过</span> 申请评估</p>
      <p>(请再次确认您要借款的金额与期限)</p>
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
          <p>489.50</p>
          <p>2017/09/06</p>
          <p>10.50</p>
        </div>
      </div>
    </div>
    <router-link to='/verify'>
      <x-button type="primary" class="btnEnsur">确认借款</x-button>
    </router-link>

    <div class="tip">
      未绑定银行卡，先去绑定哦>>
    </div> 
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
      }
    }
  },
  methods: {
    setLoanAmount(amount){
      this.loanAmount = amount;
    },
    setTerm(term){
      this.term = term;
    }
  }
}
</script>

<style>
  .congradulation{
    height: 21.06vh;
    font-size: 4vw;
    text-align: center;
    padding-top: 9vh;
    box-sizing: border-box;
  }
  .congradulation>p>span{
    color: #fa8383;
    font-size: 4.5vw;
  }
  .congradulation>p:last-child{
    font-size: 3.2vw;
    margin-top: 22px;
  }
  .content{
    box-sizing: border-box;
    margin:0 auto;
    padding:5vw;
    height: 51.2vh;
    background: white;
    overflow: hidden;
    margin-top: 2.7vh;
    border-radius: 10px;
    width: 90%;
  }
  .loan-info{
    box-sizing: border-box;
    padding: 0px 7px;
    width: auto;
    margin:0 auto;
    height: 6.41vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
    margin-top: 2.7vh;
  }
  .loan-info>span{
    color: #4d4d4d;
    font-size: 4vw;
  }
  .loan-info>div{
    display: flex;
    font-size: 3.7334vw;
  }
  .repay-info{
    display: flex;
    justify-content: space-between;
    margin-top: 3.8vh;
  }
  .repay-info>div{
    display: flex;
    flex-direction: column;
    font-size: 3.7334vw;
    color: #737373;
  }
  .repay-info>div:last-child{
    font-size: 3.4667vw;
    color: #b5b5b5;
    text-align: right;
  }
  .repay-info>div>p{
    margin-top: 2.6vh;
  }
  .tip{
    position: absolute;
    bottom: 2vh;
    width: 100%;
    text-align: center;
  }
</style>
