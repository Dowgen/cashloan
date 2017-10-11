<template>
    <div class="wrapper" style="background-image: url('../../static/img/loan_detail_head_bg.png');">
        <div class="about_loan">
            <div class="head">
                <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back_white.png" alt=""></span>
                <p>借单详情</p>
            </div>
            <div v-show="loanStatus==1 || loanStatus==2 || loanStatus==3">
                <p>借款周期</p>
                <p style="font-size: 2.515rem">{{loanDetail.loanPeriod}}<span style="font-size: 1.125rem">天</span></p>
                <p>下款后请及时确认还款时间避免逾期风险</p>
            </div>
            <div v-show="loanStatus==4">
                <p>距离还款日</p>
                <p style="font-size: 2.515rem">{{toPayDay}}<span style="font-size: 1.125rem">天</span></p>
                <p>请确保及时还款以保持您的良好信用记录</p>
            </div>
            <div v-show="loanStatus==4 && loanDetail.isOverdue == 1">
                <p>逾期天数</p>
                <p style="font-size: 2.515rem">{{overDueDay}}<span style="font-size: 1.125rem">天</span></p>
                <p>请确保及时还款以保持您的良好信用记录</p>
            </div>
        </div>
        <div class="loan_detail">
            <ul v-show="sShow">
                <li>
                    <span>借款日</span>
                    <span>{{loanDate}}</span>
                </li>
                <li>
                    <span>还款日</span>
                    <span style="color: rgba(255,142,103,1)">{{repayDate}} <span class="question" v-show="loanStatus==1 || loanStatus==2 ||loanStatus==3" @click="isShowOf()"></span></span>
                </li>
                <li>
                    <span>到账金额</span>
                    <span style="margin-left: 5.75rem;">{{loanDetail.receivedAmount}}元</span>
                </li>
                <li>
                    <span>借款费用</span>
                    <span style="margin-left: 5.75rem;">{{loanDetail.feeAmount}}元</span>
                </li>
                <li v-show="loanStatus==4 && loanDetail.isOverdue == 1">
                    <span>逾期罚息</span>
                    <span style="margin-left: 5.75rem;">{{loanDetail.receivedAmount+loanDetail.penaltInterest}}元</span>
                </li>
                <li>
                    <span>应还金额</span>
                    <span style="margin-left: 5.75rem;">{{loanDetail.receivedAmount+loanDetail.penaltInterest}}元</span>
                </li>
            </ul>
            <div class="instruction" v-show="loanStatus == 1">正在审核中...</div>
            <div class="instruction" v-show="loanStatus == 2">借款失败</div>
            <div class="instruction" v-show="loanStatus == 3">下款成功</div>
            <!-- <div class="instruction">立即还款</div> -->
            <form v-show="loanStatus == 4" action="https://wap.lianlianpay.com/installment.htm" method="post">
                <input name="req_data" :value="backParams"/>
                <input type="submit" value="立即还款"/>
            </form>
        </div>

        <div class="aboutPayTime" v-show="isShow">
            <div>
                <p>关于还款日期</p>
                <p>还款日期以下款当日开始计算，到还款日期系统会从用户绑定的银行卡中自动扣款。您也可以在还款日18:00前通过储蓄卡主动还款，以免产生逾期费并影响您的信用评级。
                </p>
                <p @click="close()">我知道了</p>
            </div>
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
                loanStatus:'',
                loanDetail:{},
                repayDate:'',
                loanDate:'',
                repayDateReal:'',
                toPayDay:'',
                overDueDay:'',
                isShow:false,
                sShow:true,
                userInfo:{},
                backParams:{}
            }
        },
        mounted(){
            this.userInfo = JSON.parse(localStorage.userInfo);
            this.getLoanStatus();
            this.getRepayParams();
        },
        methods: {
            /* 得到绑卡所需参数 */
            getRepayParams(){
                var self = this;
                Lib.M.ajax({
                    url : 'pay/repayment/wapRequestDataForPay',
                    headers:{
                      'Authorization':'Bearer '+ self.userInfo.token,
                      'authKey':self.userInfo.authKey,
                      'sessionId':self.userInfo.sessionId,
                      'phone':self.userInfo.userInfo.phone
                    },
                    data:{
                        user_id:self.userInfo.userInfo.userId,
                        phone_num:self.userInfo.userInfo.phone,
                        register_time: self.userInfo.idInfo.create_time,
                        id_no: self.userInfo.idInfo.idCardNumber,
                        acct_name: self.userInfo.idInfo.name,
                        money_order: '0.01',
                        oid_business: 'JHCL171009204631259180',
                        url_return: 'https://moneyboom.cn/views/cashloan/myInfo.html#/loanDetail'
                    },
                    success:function(data){
                        /*console.log('backParams:'+JSON.stringify(data.data))*/
                        self.backParams = JSON.stringify(data.data);
                    }
                });
            },
            repay(){
            },
            isShowOf(){
                this.isShow = true;
                this.sShow = false;
            },
            close(){
                this.isShow = false;
                this.sShow = true;
            },
            getLoanStatus(){
                var self = this;
                Lib.M.ajax({
                    type:'GET',
                    url:'cash-account/loan/getOne/'+self.$route.query.orderId,
                    headers:{
                        'Authorization':'Bearer '+ self.userInfo.token,
                        'authKey':self.userInfo.authKey,
                        'sessionId':self.userInfo.sessionId,
                        'phone':self.userInfo.userInfo.phone
                    },
                    success:function (res) {
                        /*console.log(res);*/
                        self.loanDetail = res.data;
                        self.loanStatus = res.data.loanStatus;
                        self.loanDate = res.data.loanDate;
                        self.repayDate = res.data.repayDate;
                        self.repayDateReal = res.data.repayDateReal;
                        console.log(self.loanDate.split(' ')[0].replace(/-/g, "/"));
                        const loanTime = Date.parse(new Date(self.loanDate));
                        const repayTime = Date.parse(new Date(self.repayDate));
                        const repayRealTime = Date.parse(new Date(self.repayDateReal));
                        //计算距离还款日
                        self.toPayDay = Math.ceil((repayTime -loanTime)/1000/60/60/24) ;
                        //判断实际还款日期和还款日期，计算出逾期天数
                        if(repayRealTime > repayTime ){
                            self.overDueDay = Math.ceil((repayRealTime -repayTime)/1000/60/60/24) ;
                        }
                        self.loanDate = self.loanDate.split(' ')[0].replace(/-/g, "/")
                        self.repayDate = self.repayDate.split(' ')[0].replace(/-/g, "/")
                    }
                })
            }
        }
    }
