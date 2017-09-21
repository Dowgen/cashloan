<template>
  <div>
      <div class="about_loan">
          <div class="head">
              <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back_white.png" alt=""></span>
              <p>借单详情</p>
          </div>
          <div v-show="repayStatus==1 || repayStatus==2">
              <p>借款周期</p>
              <p style="font-size: 2.515rem">14<span style="font-size: 1.125rem">天</span></p>
              <p>下款后请及时确认还款时间避免逾期风险</p>
          </div>
          <div v-show="repayStatus==3">
              <p>距离还款日</p>
              <p style="font-size: 2.515rem">12<span style="font-size: 1.125rem">天</span></p>
              <p>请确保及时还款以保持您的良好信用记录</p>
          </div>
          <div v-show="repayStatus==4">
              <p>逾期天数</p>
              <p style="font-size: 2.515rem">3<span style="font-size: 1.125rem">天</span></p>
              <p>请确保及时还款以保持您的良好信用记录</p>
          </div>
      </div>
      <div class="loan_detail">
          <ul v-show="sShow">
              <li>
                  <span>借款日</span>
                  <span>2017/08/23</span>
              </li>
              <li>
                  <span>还款日</span>
                  <span style="color: rgba(255,142,103,1)">2017/09/06 <span class="question" v-show="repayStatus==1 || repayStatus==2" @click="isShowOf()"></span></span>
              </li>
              <li>
                  <span>借款金额</span>
                  <span style="margin-left: 5.75rem;">1000元</span>
              </li>
              <li>
                  <span>借款费用</span>
                  <span style="margin-left: 5.75rem;">31.50元</span>
              </li>
              <li>
                  <span>应还金额</span>
                  <span style="margin-left: 5.75rem;">1031.50元</span>
              </li>
          </ul>
          <div class="instruction" v-show="repayStatus == 1">借款失败</div>
          <div class="instruction" v-show="repayStatus == 2">下款成功</div>
          <div class="instruction" v-show="repayStatus !== 1 && repayStatus !== 2">立即还款</div>
      </div>
    
      <div class="aboutPayTime" v-show="isShow">
          <div>
              <p>关于还款日期</p>
              <p>还款日期是取决于下款时间的，如下款时间在借款日之后，那么即从下款时间开始计算还款时间。</p>
              <p>如：您是<span>2017年8月23日</span>提交借款申请，借款周期是14天，但是我们给您下款时间在<span>2017年8月25日</span>，那么还款日期是<span>2017年09月08日哦。</span></p>
              <p @click="close()">我知道了</p>
          </div>
      </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';


export default {
  name: 'add',	
  components: {

       },
  data () {
    return {
        repayStatus:1,
        isShow:false,
        sShow:true
    }
  },
  methods: {
      isShowOf(){
          this.isShow = true;
          this.sShow = false;


      },
      close(){
          this.isShow = false;
          this.sShow = true;
      }
  }
}
</script>

<style>
    em{
        font-style: normal
    }
    body{
        position: relative;
    }
    .about_loan{
        width: 100%;
        height: 14.405rem;
        background: url("./assets/loan_detail_head_bg.png");
        overflow: hidden;
    }
    .head{
        width: 100%;
        height: 1.25rem;
        color: #fff;
        position: relative;
        margin-top: 2.265rem;
    }
    .head p{
        font-size:1.065rem;
        text-align: center;
    }
    .head span{
        font-size:1.8rem;
        position: absolute;
        left: 1.44rem;
        line-height: 1.06rem;
    }
    .about_loan div:not(:first-child){
        text-align: center;
        color: rgba(242,242,242,1);
        font-size:0.875rem;
        margin-top: 3.22rem;
        margin-bottom: 1.125rem;
    }
    .loan_detail{
        width:21.44rem;
        height:23.125rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        font-size: 1rem;
        position: absolute;
        left: 50%;
        top: 12.94rem;
        margin-left: -10.72rem;
    }
    .loan_detail li{
        margin:2.315rem auto 0;
    }
    .loan_detail span:nth-of-type(1){
        margin-left: 1.28rem;
    }
    .loan_detail span:nth-of-type(2){
        margin-left: 6.905rem;
        position: relative;
    }
    .instruction{
        width: 100%;
        height:2.75rem;
        background:rgba(26,188,156,1);
        opacity:0.66;
        border-radius: 0.315rem ;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        line-height: 2.75rem;
        font-size:1.125rem;
        color:#fff;
    }
    .question{
        display: inline-block;
        width: 1.095rem;
        height: 1.095rem;
        background: url("./assets/question.png");
        background-size: cover;
        position: absolute;
        left: 5rem;
        top: 0.15rem;
    }
    .aboutPayTime{
        width:100%;
        height:41.69rem;
        background:rgba(0,0,0,1);
        opacity:0.58;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 888;
    }
    .aboutPayTime>div{
        width:21.25rem;
        height:16.22rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin:auto;
        text-align: center;
    }
    .aboutPayTime>div p:nth-of-type(1){
        font-size: 0.94rem;
        color: rgba(136,136,136,1);
        margin-top: 1rem;
    }
    .aboutPayTime>div p:nth-of-type(2),.aboutPayTime>div p:nth-of-type(3){
        text-align: left;
        font-size: 0.815rem;
        color: rgba(85,85,85,1);
        margin-left: 1.345rem;
        margin-right: 1.345rem;

    }
    .aboutPayTime>div p:nth-of-type(2){
        margin:2rem 1.345rem 1rem 1.345rem;
    }
    .aboutPayTime>div p:nth-of-type(3) span{
        color: rgba(26,188,156,1);
    }
    .aboutPayTime>div p:nth-of-type(4){
        font-size: 1rem;
        color: rgba(26,188,156,1);
        margin:1.6rem auto 1rem;
    }
</style>
