<template>
  <div>
    <div>
      <div class="title">信用认证</div>
      <div class="warning">为了顺利完成认证，请确保信息的真实性</div>
      <div class="grey-strip"></div>
      <div class="step-wrapper" v-cloak>
        <div class="step">
          <img v-show="realName!='已完成'" src="./assets/id_certification.png">
          <img v-show="realName=='已完成'" src="./assets/id_certification_color.png">
          <div @click="doFace">
            <span>实名认证</span>
            <i :style="realName=='已完成'?fontBlack:''">{{realName}}</i>
            <img src="./assets/arrow-right.png" v-show="realName!='已完成'">
          </div>
        </div>
        <div class="step">
          <img v-show="information!='已完成'" src="./assets/person_information.png">
          <img v-show="information=='已完成'" src="./assets/person_information_color.png">
          <div @click="doInfo">
            <span>完善信息</span>
            <i :style="information=='已完成'?fontBlack:''">{{information}}</i>
            <img src="./assets/arrow-right.png" v-show="information!='已完成'">
          </div>
        </div>
        <div class="step">
          <img v-show="operator!='已完成'" src="./assets/phone_operator.png">
          <img v-show="operator=='已完成'" src="./assets/phone_operator_color.png">
          <div @click="doOperator">
            <span>手机运营商</span>
            <i :style="operator=='已完成'?fontBlack:''">{{operator}}</i>
            <img src="./assets/arrow-right.png" v-show="operator!='已完成'">
          </div>
        </div>
        <div class="step">
          <img v-show="zhima!='已完成'" src="./assets/zhima.png">
          <img v-show="zhima=='已完成'" src="./assets/zhima_color.png">
          <div @click="zhimaAuth">
            <span>芝麻认证</span>
            <i :style="zhima=='已完成'?fontBlack:''">{{zhima}}</i>
            <img src="./assets/arrow-right.png" v-show="zhima!='已完成'">
          </div>
        </div>
      </div>
    </div>
    <main-nav which="infoFill"></main-nav>
    <loading :show="loading" :text="loadText"></loading>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Loading, XButton } from 'vux'

import MainNav from 'components/mainNav'

