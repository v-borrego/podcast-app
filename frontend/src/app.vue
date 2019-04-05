<template>
  <app-layout :navigating="navigating">
    <router-view/>
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { router } from "./router";
import { Route } from "vue-router";
import { store } from "./main";
import AppLayout from "./layouts/app.layout.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppLayout
  },
  computed: {
    navigating() {
      return store.state.navigating;
    }
  },
  created() {
    router.beforeEach((to: Route, from: Route, next) => {
      store.commit("navigationStart");
      next();
    });
  }
});
</script>
