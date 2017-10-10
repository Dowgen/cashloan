<template>
    <div>
        <!--<div class="bank_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span v-show="!isShow">添加银行卡</span>
            <span v-show="isShow">银行卡信息</span>
        </div>-->
        <x-header :left-options="{backText: ''}">添加银行卡</x-header>

        <!-- <x-header v-show="isShow" :left-options="{backText: ''}" :right-options="{showMore: true}" @on-click-more="showMenus = true">我的银行卡</x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div> -->
        <div class="add_bank oBank" v-show="!isShow" @click="addBank">
            <div id="wrap">
                <div id="div1">
                    <div></div>
                    <div></div>
                </div>
                <div id="div2">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="exist_bank oBank" v-show="isShow" @click="clickCard"> 
            <p>{{bank_name}}</p>
            <p><span style="font-size: 0.94rem">**** **** **** </span><span>{{card_no}}</span></p>
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
                isShow:false,
                menus: {
                    menu1: '解除绑定',
                },
                userInfo:{},
                showMenus: false,
                cardData:[],    //用户绑定的银行卡信息
                bank_name: '',
                card_no: ''
            }
        },
        mounted(){
            this.userInfo = JSON.parse(localStorage.userInfo);
            this.bankCardCheck();  
        },
        methods: {
            addBank(){
                /*this.isShow = true;*/
                this.$router.push('./bindBankCard')
            },
            /* 得到银行卡信息 */
            bankCardCheck(){
                var self = this;
                Lib.M.ajax({
                    url : '/pay/repayment/bankCardCheckList',
                    headers:{
                      'Authorization':'Bearer '+ self.userInfo.token,
                      'authKey':self.userInfo.authKey,
                      'sessionId':self.userInfo.sessionId,
                      'phone':self.userInfo.userInfo.phone
                    },
                    data:{
                      user_id: self.userInfo.userInfo.userId
                    },
                    success:function (res){
                      console.log(res.data.length)
                      if(res.data.length!=0){
                        self.cardData = res.data;
                        self.bank_name = self.cardData[0].bank_name
                        self.card_no = self.cardData[0].card_no  
                        self.isShow = true
                      }
                    }
                });
            },
            /* 点击银行卡 */
            clickCard(){
                var self = this;
                this.$vux.confirm.show({
                  content: '亲,是否想要解绑银行卡?',
                  onConfirm () {
                    self.unbind();
                  }
                })
            },
            /* 解绑银行卡 */
            unbind(){
                var self = this;
                Lib.M.ajax({
                    url : '/pay/repayment/bankCardUnbind',
                    headers:{
                      'Authorization':'Bearer '+ self.userInfo.token,
                      'authKey':self.userInfo.authKey,
                      'sessionId':self.userInfo.sessionId,
                      'phone':self.userInfo.userInfo.phone
                    },
                    data: {
                      user_id: self.userInfo.userInfo.userId,
                      no_agree: self.cardData[0].no_agree
                    },
                    success:function(res){
                      if(res.code=='0000'){
                        self.$vux.toast.text('解绑成功!','middle'); 
                      }else{
                        self.$vux.toast.text(res.error,'middle');
                      }
                    }
                });
            }
        }
    }
</script>

<style>
    .bank_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .bank_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .oBank{
        width:21.065rem;
        height:4.69rem;
        opacity:0.63;
        border-radius: 0.44rem ;
        margin: 1.125rem auto 0;
    }
    .add_bank{
        background:rgba(204,204,204,1);
        position: relative;
    }
    .exist_bank{
        background: rgba(110,157,199,1);
        text-align: left;
        text-indent: 1.065rem;
        font-size: 1rem;
        color: rgba(255,255,255,1);
        line-height: 2.4rem;
    }



    #wrap{
        width:2.5rem;
        height: 2.5rem;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin:auto;
    }

    #div1 , #div2{
        width:2.5rem;
        overflow:hidden;

    }

    #div1 div, #div2 div{
        width:1rem;
        height:1rem;
        float:left;
        border: 0.01rem solid #fff;
    }
    #div1 div:nth-of-type(1){
        border-top:none;
        border-left:none;
    }
    #div1 div:nth-of-type(2){
        border-top:none;
        border-right:none;
    }
    #div2 div:nth-of-type(1){
        border-bottom:none;
        border-left:none;
    }
    #div2 div:nth-of-type(2){
        border-bottom:none;
        border-right:none;
    }
</style>
