import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from './demoApp'
import aboutJuHe from './aboutJuHeApp'
import contactUs from './contactUsApp'
import helpCenter from './helpCenterApp'
import questionList from './questionListApp'
import privacyAgreement from './privacyAgreementApp'
import userAgreement from './userAgreementApp'




const routes = [
  { path: '/', component: demo },
  { path: '/aboutJuHe', component: aboutJuHe },
  { path: '/contactUs', component: contactUs },
  { path: '/helpCenter', component: helpCenter },
    { path: '/questionList', component: questionList },
    { path: '/privacyAgreement', component: privacyAgreement },
    { path: '/userAgreement', component: userAgreement }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
