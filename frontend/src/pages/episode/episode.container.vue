<template>
  <div>
    <p>PodcastId: {{ podcastId }}</p>
    <p>EpisodeId: {{ episodeId }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "EpisodeContainer",
  props: {
    podcastId: {} as PropOptions<number>,
    episodeId: {} as PropOptions<number>
  }
});
</script>
