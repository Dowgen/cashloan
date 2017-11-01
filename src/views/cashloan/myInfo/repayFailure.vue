<template>
    <div>
        <div class="failure_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:1.125rem;height: 1.155rem;display: inline-block;" src="./assets/back2.png" alt=""></span>
        </div>
       <div class="failure_main">
           <div class="failure_alert"><img src="./assets/alert.png" alt=""></div>
           <p>还款失败</p>
           <p>银行卡余额不足或网络原因，无法完成还款</p>
           <p>请确保余额充足，在进行还款</p>
       </div>
        <div class="repay_btn">继续还款</div>


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
    }
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

    .failure_head{
        height:3rem;
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .failure_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .failure_main{
        width: 100%;
        margin: 7.155rem auto 0;
        text-align: center;
        font-family:PingFangSC-Regular;
        color:rgba(115,115,115,1);
        font-size:0.815rem;
        line-height:1.3rem;

    }
    .failure_alert{
        margin: 0 auto;

    }
    .failure_alert img{
        width: 4.655rem;
        height: 4.655rem;
    }
    .failure_main p:nth-of-type(1){
        font-size:1rem;
        line-height:2rem;
        margin-bottom: 0.8rem;
    }
    .repay_btn{
        width:21.065rem;
        height:2.75rem;
        background:rgba(26,188,156,1);
        border-radius: 0.315rem ;
        margin:2rem auto;
        text-align: center;
        color: #fff;
        font-size: 1.125rem;
        line-height: 2.75rem;
    }
</style>
