import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from './mainPageApp'
import BindBankCard from './bindBankCard'
import SubmitSuccess from './submitSuccess'
import ConfirmRent from './confirmRent'
import loanAgreement from './loanAgreementApp'
import costAccount from './costAccount'


const routes = [
  { path: '/', component: MainPage },
  { path: '/bindBankCard', component: BindBankCard },
  { path: '/submitSuccess', component: SubmitSuccess },
  { path: '/confirmRent', component: ConfirmRent },
  { path: '/loanAgreement', component: loanAgreement },
    { path: '/costAccount', component: costAccount },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
