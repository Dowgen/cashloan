import Vue from 'vue'
import VueRouter from 'vue-router'

import forThirdParty from './forThirdPartyApp'


const routes = [
  { path: '/', component: forThirdParty }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
