<template>
  <div>
	<x-header :left-options="{backText: ''}" class="headfix">{{headfont}}</x-header>
	<div class="headMargin"></div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XHeader } from 'vux'

export default {
  data() {
    return {

    }
  },
  components: {
	XHeader
  },
  props: {
	headfont: {
		type: String,
		default: '导航'
	}
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
  
  
	
  },
  //相关操作事件
  methods: {
	
	
	
      
  }
}
</script>

<style lang="less">
/* 自定义颜色 */
.vux-header{
  background-color: #1abc9c !important;
}
.vux-header-title{
  color: white !important;
}
.left-arrow:before{
  border-color:white !important;
  border-width: 2px 0 0 2px !important;
}

.headfix{
	position: fixed!important;
	z-index: 77;
	width: 100%;
	left: 0;
	top: 0;
}

.headMargin{
  clear:both;
  height:50px;
}

</style>
