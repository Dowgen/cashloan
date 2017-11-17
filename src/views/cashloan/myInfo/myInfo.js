import Vue from 'vue'
import VueRouter from 'vue-router'

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
import repayFailure from './repayFailure'
import loanAgreement from './loanAgreementApp'

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
    { path: '/bindBankCard', component: BindBankCard },
    { path: '/repayFailure', component: repayFailure },
    { path: '/loanAgreement', component: loanAgreement },

]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes,

})
router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === '/setCenter') {
       setTimeout(function () {
           var ele = document.getElementById('MEIQIA-BTN');
           ele.style.display = 'block';
           ele.style.opacity = '0';
       },500);

    } else {
        if(document.getElementById('MEIQIA-BTN')){
            var ele = document.getElementById('MEIQIA-BTN');
            ele.style.display = 'none';
        }

    }
    next()
})

/*var VueTouch = require('vue-touch')
Vue.use(VueTouch)*/

new Vue({
  router: router,

}).$mount('#app')

