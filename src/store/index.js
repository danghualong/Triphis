import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem("USER_TOKEN")
  },
  mutations: {
    updateToken: (state, token) => {
      state.userToken = token;
      localStorage.setItem("USER_TOKEN", token);
    }
  },
  actions: {},
  modules: {}
});
