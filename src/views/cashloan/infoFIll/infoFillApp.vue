<template>
  <div>
    <div>
      <div class="title">信用认证</div>
      <div class="warning">为了顺利完成认证，请确保信息的真实性</div>
      <div class="grey-strip"></div>
      <div class="step-wrapper" v-cloak>
        <div class="step">
          <img :src="realName=='已完成'?logoColorful[0]:logoColorless[0]">
          <div>
            <span>实名认证</span>
            <i :style="realName=='已完成'?fontBlack:''">{{realName}}</i>
            <img src="./assets/arrow-right.png" v-show="realName!='已完成'" @click="face_getToken">
          </div>
        </div>
        <div class="step" @click="doInfo">
          <img :src="information=='已完成'?logoColorful[1]:logoColorless[1]">
          <div>
            <span>完善信息</span>
            <i :style="information=='已完成'?fontBlack:''">{{information}}</i>
            <img src="./assets/arrow-right.png" v-show="information!='已完成'" >
          </div>
        </div>

        <div class="step">
          <img :src="zhima=='已完成'?logoColorful[2]:logoColorless[2]">
          <div>
            <span>芝麻信用</span>
            <i :style="zhima=='已完成'?fontBlack:''">{{zhima}}</i>
            <img src="./assets/arrow-right.png" v-show="zhima!='已完成'" @click="doZhima">
          </div>
        </div>
        <div class="step">
          <img :src="operator=='已完成'?logoColorful[3]:logoColorless[3]">
          <div>
            <span>手机运营商</span>
            <i :style="operator=='已完成'?fontBlack:''">{{operator}}</i>
            <img src="./assets/arrow-right.png" v-show="operator!='已完成'" @click="doOperator">
          </div>
        </div>
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
      realName:'',
      information:'',
      zhima:'',
      operator:'',
      fontBlack:{
        'color': 'black',
        'font-style': 'normal'
      },
      logoColorless:['/static/img/id_certification.png',
                      '/static/img/person_information.png',
                      '/static/img/zhima.png',
                      '/static/img/phone_operator.png'],
      logoColorful :['/static/img/id_certification_color.png',
                      '/static/img/person_information_color.png',
                      '/static/img/zhima_color.png',
                      '/static/img/phone_operator_color.png']
    }
  },
  mounted(){
     this.userInfo = JSON.parse(localStorage.userInfo);
     this.getauthStatus();
  },
  methods: {
    /* 获取用户认证信息 */
    getauthStatus(){
      var self = this;
      Lib.M.ajax({
        url : '/risk-manage/auth/authStatus',
        data:{
          phone: self.userInfo.userInfo.phone,
          user_id: self.userInfo.userInfo.userId
        },
        success:function (res){
          let data = res.data;
          for(let i in data){
            if(data[i].code == '0'){
              self[data[i].type] = '未完成'
            }else if(data[i].code =='1'){
              self[data[i].type] = '已失效'
            }else if(data[i].code =='2'){
              self[data[i].type] = '已完成'
            }
          }
        },
        error:function(err){
          console.log(err)
        }
      });
    },
    /* face++实名认证 */
    face_getToken(){
      var self = this;
      this.$vux.loading.show({
          text: '请稍等'
      });

      Lib.M.ajax({
        url : '/risk-manage/faceid/getToken',
        params:{
          return_url: 'http://localhost:8999/views/cashloan/infoFill.html#/',
          notify_url:'https://finbridge.cn/risk-manage/faceid/notify',
          idcard_mode:2/*,
          idcard_name:'徐文斌',
          idcard_number: '331003199205170810'*/
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
        },
        error:function(err){
        }
      });
    },
    doInfo(){
      this.$router.push('./vPersonalInfo')
    },
    doZhima(){
      
    },
    doOperator(){
      this.$router.push('./vPhoneOperator')
    }
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
    color: #f66464;
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
