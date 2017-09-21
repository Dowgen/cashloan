<template>
    <div class="about_juhe">
        <div class="juHe_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>关于炬合</span>
        </div>
        <div class="juhe_intro">
            <div class="title">关于炬合科技</div>
            <div class="content">
                <p>
                    炬合科技旗下一款网络广告、网络推广辅助产 帮助用户寻找到最后价值的信息,提高用户搜寻资讯的效率。利用大数据,精准定位用户需求,为网络广告服务商精准对接用户
                </p>
                <p>
                    炬合科技旗下一款网络广告、网络推广辅助产品帮助用户寻找到最后价值的信息,提高用户搜寻资讯的效率。
                </p>
                <p>
                    炬合科技旗下一款网络广告、网络推广辅助产品 帮助用户寻找到最后价值的信息,提高用户搜寻资讯的效率。炬合科技旗下一款网络广告、网络推广辅助产品, 帮助用户寻找到最后价值的信息,提高用户搜寻资讯的效率。利用大数据,精准定位用户需求,为网络广告服务商精准对接用户...
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
        height:4rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 4rem;
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
