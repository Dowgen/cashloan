<template>
    <div class="about_juhe">
        <div class="juHe_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>关于我们</span>
        </div>
        <div class="juhe_intro">
            <div class="title">关于数氪金服</div>
            <div class="content">
                <p>
                    浙江数氪金融信息服务有限公司是一家基于互联网思维和技术，以大数据为核心，提供场景化金融服务的专业机构。数氪科技致力于打造完整的金融数据服务价值链，依托庞大的征信数据库、强大的数据挖掘和处理能力、先进的风控理念和技术，为银行、基金、保险、互联网理财、消费金融公司等提供智能信贷、智能投顾、智能保险、大数据风控、大数据精准营销等服务，为消费者提供优质的金融服务体验。
                </p>

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

            }
        },
        methods: {

        }
    }
</script>

<style>
    .juHe_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .juHe_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .juhe_intro{
        background:rgba(255,255,255,1);
        margin:auto;
        font-size: 0.815rem;
        color: rgba(135,135,135,1);
    }
    .juhe_intro .title{
        height:2.44rem;
        line-height: 2.44rem;
        border-bottom: 0.125rem solid rgba(26,188,156,1);
        margin-top: 0.2rem;
        font-size: 1rem;
        color: rgba(0,0,0,1);
        padding:0 1.3rem;
    }
    .content{
        height: 100%;
        padding:1rem 1.3rem;
    }
    .content p{
        margin-bottom: 2rem;
        line-height: 1.5rem;
    }

</style>
