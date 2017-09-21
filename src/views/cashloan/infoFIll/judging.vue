<template>
  <div>
    <div class="title">正在审核</div>
    <div class="waiting">
      
      <router-link to='/judgingPassed'>
        <x-button type="primary" class="btn">先去借款吧</x-button>
      </router-link> 
    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';
import { XButton } from 'vux'
export default {
  name: 'add',	
  components: {
    XButton
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .waiting{
    height: 90vh;
    background-image: url('./assets/bgGreen.png');
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
