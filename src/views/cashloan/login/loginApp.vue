<template>
  <div class="wrapper">
  <!-- <hb-head headfont="注册"></hb-head> -->
    <div class="logo">
      <img src="./assets/logo.png">
      <p>欢迎使用现金斗士</p>
    </div>
    <div class="input">
      <img src="./assets/phone.png" class="img-icon">
      <input placeholder="请输入手机号" v-model="phoneNum" maxlength="11">
      <img src="./assets/delete.png" class="img-del" 
           v-show="phoneNum!=''" @click="phoneNum=''">
    </div>
    <div type="primary" class="btn" @click="phoneVerify">开始使用</div>
    <div class="pad-btm"></div>
    <div class="footer">
      <img src="./assets/footer.png">
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,  XButton
  },
  data () {
    return {
      phoneNum:'',
      token:''
    }
  },
  mounted(){
    /* 进入页面先获取token */
    this.getToken(); 

    /* 获取渠道信息 */
    let channel = Lib.M.GetQueryString('channel')
    if(channel!=null){
      localStorage.channel = channel
    }else{
      console.log('noChannel')
    }
  },
  methods: {
    getToken(){
      var self = this;
      Lib.M.ajax({
        url : '/uaa/oauth/token',
        headers: {
          Accept:'application/json',
          Authorization:'Basic anVoZV9jYXNobG9hbjpKdWhlMTIzNjc4IUAj'
        },
        params:{
          username:'juhe',
          password:'Juhe2017!@#',
          grant_type:'password',
          scope:'read write'
        },
        success:function(data){
          self.token = data.access_token;
          localStorage.token = data.access_token;
        },
        error:function(err){
          console.error(err);
        }
      });
    },
    /* 点击按钮，触发手机号验证事件 */
    phoneVerify(){
      if (!this.phoneNum || !this.phoneNum.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/)) {
          this.$vux.toast.text('手机号格式不正确', 'middle')
      } else {
        this.preRegist();
        /*this.$router.push({path:'/regist',query:{phoneNum:this.phoneNum}});*/
        /*Lib.M.sendVcode(13666604580)*/
      }
    },
    /* 验证是否是注册用户 */
    preRegist(){
      var self = this;

      Lib.M.ajax({
        type: 'get',
        url : 'cash-account/user/account/preRegist?phone='+ self.phoneNum,
        headers: {
          Authorization:'Bearer '+ self.token
        },
        success:function(data){
          /* 登陆成功,把phoneNum塞入vuex */
          self.$store.commit('changePhoneNum',self.phoneNum)

          if(data){ //注册用户跳转至登陆页
            self.$router.push('/login2');
          }else{  //未注册用户跳转至注册页
            self.$router.push('/regist');
            self.$store.commit('changeRegistType','regist')
          }      
        },
        error:function(err){
          console.error(err);
        }
      });
    }
  }
}
</script>

<style>
  input::-webkit-input-placeholder{text-align: center;} 
  .wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-image: url('./assets/bg1.png');
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center 65px; */
  }
  @media screen and (orientation: landscape) {
    body{
      padding-bottom: 0 !important;
    }
    .wrapper{
      position:relative;   
    }
  }
  .weui-btn{
    width: 20.315rem !important;
  }
  body{
    background: white !important;
  }
  .logo{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
  }
  .logo>img{
    width:5.6rem;
    height: 5.6rem;
  }
  .logo>p{
    color: #22A88A;
    font-size: 0.815rem;
    margin-top: 1.1rem;
  }
  .input{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18.35rem;
    margin: 0 auto;
    margin-top: 5.31rem;
    height: 2.565rem;
    border: solid 1px #e6e6e6;
    border-radius: 20px;
  }
  .img-icon{
    display: none;
    width: 0.75rem;
    height: 1.065rem;
    margin-left: .2rem;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
  .input>input{
    width: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    height: 2rem;
    line-height: 2rem;
    margin: 0 1rem;
    padding:0;
  }
  .btn{
    width: 18.35rem;
    height: 2.565rem;
    line-height: 2.565rem;
    text-align: center;
    background: #1abc9c;
    color: white;
    margin:0 auto;
    margin-top: 1.69rem;
    border-radius: 20px;
  }
  .pad-btm{
    height: 3rem;
    visibility: hidden;
  }
  .footer{
    position: absolute;
    bottom: 0;
  }
  .footer>img{
    width: 100%;
    height: 4.065rem;
  }
</style>
