<template>
  <div>
    <div style="background:white;height:37.69rem">
      <div class="title">花花贷</div>
      
      <div class="banner">
        
      </div>
      <div class="choose" style="margin-top:1rem">
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
      <div class="choose" style="margin-top:1rem">
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
      <x-button type="primary" class="btn" @click.native="jump">立即申请</x-button>
    </div>
    <main-nav-green></main-nav-green>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton, Confirm } from 'vux'

import MainNavGreen from 'components/mainNavGreen'

export default {
  name: 'add',	
  components: {
    MainNavGreen,  XButton, Confirm
  },
  data () {
    return {
      show: false,
      loanAmount:500,
      term: 7,
      styleActive:{
        'border-color': '#1abc9c',
        'color': '#1abc9c'
      }
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = '3.065rem';
  },
  methods: {
    setLoanAmount(amount){
      this.loanAmount = amount;
    },
    setTerm(term){
      this.term = term;
    },
    face_getToken(){
      var self = this;
      this.$vux.loading.show({
          text: '请稍等'
      });

      Lib.M.ajax({
        url : '/risk-manage/faceid/getToken',
        params:{
          return_url: 'http://www.browsersync.cn/docs/command-line/',
          notify_url:'https://finbridge.cn/risk-manage/faceid/notify',
          idcard_mode:0,
          idcard_name:'徐文斌',
          idcard_number: '331003199205170810'
        },
        success:function (data){
          self.$vux.loading.hide();
          console.log('getToken:'+data);
          let faceReturn = {
            token : data.data.token,
            biz_id : data.data.biz_id
          }
          localStorage.faceReturn = JSON.stringify(faceReturn);
          /* 获取token后跳转第三方 */
          window.location.href = 'https://api.megvii.com/faceid/lite/do?token='+ data.data.token;
        },
        error:function(err){
          self.$vux.loading.hide();
        }
      });
    },
    jump(){
      var self = this
      let a = 3
      if(a === 1){
        this.$vux.confirm.show({
          content: '亲,请先绑定银行卡再借款!',
          onConfirm () {
            self.$router.push('./bindBankCard')
          }
        })
      }else if(a === 2){
        this.$vux.confirm.show({
          content: '亲,您的基础信息尚未完善，请先完善资料!',
          onConfirm () {
            window.location.href = 'infoFill.html' 
          }
        })
      }else{
        this.face_getToken();
      }
    }
  }
}
</script>

<style>
  .weui-btn{
    width: 21.44rem !important;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
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
  }
  .banner{
    width: 100%;
    height: 10.815rem;
    background: #1abc9c;
  }
  .choose{
    box-sizing: border-box;
    padding: 0px 7px;
    width: 21.43rem;
    margin:0 auto;
    height: 3.815rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
  }
  .choose>span{
    color: #4d4d4d;
    font-size: 0.94rem;
  }
  .choose>div{
    display: flex;
    font-size: 0.875rem;
  }
  .choose-btn{
    margin-left: 0.875rem;
    position: relative;
    width: 3.75rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border: solid 1px #c2c2c2 ;
    border-radius: 3px;
  }
  .choose-btn>img{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.565rem;
    height: 0.53rem;
  }
  .table{
    box-sizing: border-box;
    width: 21.43rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2.065rem;
    padding: 0 1rem;
  }
  .table>span{
    text-align: center;
  }
  .thead{
    font-size: 0.88rem;
    color: #808080
  }
  .tbody{
    font-size: 1.065rem;
    color: #39394A;
    margin-top: 1.065rem;
  }
  .btn{
    margin-top: 3.065rem;
  }
</style>
