<template>
  <div :class="$style.flexContainer">
    <div :class="$style.appHeader">
      <div :class="$style.appTitle" v-on:click="onTitleClick">Podcaster</div>
      <div :class="$style.navigationIcon" v-if="navigating"/>
    </div>
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { router, moduleRoutes } from "../router";

export default Vue.extend({
  name: "AppLayout",
  props: {
    navigating: {} as PropOptions<boolean>
  },
  methods: {
    onTitleClick: function() {
      router.push({
        name: moduleRoutes.list.name
      });
    }
  }
});
</script>
<style module>
.flex-container {
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.app-title {
  font-size: 140%;
  color: steelblue;
  cursor: pointer;
}

.navigation-icon {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: steelblue;
}
</style>