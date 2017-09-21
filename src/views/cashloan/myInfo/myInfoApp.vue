<template>
    <div class="myInFo">
        <div class="head">
            <p>我的</p>
            <img @click="jumpToSetCenter" class="set" src="./assets/set.png" alt="">
        </div>

        <div class="mainInfo">
            <div class="aboutMyInfo">
                <div style="height: 3.15rem">
                    <dl>
                        <dt class="fl" @click="jumpToFillInfo"><img style="width: 3.25rem;height: 3.25rem;display: block;" src="./assets/pic_headshot.png" alt=""></dt>
                        <dd class="fl">
                            <p style="font-size: 1rem">您好，张均瑞</p>
                            <p>150****1352</p>
                        </dd>

                    </dl>
                    <!--<span><img  class="arrow" src="./assets/arrow.png" alt=""></span>-->
                </div>
                <div class="money_limit">
                    <p>可用额度(元) 1000</p>
                    <p>最高额度(元) 1000 <a href="mainPage.html">去借款</a></p>
                </div>
            </div>

            <div class="repayment" v-show="repayStatus!==6" >
                <div class="reviewing_pay public special" v-show="repayStatus==0">
                    <p>审核中</p>
                    <p class="special_p">
                        <span>¥1000.00 <em>2019/09/06</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="overdue_pay active public" v-show="repayStatus==1"  @click="jumpToLoanDetail">
                    <p>借款单(1)</p>
                    <p style="margin-top: 1.25rem">共有1笔借款申请<span><em style="color: rgba(250,131,131,1);">借款失败</em> <img  class="arrow" src="./assets/arrow.png" alt=""></span></p>
                </div>
                <div class="reviewing_pay public special" v-show="repayStatus==2"  @click="jumpToLoanDetail">
                    <p>已下款</p>
                    <p class="special_p">
                        <span>¥1000.00 <em>2019/09/06</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="waiting_pay public special" v-show="repayStatus==3"  @click="jumpToLoanDetail">
                    <p>待还款</p>
                    <p class="special_p">
                        <span>¥1000.00 <em>2019/09/06</em></span>
                        <span>还款金额 <em>应还款日期</em></span>
                    </p>
                </div>
                <div class="overdue_pay active public" v-show="repayStatus==4"  @click="jumpToLoanDetail">
                    <p>借款记录(1)</p>
                    <p style="margin-top: 1.25rem">1笔借款已完成还款 <span><em style="color: rgba(250,131,131,1);">已逾期</em> <img  class="arrow" src="./assets/arrow.png" alt=""></span></p>
                </div>
                <div class="failed_pay active public" v-show="repayStatus==5">
                    <p>借款记录(1)</p>
                    <p style="margin-top: 1.25rem">1笔借款已完成还款 <span><em style="color: rgba(250,131,131,1);font-style: normal">还款失败</em> <img  class="arrow" src="./assets/arrow.png" alt=""></span></p>
                </div>
                <!--<div class="completed_pay" v-show="repayStatus==6">
                </div>-->
            </div>

            <div class="loan_record active public" @click="jumpToLoanRecord">
                <p>借款记录</p>
                <p style="margin-top: 1.25rem">
                    共1笔借款待还
                    <span><img  class="arrow" src="./assets/arrow.png" alt=""></span>
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
                payDeatil:'',
                repayStatus:1,
                /*isReviewingPay:0审核中,已下款1，
                isWaitingPay:2待还款,
                isOverduePay:3已逾期,
                isFailedPay:4还款失败,
                isCompletedPay:5,*/
            }
        },
        methods: {
            jumpToLoanDetail(){
                this.$router.push({path:'/loanDetail',query:{payDeatil:this.payDeatil}});
            },
            jumpToLoanRecord(){
                this.$router.push({path:'/loanRecord',query:{}});
            },
            jumpToFillInfo(){
                this.$router.push({path:'/fillMyInfo',query:{}});
            },
            jumpToSetCenter(){
                this.$router.push({path:'/setCenter',query:{}});
            }
        }
    }
</script>

<style>
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
        height:6.355rem;
    }
    .mainInfo .aboutMyInfo dd{
        margin-left: 0.815rem;
        font-size: 0.815rem;
        color: rgba(105,105,105,1);
        margin-top:0.35rem;
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
        float: right;
        font-size: 0.94rem;
        color: rgba(26,188,156,1);
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
