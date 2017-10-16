<template>
  <div class="wrapper">
    <div class="title">评估结果</div>
    <div v-show="pass==0">请等待</div>
    <div v-show="pass==1">
      <p v-show="pass==1">您的认证通过了！</p>
    </div>
    <div>
      <p v-show="pass==2">认证失败，请重试！</p>
    </div>
    <div class="btn" @click="jump">确定</div>
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
      /*loading: true,*/
      loading:false,
      loadText: '请稍等'
    }
  },
  mounted(){
    document.getElementsByTagName('body')[0].style.paddingBottom = 0;
    this.userInfo = JSON.parse(localStorage.userInfo);
    /*this.wait();*/
  },
  methods: {
    wait(){
      var self = this
      Lib.M.ajax({
        url:'risk-manage/auth/operatorFirstAuth/',
        data:{
          mobile:self.userInfo.userInfo.phone
        },
        success:function (res) {
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
  .btn{
    width: 20.625rem;
    background: #1abc9c;
    height: 2.75rem;
    line-height: 2.75rem;
    margin:0 auto;
    border-radius: 10px;
    text-align: center;
    margin-top: 1.065rem;
    font-size: 1rem;
    color: white;
  }
</style>
