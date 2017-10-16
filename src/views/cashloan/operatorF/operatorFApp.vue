<template>
  <div class="wrapper">
    <div class="title">评估结果</div>
    <div class="result">
      <img src="./assets/fail.png">
      <p>对不起，您信息认证未成功!</p>
      <div style="background:#ff7718" @click="jump">确定</div>
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
    jump(){
      window.location.href = '/views/cashloan/infoFill.html'
    }
  }
}
</script>

<style scoped>
  .title{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 1.065rem;
    font-weight: 500;
    color: white;
    background: #1abc9c;
  }
  .result{
    height: 18.315rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .result>img{
    width: 5.5rem;
    height: 7.875rem;
    margin-top: 2.1rem;
  }
  .result>p{
    font-size:0.875rem;
    color: #878787;
    margin-top: 1.125rem;
    font-weight: 300;
  }
  .result>div{
    height: 2.375rem;
    line-height: 2.375rem;
    width: 10.315rem;
    border-radius: 19px;
    text-align: center;
    background: #78cf79;
    color: white;
    margin-top: 1.935rem;
  }
</style>
