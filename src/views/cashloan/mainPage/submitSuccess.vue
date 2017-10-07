<template>
  <div class="wrapper" style="background-image: url('../../static/img/bgGreen.png');">
    <div class="title">申请成功</div>
    <div class="content">
      <div class="tip">
        <img src="./assets/delivered.png">
        <p>恭喜您,提交成功!</p>
        <p>资料审核大概需要1~2工作日，<br>且审核结果可能与您预期有出入，请耐心等待</p>
      </div>
      <div class="detail-wrapper">
        <p class="name">小额现金贷</p>
        <div class="middle">
          <div class="detail">
            <p>1000<span>元</span></p>
            <p>贷款金额</p>
          </div>
          <div class="detail">
            <p>14<span>天</span></p>
            <p>借款周期</p>
          </div>
        </div>
        <p class="gotoDetail">查看详情</p>
      </div>
      <div class="btn">返回首页</div>
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';
import { XButton } from 'vux'
export default {
  name: 'add',	
  components: {
    XButton
  },
  data () {
    return {
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = 0;
  },
  methods: {

  }
}
</script>

<style scoped>
  body{
    background-color: white !important;
  }
  .wrapper{
    height: 42rem;
    background-image: url('./assets/bgGreen.png');
  }
  .title{
    height: 4rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    font-size: 1.065rem;
    font-weight: 500;
    color: white;
  }
  .content{
    padding-top: 3rem;
  }
  .tip{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 11.35rem;
    text-align: center;
  }
  .tip>img{
    width: 5.155rem;
    height: 5.155rem;
  }
  .tip>p:nth-of-type(1){
    font-size: 1.125rem;
    color: #f2f2f2;
  }
  .tip>p:nth-of-type(2){
    font-size: 0.815rem;
    color: #c5e7e0;
  }
  .detail-wrapper{
    box-sizing: border-box;;
    height: 10.78rem;
    background: white;
    padding-top: 1.28rem;
    text-align: center;
    width: 20.625rem;
    margin:0 auto;
    margin-top: 2.22rem;
    border-radius: 10px;
  }
  .detail-wrapper .name{
    color: #333;
    font-size: 1rem;
    margin-bottom: 1.15rem;
  }
  .middle{
    margin-bottom: 1.075rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
  }
  .detail>p:nth-child(1){
    font-size: 1.19rem;
    color: #212121;
    margin-bottom: 0.3rem;
  }
  .detail>p:nth-child(2){
    color: #b0b0b0;
    font-size: 0.75rem;
  }
  .gotoDetail{
    border-top: solid 1px #e6e6e6;
    height: 2.8rem;
    line-height: 2.8rem;
    color: #333;
    font-size: 1rem; 
  }
  .btn{
    width: 20.625rem;
    background: white;
    height: 2.75rem;
    line-height: 2.75rem;
    margin:0 auto;
    border-radius: 10px;
    text-align: center;
    margin-top: 1.065rem;
    font-size: 1rem;
    color: #333;
  }
</style>
