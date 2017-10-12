<template>
  <div>
    <hb-head headfont="手机运营商"></hb-head>
    <div class="infoFill">
      <div class="inputer">
        <input placeholder="请输入手机号" v-model="phoneNum"/>
        <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
      </div>
      <div class="inputer">
        <input placeholder="请输入运营商服务密码" v-model="pwd"/>
        <div class="fgt-password" @click="isShow=true">忘记密码？</div>
      </div>
      <div class="inputer">
        <input :placeholder="veriField" v-model="verifyCode"/>
        <div class="btn-getCode">
          <div v-show="start" >
            <countdown v-model="time1" :start="start" @on-finish="finish1"></countdown><span style="padding-left:0.15rem">s</span>
          </div>
          <div v-show="!start" @click="begin1">{{countDownText}}</div>
        </div>
      </div>
    </div>
    <x-button type="primary" class="btn2" @click.native="login">确定</x-button>
    <div class="agreement">
      <img src="./assets/agreeProto.png">
      已阅读及同意<span style="color:#1abc9c" @click="$router.push({path:'/privacyAgreement'})">《运营商授权协议》</span>
    </div>
    <div class="tip">
      <p style="margin-bottom:1.065rem">温馨提示:</p>
      <p>1.请授权本人实名认证的手机号。（使用满3个月）</p>
      <p>2.根据运营商网络情况不同，授权服务需要1-3分钟时间才能完成，请耐心等待。</p>
      <p>3.忘记服务密码，可以联系运营商客服或登录运营商官网进行查询或修改。</p>
      <p>4.授权不成功可拨打客服电话<span>0571-28121621</span></p>
    </div>
    <div class="fgt-pswd-alert" v-show="isShow">
      <div>
        <p>忘记服务密码</p>
        <div class="three-tip">
        <p>移动用户：您可发短信“MMCZ”至10086重新设置服务密码，或致电10086。</p>
        <p>电信用户：您可发送短信“MMCZ”至10001重置服务密码 ，或致电10001。</p>
        <p>联通用户：发送短信“MMCZ”至10010重置服务密码，或致电10000。</p>
        </div>
        <p @click="isShow=false">我知道了</p>
      </div>
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Divider, XButton, Countdown } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,  XButton, Countdown
  },
  data () {
    return {
      userInfo:{},
      isShow:false,
      phoneNum:'',
      phoneType: '移动',
      pwd:'',    //运营商服务密码
      verifyCode: '', //验证码
      veriField: '请输入校验码', //验证码placeholder
      isSend:false,   //是否已经发送验证码
      reqId:'',  //第一次【免费获取】得到的reqId
      /* countdown所需参数 */
      time1: 60,
      start: false,
      countDownText:'免费获取'
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
  },
  methods: {
    /* 点击 免费获取 */
    begin1(){
      if(this.phoneNum==''||this.pwd==''){
        this.$vux.toast.text('请输入手机号与服务密码！', 'middle')
      }else{
        if(Lib.M.isPhoneWrong(this.phoneNum)){
          this.$vux.toast.text('请检查手机号格式', 'middle')
        }else{
          if(this.reqId==''){
            this.firstLogin();
          }else{
            if(this.phoneType=='移动'){
              this.resent10086();
            }else{
              this.resent10010();
            }
          }
          this.start = true;
        }
      }
    },
    /* 倒计时结束时触发 */
    finish1 (index) {
      this.start = false
      this.time1 = 60
      this.countDownText = '重新发送'
    },
    /* 登录总线 */
    login(){
      if(!this.isSend){
        this.$vux.toast.text('请先发送验证码', 'middle')
      }else{
        if(this.phoneType=='移动'){
          this.secondLogin();
        }else{
          this.verify10010();
        }
      }
    },
    /* 第一次登录（只是获取reqId,同时发送验证码) */
    firstLogin(){
      var self = this;

      this.$vux.loading.show({
        text: '请稍等'
      });

      Lib.M.ajax({
        url : 'risk-manage/whiteknight/login',
        headers:{
          'Content-Type':'application/json'
        },
        data:{
          'certNo': self.userInfo.idInfo.idCardNumber,
          'name': self.userInfo.idInfo.name,
          /*'certNo':'500230199701185588',
          'name':'秦余',*/
          'mobile': self.phoneNum,
          'reqId':'',
          'pwd': self.pwd
        },
        success:function (data){
          self.$vux.loading.hide();
          if(data.resultCode == 'CCOM3069'){
            self.$vux.toast.text('验证码发送成功！', 'middle')
            self.reqId = data.data.reqId;
            self.isSend = true; //已经发送验证码，更改标志
            self.start = true;  // 发送验证码成功，开始倒计时
          }else if(data.resultCode == 'CCOM3014'){
            self.isSend = true; //已经发送验证码，更改标志
            self.reqId = data.data.reqId;
            self.$vux.toast.text('二次鉴权码发送成功!','middle')
            self.verifyCode = ''    //重置验证码
            self.veriField = '请输入二次鉴权码' //更改验证码placeholder
            self.phoneType = 'whatever'  //修改手机号运营商归属
          }else{
            self.$vux.alert.show({title: '温馨提示',content: data.resultDesc})
          }
        }
      });
    },
    /* 校验短信验证码 */
    secondLogin(){
      var self = this;
      this.$vux.loading.show({
        text: '请稍等'
      });
      Lib.M.ajax({
        url : 'risk-manage/whiteknight/login',
        headers:{
          'Content-Type':'application/json'
        },
        data:{
          'certNo': self.userInfo.idInfo.idCardNumber,
          'name': self.userInfo.idInfo.name,
          'mobile': self.phoneNum,
          'reqId': self.reqId,
          'pwd': self.pwd,
          'smsCode': self.verifyCode
        },
        success:function (data){
          self.$vux.loading.hide();
          self.reqId = data.data.reqId;
          if(data.resultCode=='CCOM1000'){
            self.$vux.toast.text('校验成功!','middle')
            setTimeout("window.location.href = '/views/cashloan/infoFill.html'",800);
          }else if(data.resultCode=='CCOM3014'){
            self.$vux.toast.text('二次鉴权码发送成功!','middle')
            self.verifyCode = ''    //重置验证码
            self.veriField = '请输入二次鉴权码' //更改验证码placeholder
            self.phoneType = 'whatever'  //修改手机号运营商归属
          }else{
            self.$vux.alert.show({title: '温馨提示',content: data.resultDesc})
          }
        }
      });
    },
    /* 校验二次鉴权码(只有联通和电信需要) */
    verify10010(){
      var self = this;
      this.$vux.loading.show({
        text: '请稍等'
      });
      Lib.M.ajax({
        url : 'risk-manage/whiteknight/checkcode',
        headers:{
          'Content-Type':'application/json'
        },
        data:{
          'reqId': self.reqId,
          'smsCode': self.verifyCode
        },
        success:function (data){
          self.$vux.loading.hide();
          if(data.resultCode=='CCOM1000'){
            self.$vux.toast.text('校验二次鉴权码成功!','middle')
            setTimeout("window.location.href = '/views/cashloan/infoFill.html'",800);
          }else{
            self.$vux.alert.show({title: '温馨提示',content: data.resultDesc})
          }
        }
      });
    },
    /* 重发登录短信验证码 */
    resent10086(){
      var self = this;
      this.$vux.loading.show({
        text: '请稍等'
      });
      Lib.M.ajax({
        type:'get',
        url : 'risk-manage/whiteknight/resentcode/'+ self.reqId,
        success:function (data){
          self.$vux.loading.hide();
          if(data.resultCode=='CCOM1000'){
            self.$vux.toast.text('验证码发送成功!','middle')
          }else{
            self.$vux.alert.show({title: '温馨提示',content: data.resultDesc})
          }
        }
      });
    },
    /* 重发二次鉴权码 */
    resent10010(){
      var self = this;
      this.$vux.loading.show({
        text: '请稍等'
      });
      Lib.M.ajax({
        type:'get',
        url : 'risk-manage/whiteknight/resendauthsms/'+ self.reqId,
        success:function (data){
          self.$vux.loading.hide();
          if(data.resultCode=='CCOM1000'){
            self.$vux.toast.text('二次鉴权码发送成功!','middle')
          }else{
            self.$vux.alert.show({title: '温馨提示',content: data.resultDesc})
          }
        }
      });
    }
  }
}
</script>

