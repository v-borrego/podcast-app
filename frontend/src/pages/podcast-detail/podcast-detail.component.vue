<template>
  <div :class="$style.flexContainer">
    <div :class="$style.podcastCard">
      <podcast-card :podcast="podcast"/>
    </div>
    <div :class="$style.podcastDetail">
      <div v-for="episode in podcast.episodes" v-bind:key="episode.id">
        <div>{{ episode.title }} - {{ episode.isoDate }} - {{ episode.enclosure.length }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "./model";
import PodcastCard from "./components/podcast-card.component.vue";

export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastCard
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>
  }
});
</script>

<style module>
.flexContainer {
  display: flex;
  flex-direction: row;
}

.podcastCard {
  width: 380px;
}

.podcastDetail {
  flex-grow: 1;
  min-width: 400px;
}
</style>
