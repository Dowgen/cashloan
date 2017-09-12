<template>
  <div>
    <div class="title">花花贷</div>
    
    <div class="banner">
      
    </div>
    <div class="choose" style="margin-top:9.0667vw">
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
    <div class="choose" style="margin-top:7.3334vw">
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
      <span>借款费用(元)</span>
    </div>
    <div class="table tbody">
      <span>489.50</span>
      <span>2017/09/06</span>
      <span>10.50</span>
    </div>
    <router-link to='/verify'>
      <x-button type="primary" class="btn">立即申请</x-button>
    </router-link> 
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
  .title{
    height: 64px;
    width: 100%;
    text-align: center;
    line-height: 64px;
    font-size: 4.5334vw;
    font-weight: 600;
  }
  .banner{
    width: 100%;
    height: 46.133vw;
    background: #1abc9c;
  }
  .choose{
    box-sizing: border-box;
    padding: 0px 7px;
    width: 91.4667vw;
    margin:0 auto;
    height: 14.4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
  }
  .choose>span{
    color: #4d4d4d;
    font-size: 4vw;
  }
  .choose>div{
    display: flex;
    font-size: 3.7334vw;
  }
  .choose-btn{
    margin-left: 3.7334vw;
    position: relative;
    width: 16vw;
    height: 6.4vw;
    line-height: 6.4vw;
    text-align: center;
    border: solid 1px #c2c2c2 ;
    border-radius: 3px;
  }
  .choose-btn>img{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2.4vw;
    height: 2.2667vw;
  }
  .table{
    display: flex;
    margin-top: 8.8vw;
  }
  .table>span{
    flex:1;
    text-align: center;
  }
  .thead{
    font-size: 3.745vw;
    color: #808080
  }
  .tbody{
    font-size: 4.5334vw;
    color: #39394A;
    margin-top: 4.2667vw;
  }
  .btn{
    margin-top: 12.667vw;
  }
</style>
