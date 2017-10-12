<template>
  <div>
    <div style="background:white;height:37.69rem">
      <div class="title">现金斗士</div>
      
      <div class="banner">
        <img src="./assets/banner.png">
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
        <span>到期应还(元)</span>
      </div>
      <div class="table tbody">
        <span>{{userGetMoney}}</span>
        <span>{{repayDate}}</span>
        <span>{{interest}}</span>
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
      },
      authPassed: 0,
      cardBinded: false,
      userInfo:{}
    }
  },
  computed:{
    userGetMoney(){
       return this.loanAmount - this.loanAmount*this.term*0.01
    },
    interest(){
       return this.loanAmount*this.term*0.01
    },
    repayDate(){
      return new Date(new Date().getTime() + this.term*24*60*60*1000).toLocaleDateString();
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = '3.065rem';
    this.userInfo = JSON.parse(localStorage.userInfo);
    if(document.referrer.indexOf('megvii.com')!= -1){
      this.face_getResult();
    } 
    /* 得到绑卡数据 */
    this.bankCardCheck();
    /* 得到认证通过标志 */
    this.getauthStatus();
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
          return_url: 'https://moneyboom.cn/views/cashloan/mainPage.html',
          notify_url:'https://finbridge.cn/risk-manage/faceid/notify',
          idcard_mode:0,
          idcard_name: self.userInfo.idInfo.name,
          idcard_number: self.userInfo.idInfo.idCardNumber
        },
        success:function (data){
          self.$vux.loading.hide();
          if(data.code == 200){
            let faceReturn = {
              token : data.data.token,
              biz_id : data.data.biz_id
            }
            localStorage.faceReturn = JSON.stringify(faceReturn);
            /* 获取token后跳转第三方 */
            window.location.href = 'https://api.megvii.com/faceid/lite/do?token='+ data.data.token;
          }else{
            self.$vux.toast.text(data.error,'middle');
          }
        }
      });
    },
    jump(){
      var self = this
      let a = 2;
      if(this.authPassed != 4){
        this.$vux.confirm.show({
          content: '亲,您的基础信息尚未完善，请先完善资料!',
          onConfirm () {
            window.location.href = '/views/cashloan/demo.html'
          }
        })
      }else if( this.cardBinded === false){
        this.$vux.confirm.show({
          content: '亲,请先绑定银行卡再借款!',
          onConfirm () {
            self.$router.push('./bindBankCard')
          }
        })
      }else{
        this.face_getToken();
      }
    },
    /* 检查认证是否全部通过 */
    getauthStatus(){
      var self = this;
      this.$vux.loading.show({
          text: '请稍等'
      });
      Lib.M.ajax({
        url : '/risk-manage/auth/authStatus',
        data:{
          mobile: self.userInfo.userInfo.phone,
          user_id: self.userInfo.userInfo.userId,
          certNo: self.userInfo.idInfo.idCardNumber || '',
          name: self.userInfo.idInfo.name || ''
        },
        success:function (res){
          let data = res.data;
          for(let i in data){
            if(data[i].code=='2') ++self.authPassed;
          }
          self.$vux.loading.hide();
        }
      });
    },
    /* 检查银行卡是否绑定 */
    bankCardCheck(){
      var self = this;
      Lib.M.ajax({
        url : '/pay/repayment/bankCardCheckList',
        data:{
          user_id: self.userInfo.userInfo.userId
        },
        success:function (res){
          console.log('length:'+res.data.length)
          if(res.data.length == 0){
            self.cardBinded = false
          }else{
            self.cardBinded = true
          }
        }
      });
    },
    /* 触发后台拿到face++认证 */
    face_getResult(){
      var self = this;

      Lib.M.ajax({
        url : '/risk-manage/faceid/getResult',
        params:{
          user_id: self.userInfo.userInfo.userId,
          biz_id: JSON.parse(localStorage.faceReturn).biz_id
        },
        success:function (data){
          console.log('getResult:'+data)
          self.$vux.toast.text('认证成功!')
          self.$router.push('./confirmRent')
        }
      });
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
  }
  .banner>img{
    width: 100%;
    height: 10.815rem;
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
    margin-top: 2.065rem;
    padding: 0 1rem;
  }
  .table>span{
    text-align: center;
    flex: 1;
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
