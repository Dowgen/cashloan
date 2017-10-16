import Vue from 'vue'
import VueRouter from 'vue-router'

import operatorF from './operatorFApp'


const routes = [
  { path: '/', component: operatorF }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