</script>
<style scoped>
    form>input{
        visibility: hidden;
    }
    form>input[type="submit"]{
        visibility: visible;
        width: 100%;
        height: 2.75rem;
        background: rgba(26,188,156,1);
        opacity: 0.66;
        border-radius: 0.315rem;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        line-height: 2.75rem;
        font-size: 1.125rem;
        color: #fff;
        overflow: hidden;
        border-width: 0;
        outline: 0;
        -webkit-appearance: none;
    }
</style>
<style>
    em{
        font-style: normal
    }
    body{
        position: relative;
    }
    .wrapper{
        background-image: url('./assets/loan_detail_head_bg.png');
    }
    .about_loan{
        width: 100%;
        height: 14.405rem;
        overflow: hidden;
    }
    .head{
        width: 100%;
        height: 1.25rem;
        color: #fff;
        position: relative;
        margin-top: 2.265rem;
    }
    .head p{
        font-size:1.065rem;
        text-align: center;
    }
    .head span{
        font-size:1.8rem;
        position: absolute;
        left: 1.44rem;
        line-height: 1.06rem;
    }
    .about_loan div:not(:first-child){
        text-align: center;
        color: rgba(242,242,242,1);
        font-size:0.875rem;
        margin-top: 3.22rem;
        margin-bottom: 1.125rem;
    }
    .loan_detail{
        width:21.44rem;
        height:23.125rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        font-size: 1rem;
        position: absolute;
        left: 50%;
        top: 12.94rem;
        margin-left: -10.72rem;
    }
    .loan_detail ul{
        margin-top: 1rem;
        height: 18rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .loan_detail li{
        
    }
    .loan_detail span:nth-of-type(1){
        margin-left: 1.28rem;
    }
    .loan_detail span:nth-of-type(2){
        margin-left: 6.905rem;
        position: relative;
    }
    .instruction{
        width: 100%;
        height:2.75rem;
        background:rgba(26,188,156,1);
        opacity:0.66;
        border-radius: 0.315rem ;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        line-height: 2.75rem;
        font-size:1.125rem;
        color:#fff;
    }
    .question{
        display: inline-block;
        width: 1.095rem;
        height: 1.095rem;
        background: url("./assets/question.png");
        background-size: cover;
        position: absolute;
        left: 5rem;
        top: 0.15rem;
    }
    .aboutPayTime{
        width:100%;
        height:41.69rem;
        background:rgba(0,0,0,1);
        opacity:0.58;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 888;
    }
    .aboutPayTime>div{
        width:21.25rem;
        height:16.22rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin:auto;
        text-align: center;
    }
    .aboutPayTime>div p:nth-of-type(1){
        height: 2rem;
        font-size: 0.94rem;
        line-height: 2rem;
        color: rgba(136,136,136,1);
        margin-top: 1rem;
        border-bottom: 1px solid #C6C6C6;
    }
    .aboutPayTime>div p:nth-of-type(2){
        text-align: left;
        font-size: 0.815rem;
        color: #000;
        margin:2rem 1.345rem 1rem 1.345rem;
        line-height: 1.3rem;
    }
    .aboutPayTime>div p:nth-of-type(3){
        border-top: 1px solid #C6C6C6;
        font-size: 1rem;
        color: rgba(26,188,156,1);
        margin:1.6rem auto 1rem;
        line-height: 3rem;
    }
</style>

