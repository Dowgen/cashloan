import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'

import MyInfo from './myInfoApp'
import loanDetail from './loanDetailApp'
import loanRecord from './loanRecordApp'
import fillMyInfo from './fillMyInfoApp'
import setCenter from './setCenterApp'
import nick from './nickApp'
import addBank from './addBankApp'
import adviceFill from './adviceFillApp'
import aboutUs from './aboutUsApp'
import contactUs from './contactUsApp'
import aboutJuHe from './aboutJuHeApp'
import helpCenter from './helpCenterApp'
import questionList from './questionListApp'
import BindBankCard from './bindBankCard'

Vue.use(Vuex)

const routes = [
    { path: '/', component: MyInfo },
    { path: '/loanDetail', component: loanDetail },
    { path: '/loanRecord', component: loanRecord },
    { path: '/fillMyInfo', component: fillMyInfo},
    { path: '/setCenter', component: setCenter },
    { path: '/nick', component: nick},
    { path: '/addBank', component:addBank },
    { path: '/adviceFill', component: adviceFill},
    { path: '/aboutUs', component: aboutUs},
    { path: '/contactUs', component: contactUs},
    { path: '/aboutJuHe', component: aboutJuHe},
    { path: '/helpCenter', component: helpCenter},
    { path: '/questionList', component: questionList},
    { path: '/bindBankCard', component: BindBankCard }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router,
    store
}).$mount('#app')
