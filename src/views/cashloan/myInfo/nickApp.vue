<template>
    <div>
        <div class="nick_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>昵称</span>
        </div>
        <div class="fill_nick_name">
            <span>昵称</span>
            <input type="text" placeholder="输入昵称" v-model="nickName" maxlength=6 @keyup.enter="KeyDown">
            <span class="delete" @click="deleteName()" v-show="nickName!=''"><img src="./assets/delete.png" alt=""></span>
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
                nickName:'',
                localUserInfo:{}
            }
        },
        mounted(){
            this.localUserInfo = JSON.parse(localStorage.userInfo);
            this.KeyDown();
        },
        methods: {
             KeyDown(){
                 if (event.keyCode == 13)
                 {
                     var self = this;

                     event.returnValue=false;
                     event.cancel = true;

                     Lib.M.ajax({
                         type:'get',
                         url: "cash-account/user/account/userInfo/name/"+self.localUserInfo.userInfo.phone+'/'+self.nickName,
                        /* headers: {
                             Authorization: 'Bearer ' + self.$store.state.token,
                             phone:self.localUserInfo.userInfo.phone
                         },*/
                         success:function (res) {
                             console.log(res);
                         },
                         error:function (error) {
                             console.log(error);
                         }
                     })

                     /*返回上一页*/
                     self.$router.go(-1);
                 }
             },
            deleteName(){
                this.nickName = '';
            }
        }
    }
</script>

<style>
    .nick_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .nick_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .fill_nick_name{
        height:2.815rem;
        background:rgba(255,255,255,1);
        margin-top: 1.065rem;
        padding:0 1.095rem;
        position: relative;
    }
    .fill_nick_name input{
        width: 60%;
        height: 2.815rem;
        border:none;
        outline: none;
        font-family: "PingFang-SC-Regular" !important;
        color: rgba(115,115,115,1);
        font-size: 1rem;
        margin-left:1.125rem;
    }
    .delete{
        position: absolute;
        right: 1rem;
        top: 1.03rem;
        z-index: 99;
    }
    .delete img{
        display: block;
        width: 0.78rem;
        height: 0.78rem;
    }
</style>
