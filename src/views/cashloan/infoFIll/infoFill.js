import Vue from 'vue'
import VueRouter from 'vue-router'

import InfoFill from './infoFillApp'
import Verify from './verifyApp'
import Verify2 from './verify2App'
import Verify3 from './verify3App'



const routes = [
  { path: '/', component: InfoFill },
  { path: '/verify', component: Verify },
  { path: '/verify2', component: Verify2 },
  { path: '/verify3', component: Verify3 }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
