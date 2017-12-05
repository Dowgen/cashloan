<template>
  <div>
    <div style="background:white;height:33.69rem">
        <!--<assets src="./assets/banner_new.png"> auto-->
          <!--<swiper loop :list="demo03_list" auto style="width:80%;margin:0 auto;" height="9.375rem !important" dots-class="custom-bottom" dots-position="center"></swiper>-->
      <v-touch class="banner" v-on:swipe="onSwipe" style="position: relative;">
        <div v-for='(item,index) in items' :class='item.class'>
          <a href="#">
            <img :src="item.img">
          </a>
        </div>
        <div class="indicator">
          <span v-for="(item,index) in items" :class="{'active':index===currentIndex}"> <!--{{index+1}}--> </span>
        </div>
      </v-touch>

      <div class="choose" style="margin-top:1rem">
        <span>到账金额</span>
        <div>
        <div class="choose-btn" :style="loanAmount==500?styleActive:''" 
         @click="setLoanAmount(500)">
          500
          <img src="./assets/choose.png" v-show="loanAmount==500">
        </div>
        <div class="choose-btn" :style="loanAmount==1000?styleActive:''"
          @click="setLoanAmount(1000)">
          1000
          <img src="./assets/choose.png" v-show="loanAmount==1000">
        </div>
        </div>
      </div>
      <div class="choose" style="margin-top:1rem">
        <span>借款期限</span>
        <div>
        <div class="choose-btn" :style="term==7?styleActive:''" @click="setTerm(7)">
          <img src="./assets/choose.png" v-show="term==7">
          7天</div>
        <div class="choose-btn" :style="term==14?styleActive:''" @click="setTerm(14)">
          <img src="./assets/choose.png" v-show="term==14">
          14天</div>
        </div>
      </div>
      <div class="table thead">
        <span>到帐金额(元)</span>
        <span>还款日期</span>
        <span>到期应还(元)</span>
      </div>
      <div class="table tbody">
        <span>{{userGetMoney}}</span>
        <span>{{repayDate}}</span>
        <span>{{shouldPay}}<img @click="toCostAccount" style="width: 0.875rem;height: 0.875rem;margin-left: 0.3rem;display: inline-block;" src="./assets/question.png" alt=""></span>
      </div>
      <author-button page="mainPage" text="立即申请" marginTop="3.065"></author-button>
    </div>
    <main-nav which="mainPage"></main-nav>
    <loading :show="loading" :text="loadText"></loading>

    <img src="./assets/banner1.png" style="display:none;">
    <img src="./assets/banner2.png" style="display:none;">
    <img src="./assets/banner3.png" style="display:none;">
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
/*import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'*/

import { Loading, XButton, Confirm,Swiper } from 'vux'

import MainNav from 'components/mainNav'
import authorButton from 'components/authorButton'

const imgList = [
    '/static/assets/banner1.png',
    '/static/assets/banner2.png',
    '/static/assets/banner3.png',

]
const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
}))


