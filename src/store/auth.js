const state = {
    isLogin : false,
}
const getters = {
    getisLogin : function(state){
        return state.isLogin
    }
}
const mutations = {
    setisLogin : (state, isLoginData) => {
        state.isLogin = isLoginData;
    }
}
const actions = {
    setisLogin : ({ commit }, isLoginData) => {
        commit("setisLogin", isLoginData);
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}