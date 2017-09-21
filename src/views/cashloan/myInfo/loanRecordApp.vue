<template>
  <div class="record">
      <div class="record_head">
          <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back_white.png" alt=""></span>
          <p>借款记录</p>
      </div>
      <div class="record_detail">
          <div>
              <p>借款金额</p>
              <p>1000.00元</p>
          </div>
          <div>
              <p>还款日期</p>
              <p>2017/09/06</p>
          </div>
          <div>
              <p>借款周期</p>
              <p>14天</p>
          </div>
      </div>
      <div class="record_detail">
          <div>
              <p>借款金额</p>
              <p>1000.00元</p>
          </div>
          <div>
              <p>还款日期</p>
              <p>2017/09/06</p>
          </div>
          <div>
              <p>借款周期</p>
              <p>14天</p>
          </div>
      </div>

  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XHeader, XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
      XHeader,  XButton
  },
  data () {
    return {
        phoneNum:'',
        repayStatus:1

    }
  },
  methods: {

  }
}
</script>

<style>
    .record{
        height: 41.69rem;
        background: rgba(242,242,242,1);
    }
    .record_head{
        width: 100%;
        height: 4rem;
        background: url("./assets/loan_record_head_bg.png");
        color: #fff;
        font-weight: bold;
        line-height: 4rem;
        margin-top: 0;
        position: relative;
    }
    .record_head p{
        font-size: 1.065rem;
        text-align: center;
    }
    .record_head span{
        position: absolute;
        left:1.44rem;
    }
    .record_detail{
        width:21.065rem;
        height:6.25rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        margin:1.15rem auto 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .record_detail>div{
        flex-grow:1 ;
    }
    .record_detail p{
        text-align: center;
        font-size: 0.815rem;
        margin-bottom: 0.905rem;
    }
    .record_detail p:nth-of-type(2){
        font-size: 1rem;
    }


</style>
