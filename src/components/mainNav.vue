<template>
  <div class="nav">
    <a href="mainPage.html">
      <img v-show="which=='mainPage'" src="./img/rent.png">
      <img v-show="which!=='mainPage'" src="./img/rent1.png">
    </a>
    <a href="infoFill.html">
      <img v-show="which=='infoFill'" src="./img/renzheng.png">
      <img v-show="which!=='infoFill'" src="./img/renzheng1.png">
    </a>
    <a href="javascript:void(0)" @click="jump">
      <img v-show="which=='myInfo'" src="./img/me.png">
      <img v-show="which!=='myInfo'" src="./img/me1.png">
    </a>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

export default {
  data() {
    return {
      userInfo:{},
      realNamePassed:false
    }
  },
  props: {
    which: {
        type: String,
        default: '导航'
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.getauthStatus();
  },
  //相关操作事件
  methods: {
    jump(){
      if(this.realNamePassed){
        window.location.href = '/views/cashloan/myInfo.html'
      }else{
        this.$vux.confirm.show({
          content: '亲,访问个人主页需实名认证,请先通过实名认证!',
          onConfirm () {
            window.location.href = '/views/cashloan/infoFill.html' 
          }
        })
      }
    },
	   /* 获取用户认证信息 */
    getauthStatus(){
      var self = this;
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
            /* face++实名认证是否完成 */
            if(data[i].type=='realName' && data[i].code=='2'){
              self.realNamePassed = true
            }
          }
        }
      });
    }
  }
}
</script>

<style>

.nav{
  box-sizing: border-box;
  padding-top: .5rem;
  position: absolute;
  bottom: 0;
  height: 3.8rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid .7rem #f2f2f2;
  z-index: 999;
}
.nav img{
  width:1.375rem;
  height: 2.345rem;
}
</style>
