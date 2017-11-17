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
        <input placeholder="省份，城市" v-model="cityVal" readonly="readonly"/>
        <div class="sel">
          <popup-picker :data="cityList" :columns="3" v-model="cityVal" ref="cityPicker" ></popup-picker>
        </div>
      </div>
      <div class="inputer inputer-street" @click="getFocus">
        <input id="specLocInput" type="text" v-model="specLoc"/>
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
          <input type="text" placeholder="TA的姓名" v-model="contName1">
         <!-- <span class="contact_list"><img src="./assets/contact_list.png" alt=""></span>-->
        </div>
        <div class="inputer">
          <input type="number" placeholder="TA的手机号码" v-model="contPhone1">
        </div>
      </div>
      <div>
        <p class="title">紧急联系人2({{emrContact2}})</p>
        <div class="inputer">
          <input type="text" placeholder="TA的姓名" v-model="contName2">
        <!--  <span class="contact_list"><img src="./assets/contact_list.png" alt=""></span>-->
        </div>
        <div class="inputer">
          <input type="number" placeholder="TA的手机号码" v-model="contPhone2">
        </div>
      </div>
    </div>
    <x-button type="primary" class="btn3" @click.native="submit">提交</x-button>
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
      specLoc: '',
      emrContact1:'',
      emrContact2:'',
      contName1:'',
      contPhone1:'',
      contName2:'',
      contPhone2:'',
      userInfo:{}
    }
  },
  watch:{
    mariVal:function(){
      this.emerContChange();
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.userInfo);
    let u = this.userInfo
    if(this.$route.query.isPassed){
      this.workType[0] = this.workTypeList[parseInt(u.userInfo.jobType)].name
      this.mariVal[0] = this.mariList[parseInt(u.userInfo.marriage)].name
      this.cityVal[0] = u.userInfo.location.split(' ')[0]
      this.specLoc = u.userInfo.location.split(' ')[1]
      this.contName1 = u.userInfo.emergencyContactName1
      this.contName2 = u.userInfo.emergencyContactName2
      this.contPhone1 = u.userInfo.emergencyContactPhone1
      this.contPhone2 = u.userInfo.emergencyContactPhone2
      this.emerContChange();
    }
  },
  methods: {
    emerContChange(){
      if(this.mariVal[0] == '已婚'){
        this.emrContact1 = '配偶'
        this.emrContact2 = '父母/朋友'
      }else{
        this.emrContact1 = '父母'
        this.emrContact2 = '朋友/同事'
      }
    },
    submit(){
      if(this.workType[0]=='' || this.mariVal[0]=='' 
         || this.cityVal[0]=='' || this.specLoc ==''
         || this.contName1 =='' || this.contPhone1 =='' 
         || this.contName2 =='' || this.contPhone2 =='' ){
        this.$vux.toast.text('信息请填写完整', 'middle')
      }else {
        if(Lib.M.isPhoneWrong(this.contPhone1) || Lib.M.isPhoneWrong(this.contPhone2)){
          this.$vux.toast.text('请检查手机号格式', 'middle')
        }else{
          this.send();
        }
      }
    },
    send(){
      var self = this;
      let workVal,mariVal;

      /* 给传给后台的值做转化 */
      if(self.mariVal[0] == '未婚'){
        mariVal = 1;
      }else{
        mariVal = 0;
      }
      if(self.workType[0] == '上班族'){
        workVal = 0;
      }else if(self.workType[0] == '自由职业'){
        workVal = 1;
      }else if(self.workType[0] == '学生'){
        workVal = 2;
      }
      Lib.M.ajax({
        url : '/cash-account/user/account/userInfo/edit/'+ 
               self.userInfo.userInfo.phone,
        data:{
          "jobType": workVal,
          "marriage": mariVal,
          "location": self.cityVal.join(',')+ ' ' + self.specLoc,
          "emergencyContactName1": self.contName1,
          "emergencyContactPhone1": self.contPhone1,
          "emergencyContactName2": self.contName2,
          "emergencyContactPhone2": self.contPhone2
        },
        success:function (data){
          self.$vux.toast.text('提交成功！', 'middle')
          /* 重设localStorage里的userInfo */
          localStorage.userInfo = JSON.stringify(data.data);
          setTimeout("window.location.href = '/views/cashloan/infoFill.html'",800);
        }
      });
    },
    getFocus(){
      document.getElementById("specLocInput").focus();
    }
  }
}
</script>


<style scoped>
  .inputer{
    position: relative;
  }
  .contact_list{
    position: absolute;
    right: 2.25rem;
    top: 0.77rem;
  }
  .contact_list img{
    width: 1.28rem;
    height: 1.375rem;
  }
  .infoFill{
    height: 12.25rem;
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
    height: 2.75rem;
    width: 100%;
  }
  .sel{
    background: url('./assets/arrow_down.png') no-repeat;
    background-size: 0.69rem 0.375rem;
    background-position: 95% center; 
    width: 100%;
    position:absolute;
    top:0;
    right:0;
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
    bottom: 0;
    height: 1.5rem;
    width: 90%;
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
    box-sizing: border-box;
    background: white;
    width: 100%;
    padding-left: 1rem;
  }
</style>


