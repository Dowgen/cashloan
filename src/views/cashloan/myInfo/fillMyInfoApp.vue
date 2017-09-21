<template>
    <div>
        <div class="info_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>个人信息</span>
        </div>
        <div class="headShot pad" @on-click-more="showMenus = true">
            <span>头像</span>
            <span>
                <img src="./assets/info_headshot.png" alt="">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>


        <div class="info_public pad" @click="$router.push({path:'/nick'})">
            <span>昵称</span>
            <span class="fr">
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
        </div>
        <div class="info_public pad" style="margin-top: 1rem">
            <span>真实名字</span>
            <span class="fr">
            </span>
        </div>
        <div class="info_public pad">
            <span>手机号码</span>
            <span class="fr color">
                188****2560
            </span>
        </div>
        <div class="info_public pad" style="margin-top: 1.0315rem">
            <span>身份证号</span>
            <span class="fr color">
                330***********6430
            </span>
        </div>
        <div class="info_public pad">
            <span>银行卡号</span>
            <span v-if="bankCard == ''" class="fr" @click="$router.push({'path':'/addBank'})">
                <span v-model="bankCard"></span>
                <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
            </span>
            <span v-if="bankCard !== ''" class="fr color">
                <span v-model="bankCard">330626********06430</span>
                <img style="width: 1.065rem;height: 1.065rem;display: inline-block" src="./assets/edit.png" @click="$router.push({path:'/addBank'})" alt="">
            </span>
        </div>
    </div>

</template>

<script>


import Lib from 'assets/js/Lib';
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'



export default {
  name: 'add',
    directives: {
        TransferDom
    },
    components: {
        XHeader, Actionsheet, ButtonTab, ButtonTabItem
    },
  data () {
    return {
        bankCard:'',
        menus: {
            menu1: '解除绑定',
        },
        showMenus: false
    }
  },
  methods: {

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
        height:4rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 4rem;
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
    }
    .headShot span:nth-of-type(2){
        float: right;
        position: relative;
    }
    .headShot span:nth-of-type(2) img:nth-of-type(1){
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        position: absolute;
        left: -3rem;
        top: 1.25rem;
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
