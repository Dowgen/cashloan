import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './loginApp'
import Login2 from './login2App'
import Regist from './registApp'



const routes = [
  { path: '/', component: Login },
  { path: '/login2', component: Login2 },
  { path: '/regist', component: Regist }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
