<template>
  <div>
    <div>
      <div class="title">信用认证</div>
      <div class="warning">为了顺利完成认证，请确保信息的真实性</div>
      <div class="grey-strip"></div>
      <div class="step-wrapper">
        <router-link to='/vName'>
          <div class="step">
            <img src="./assets/id_certification.png">
            <div>
              <span>实名认证</span>
              <i>未认证</i>
              <img src="./assets/arrow-right.png">
            </div>
          </div>
        </router-link> 
        <router-link to='/vPersonalInfo'>
          <div class="step">
            <img src="./assets/person_information.png">
            <div>
              <span>完善信息</span>
              <i>未认证</i>
              <img src="./assets/arrow-right.png">
            </div>
          </div>
        </router-link> 
        <router-link to='/vPersonalInfo'>
          <div class="step">
            <img src="./assets/zhima.png">
            <div>
              <span>芝麻信用</span>
              <i>未认证</i>
              <img src="./assets/arrow-right.png">
            </div>
          </div>
        </router-link> 
        <router-link to='/vPhoneOperator'>
          <div class="step">
            <img src="./assets/phone_operator.png">
            <div>
              <span>手机运营商</span>
              <i>未认证</i>
              <img src="./assets/arrow-right.png">
            </div>
          </div>
        </router-link> 
      </div>

    </div>
    <main-nav></main-nav>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'

import MainNav from 'components/mainNav'

export default {
  name: 'add',	
  components: {
    MainNav,  XButton
  },
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>
<style>
  .weui-btn{
    width: 21.44rem !important;
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
    background: #1abc9c;
    color: white;
  }
  .warning{
    background: #fff3ca;
    color: #f66464;
    height:2rem;
    line-height: 2rem;
    text-align: center;
  }
  .grey-strip{
    background: #f2f2f2;
    height: 2.13rem;
  }
  .step-wrapper{
    background: white;
    height: 20rem;
    display: flex;
    flex-direction: column;
  }
  .step{
    flex:1;
    height: 5rem;
    display: flex;
    align-items: center;
    position: relative;
  }
  .step>img{
    width: 1.845rem;
    height: 1.845rem;
    margin-left: 1.47rem;
    margin-right: 0.94rem;
  }
  .step>div{
    height: 100%;
    width: 100%;
    margin-right: .4rem;
    padding-left: 0.625rem;
    padding-right: 1rem;
    right: 1.095rem;
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    align-items: center;
  }
  .step>div>span{
    font-size: 1rem;
    color: black;
    flex:5;
  }
  .step>div>i{
    margin-right: 0.65rem;
  }
  .step>div>img{
    width: 0.44rem;
    height: 0.78rem;
  }
  .btn{
    margin-top: 3.065rem;
  }
</style>