export default {
  name: 'add',	
  components: {
    MainNav, Loading, XButton, Confirm, authorButton,Swiper
  },
  data () {
    return {
      pdList: [],
      show: false,
      loanAmount:500,
      term: 7,
      styleActive:{
        'border-color': '#1abc9c',
        'color': '#1abc9c'
      },
      userInfo:{},
      loading: false,
      loadText: '请稍等',
     /* demo06_list: urlList,
      demo06_index: 0,*/
        demo03_list: demoList,
        items:[
            {'class':'no0','img':'/static/assets/banner1.png'},
            {'class':'no1','img':'/static/assets/banner2.png'},
            {'class':'no2','img':'/static/assets/banner3.png'}

        ],
        currentIndex: 1,
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
    shouldPay(){
      let list = this.pdList;
      for(let i in list){
        if(list[i].loanAmount == this.loanAmount 
            && list[i].loanPeriod == this.term)
          return list[i].shouldPay
      }
    },
    repayDate(){
      let date = new Date(new Date().getTime() + this.term*24*60*60*1000)
      let year = date.getFullYear();
      let month = date.getMonth()+1; //0 === 1月 1===2月，因此+1
      let day = date.getDate();
      return year+'/'+month+'/'+day;
    }
  },
  mounted(){
    this.getProductList(); //获取产品列表
    var that = this;
    document.getElementsByTagName('body')[0].style.paddingBottom = '3.065rem';
      that.userInfo = JSON.parse(localStorage.userInfo);
    if(document.referrer.indexOf('megvii.com')!= -1){
        that.face_getResult();
    }else if(document.referrer.indexOf('lianlianpay.com')){
        that.isBindCard();
    }

    setInterval(function () {
        that.onSwipeRight();
    },4000)
  },
  methods: {
      onSwipe:function(event,index){

          console.log(index);
          console.log(event);
          if(event.direction === 4){
              this.onSwipeLeft();

          }else if(event.direction === 2){
              this.onSwipeRight();
          }
         /* this.change(index);*/
      },
      onSwipeRight:function(){
          var temp = this.items[0].class;
          for(var i = 0; i < this.items.length-1; i++){
              this.items[i].class = this.items[i+1].class
          }
          this.items[this.items.length-1].class = temp;
          console.log(this.items);
          for(var i = 0; i < this.items.length; i++){ // 通过循环找到no1的位置，index就是此时active的index
              if(this.items[i].class === 'no1'){
                  this.currentIndex = this.items.length - i - 1;
              }
          }

      },
      onSwipeLeft:function(){

          var temp = this.items[this.items.length-1].class;
          for(var i = this.items.length-1; i > 0; i--){
              this.items[i].class = this.items[i-1].class
          }
          this.items[0].class = temp;
          console.log(this.items);
        /*  for(var i = 0; i < this.items.length; i++){     // 通过循环找到no1的位置，index就是此时active的index
              if(this.items[i].class === 'no1'){
                  this.currentIndex = i;
              }
          }*/
          for(var i = 0; i < this.items.length; i++){ // 通过循环找到no1的位置，index就是此时active的index
              if(this.items[i].class === 'no1'){
                  this.currentIndex = this.items.length - i - 1;
              }
          }

      },
      toCostAccount(){
          this.$router.push({path:'/costAccount',query:{}});
      },
      demo06_onIndexChange (index) {
          this.demo06_index = index
      },
      setLoanAmount(amount){
        this.loanAmount = amount;
      },
      setTerm(term){
        this.term = term;
      },
      /* 触发后台拿到face++认证 */
      face_getResult(){
      var self = this;
      self.loading = true
      Lib.M.ajax({
        url : '/risk-manage/faceid/getResult',
        params:{
          user_id: self.userInfo.userInfo.userId,
          biz_id: JSON.parse(localStorage.faceReturn).biz_id
        },
        success:function (data){
          self.loading = false;
          if(data.code=='200'){
            self.$vux.alert.show({
              content: '实名认证成功!',
              onShow () {
                console.log('Plugin: I\'m showing')
              },
              onHide () {
                self.$router.push('./confirmRent')
              }
            })
          }else{
            self.$vux.alert.show({
              content: '实名认证失败，请重试!'
            })
          }
        }
      });
    },
      /* 判断是否绑定了银行卡，如果绑定了的话就推一下后端 */
      isBindCard(){
        var self = this;
        console.log(self.$route.query.status)
        if( self.$route.query.status == null){
          /* 没绑卡，啥也不干 */
        }else{
          /* 绑了判断一下是成功还是失败 */
          if(self.$route.query.status=='0000'){
            self.trigBackLLPay();
          }else{
            self.$vux.toast.text(self.$route.query.result, 'middle')
          }
        }
      },
      /* 触发后端查询连连支付信息 */
      trigBackLLPay(){
        let self = this;
        self.loading = true;
        Lib.M.ajax({
          url : '/pay/repayment/instalmentSignData',
          data:{
            card_no: localStorage.bankCard,
            acct_name:self.userInfo.idInfo.name,
            id_no:self.userInfo.idInfo.idCardNumber,
            user_id: self.userInfo.userInfo.userId
          },
          success:function (data){
            self.loading = false;
            if(data.code == '0000'){
              self.$vux.toast.text('绑定成功!', 'middle')
              /*self.$router.replace('./confirmRent');
              window.location.reload();*/
            }else{
              self.$vux.toast.text(data.error,'middle')
            }
          }
        });
      },
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
      }
  }
}
</script>

