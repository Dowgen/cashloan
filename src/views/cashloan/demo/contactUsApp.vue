<template>
    <div>
        <div class="contact_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>联系我们</span>
        </div>
        <div class="contact_ways">
            <ul>
                <li>
                    <p>商务合作</p>
                    <p>E-Mail: kyziliao08@126.com</p>
                </li>
                <li>
                    <p>品牌合作</p>
                    <p>E-Mail: my@juhetech.cn</p>
                </li>
                <li>
                    <p>客服电话</p>
                    <p>0571-28810397</p>
                </li>
            </ul>
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

    .contact_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .contact_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .contact_ways{
        /*height: 18.75rem;*/
        background:rgba(255,255,255,1);
        margin: 0.2rem auto 0;
        font-size: 0.94rem;
        padding:1.5rem ;
        line-height: 1.5rem;
    }
    .contact_ways li{
        margin-bottom: 1rem;
    }
    .contact_ways li p:nth-of-type(1){
        color: rgba(135,135,135,1);
    }
    .contact_ways li p:nth-of-type(2){
        color: rgba(194,194,194,1);
    }

</style>
