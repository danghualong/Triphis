import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userToken: ""
  },
  mutations: {
    updateToken: (state, token) => {
      state.userToken = token;
      this.localStorage.setItem("USER_TOKEN", token);
    }
  },
  actions: {},
  modules: {}
});
