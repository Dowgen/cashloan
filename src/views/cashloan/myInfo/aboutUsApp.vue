<template>
    <div>
        <div class="us_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>关于我们</span>
        </div>
        <div class="us_main">
            <div>
                <p><img src="./assets/logo.png" alt=""></p>
                <p>现金斗士</p>
                <p style="font-size: 0.875rem;color: rgba(181,181,181,1)">V 1.0.1</p>
            </div>
        </div>
        <div class="us_info">
            <div  @click="$router.push({path:'/contactUs'})">
                <span>联系我们</span>
                <span class="fr">
                    <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
                </span>
            </div>
            <div  @click="$router.push({path:'/aboutJuHe'})">
                <span>关于我们</span>
                <span class="fr">
                    <img style="width: 0.47rem;height: 0.78rem;display: inline-block" src="./assets/towards.png" alt="">
                 </span>
            </div>

        </div>

       <!-- <div class="company">杭州炬合网络科技有限公司</div>-->

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
    .fr{
        float: right;
    }

    .us_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .us_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .us_main{
        margin:1.6rem auto;
        text-align: center;
        color: rgba(51,51,51,1);
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .us_main img{
        display: block;
        width: 4.375rem;
        height: 4.375rem;
        margin:0 auto;

    }
    .us_info>div{
        height:2.815rem;
        background:rgba(255,255,255,1);
        margin:0 auto;
        line-height: 2.815rem;
        padding:0 1rem;
        margin-bottom: 0.2rem;
    }
    .company{
        width: 100%;
        text-align: center;
        color: rgba(84,84,84,1);
        font-size: 0.875rem;
        position: absolute;
        bottom: 1.25rem;
    }

</style>
