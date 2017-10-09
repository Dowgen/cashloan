<template>
    <div>
        <div class="help_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>帮助中心</span>
        </div>
        <div class="question_main">
            <p class="question_title">{{$route.query.question}}</p>
            <pre class="answer">{{$route.query.answer}}</pre>
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
        mounted(){

        },
        methods: {


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
    .question_main{
        width:21.065rem;
        background:rgba(255,255,255,1);
        border-radius: 0.315rem ;
        margin:1rem auto;
    }
    .question_title{
        height: 3rem;
        border-bottom: 0.06rem solid rgba(230,230,230,1);
        text-align: center;
        font-size: 0.875rem;
        color: rgba(0,0,0,1);
        line-height: 3rem;
    }
    .answer{
        text-align: left;
        text-indent: 1rem;
        font-size: 0.815rem;
        color: rgba(84,84,84,1);
        line-height: 1.4rem;
        padding: 1rem;
        /* font-family: "PingFang-SC-Regular"; */
        white-space: pre-wrap;
    }




</style>
