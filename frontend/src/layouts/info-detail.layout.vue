<template>
  <div :class="$style.gridContainer">
    <div :class="$style.info">
      <slot name="info"></slot>
    </div>
    <div :class="$style.detail">
      <slot name="detail"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "InfoDetailLayout"
});
</script>
<style module>
.grid-container {
  display: grid;
  grid-template-areas: "infoArea detailArea";
  grid-template-columns: 20rem auto;
}

.info {
  grid-area: "infoArea";
  margin: 1rem;
}

.detail {
  grid-area: "detailArea";
}
</style>
