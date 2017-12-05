<template>
    <div>
        <div class="fee_main">
            <div class="fee_table">
                <div class="fee_item">
                    <p>借款金额</p>
                    <p style="color: #FC7618;">{{userGetMoney}}.00元</p>
                </div>
                <div class="fee_item">
                    <p>借款期限</p>
                    <p style="color: #74CE79;">{{repayDate}}天</p>
                </div>
                <div class="fee_item three">
                    <p>借款费用</p>
                    <p style="color: #09A6E3;">{{feeAmount}}元</p>
                </div>
            </div>
            <div class="fee_list">
                <div class="choose">
                    <span>到账金额</span>
                    <div>
                        <div class="choose-btn" :style="loanAmount==500?styleActive:''"
                             @click="setLoanAmount(500)">
                            500
                            <img src="../myInfo/assets/choose.png" v-show="loanAmount==500">
                        </div>
                        <div class="choose-btn" :style="loanAmount==1000?styleActive:''"
                             @click="setLoanAmount(1000)">
                            1000
                            <img src="../myInfo/assets/choose.png" v-show="loanAmount==1000">
                        </div>
                    </div>
                </div>
                <div class="choose">
                    <span>借款期限</span>
                    <div>
                        <div class="choose-btn" :style="term==7?styleActive:''" @click="setTerm(7)">
                            <img src="../myInfo/assets/choose.png" v-show="term==7">
                            7天</div>
                        <div class="choose-btn" :style="term==14?styleActive:''" @click="setTerm(14)">
                            <img src="../myInfo/assets/choose.png" v-show="term==14">
                            14天</div>
                    </div>
                </div>
            </div>
            <div class="fee_des">费用说明</div>
            <div class="fee_detail">
                <div class="fee_detail_item">
                    <div class="first_title">一、贷款费用说明:</div>
                    <div class="second_con">
                        <p>借款日综合费率为{{data[3].key}}，综合年化费率{{data[2].key}}。</p>
                        <p>其中平台使用费由现金斗士收取；</p>
                        <p>代收利息由银行、信托、小额贷款、消费金融公司等公司收取。</p>
                        <p>支付系统服务费、审核服务费、风险评估费用由第三方机构收取。</p>
                    </div>
                </div>
                <div class="fee_detail_item">
                    <div class="first_title">二、逾期费用说明:</div>
                    <div class="second_con">
                        <p>未及时还款时会产生相应的贷后管理服务费,计算方式如下：</p>

                        <p>逾期 1～14天（含14天）  &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.5% * 剩余本金</p>
                        <p>逾期15～60天（含60天）  &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.75% * 剩余本金</p>
                        <p>逾期>60天               &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.85% * 剩余本金</p>
                        <p>若您未能在还款日当天24点前成功还款，平台将收取您1.00%平台维护费并加收贷后管理服务费（贷后管理服务费总计不超过剩余本金的50%），同时还会给您的信用额度造成影响！</p>
                    </div>
                </div>
                <div class="fee_detail_item">
                    <div class="first_title">三、友情提示：</div>
                    <div class="second_con">
                        <p> 出借人为银行、消费金融公司或其他合法合规的出借人，利率严格遵行法律规定，现金斗士平台不直接放贷。以上费用为区间参考标准，将根据借款人的信用状况、信用额度、借款期数等多因素进行相应浮动，具体以最终确认并签署的相关协议所载明内容为准。</p>
                        <p>请保持良好的还款习惯，否则会影响您在现金斗士的信用额度、审核通过率及信用评分。</p>
                    </div>
                </div>
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
                pdList:[],
                href:'',
                loanAmount:500,
                term: 7,
                styleActive:{
                    'border-color': '#1abc9c',
                    'color': '#1abc9c'
                },
                loanFee:'',
                data:[]
            }
        },

        computed:{
            userGetMoney(){
                let list = this.pdList;
                for(let i in list){
                    if(list[i].loanAmount == this.loanAmount
                        && list[i].loanPeriod == this.term)
                        return list[i].receivedAmount
                }
            },
            repayDate(){
                return this.term;
            },
            feeAmount(){
                let list = this.pdList;
                for(let i in list){
                    if(list[i].loanAmount == this.loanAmount
                        && list[i].loanPeriod == this.term)
                        return list[i].feeAmount
                }
            },
        },
        mounted(){
            this.getProductList();
            this.getDictList();
        },
        methods: {
            /* 获取产品列表 */
            getProductList(){
                let self = this;
                Lib.M.ajax({
                    type: 'get',
                    url : '/cash-account/loan/productList',
                    success:function (res){
                        console.log(res.code);
                        if(res.code == 200){
                            self.pdList = res.data;
                        }else{
                            self.$vux.toast.text(res.error,'middle')
                        }
                    }
                });
            },
            wechat(){
                this.$vux.alert.show({
                    content: '打开微信—通讯录—关注“现金斗士”公众号'})

            },
            setLoanAmount(amount){
                this.loanAmount = amount;
            },
            setTerm(term){
                this.term = term;
            },
            getDictList(){
                var self = this;
                Lib.M.ajax({
                    type:'get',
                    url:'cash-account/loan/getDictList',
                    success:function(res){
                        console.log(res)
                        self.data = res.data;
                    }
                })
            },

        }
    }

</script>

<style>

    .fee_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .fee_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .fee_table{
        display: flex;
        flex-direction: row;
        margin-top: 0.1rem;
    }
    .fee_item{
        flex: 1;
        text-align: center;
        height:5.63rem;
        background:rgba(250,250,250,1);

    }
    .fee_item p{
        height:2.815rem;
        border-bottom: 0.03rem solid #E0E0E0;
        line-height: 2.815rem;

        font-size:0.815rem;
        font-family:PingFangSC-Light;
        color:rgba(0,0,0,1);
    }
    .fee_item p:nth-of-type(2){
        font-size:1rem;
    }
    .fee_item :not(.three){
        border-right: 0.03rem solid #E0E0E0;
    }
    .fee_list{
        width: 100%;
        height:7.065rem;
        background: #fff;
        border-bottom: solid 1px #E0E0E0;
    }
    .choose{
        box-sizing: border-box;
        padding: 0px 7px;
        width: 21.43rem;
        margin:0 auto;
        height: 3.5325rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .choose>span{
        color: #4d4d4d;
        font-size: 0.94rem;
    }
    .choose>div{
        display: flex;
        font-size: 0.875rem;
    }
    .choose-btn{
        margin-left: 0.875rem;
        position: relative;
        width: 3.75rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        border: solid 1px #c2c2c2 ;
        border-radius: 3px;
    }
    .choose-btn>img{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0.565rem;
        height: 0.53rem;
    }
    .fee_des{
        height:2.5rem;
        background:rgba(250,250,250,1);
        line-height: 2.5rem;
        font-size:0.815rem;
        font-family:PingFangSC-Regular;
        color:rgba(153,153,153,1);
        padding-left: 1rem;
    }
    .fee_detail{
        width: 100%;
        background: #fff;
        height: 45rem;
    }
    .fee_detail_item{
        padding: 0 1rem;
        font-family:PingFangSC-Regular;
        font-size:0.815rem;
    }
    .fee_detail_item .first_title{
        color: #1ABC9C;
        line-height:2rem;
    }
    .fee_detail_item .second_con{
        color: #666;
        line-height:1.5rem;
        text-indent: 2em;
    }
</style>
