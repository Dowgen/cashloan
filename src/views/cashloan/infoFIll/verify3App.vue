<template>
  <div>
    <hb-head headfont="实名认证"></hb-head>
    <div class="body">
      <div class="infoFill" style="height: 87.6vw;">
        <div class="step" style="height: 25%;">
          <img src="./assets/step3.png">
          <div>
            <span>实名认证</span>
            <span>手机运营商</span>
            <span>完善资料</span>
          </div>
        </div>
        <div class="inputer3">
          <input placeholder="邮箱"/>
        </div>
        <div class="inputer3">
          <input placeholder="学历" v-model="eduVal" readonly="readonly"/>
          <div class="sel">
          <popup-picker :data="eduList" :columns="1" v-model="eduVal" ref="eduPicker" ></popup-picker>
          </div>
        </div>
        <div class="inputer3">
          <input placeholder="婚姻状况" v-model="mariVal" readonly="readonly"/>
          <div class="sel">
          <popup-picker :data="mariList" :columns="1" v-model="mariVal" ref="mariPicker" ></popup-picker>
          </div>
        </div>
        <div class="inputer3">
          <input placeholder="紧急联系人"/>
        </div>
        <div class="inputer3">
         <input placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
         <div class="sel">
         <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
         </div>
       </div>
      </div>
      <router-link to='/judging'>
        <x-button type="primary" class="btn3">提交认证</x-button>
      </router-link> 
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Divider, PopupPicker, XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,  PopupPicker, XButton
  },
  data () {
    return {
      eduVal: [],
      eduList: Lib.M.eduList,
      mariVal:[],
      mariList:Lib.M.mariList,
      cityVal: [],
      cityList: Lib.M.cityList
    }
  },
  methods: {

  }
}
</script>

<style>
  .inputer3{
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84.5334vw;
    margin: 0 auto;
    height: 5.5vh;
    border-bottom: solid 1px #e6e6e6;
    font-size: 4vw;
    color: #c6c7cc;
    margin-top: 1vh;
  }
  .inputer3>div{
    color: #1abc9c;
    font-size: 3.2vw;
  }
  .inputer3>input{
    outline: none;
    border: none;
    padding-left: 2vw;
    padding-top: 1vh;
    height: 5.5vh;
    font-size: 3.2vw;
  }
  .btn3{
    margin-top: 4vh;
  }
  .sel{
    background: url('./assets/arrow_down.png') no-repeat center center;
    background-size: 100% 100%;
    width: 4vw;
    height: 2vw;
    overflow: hidden;
    position: absolute;
    right: 1vw;
  }
</style>
