<template>
    <div>
        <div class="setCenter_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>设置</span>
        </div>
        <div class="setCenter_public" @click="$router.push({path:'/adviceFill'})" style="margin-top: 1rem">
            <span><img class="iconfont" style="width: 1.25rem;height: 1.125rem;" src="./assets/advice.png" alt="">意见反馈</span>
            <span class="setCenter_fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="setCenter_public" @click="$router.push({path:'/helpCenter'})">
            <span><img class="iconfont" style="width: 1.25rem;height: 1.25rem;" src="./assets/help.png" alt="">帮助中心</span>
            <span class="setCenter_fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="setCenter_public"  @click="wechat">
            <span><img class="iconfont" style="width: 1.25rem;height: 1.125rem;" src="./assets/wechat.png" alt="" >微信关注</span>
            <span class="setCenter_fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="setCenter_public" style="margin-top: 1.0315rem">
            <span><img class="iconfont" style="width: 1.25rem;height: 1.22rem;" src="./assets/Rated.png" alt="">不错，去评分</span>
            <span class="setCenter_fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="setCenter_public"   @click="$router.push({path:'/aboutUs'})">
            <span><img class="iconfont" style="width: 1.28rem;height: 1.655rem;" src="./assets/aboutus.png" alt="">关于我们</span>
            <span class="setCenter_fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>


        <div class="log_off" @click="clearLocalStorage">退出登录</div>

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
        href:''
    }
  },
  methods: {
    wechat(){
        this.$vux.alert.show({
            content: '打开微信—通讯录—关注“炬有钱”公众号'})

    },
      clearLocalStorage(){
          localStorage.clear();
          window.location.href = '/views/cashloan/login.html';
      }
  }
}

</script>

<style>
    .weui-mask{
        z-index: 2 !important;
    }
    .setCenter_fr{
        float: right;
    }
    .setCenter_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .setCenter_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .setCenter_public{
        height:2.815rem;
        background:rgba(255,255,255,1);
        line-height: 2.815rem;
        color: rgba(115,115,115,1);
        font-size: 1rem;
        padding:0 1.19rem 0 3.125rem;
    }
    .setCenter_public span:nth-of-type(1){
        position: relative;
    }
    .iconfont{
        display: inline-block;
        position: absolute;
        left: -2rem;
        top: 0.1rem;
    }
    .log_off{
        height:3.44rem;
        background:rgba(255,255,255,1);
        margin-top: 2.47rem;
        color: rgba(26,188,156,1);
        text-align: center;
        font-size:1.125rem;
        line-height: 3.44rem;
    }
    
</style>
