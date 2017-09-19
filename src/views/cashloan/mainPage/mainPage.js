import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from './mainPageApp'
import BindBankCard from './bindBankCard'
import SubmitSuccess from './submitSuccess'
import JudgingPassed from './judgingPassed'


const routes = [
  { path: '/', component: MainPage },
  { path: '/bindBankCard', component: BindBankCard },
  { path: '/submitSuccess', component: SubmitSuccess },
  { path: '/judgingPassed', component: JudgingPassed }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
