import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    phoneNum:'',
    token: '',
    registType:'regist' //默认regist
  },
  mutations: {
    changePhoneNum (state, num) {
      state.phoneNum = num
      console.warn('phoneNum:'+ state.phoneNum)
    },
    changeToken (state, token) {
      state.token = token
      console.warn('token:'+ state.token)
    },
    changeRegistType (state, registType) {
      state.registType = registType
      console.warn('registType:'+ state.registType)
    }
  }
})

export default store