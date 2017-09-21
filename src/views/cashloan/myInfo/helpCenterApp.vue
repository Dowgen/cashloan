<template>
    <div>
        <div class="help_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>帮助中心</span>
        </div>
        <div class="help_question" v-for="(item,index) in questionList">
            <dl>
            <dt class="fl">
                <p><img :style=item.imgStyle :src="item.img"></p>
                <p>{{item.title}}</p>
                <p :id="'arrow'+index" @click="show(index)">
                    <img class="show_arrow" src="./assets/show_up.png" alt="">
                </p>

            </dt>
            <dd class="fl questions">
                <p @click="jump(index,0)">{{item.questions[0]}}</p>




                <p @click="jump(index,1)">{{item.questions[1]}}</p>
                <div v-show="isShow">
                    <p @click="jump(index,2)">{{item.questions[2]}}</p>
                    <p @click="jump(index,3)">{{item.questions[3]}}</p>
                </div>
            </dd>
        </dl>
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
                isShow:[false,false,false,false,false],
                questionList:[{
                    img:'/static/img/check_data.png',
                    imgStyle:{
                        width: '1.625rem',
                        height: '1.095rem'
                    },
                    title:'审核资料',
                    questions:[
                        '申请借款需要做哪些认证？',
                        '借款金额会发放到哪里？',
                        '银行卡绑定不成功有哪些原因？',
                        '如何更改收款银行？'
                    ]
                },{
                    img:'/static/img/about_borrow.png',
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.345rem'
                    },
                    title:'借款相关',
                    questions:[
                        '审核通过后多久大打款？',
                        '什么是手机运营商服务密码？',
                        '银行卡绑定不成功有哪些原因？',
                        '如何更改收款银行？'
                    ]
                },{
                    img:'/static/img/about_repay.png',
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.065rem'
                    },
                    title:'还款相关',
                    questions:[
                        '银行卡余额不足影响自动扣款吗？',
                        '如何进行主动还款？',
                        '银行卡绑定不成功有哪些原因？',
                        '如何更改收款银行？'
                    ]
                },{
                    img:'/static/img/about_cost.png',
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.095rem'
                    },
                    title:'费用管理',
                    questions:[
                        '借款费用如何收取？',
                        '逾期费用怎么收取？',
                        '银行卡绑定不成功有哪些原因？',
                        '如何更改收款银行？'
                    ]
                },{
                    img:'/static/img/about_another.png',
                    imgStyle:{
                        width: '1.5rem',
                        height: '1.03rem'
                    },
                    title:'其他问题',
                    questions:[
                        '收不到验证码怎么办？',
                        '可以通过哪些方式联系到炬有钱客服？',
                        '银行卡绑定不成功有哪些原因？',
                        '如何更改收款银行？'
                    ]
                }],
                height: '',
                borderBottom:''
            }
        },

        methods: {
            show(index){
                console.log(this.isShow[index])
                this.isShow[index] = !this.isShow[index];
                if(this.isShow[index]) {
                    document.getElementsByClassName('help_question')[index].style.height = '12.69rem';
                    document.getElementById('arrow' + index).style.transform = 'rotate(180deg)';
                }else {
                    document.getElementsByClassName('help_question')[index].style.height = '6.145rem';
                    document.getElementById('arrow' + index).style.transform = 'rotate(0)';
                }
            },
            jump(index1,index2){
                console.log(this.questionList)
                this.$router.push({'path':'/questionList',query:{question:this.questionList[index1].questions[index2]}})
            }

        }
    }
</script>

<style>

    .help_head{
        height:4rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 4rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .help_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .help_question{
        width:21.065rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        margin:1rem auto 0;
        overflow: hidden;
        transition: height 0.5s;
        height: 6.345rem;
    }

    .help_question dt{
        width: 5.44rem;
        text-align: center;
        line-height: 1.5rem;
        margin-top: 1rem;
        position: relative;
    }
    .help_question dt p:nth-of-type(1) img{
        display: block;
        margin:0 auto;
    }
    .help_question dt p:nth-of-type(2){
        font-size: 0.875rem;
        color: rgba(18,128,106,1);
        line-height: 2rem;
    }
    .help_question dt p:nth-of-type(3){
        width: 0.655rem;
        height: 0.405rem;
        line-height: 1rem;
        margin: 0 auto;
        position:relative;
    }
    .show_arrow{
        display: inline-block;
        width: 0.655rem;
        height: 0.405rem;
        position:absolute;
        top:0;left:0;
    }
    .help_question dd p{
        width: 15.565rem;
        height: 3.12rem;
        border-bottom:0.06rem solid rgba(230,230,230,1);
        border-left:0.06rem solid rgba(230,230,230,1);
        text-indent: 0.8rem;
        line-height: 3.12rem;
        font-size: 0.815rem;
        color: rgba(85,85,85,1);
    }
    .help_question dd p:last-child{
        border-bottom:none;
    }


</style>
