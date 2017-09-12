<template>
  <div>
    <hb-head headfont="实名认证"></hb-head>
    <div class="body">
      <div class="infoFill">
        <div class="step">
          <img src="./assets/step1.png">
          <div>
            <span>实名认证</span>
            <span>手机运营商</span>
            <span>完善资料</span>
          </div>
        </div>
        <div class="inputer">
          <input placeholder="身份证号"/>
        </div>
        <div class="inputer" style="margin-top:3.0667vw">
          <input placeholder="真实姓名"/>
        </div>
      </div>
      <router-link to='/verify2'>
        <x-button type="primary" class="btn">下一步</x-button>
      </router-link> 
    </div>
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

    }
  },
  methods: {


  }
}
</script>

<style>
  .body{
    background: #f2f2f2;
    height: calc(100vh - 51px);
    overflow: hidden;
  }
  .infoFill{
    width: 91.4667vw;
    height: 53.3334vw;
    background: white;
    border-radius: 5px;
    margin:0 auto;
    margin-top: 4.2667vw;
  }
  .infoFill .step{
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:0 auto;
  }
  .step img{
    width: 60.4vw;
    height: 4.2667vw;
  }
  .step>div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 3.3334vw;
  }
  .step>div>span{
    /* flex:1; */
  }
  .inputer{
    position:relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 84.5334vw;
    margin: 0 auto;
    height: 8.9334vw;
    border-bottom: solid 1px #e6e6e6;
  }
  .inputer>input{
    outline: none;
    border: none;
    padding-left: 1vw;
  }
  .btn{
    margin-top: 12.667vw;
  }
</style>
