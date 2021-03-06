import Vue from 'vue'
import VueRouter from 'vue-router'

import InfoFill from './infoFillApp'
import vname from './v_nameApp'
import vpersonalInfo from './v_personalInfoApp'
import vphoneOperator from './v_phoneOperatorApp'
import privacyAgreement from './privacyAgreementApp'


const routes = [
  { path: '/', component: InfoFill },
  { path: '/vName', component: vname },
  { path: '/vPersonalInfo', component: vpersonalInfo },
  { path: '/vPhoneOperator', component: vphoneOperator },
  { path: '/privacyAgreement', component: privacyAgreement }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
