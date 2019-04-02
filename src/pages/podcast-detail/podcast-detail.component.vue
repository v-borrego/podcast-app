<template>
  <div>
    <h1>id: {{ podcast.id }}</h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "./model";

export default Vue.extend({
  name: "PodcastDetail",
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>
  }
});
</script>
