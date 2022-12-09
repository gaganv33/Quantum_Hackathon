import { createStore } from 'vuex'
import authData from './authData';
import auth from './auth';

export default createStore({
  state: {
    error: '',
    msg: '',
  },
  getters: {
    getError: function(state) {
      return state.error
    },
    getMsg: function(state) {
      return state.msg
    },
  },
  mutations: {
    setError : (state, error) => state.error = error,
    setMsg : (state, msg) => state.msg = msg,
    setMsgandError : (state) => {
      console.log('clear message and error in mutations')
      state.error = '',
      state.msg = ''
    }
  },
  actions: {
    setError : function(context, error){
      console.log('123asd')
      console.log(error)
      context.commit('setError', error)
    },
    setMsg : function(context, msg){
      console.log('In set msg')
      context.commit('setMsg', msg)
    },
    setMsgandError : function(context){
      console.log('Clear message and error in action.')
      context.commit('setMsgandError')
    }
  },
  modules: {
    authData,
    auth,
  }
})
