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
                       <p> 现金斗士的贷后综合费用按实际的天数收取，利息低至0.05%/天，年利率最高不超过20%。</p>
                       <p>用户借款须支付信用认证费，每笔2-5元/周/100元；</p>
                       <p>居间服务费为1-3元/周/100元（单笔上限50元/周，用于平台运营）</p>
                   </div>
               </div>
               <div class="fee_detail_item">
                   <div class="first_title">二、逾期费用说明</div>
                   <div class="second_con">
                       <p>未及时还款时会产生相应的逾期违约金,计算方式如下：</p>

                       <p>逾期 1～14天（含14天） &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.5% * 剩余本金</p>
                       <p>逾期15～60天（含60天） &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.75% * 剩余本金</p>
                       <p>逾期>60天             &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.85% * 剩余本金</p>
                   </div>
               </div>
               <div class="fee_detail_item">
                   <div class="first_title">三、逾期费用说明</div>
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
        href:'',
        loanAmount:500,
        term: 7,
        styleActive:{
            'border-color': '#1abc9c',
            'color': '#1abc9c'
        },
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
        height: 35rem;
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
