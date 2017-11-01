<template>
    <div>
        <div class="fee_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="../myInfo/assets/back.png" alt=""></span>
            <span>费用计算</span>
        </div>
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
                   <p style="color: #09A6E3;">{{loanAmount*term*0.01}}元</p>
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
                   <div class="first_title">一、贷款费用说明</div>
                   <div class="second_con">
                       现金斗士的贷后综合费用，按实际的贷款天数收取，低至万分之6/天，年利率最高不超过36%，实际利率将根据您的资料确定。期限为1个月，假如您在本月18号贷款，需在次月17号前还清贷款。可提前还款，利息按实际贷款天数收取。
                   </div>
               </div>
               <div class="fee_detail_item">
                   <div class="first_title">二、逾期费用说明</div>
                   <div class="second_con">

                       当您贷款超过一个月仍未还款时，我们将根据贷款金额的不同，按日收取逾期综合费用。收取规则如下：
                       <br>
                       <br>
                       逾期后，应还金额为：贷款金额 + 贷款金额 * 0.06% * 借款天数 + 逾期综合费用。
                   </div>
               </div>
               <div class="fee_detail_item">
                   <div class="first_title">三、逾期费用说明</div>
                   <div class="second_con">
                       请保持良好的还款习惯，否则将影响您在现金都是的信用额度、贷款申请通过率及人行征信的信用评分。
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
        href:'',
        loanAmount:500,
        term: 7,
        loanFee:''
    }
  },
    computed:{
        userGetMoney(){
            return this.loanAmount
        },
        repayDate(){
            return this.term
        },

    },
  methods: {
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
        width:100%;
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
        line-height:1.155rem;
        text-indent: 2em;
    }
</style>
