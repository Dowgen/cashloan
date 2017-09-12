<template>
  <div>
    <hb-head headfont="实名认证"></hb-head>
    <div class="body">
      <div class="infoFill" style="height: 85.6vw;">
        <div class="step" style="height: 30%;">
          <img src="./assets/step3.png">
          <div>
            <span>实名认证</span>
            <span>手机运营商</span>
            <span>完善资料</span>
          </div>
        </div>
        <div class="inputer">
          <input placeholder="邮箱"/>
        </div>
        <div class="inputer">
          <input placeholder="学历" v-model="eduVal" readonly="readonly"/>
          <div class="sel">
          <popup-picker :data="eduList" :columns="1" v-model="eduVal" ref="eduPicker" ></popup-picker>
          </div>
        </div>
        <div class="inputer">
          <input placeholder="婚姻状况" v-model="mariVal" readonly="readonly"/>
          <div class="sel">
          <popup-picker :data="mariList" :columns="1" v-model="mariVal" ref="mariPicker" ></popup-picker>
          </div>
        </div>
        <div class="inputer">
          <input placeholder="紧急联系人"/>
        </div>
        <div class="inputer">
          <input placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
          <div class="sel">
          <popup-picker :data="cityList" :columns="2" v-model="cityVal" ref="cityPicker" ></popup-picker>
          </div>
        </div>
      </div>
      <router-link to='/login2'>
        <x-button type="primary" class="btn">下一步</x-button>
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
  .inputer{
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 84.5334vw;
    margin: 0 auto;
    height: 8.4vw;
    border-bottom: solid 1px #e6e6e6;
    font-size: 4vw;
    color: #c6c7cc;
    margin-top: 1.8vw;
  }
  .inputer>div{
    color: #1abc9c;
    font-size: 3.2vw;
  }
  .inputer .btn-getCode{
    border: solid 1px #1abc9c;
    border-radius: 5px;
    width: 17.3334vw;
    height: 7.0667vw;
    text-align: center;
    line-height: 7vw;
    margin-bottom: 2vw;
  }
  .btn{
    margin-top: 12.667vw;
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