<style scoped>
  .infoFill{
    height: 12.1rem;
    background: white;
    margin-top: 1rem;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
  .inputer{
    box-sizing: border-box;
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 21.065rem;
    height: 3.445rem;
    border-bottom: solid 1px #e6e6e6;
    font-size: 0.815rem;
    color: #c6c7cc;
    padding-top: 1rem;
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
  .inputer .btn-getCode{
    border: solid 1px #1abc9c;
    border-radius: 5px;
    width: 4.065rem;
    height: 1.65rem;
    text-align: center;
    line-height: 1.65rem;
  }
  .agreement{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #919499;
    font-size: 0.75rem;
    margin-top: 0.6rem;
  }
  .agreement>img{
    width: 0.6rem;
    height:  0.6rem;
    margin-right: 0.5rem;
  }
  .btn2{
    margin-top: 2.78rem;
  }
  .tip{
    margin-top: 2.845rem;
    padding: 0 1rem;
    color: #a9a9a9;
    font-size: 0.69rem;
    text-align: left;
  }
  .tip>p:not(:first-child){
    margin-bottom: 0.5rem;
    color: #b0b0b0;
  }
  .tip span{
    color: #1abc9c;
  }
  .fgt-pswd-alert{
    width:100%;
    background:rgba(0,0,0,0.58);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 888;
  }
  .fgt-pswd-alert>div{
    width:21.25rem;
    height:18.69rem;
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
  .fgt-pswd-alert>div>p{
    height: 2.75rem;
    font-size: 0.94rem;
    color: #888;
    line-height: 2.75rem;
  }
  .three-tip{
    height: 12.15rem;
    padding:0 1.695rem;
    padding-top: 1rem;
    color: #555;
    font-size: 0.815rem;
    text-align: left;
    flex-direction: column;
    border-top: solid 1px rgba(240,240,240,1);
    border-bottom: solid 1px rgba(240,240,240,1);
  }
  .three-tip>p{
    margin-bottom: 1.5rem;
  }
  .fgt-pswd-alert>div>p:last-child{
    color: #1abc9c;
    font-size: 1rem;
  }
</style>
