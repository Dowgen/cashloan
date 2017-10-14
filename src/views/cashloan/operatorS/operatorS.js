import Vue from 'vue'
import VueRouter from 'vue-router'

import operatorS from './operatorSApp'


const routes = [
  { path: '/', component: operatorS }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
