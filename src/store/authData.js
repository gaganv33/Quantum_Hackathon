const state = {
    accessToken : '',
    user : {},
}
const getters = {
    getAccessToken : function(state){
        console.log("Getters: ", state.accessToken);
        return state.accessToken;
    },
    getUser : function(state){
        return state.user;
    }
}

const mutations = {
    setAccessToken : function(state, accessToken) {
        state.accessToken = accessToken;
        console.log("In set Access Token: ", accessToken);
    },
    setUser : function(state, user) {
        state.user = user;
    }
}

const actions = {
    setAccessToken : function({ commit }, accessToken) {
        commit("setAccessToken", accessToken)
    },
    setUser : function({ commit }, user) {
        commit("setUser", user);
    }
    
}
export default {
    state, getters, actions, mutations
}