export default {
  name: 'add',	
  components: {
    MainNav,  Loading, XButton
  },
  data () {
    return {
      realName:'',
      realNamePassed:false,
      information:'',
      informationPassed: false,
      zhima:'',
      zhimaPassed:false,
      operator:'',
      fontBlack:{
        'color': 'black',
        'font-style': 'normal'
      },
      loading: false,
      loadText: '认证需要一些时间, 请稍等'
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.getauthStatus();
  },
  methods: {
    /* 获取用户基本信息 */
    getInfo(){
      var self = this;
      Lib.M.ajax({
        type:'GET',
        url:'cash-account/user/account/accountInfo/'+localStorage.phoneNum,
        success:function (res) {
            localStorage.userInfo = JSON.stringify(res.data)
        }
      })
    },
    /* 获取用户认证信息 */
    getauthStatus(){
      var self = this;
      Lib.M.ajax({
        url : '/risk-manage/auth/authStatus',
        data:{
          mobile: self.userInfo.userInfo.phone,
          user_id: self.userInfo.userInfo.userId/*,
          certNo: self.userInfo.idInfo.idCardNumber || '',
          name: self.userInfo.idInfo.name || ''*/
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
            }else if(data[i].code =='3'){
              self[data[i].type] = '认证失败'
            }
            /* 完善信息是否完成 */
            if(data[i].type=='information' && data[i].code=='2'){
              self.informationPassed = true
            }

            /* face++实名认证是否完成 */
            if(data[i].type=='realName' && data[i].code=='2'){
              self.realNamePassed = true
            }else{
              /*未完成的话，判断一下页面来源 */
              if(document.referrer.indexOf('megvii.com')!= -1){
                this.face_getResult();
              } 
            }

            /* 芝麻信用是否完成 */
            if(data[i].type=='zhima' && data[i].code=='2'){
              self.zhimaPassed = true
            }else{
              /*未完成的话，判断一下页面来源 */
              if(document.referrer.indexOf('zmxy.com.cn')!= -1){
                self.zhima_getResult();
              } 
            }
          }
        }
      });
    },
    /* face++实名认证 */
    face_getToken(){
      var self = this;

      Lib.M.ajax({
        url : '/risk-manage/faceid/getToken',
        params:{
          return_url: 'https://moneyboom.cn/views/cashloan/infoFill.html',
          notify_url:'https://finbridge.cn/risk-manage/faceid/notify',
          idcard_mode:2/*,
          idcard_name:'徐文斌',
          idcard_number: '331003199205170810'*/
        },
        success:function (data){
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
    /* 已芝麻认证，把芝麻返回的数据发给我们自己的服务器 */
    zhima_getResult(){
      var self = this;
      self.loading = true
      Lib.M.ajax({
        type: 'get',
        url : '/risk-manage/zhima/zhimaCredit',
        /* 返回的数据需原封不动，因此用 encodeURIComponent 再编码 */
        params:{
          name:self.userInfo.idInfo.name,
          certNo:self.userInfo.idInfo.idCardNumber,
          phoneNum:self.userInfo.userInfo.phone,
          params: encodeURIComponent( Lib.M.GetQueryString('params') ),
          sign: encodeURIComponent( Lib.M.GetQueryString('sign') ),
          userid: self.userInfo.userInfo.userId
        },
        success:function (res){
          self.loading = false
          console.log(res);
          if(res.code == 200){
            self.getInfo();
            self.$vux.alert.show({
              content: '芝麻认证成功!',
              onShow () {
                console.log('Plugin: I\'m showing')
              },
              onHide () {
                window.location.replace('/views/cashloan/infoFill.html')
              }
            })
          }else{
            self.$vux.toast.text('芝麻认证失败，请重新认证!','middle');
          }
        }
      });
    },
    doFace(){
      if(this.realName!='已完成') this.face_getToken();
    },
    /* 跳转至芝麻认证 */
    zhimaAuth(){
      if(!this.realNamePassed){
        /* 还未实名认证 */
        this.$vux.toast.text('请先通过实名认证','middle')
      }else{
        if(this.zhima=='已完成'){
          /* 认证过了，不作跳转 */
        }else{
          window.location.href=
            'https://finbridge.cn/risk-manage/zhima/zhimaAuth?name=' + this.userInfo.idInfo.name +
            '&certNo=' + this.userInfo.idInfo.idCardNumber +
            '&phoneNum='+ this.userInfo.userInfo.phone +
            '&user_id=' + this.userInfo.userInfo.userId
        }
      }
    },
    /* 点击完善信息 */
    doInfo(){   
      if(!this.realNamePassed){
        /* 还未实名认证 */
        this.$vux.toast.text('请先通过实名认证','middle')
      }else{
        this.$router.push({path:'./vPersonalInfo',query:{isPassed:this.informationPassed}})
      }
    },
    /* 点击手机运营商 */
    doOperator(){
      if(!this.realNamePassed){
        /* 还未实名认证 */
        this.$vux.toast.text('请先通过实名认证','middle')
      }else{
        if(this.operator!='已完成'){
          window.location.href=
          'https://credit.baiqishi.com/clclient/mno/login?partnerId='+ 'flowercredit'
          +'&name=' + this.userInfo.idInfo.name
          +'&certNo=' + this.userInfo.idInfo.idCardNumber
          +'&mobile=' + this.userInfo.userInfo.phone
          +'&backUrl=' + 'https://moneyboom.cn/views/cashloan/operatorS.html'
          +'&failUrl=' + 'https://moneyboom.cn/views/cashloan/operatorF.html'
        }  
      }
    },
    /* 触发后台拿到face++认证 */
    face_getResult(){
      var self = this;
      self.loading = true;
      Lib.M.ajax({
        url : '/risk-manage/faceid/getResult',
        params:{
          user_id: self.userInfo.userInfo.userId,
          biz_id: JSON.parse(localStorage.faceReturn).biz_id
        },
        success:function (data){
          self.getInfo();
          self.loading = false;
          self.$vux.loading.hide();
          if(data.code=='200'){
            self.$vux.alert.show({
              content: '实名认证成功!',
              onShow () {
                console.log('Plugin: I\'m showing')
              },
              onHide () {
                window.location.reload()
              }
            })
          }else{
            self.$vux.alert.show({
              content: '实名认证失败，请重试!'
            })
          }
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
