
<template>
  <div :class="$style.card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CardComponent"
});
</script>

<style module>
.card {
  -webkit-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
}
</style>
