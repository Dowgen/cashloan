<template>
  <div class="nav">
    <a href="mainPage.html">
      <img src="./img/rent.png">
    </a>
    <a href="infoFill.html">
      <img src="./img/renzheng.png">
    </a>
    <a href="myInfo.html">
      <img src="./img/me.png">
    </a>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

export default {
  data() {
    return {

    }
  },
  components: {

  },
  props: {

  },
  //相关操作事件
  methods: {
	  
  }
}
</script>

<style>

.nav{
  box-sizing: border-box;
  padding-top: .5rem;
  position: absolute;
  bottom: 0;
  height: 3.8rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid .7rem #f2f2f2;
  z-index: 999;
}
.nav img{
  width:1.375rem;
  height: 2.345rem;
}
</style>
