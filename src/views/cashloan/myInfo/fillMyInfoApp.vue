<template>
    <div>
        <div class="info_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>个人信息</span>
        </div>
        <div class="headShot pad">
            <span>头像</span>
            <span>
                <img v-show="noAvatar" class="avatar2" src="./assets/headshot.png">
                <img v-show="!noAvatar" class="avatar2" :src="img_id">
                <input id="upfile" type="file" name="upfile" accept="image/png,image/jpg,image/jpeg" @change='preivewImg'>
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>

        </div>

        <div class="info_public pad" @click="$router.push({path:'/nick'})">
            <span>昵称</span>
            <span class="fr">
                <span>{{userInfo.userName}}</span>
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="info_public pad" style="margin-top: 1rem">
            <span>真实名字</span>
            <span class="fr">
                {{idInfo.name}}
            </span>
        </div>
        <div class="info_public pad">
            <span>手机号码</span>
            <span class="fr color">
                {{userInfo.phone.substr(0, 3)}}****{{userInfo.phone.substr(7)}}
            </span>
        </div>
        <div class="info_public pad" style="margin-top: 1.0315rem">
            <span>身份证号</span>
            <span class="fr color">
                {{idInfo.idCardNumber.substr(0, 3) || '无'}}***********{{idInfo.idCardNumber.substr(14) || '号'}}
            </span>
        </div>
        <div class="info_public pad" @click="$router.push({'path':'/addBank'})">
            <span>银行卡号</span>
            <span v-show="bankCard == ''" class="fr">
                <span>未绑定</span>
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
            <span v-show="bankCard != ''" class="fr color">
                <span></span>
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
    </div>
</template>

<script>
import Lib from 'assets/js/Lib';
export default {
  name: 'add',

    components: {

    },
  data () {
    return {
        bankCard:'',
        img_id: '',
        noAvatar:true,
        idInfo:{},
        userInfo:{},
        localUserInfo:{}
    }
  },
  mounted(){
      this.localUserInfo = JSON.parse(localStorage.userInfo);
      this.getInfo();
      this.getImg();
      this.bankCardCheck();
  },
  methods: {
      preivewImg() {
          /* 用fileReader实现图片预览 */
          var self = this;
          var file = document.getElementById("upfile").files[0];
          /*var name = file.name;*/
          var reader = new FileReader();
          reader.onload = function(e) {
              /*if(i===1)*/
              self.img_id = e.target.result;
              /*if(i===2) that.img_idBack = e.target.result;*/
              self.uploadImg();
          }
          reader.readAsDataURL(file, "UTF-8");
      },
      getImg(){
          var self = this;
          Lib.M.ajax({
              type:'get',
              url:'cash-account/user/account/getIconImage/'+self.localUserInfo.userInfo.phone,
              dataType:'blob',
              success:function (res) {
                  console.log(res);
                  if(res.size!=0){
                      self.img_id =  window.URL.createObjectURL(res);
                      self.noAvatar = false;
                  }else{
                      self.noAvatar = true;
                  }
              }
          })
      },
      uploadImg(){
          var self = this;
          var fd = new FormData();
          fd.append("upload", 1);
          fd.append('file', document.getElementById("upfile").files[0]);
          Lib.M.ajax({
              url: "cash-account/user/account/iconImage/"+self.localUserInfo.userInfo.phone,
              data: fd,
              success:function (res) {
                  self.getImg();
              }
          })
      },
      getInfo(){
          var self = this;
          Lib.M.ajax({
              type:'GET',
              url:'cash-account/user/account/accountInfo/'+self.localUserInfo.userInfo.phone,
              success:function (res) {
                  console.log(res);
                  self.idInfo = res.data.idInfo;
                  self.userInfo = res.data.userInfo;
              }

          })
      },
      /* 得到银行卡信息 */
      bankCardCheck(){
          var self = this;
          Lib.M.ajax({
              url : '/pay/repayment/bankCardCheckList',
              data:{
                user_id: self.localUserInfo.userInfo.userId
              },
              success:function (res){
                console.log(res.data.length)
                if(res.data.length!=0){
                  self.bankCard = res.data[0].card_no
                }
              }
          });
      },
  }
}

</script>

<style>
    .pad{
        padding:0 1.19rem 0 1.125rem;
    }
    .fr{
        float: right;
    }
    .info_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .info_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }

    .headShot{
        height:5.44rem;
        background:rgba(255,255,255,1);
        line-height: 5.44rem;
        margin-top: 1.065rem;
        color: rgba(115,115,115,1);
    }
    .headShot span:nth-of-type(2){
        float: right;
        position: relative;
    }
    .avatar2{
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        position: absolute;
        left: -3rem;
        top: 1.25rem;
        border-radius:50% ;
    }
    .headShot span:nth-of-type(2) input{
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        left: -3rem;
        top: 1.25rem;
        opacity: 0;
        border-radius:50% ;
    }

    .info_public{
        height:2.815rem;
        background:rgba(255,255,255,1);
        line-height: 2.815rem;
        color: rgba(115,115,115,1);
        font-size: 1rem;
    }
    .color{
        color: rgba(194,194,194,1);
    }
    
</style>
