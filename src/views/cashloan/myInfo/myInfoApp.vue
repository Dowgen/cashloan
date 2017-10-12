<template>
    <div class="myInFo">
        <div class="head">
            <p>我的</p>
            <img @click="jumpToSetCenter" class="set" src="./assets/set.png" alt="">
        </div>

        <div class="mainInfo">
            <div class="aboutMyInfo">
                <div style="height: 3.15rem" v-cloak  @click="jumpToFillInfo">
                    <dl>
                        <dt class="fl">
                            <img v-show="noAvatar" class="avatar" src="./assets/headshot.png">
                            <img v-show="!noAvatar" class="avatar" :src="img_id">
                        </dt>
                        <dd class="fl" v-cloak>
                            <p style="font-size: 1rem">您好，{{userInfo.userName || '用户'}}</p>
                            <p>{{userInfo.phone.substr(0, 3)}}****{{userInfo.phone.substr(7)}}</p>
                        </dd>

                    </dl>
                    <span><img  class="arrow" src="./assets/arrow.png" alt=""></span>
                </div>
                <div class="money_limit">
                    <p>最高额度(元) 1000</p>
                    <p><!--最高额度(元)--> <a href="/views/cashloan/mainPage.html">去借款</a></p>
                </div>
            </div>

            <div class="repayment" v-if="loanStatus==1 ||loanStatus==2||loanStatus==3||loanStatus==4">
                <div class="reviewing_pay public special" v-show="loanStatus==1" @click="jumpToLoanDetail">
                    <p>审核中(1)</p>
                    <p class="special_p">
                        <span>¥{{processLoan.receivedAmount}}.00 <em>{{processLoan.payDate }}00</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="overdue_pay active public" v-show="loanStatus==2"  @click="jumpToLoanDetail">
                    <p>借款单(1)</p>
                    <p style="margin-top: 1.25rem">共有1笔借款申请<span><em style="color: rgba(250,131,131,1);">借款失败</em> <img  class="arrow" src="./assets/arrow.png" alt=""></span></p>
                </div>
                <div class="reviewing_pay public special" v-show="loanStatus==3"  @click="jumpToLoanDetail">
                    <p>已下款(1)</p>
                    <p class="special_p">
                        <span>¥{{processLoan.receivedAmount}}.00 <em>{{processLoan.payDate}}00</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="waiting_pay public special" v-show="loanStatus==4"  @click="jumpToLoanDetail">
                    <p>待还款(1)</p>
                    <p class="special_p">
                        <span>¥{{processLoan.receivedAmount}}.00 <em>{{processLoan.payDate}}00</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="overdue_pay active public" v-show="loanStatus==4 &&processLoan.isOverdue==1" @click="jumpToLoanDetail">
                    <p>待还款(1)</p>
                    <p style="margin-top: 1.25rem">1笔借款已完成还款 <span><em style="color: rgba(250,131,131,1);">已逾期</em> <img  class="arrow" src="./assets/arrow.png" alt=""></span></p>
                </div>
                <!--<div class="completed_pay" v-show="loanStatus==5">
                </div>-->
            </div>

            <div class="loan_record active public" @click="jumpToLoanRecord">
                <p>借款记录</p>
                <p style="margin-top: 1.25rem">
                    共{{loanLength}}笔借款待还
                    <span v-show="loanLength !== 0"><img  class="arrow" src="./assets/arrow.png" alt=""></span>
                </p>
            </div>
        </div>

        <main-nav></main-nav>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import MainNav from 'components/mainNav'

    export default {
        name: 'add',
        components: {
            MainNav
        },
        data () {
            return {
                isOverDue:'',
                payDeatil:'',
                loanStatus:'',
                userInfo:{},
                token:'',
                loanLength:0,
                img_id: '',
                noAvatar: true,
                processLoan:{},
                localUserInfo:{},
                orderId:''
                /*isReviewingPay:1审核中,借款失败2，已下款3，isWaitingPay:4待还款,isOverduePay:4已逾期,isCompletedPay:已还款5,*/
            }
        },
        mounted(){
            this.localUserInfo = JSON.parse(localStorage.userInfo);
            /*this.getToken();*/
            this.getInfo();
            this.getOrderStatus();
            this.getAllRecord();
            this.getImg();
        },
        methods: {
           /* getToken(){
                var self = this;
                Lib.M.ajax({
                    url : '/uaa/oauth/token',
                    headers: {
                        Accept:'application/json',
                        Authorization:'Basic Y2xpZW50OnNlY3JldA=='
                    },
                    params:{
                        username:'juhe',
                        password:'Juhe2017!@#',
                        grant_type:'password',
                        scope:'read write'
                    },
                    success:function(data){
                        self.token = data.access_token;
                        把token放入 vuex 
                        self.$store.commit('changeToken',data.access_token)
                        self.getInfo();
                        self.getOrderStatus();
                        self.getAllRecord();
                        self.getImg();
                    },
                    error:function(err){
                        console.error(err);
                    }
                });
          }, */
            getInfo(){
                var self = this;
                Lib.M.ajax({
                    type:'GET',
                    url:'cash-account/user/account/accountInfo/'+self.localUserInfo.userInfo.phone,
                    success:function (res) {
                        /*console.log(res);*/
                        self.userInfo = res.data.userInfo;
                        localStorage.userInfo = JSON.stringify(res.data)
                    }

                })
            },
            getOrderStatus(){
                var self = this;
                Lib.M.ajax({
                    type:'GET',
                    url:'cash-account/loan/getAllProcessing/'+self.localUserInfo.userInfo.userId,
                    success:function (res) {
                        console.log('这是getallprocessing');
                        console.log(res);
                       if(res.data.length != 0){
                           console.log('这里有数据');
                           self.processLoan = res.data[0];
                           self.loanStatus = res.data[0].loanStatus;
                           self.orderId = res.data[0].orderId;
                           console.log(self.loanStatus);
                           console.log('1111');
                       }

                    }
                })
            },
            getAllRecord(){
                var self = this;
                Lib.M.ajax({
                    type:'GET',
                    url:'cash-account/loan/getAllEnd/'+self.localUserInfo.userInfo.userId,
                    success:function (res) {
                        /*console.log(res);*/
                        self.loanLength = res.data.length;
                        console.log(self.loanLength);
                    }
                })
            },
            getImg(){
                var self = this;
                Lib.M.ajax({
                    type:'get',
                    url:'cash-account/user/account/getIconImage/'+self.localUserInfo.userInfo.phone,
                    dataType:'blob',
                    success:function (res) {
                        console.log('getImage:');
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
            jumpToLoanDetail(){
                this.$router.push({path:'/loanDetail',query:{orderId:this.orderId}});

            },
            jumpToLoanRecord(){
                console.log('loanLength:'+ this.loanLength)
                if(this.loanLength !== 0){
                    this.$router.push({path:'/loanRecord',query:{}});
                }

            },
            jumpToFillInfo(){
                this.$router.push({path:'/fillMyInfo',query:{}});
            },
            jumpToSetCenter(){
                this.$router.push({path:'/setCenter',query:{}});
            },

        }
    }
</script>

<style>
    .avatar{
        width: 3.25rem;
        height: 3.25rem;
        display: block;
        border-radius: 50%;
    }
    em{
        font-style: normal
    }
    .fl{
        float: left;
    }
    .arrow{
        display: inline-block;
        width: 0.5rem;
        height: 0.815rem;
        float: right;
    }
    .myInFo{
        overflow: hidden;
    }
    .myInFo .head{
        width: 100%;
        height: 8.81rem !important;
        background:rgba(26,188,156,1);
        color: #fff;
        position: relative;
        font-weight: bold;
        padding-top: 2.19rem;
        margin-top: 0;
        font-size:1.065rem;
        text-align: center;
        line-height: 1rem;
    }

    .myInFo .head .set{
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        right: 1.44rem;
        top: 2.1rem;
    }
    .mainInfo{
        position: relative;
        margin-top: -4.515rem;

    }
    .mainInfo>div{
        width:18.53rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        padding:0.78rem 1.52rem 1.315rem 1.155rem;
        margin:0 auto 1rem;
    }

    .mainInfo .aboutMyInfo{
        height:7.03rem;
    }
    .mainInfo .aboutMyInfo dd{
        margin-left: 0.815rem;
        font-size: 0.815rem;
        color: rgba(105,105,105,1);
        margin-top:0.35rem;
        line-height: 1.6rem;
    }
    .mainInfo .aboutMyInfo span img{
        margin-top:1.375rem;
    }
    .mainInfo .aboutMyInfo .money_limit{
        margin-top:1.25rem;
        line-height: 1.4rem;
    }
    .money_limit p:nth-of-type(1){
        font-size: 0.94rem;
        color: rgba(77,77,77,1);
    }
    .money_limit p:nth-of-type(2){
        font-size: 0.815rem;
        color: rgba(181,181,181,1);
    }
    .money_limit p:nth-of-type(2) a{
        display: inline-block;
        float: right;
        font-size: 0.94rem;
        color: rgba(26,188,156,1);

        width:4.375rem;
        height:1.565rem;
        border: 1px solid rgba(26,188,156,1);
        border-radius: 0.315rem ;
        text-align: center;
        line-height: 1.565rem;

    }

    .public{
        height:5.19rem;
    }
    .active p:nth-of-type(1){
        font-size:0.875rem;
        color: rgba(194,194,194,1);
    }
    .active p:nth-of-type(2){
        font-size:0.94rem;
        color:rgba(77,77,77,1);
        position: relative;
    }
    .active p:nth-of-type(2) span{
        position: absolute;
        border-radius: 0.045rem ;
        right: 1.165rem;
    }

    .repayment .reviewing_pay,.repayment .waiting_pay{
        height:6.81rem;
        overflow:visible;
    }
    .overdue_pay,.failed_pay{
        height: 3.095rem;
    }
    .overdue_pay img,.failed_pay img{
        margin-right: -1.2rem;
        margin-top:-1rem;
    }
    .special{
        position: relative;
    }
    .special .special_p{
        width:18.67rem;
        height:4.37rem;
        background: #ededed;
        position: absolute;
        left: -1.2rem;
        top: 1.875em;
        padding:0.6rem 1.52rem 0 1.155rem;
    }
    .special .special_p span:nth-of-type(1){
        display: block;
        font-size:0.94rem;
        color:rgba(255,142,103,1);
        margin-top: 0.65rem;
    }
    .special .special_p em{
        float: right;
    }
    .special .special_p a{
        display: block;
        font-size:0.875rem;
        color:rgba(77,77,77,1);
        margin:0.72rem auto 0;

    }

    .mainInfo .loan_record{
        height: 3.095rem;
    }
    .mainInfo .loan_record span img{
        margin-right: -1.2rem;
        margin-top:0.25rem;
    }
</style>
