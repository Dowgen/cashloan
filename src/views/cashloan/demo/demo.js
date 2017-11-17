import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from './demoApp'
import aboutJuHe from './aboutJuHeApp'
import contactUs from './contactUsApp'
import helpCenter from './helpCenterApp'
import questionList from './questionListApp'
import privacyAgreement from './privacyAgreementApp'
import userAgreement from './userAgreementApp'
import errorTip from './errorTipApp'
import costAccount from './costAccount'
import loanAgreementNoData from './loanAgreementNoDataApp'
import loanAgreementHasData from './loanAgreementHasDataApp'




const routes = [
    { path: '/', component: demo },
    { path: '/aboutJuHe', component: aboutJuHe },
    { path: '/contactUs', component: contactUs },
    { path: '/helpCenter', component: helpCenter },
    { path: '/questionList', component: questionList },
    { path: '/privacyAgreement', component: privacyAgreement },
    { path: '/userAgreement', component: userAgreement },
    { path: '/errorTip', component: errorTip },
    { path: '/costAccount', component: costAccount },
    { path: '/loanAgreementHasData', component: loanAgreementHasData },
    { path: '/loanAgreementNoData', component: loanAgreementNoData },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
