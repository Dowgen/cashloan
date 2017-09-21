<template>
  <div>
    <hb-head-green headfont="实名认证"></hb-head-green>
    <div class="getphoto-wrapper">
      <div class="front">
        <span>身份证(人像面)</span>

        <img src="./assets/id-front.png">
      </div>
      <div class="back">
        <span>身份证(国徽面)</span>
        <img src="./assets/id-back.png">
      </div>
    </div>
    <div class="info-get-wrapper">
      <div class="info-get">
        <span>姓名</span>
        <span>张俊瑞</span>
      </div>
      <div class="info-get">
        <span>身份证号</span>
        <span>330326198905036730</span>
      </div>
    </div>
    <p class="warn">身份证信息需提供本人真实信息</p>
    <x-button type="primary" class="btn1">确定</x-button>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Divider, XButton } from 'vux'

import HbHeadGreen from 'components/HbHeadGreen'

export default {
  name: 'add',	
  components: {
    HbHeadGreen, XButton
  },
  data () {
    return {

    }
  },
  methods: {


  }
}
</script>

<style scoped>
  .getphoto-wrapper{
    background: white;
    height: 15rem;
    width: 100%;
    margin-top: 1.03rem;
    color: #1a1a1a;
  }
  .getphoto-wrapper>div{
    height: 7.5rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .getphoto-wrapper>div>img{
    width: 7.815rem;
    height: 4.78rem;
  }
  .getphoto-wrapper>div:first-child{
    border-bottom: solid 1px #e6e6e6;
  }
  .info-get-wrapper{
    width:100%;
    height: 6.845rem;
    background: white;
    margin-top: 1rem;
    color: #1a1a1a;
  }
  .info-get{
    height: 3.422rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.6rem;
    padding: 0 1rem;
  }
  .info-get:first-child{
    border-bottom: solid 1px #e6e6e6;
  }
  .info-get>span:last-child{
    color: black;
  }
  .warn{
    width: 100%;
    text-align: center;
    color: #ff8e67;
    font-size: 0.75rem;
    margin-top: 2.22rem;
  }
  .btn1{
    margin-top: 0.6rem;
  }
</style>
