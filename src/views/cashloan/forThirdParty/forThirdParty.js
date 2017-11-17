import Vue from 'vue'
import VueRouter from 'vue-router'

import forThirdParty from './forThirdPartyApp'
import userAgreement from './userAgreementApp'
import privacyAgreement from './privacyAgreementApp'

const routes = [
  { path: '/', component: forThirdParty },
  { path: '/userAgreement', component: userAgreement },
  { path: '/privacyAgreement', component: privacyAgreement }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
