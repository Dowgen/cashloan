import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from './mainPageApp'



const routes = [
  { path: '/', component: MainPage }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
