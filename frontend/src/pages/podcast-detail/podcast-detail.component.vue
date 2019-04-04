<template>
  <div :class="$style.gridContainer">
    <div :class="$style.podcastInfo">
      <podcast-card :podcast="podcast"/>
    </div>
    <div :class="$style.podcastDetail">
      <card :class="$style.episodesCounterCard">Episodes: {{ podcast.episodes.length }}</card>
      <card :class="$style.episodesCard">
        <table-episodes :episodes="podcast.episodes" :onEpisodeSelected="onEpisodeSelected"/>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import * as ViewModel from "./podcast-detail.model";
import PodcastCard from "../../common/components/podcast-card.component.vue";
import TableEpisodes from "./components/table.component.vue";
import Card from "../../common/components/card.component.vue";
import { router, moduleRoutes } from "../../router";

export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastCard,
    TableEpisodes,
    Card
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>,
    onEpisodeSelected: {} as PropOptions<(episode: ViewModel.Episode) => void>
  }
});
</script>

<style module>
.grid-container {
  display: grid;
  grid-template-areas: "podcastArea detailArea";
  grid-template-columns: 20rem auto;
}

.podcast-info {
  grid-area: "podcastArea";
  margin: 1rem;
}

.podcast-detail {
  grid-area: "detailArea";
}

.episodes-counter-card {
  font-weight: bold;
  font-size: 150%;
  margin: 1rem;
  padding: 1rem;
}
.episodes-card {
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
}
</style>
