<template>
    <div>
        <div class="help_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>帮助中心</span>
        </div>
        <div class="help_question" style="display: flex" v-for="(item,index) in questionList">

            <div class="q_left" style="flex: 2" @click="show(index)">
                <!--<p><img :style=item.imgStyle :src="item.img"></p>-->
               <div class="img">
                   <p><img v-show="item.img == 1" :style=item.imgStyle src="./assets/check_data.png" alt=""></p>
                   <p><img v-show="item.img == 2" :style=item.imgStyle src="./assets/about_borrow.png" alt=""></p>
                   <p><img v-show="item.img == 3" :style=item.imgStyle src="./assets/about_repay.png" alt=""></p>
                   <p><img v-show="item.img == 4" :style=item.imgStyle src="./assets/about_cost.png" alt=""></p>
                   <p><img v-show="item.img == 5" :style=item.imgStyle src="./assets/about_another.png" alt=""></p>
               </div>

                <p class="title">{{item.title}}</p>
                <p :id="'arrow'+index" class="arrows">
                    <img class="show_arrow" src="./assets/show_up.png" alt="">
                </p>

            </div>
            <div class="q_right questions" style="flex: 7">
                <p @click="jump(index,0)">{{item.questions[0]}}</p>
                <p @click="jump(index,1)">{{item.questions[1]}}</p>
                <div v-show="isShow">
                    <p @click="jump(index,2)">{{item.questions[2]}}</p>
                    <p @click="jump(index,3)">{{item.questions[3]}}</p>
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
                isShow:[false,false,false,false,false],
                questionList:[{
                    img:1,
                    imgStyle:{
                        width: '1.625rem',
                        height: '1.095rem'
                    },
                    title:'审核资料',
                    questions:[
                        '1.为什么会读取联系人失败？',
                        '2.如何更换收款银行卡？',
                        '3.手机运营商认证失败的原因有哪些？',
                        '4.为什么会绑卡失败？'
                    ],
                    answers:[
                        'A：可能是由于您没有授权现金斗士读取联系人的权限。\n' +
                        '（1）ios用户可以通过【设置】-【隐私】-【通讯录】-【现金斗士】-【开启权限】；\n' +
                        '（2）安卓用户可以到设置里开启读取权限，具体设置方式根据机型不同而有所差异。',
                        'A：您的借款还清后且没有在借款状态中，即可在【我的】-【用户头像】-【添加银行卡】，重新绑定新的银行卡。\n',
                        'A：可能有以下五种原因。\n' +
                        '（1）您当前的注册手机号不是本人在运营商的实名手机号，请更换为实名手机号。\n' +
                        '（2）您填写的手机运营商服务密码不正确，请核实后重新填写。\n' +
                        '（3）您在运营商哪里开启了账单保护功能，联系运营商关闭该功能即可。\n' +
                        '（4）运营商出账期无法进行手机认证，请改日再试。\n' +
                        '（5）由于网络不稳定或系统繁忙导致认证失败，请稍后再试。',
                        'A：可能有以下三种原因：\n' +
                        '（1）银行卡信息填写错误，请核实后重新填写\n' +
                        '（2）银行预留手机号或验证码填写错误，请核实后重新填写\n' +
                        '绑定的银行卡不是您本人的，请用本人的银行卡进行绑定。'
                    ]
                },{
                    img:2,
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.345rem'
                    },
                    title:'借款相关',
                    questions:[
                        '1.如何提高借款成功率/提高额度？',
                        '2.借款失败的原因有哪些，该怎么处理？',
                        '3.审核通过后多久打款？如何查询进度？',
                        '4.绑定银行卡无法收到打款怎么办？'
                    ],
                    answers:[
                        'A：有多种方法可以提高您的借款成功率：\n' +
                        '（1）多完成各种认证，包括身份、详细住址、学历等，保证个人信息的真实性。\n' +
                        '（2）必要资料务必上传完整\n' +
                        '借款成功后准时还款，对于以后的借款额度、借款成功率有直接影响。',
                        'A：借款失败通常分为审核失败和放款失败，审核失败通常由于：\n' +
                        '（1）上传的身份证照片不清晰，建议您根据提示重新上传清晰的照片\n' +
                        '（2）提交的身份证与填写的身份证信息不符，建议您重新核对好信息后仔细填写信息\n' +
                        '（3）用户曾有不良借款记录，无法通过审核\n' +
                        '\n' +
                        '一般来说，放款失败通常由于：\n' +
                        '支付平台打款失败，可能为银行卡信息有误/银行卡类型不符/支付系统出现问题，建议：\n' +
                        '（1）您可以尝试重新借款\n' +
                        '（2）您可以重新绑定银行卡尝试借款\n' +
                        '（3）以上均无法解决，请联系客服:0571-28121621\n' +
                        '\n' +
                        '若借款失败后，无法借款怎么办？\n' +
                        'A : 如果借款失败，需等待前次订单关闭后才能再次提交借款申请。\n' +
                        '现金斗士默认15天左右冷却期，如期间无操作则订单将自动关闭，您可再次申请借款。\n' +
                        ' \n' +
                        '您可以完善个人信息、提高信用等级，借款订单更容易审核通过。',
                        'A：审核通过后会立即打款，一般半小时内完成，请耐心等待。\n' +
                        '您可在【我的】-【借款记录】查看您的借款进度。',
                        'A：未完成借款期间，用户不可自行更换银行卡，您可联系客服重置借款状态，重新绑定银行卡。客服电话:0571-28121621'
                    ]
                },{
                    img:3,
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.065rem'
                    },
                    title:'还款相关',
                    questions:[
                        '1.如何在还款日前主动还款？',
                        '2.还款失败怎么办？',
                        '3.逾期了会有什么后果？该如何处理？',
                        '4.还款日期怎么计算？可以推迟几天吗？'
                    ],
                    answers:[
                        'A：您可在【我的】-【待还款】点击【立即还款】跳转交易页面完成支付，默认从绑定银行卡中支付还款金额即可完成还款。',
                        'A：如果操作还款过程中遇到无法还款事宜，请：\n' +
                        '（1）刷新页面\n' +
                        '（2）退出账号重新登录\n' +
                        '（3）您可以更换支付方式，联系客服更换银行卡，或通过通过支付宝转账给账户：XXXX并备注【姓名+注册手机号+还款】进行还款，支付宝转账金额须与还款页面提示的还款金额一致，否则将无法成功还款。转账成功后，请及时关注还款状态\n' +
                        '（4）代扣失败、主动还款失败、还款成功账单未更新、无法操作还款请联系客服：电话0571-28121621',
                        'A：若未在还款日前进行还款或恶意拖欠导致还款失败，即为逾期，将产生滞纳金。您的逾期情况将记录在网络征信系统。\n' +
                        '遇到逾期情况请不要着急，如为到期当日无法操作还款导致逾期，或已还款但还款状态未更新导致逾期，请联系客服0571-28121621，我们会第一时间为您处理。\n' +
                        '\n' +
                        '如确实因个人原因逾期，请及时还款，以免影响您的信用。\n' +
                        '信用即是财富，请珍爱您的信用！',
                        'A：还款日期以下款当日开始计算，到还款日期如未主动还款，系统会从用户绑定的银行卡中自动扣款，您可在【我的】-【待还款】中查看您的还款日期，目前不支持推迟还款，如逾期还款将产生逾期费用。'
                    ]
                },{
                    img:4,
                    imgStyle:{
                        width: '1.44rem',
                        height: '1.595rem'
                    },
                    title:'费用管理',
                    questions:[
                        '1.借款费用如何收取？',
                        '2.逾期费用如何计算？',
                        '3.提前还款费用如何计算？'
                    ],
                    answers:[
                        'A：用户在现金斗士借款，平台会收取一定的综合服务费用，年利率最高不超过36%，服务费用会在借款成功时收取。',
                        'A：逾期还款，平台会收取逾期费用。现金斗士的逾期费用（风控）',
                        'A：提前还款所应还的费用，即借款当期系统所显示的借款费用，您可在【我的】-【待还款】中查看借款费用及应还金额。'

                    ]
                },{
                    img:5,
                    imgStyle:{
                        width: '1.5rem',
                        height: '1.52rem'
                    },
                    title:'其他问题',
                    questions:[
                        '1.填写的个人资料信息安全吗？',
                        '2.能否解绑用户？',
                        '3.能否变更注册手机号？',
                        '4.为什么账户被冻结？'
                    ],
                    answers:[
                        'A：现金斗士与您签订电子协议，对您的信息严格保密，您的合法权利将得到全面保障。',
                        'A：暂时不支持解绑，只能用之前注册的手机号进行操作，如果您本人使用的手机号无法登陆，建议修改登陆密码。',
                        'A：暂不支持更改注册号码，请关注现金斗士公众平台获取最新动态，给您带来的不便敬请谅解。',
                        'A：由于您的账户存在风险，为了保证您的利益，避免给您造成损失，所以交易受限。'
                    ]
                }],
                height: '',
                borderBottom:''
            }
        },

        methods: {
            show(index){
                console.log(this.isShow[index])
                console.log('这是index的值')
                this.isShow[index] = !this.isShow[index];
               if(this.questionList[index].questions.length == 4){
                   if(this.isShow[index]) {
                       document.getElementsByClassName('help_question')[index].style.height = '12.69rem';
                       document.getElementById('arrow' + index).style.transform = 'rotate(180deg)';
                   }else {
                       document.getElementsByClassName('help_question')[index].style.height = '6.145rem';
                       document.getElementById('arrow' + index).style.transform = 'rotate(0)';
                   }
               }else {
                   if(this.isShow[index]) {
                       document.getElementsByClassName('help_question')[index].style.height = '9.51rem';
                       document.getElementById('arrow' + index).style.transform = 'rotate(180deg)';
                   }else {
                       document.getElementsByClassName('help_question')[index].style.height = '6.145rem';
                       document.getElementById('arrow' + index).style.transform = 'rotate(0)';
                   }
               }
            },
            jump(index1,index2){
                console.log(this.questionList)
                this.$router.push({'path':'/questionList',query:{
                    question:this.questionList[index1].questions[index2],
                    answer:this.questionList[index1].answers[index2]}
                })
            }

        }
    }
</script>

<style>

    .help_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
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

    .help_question .q_left{
       /* width: 5.44rem;*/
        text-align: center;
        line-height: 1.5rem;
        margin-top: 1rem;
        position: relative;
    }
    .help_question .q_left .img img{
        display: block;
        margin:0 auto;
    }
    .help_question .q_left .title{
        font-size: 0.875rem;
        color: rgba(18,128,106,1);
        line-height: 2rem;
    }
    .help_question .q_left .arrows{
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

    .help_question .q_right p{
        /*width: 15.565rem;*/
        height: 3.12rem;
        border-bottom:0.06rem solid rgba(230,230,230,1);
        border-left:0.06rem solid rgba(230,230,230,1);
        text-indent: 0.8rem;
        line-height: 3.12rem;
        font-size: 0.815rem;
        color: rgba(85,85,85,1);
    }
    .help_question .q_right p:last-child{
        border-bottom:none;
    }


</style>
