<template>
  <div class="wrapper">
    <div class="title">评估结果</div>
    <div v-show="pass==0"></div>
    <div v-show="pass==1" class="result">
      <img src="./assets/pass.png">
      <p v-show="pass==1">您信息认证成功了!</p>
      <div @click="jump">确定</div>
    </div>
    <div v-show="pass==2" class="result">
      <img src="./assets/fail.png">
      <p>对不起，您信息认证未成功!</p>
      <div style="background:#ff7718" @click="jump">确定</div>
    </div>
    <loading :show="loading" :text="loadText"></loading>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';
import { Loading, XButton } from 'vux'
export default {
  name: 'add',	
  components: {
    Loading, XButton
  },
  data () {
    return {
      pass:0,
      userInfo:{},
      loading: true,
      loadText: '请稍等'
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = 0;
    this.userInfo = JSON.parse(localStorage.userInfo);
    this.wait();
  },
  methods: {
    wait(){
      var self = this
      Lib.M.ajax({
        url:'risk-manage/auth/operatorFirstAuth/',
        timeout: 200*1000,
        data:{
          mobile:self.userInfo.userInfo.phone
        },
        success:function (res) {
          console.log('3分钟轮询已返回，如下')
          console.log(res)
          self.loading = false
          if(res.code == 200 && res.data == '1'){
            self.$vux.toast.text('认证成功!')
            self.pass = 1
          }else{
            self.$vux.toast.text('认证失败!')
            self.pass = 2
          }
        }
      })
    },
    jump(){
      window.location.href = '/views/cashloan/infoFill.html'
    }
  }
}
</script>

<style scoped>
  .title{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 1.065rem;
    font-weight: 500;
    color: white;
    background: #1abc9c;
  }
  .result{
    height: 18.315rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .result>img{
    width: 5.5rem;
    height: 7.875rem;
    margin-top: 2.1rem;
  }
  .result>p{
    font-size:0.875rem;
    color: #878787;
    margin-top: 1.125rem;
    font-weight: 300;
  }
  .result>div{
    height: 2.375rem;
    line-height: 2.375rem;
    width: 10.315rem;
    border-radius: 19px;
    text-align: center;
    background: #78cf79;
    color: white;
    margin-top: 1.935rem;
  }
</style>
