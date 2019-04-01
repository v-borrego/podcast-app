
<template>
  <div>
    <h1>{{ message }} - id: {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "PodcastDetail",
  data: () => ({
    message: "Hello from podcast detail view"
  }),
  props: {
    id: {} as PropOptions<number>
  }
});
</script>
