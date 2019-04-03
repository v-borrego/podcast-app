    
<template>
  <thead>
    <th :class="$style.title">Title</th>
    <th :class="$style.textAlignEnd">Date</th>
    <th :class="$style.textAlignEnd">Duration</th>
  </thead>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TableHeaderComponent"
});
</script>

<style module>
.title {
  padding: 0.6rem;
  text-align: left;
}
.text-align-end {
  padding: 0.6rem;
  text-align: end;
}
</style>