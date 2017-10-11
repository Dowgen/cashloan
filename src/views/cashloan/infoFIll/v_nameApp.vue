<template>
  <div>
    <hb-head-green headfont="实名认证"></hb-head-green>
    <div class="getphoto-wrapper">
      <div class="front">
        <span>身份证(人像面)</span>
        <div class="upload-wrapper">
          <img :src="img_idFront">
          <input id="upfile1" type="file" name="upfile1" accept="image/png,image/jpg,image/jpeg" @change='preivewImg(1)'>
        </div>
      </div>
      <div class="back">
        <span>身份证(国徽面)</span>
        <div class="upload-wrapper">
          <img :src="img_idBack">
          <input id="upfile2" type="file" name="upfile2" accept="image/png,image/jpg,image/jpeg"  @change='preivewImg(2)'>
        </div>
      </div>
    </div>
    <div class="info-get-wrapper">
      <div class="info-get">
        <span>姓名</span>
        <span>张俊瑞</span>
      </div>
      <div class="info-get">
        <span>身份证号</span>
        <span>330326198905036730</span>
      </div>
    </div>
    <x-button type="primary" class="btn1">确定</x-button>
    <div class="agreement">
      <img src="./assets/agreeProto.png">
      点击确定即同意<span style="color:#1abc9c">《征信查询授权书》</span>
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XButton } from 'vux'

import HbHeadGreen from 'components/HbHeadGreen'

export default {
  name: 'add',	
  components: {
    HbHeadGreen, XButton
  },
  data () {
    return {
      img_idFront: '/static/img/id-front.png',
      img_idBack: '/static/img/id-back.png'
    }
  },
  methods: {
    preivewImg(i) {
      /* 用fileReader实现图片预览 */
      var that = this;
      var file = $("#upfile"+i).get(0).files[0];
      var name = file.name;
      var reader = new FileReader();
      reader.onload = function(e) {
        if(i===1) that.img_idFront = e.target.result;
        if(i===2) that.img_idBack = e.target.result;
      }
      reader.readAsDataURL(file, "UTF-8");
    },
    /*uploadImg() {
      var that = this;
      var data = JSON.parse(that.localStorage.data).data;
      var fd = new FormData();
      fd.append("upload", 1);
      fd.append('upfile', $("#upfile").get(0).files[0]);
      axios({
        method:'post',
        url: "/cauds-account/user/account/iconImage/" + data.userInfo.account,
        data: fd,
      })
      .then( rs => {
        that.avatar = axios.defaults.baseURL+'/cauds-account/user/account/getIconImage/'+that.information.account;
      })
      .catch( err => window.location.href = '/login');
    },*/
  }
}
</script>

<style scoped>
  .getphoto-wrapper{
    background: white;
    height: 15rem;
    width: 100%;
    margin-top: 1.03rem;
    color: #1a1a1a;
  }
  .getphoto-wrapper>div{
    height: 7.5rem;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .getphoto-wrapper>div:first-child{
    border-bottom: solid 1px #e6e6e6;
  }
  .upload-wrapper{
    width: 7.815rem;
    height: 4.78rem;
    position: relative;
  }
  .upload-wrapper>img{
    width: 100%;
    height: 100%;
  }
  .upload-wrapper>input{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; left: 0;
    opacity: 0;
  }
  .info-get-wrapper{
    width:100%;
    height: 6.845rem;
    background: white;
    margin-top: 1rem;
    color: #1a1a1a;
  }
  .info-get{
    height: 3.422rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.6rem;
    padding: 0 1rem;
  }
  .info-get:first-child{
    border-bottom: solid 1px #e6e6e6;
  }
  .info-get>span:last-child{
    color: black;
  }
  .warn{
    width: 100%;
    text-align: center;
    color: #ff8e67;
    font-size: 0.75rem;
    margin-top: 2.22rem;
  }
  .btn1{
    margin-top: 3.54rem;
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
</style>
