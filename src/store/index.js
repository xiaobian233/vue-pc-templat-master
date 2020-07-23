import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  token: localStorage.getItem("token") || "",
  i18n: "JPN" //CN or EN or JPN
};

const mutations = {
  setToken(state, val) {
    state.token = val;
  }
};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
