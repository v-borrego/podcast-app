import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./app.vue";
import { router } from "./router";
import "./assets/css/global-style.css";

Vue.use(VueRouter);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    navigating: true
  },
  mutations: {
    navigationStart(state) {
      state.navigating = true;
    },
    navigationCompleted(state) {
      state.navigating = false;
    }
  }
});

new Vue({
  el: "#root",
  router,
  render: h => h(App)
});
