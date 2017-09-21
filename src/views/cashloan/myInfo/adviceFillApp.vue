<template>
    <div style="overflow: hidden">
        <div class="advice_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>意见反馈</span>
        </div>
        <!--<div class="advice_type">
            <p>意见类型</p>
        </div>-->
        <div class="inputer">
            <input placeholder="意见类型" v-model="adviceType" readonly="readonly"/>
            <div class="sel">
                <popup-picker :data="adviceList" :columns="1" v-model="adviceType" ref="eduPicker" ></popup-picker>
            </div>
        </div>
        <div class="advices">
            <textarea maxlength="200" placeholder="请输入您的反馈意见，我们将进行及时解决"  autofocus v-model="words">
            </textarea>
            <div class="wordsLimit">{{words.length}}/200</div>
        </div>
        <div class="submit">
            提交
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import { PopupPicker } from 'vux'


    export default {
        name: 'add',
        components: {
            PopupPicker
        },
        data () {
            return {
                words:'',
                adviceType: [],
                adviceList: Lib.M.adviceList
            }
        },
        methods: {

        }
    }
</script>

<style>
    .inputer{
        position:relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #e6e6e6;
        font-size: 0.815rem;
        color: #c6c7cc;
        height:3.125rem;
        background:rgba(255,255,255,1);
        margin: 1.065rem auto 0;
    }
    .inputer>div{
        color: rgba(181,181,181,1);
    }
    .inputer>input{
        outline: none;
        border: none;
        font-size: 0.875rem;
        padding-left: 1.47rem;
    }
    .sel{
        background: url('./assets/arrow_down.png') no-repeat center center;
        background-size: 100% 100%;
        width: 0.69rem;
        height: 0.375rem;
        overflow: hidden;
        position: absolute;
        right: 1rem;
    }
    .advice_head{
        height:4rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 4rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .advice_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }

    .advices{
        height:12.5rem;
        background:rgba(255,255,255,1);
        margin: 0.675rem auto 0;
        position: relative;
        overflow: hidden;

    }
    textarea{
        width: 100%;
        resize: none;
        border:0;
        outline: none;
        font-size: 0.94rem;
        text-align: left;
        text-indent: 1.375rem;
        line-height: 2rem;
        font-family:PingFangSC-Light;

    }
    .wordsLimit{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        font-size: 1rem;
        color: rgba(181,181,181,1);
    }
    .submit{
        height:2.75rem;
        background:rgba(26,188,156,1);
        border-radius: 0.315rem ;
        margin: 1.375rem auto 0;
        text-align: center;
        line-height: 2.75rem;
        font-size: 1.125rem;
        color: rgba(255,255,255,1);
    }

</style>
