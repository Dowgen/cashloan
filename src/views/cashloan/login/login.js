import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'


import Login from './loginApp'
import Login2 from './login2App'
import Regist from './registApp'
import userAgreement from './userAgreementApp'

Vue.use(Vuex)

const routes = [
  { path: '/', component: Login },
  { path: '/login2', component: Login2 },
  { path: '/regist', component: Regist },
    { path: '/userAgreement', component: userAgreement },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router,
  store,
}).$mount('#app')
