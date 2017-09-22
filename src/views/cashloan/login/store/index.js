import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    phoneNum:'',
    token: '' 
  },
  mutations: {
    changePhoneNum (state, num) {
      state.phoneNum = num
      console.warn('phoneNum:'+ state.phoneNum)
    },
    changeToken (state, token) {
      state.token = token
      console.warn('token:'+ state.token)
    }
  }
})

export default store