import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from './demoApp'
import aboutJuHe from './aboutJuHeApp'
import contactUs from './contactUsApp'
import helpCenter from './helpCenterApp'
import questionList from './questionListApp'
import privacyAgreement from './privacyAgreementApp'
import userAgreement from './userAgreementApp'
import loanAgreement from './loanAgreementApp'
import errorTip from './errorTipApp'




const routes = [
    { path: '/', component: demo },
    { path: '/aboutJuHe', component: aboutJuHe },
    { path: '/contactUs', component: contactUs },
    { path: '/helpCenter', component: helpCenter },
    { path: '/questionList', component: questionList },
    { path: '/privacyAgreement', component: privacyAgreement },
    { path: '/userAgreement', component: userAgreement },
    { path: '/loanAgreement', component: loanAgreement },
    { path: '/errorTip', component: errorTip }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
