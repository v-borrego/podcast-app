<template>
  <div>
    <div v-if="navigating">Navigating...</div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { router } from "./router";
import { Route } from "vue-router";

export default Vue.extend({
  name: "App",
  data: () => ({
    navigating: false
  }),
  created() {
    router.beforeEach((to: Route, from: Route, next) => {
      console.log(`Navigation from ${from.path} to ${to.path} started`);
      this.navigating = true;
      setTimeout(next, 200);
    });
    router.afterEach((to: Route, from: Route) => {
      console.log(`Navigation from ${from.path} to ${to.path} completed`);
      this.navigating = false;
    });
  }
});
</script>