<style>
  .weui-btn{
    width: 21.44rem !important;
  }
  .img-del{
    width: 0.75rem;
    height: 0.75rem;
    margin-left:0;
    position: absolute;
    right: 1rem;
  }
</style>

<style scoped>
  .banner{
    width:22.3rem;
    height: 11.5625rem;
    overflow: hidden;
    position: relative;
    background: white;
  }
 /* .banner span{
    display: block;
    position: absolute;
    width: 45px;
    !*background: blue;*!
    height: 100%;
    z-index: 10;

  }*/
  .banner .indicator{
  /*  background: blue;*/
    width: 20%;
    /*height: 5px;*/
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 5px;
    margin-left: -10%;
  }
  .banner .indicator span{
    display: inline-block;
    width: 0.315rem;
    height: 0.19rem;
    background: #EBEBEB;
    margin:0 3px;
  }
  .banner .indicator  .active{
    width: 0.75rem;
    background: #1ABC9C ;
    color: red;
  }
  .no0{
    position: absolute;
    left: 22.5rem;
    /*right: -14.5rem;*/
    top: 1.3rem;
    z-index: 1;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;

  }
  .no0 a{
    display: block;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;
  }
  .no0 img{
    display: block;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;
  }
  .no1{
    position: absolute;
    left: 50%;
    top: 0.7rem;
    margin-left: -9.6875rem;
    width: 19.375rem;
    height: 9.375rem;
    z-index:2;
    transition: all 0.5s;
    box-shadow: 0px 3px 20px #999;
    border-radius: 10px;
  }
  .no1 a{
    display: block;
    width: 19.375rem;
    height: 9.375rem;
    transition: all 0.5s;
  }
  .no1 img{
    display: block;
    width: 19.375rem;
    height: 9.375rem;
    transition: all 0.5s;

  }

  .no2{
    position: absolute;
    left: -14.5rem;
    top: 1.3rem;
    z-index: 1;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;

  }
  .no2 a{
    display: block;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;

  }
  .no2 img{
    display: block;
    width: 15.5rem;
    height: 8.125rem;
    transition: all 0.5s;
  }

  /* .vux-slider > .vux-swiper > .vux-swiper-item > a > p{
     background-image:none;
   }*/
  .title{
    height: 4rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    font-size: 1.065rem;
    font-weight: 600;
  }
  .banner{
    width: 100%;
  }
  .banner>img{
    width: 100%;
    height: 10.815rem;
  }
  .choose{
    box-sizing: border-box;
    padding: 0px 7px;
    width: 21.43rem;
    margin:0 auto;
    height: 3.815rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;
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
  .table{
    box-sizing: border-box;
    width: 21.43rem;
    margin: 0 auto;
    display: flex;
    margin-top: 2.065rem;
    padding: 0 1rem;
  }
  .table>span{
    text-align: center;
    flex: 1;
  }
  
  .thead{
    font-size: 0.88rem;
    color: #808080
  }
  .tbody{
    font-size: 1.065rem;
    color: #39394A;
    margin-top: 1.065rem;
  }
  .btn{
    margin-top: 3.065rem;
  }
</style>
<style>
    .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
        background-image:none !important;
    }
    .vux-slider > .vux-indicator{
        display: none !important;
    }
    .vux-slider > .vux-indicator-center{
        display: none !important;
    }
    .vux-slider > .vux-swiper{
        overflow: visible !important;
    }
    .vux-slider{
        overflow: visible !important;
    }
    .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img{
        background-size: contain !important;
        box-shadow:4px 2px 6px #ccc;
    }
</style>
