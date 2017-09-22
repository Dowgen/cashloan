<template>
  <div>
    <hb-head headfont="个人信息"></hb-head>
    <div class="infoFill">
      <div class="inputer">
        <input placeholder="工作类型" v-model="workType" readonly="readonly"/>
        <div class="sel">
          <popup-picker :data="workTypeList" :columns="1" v-model="workType" ref="eduPicker" ></popup-picker>
        </div>
      </div>
      <div class="inputer">
        <input placeholder="紧急联系人"/>
      </div>
      <div class="inputer">
        <input placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
        <div class="sel">
          <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
        </div>
      </div>
      <div class="inputer inputer-street">
        <input type="text" />
        <p>请填写具体街道门牌号</p>
      </div>
      <div class="inputer">
        <input placeholder="婚姻状况" v-model="mariVal" readonly="readonly"/>
        <div class="sel">
          <popup-picker :data="mariList" :columns="1" v-model="mariVal" ref="mariPicker" ></popup-picker>
        </div>
      </div>
    </div>
    <div class="marriged-extend" v-show="mariVal!=''">
      <div>
        <p class="title">紧急联系人1({{emrContact1}})</p>
        <div class="inputer">
          <input type="text" placeholder="TA的姓名">
        </div>
        <div class="inputer">
          <input type="number" placeholder="TA的手机号码">
        </div>
      </div>
      <div>
        <p class="title">紧急联系人2({{emrContact2}})</p>
        <div class="inputer">
          <input type="text" placeholder="TA的姓名">
        </div>
        <div class="inputer">
          <input type="number" placeholder="TA的手机号码">
        </div>
      </div>
    </div>
    <router-link to='/judging'>
      <x-button type="primary" class="btn3">提交</x-button>
    </router-link> 
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
      workType: [],
      workTypeList: Lib.M.workTypeList,
      mariVal: [],
      mariList:Lib.M.mariList,
      cityVal: [],
      cityList: Lib.M.cityList,
      emrContact1:'',
      emrContact2:''
    }
  },
  watch:{
    mariVal:function(){
      if(this.mariVal[0] == '已婚'){
        this.emrContact1 = '配偶'
        this.emrContact2 = '父母/朋友'
      }else{
        this.emrContact1 = '父母'
        this.emrContact2 = '朋友/同事'
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .infoFill{
    height: 15rem;
    background: white;
    margin-top: 1rem;
  }
  .inputer{
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 21.065rem;
    height: 2.75rem;
    border-bottom: solid 1px #e6e6e6;
    font-size: 0.815rem;
    color: #c6c7cc;
  }
  .inputer>div{
    color: #1abc9c;
  }
  .inputer>input{
    outline: none;
    border: none;
    font-size: 0.94rem;
    padding-left: 0.5rem;
  }
  .sel{
    background: url('./assets/arrow_down.png') no-repeat center center;
    background-size: 0.69rem 0.375rem;
    width: 2rem;
    position:absolute;
    top:0;
    right:1rem;
    bottom:0;
    overflow: hidden;
  }
  .inputer-street{
    height: 3.5rem;
    font-size: 0.815rem;
    color: #737373;
  }
  .inputer-street>input{
    position: absolute;
    bottom: .5rem;
  }
  .inputer-street>p{
    position: absolute;
    right: 1rem;
    top: .7rem;
  }
  .inputer:last-child{
    border:none;
  }
  .btn3{
    margin-top: 2.315rem;
  }
  .marriged-extend{
    margin-top: 0.2rem;
  }
  .marriged-extend>div{
    height: 6.935rem;
    margin-top: 1.345rem;
  }
  .marriged-extend>div>.title{
    font-size: 0.815rem;
    padding-left: 1.345rem;
    color: #737373;
    margin-bottom: 0.5rem;
  }
  .marriged-extend>div>.inputer{
    background: white;
    width: 100%;
    padding-left: 1rem;
  }
</style>
