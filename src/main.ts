import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { router } from "./router";
import "./assets/css/global-style.css";

Vue.use(VueRouter);
new Vue({
  el: "#root",
  router,
  render: h => h(App)
});
