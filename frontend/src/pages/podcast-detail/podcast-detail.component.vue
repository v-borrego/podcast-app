<template>
  <info-detail-layout>
    <template v-slot:info>
      <podcast-card :podcast="podcast"/>
    </template>
    <template v-slot:detail>
      <card :class="$style.episodesCounterCard">Episodes: {{ podcast.episodes.length }}</card>
      <card :class="$style.episodesCard">
        <table-episodes :episodes="podcast.episodes" :onEpisodeSelected="onEpisodeSelected"/>
      </card>
    </template>
  </info-detail-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import * as ViewModel from "./podcast-detail.model";
import PodcastCard from "../../common/components/podcast-card.component.vue";
import TableEpisodes from "./components/table.component.vue";
import Card from "../../common/components/card.component.vue";
import InfoDetailLayout from "../../layouts/info-detail.layout.vue";
import { router, moduleRoutes } from "../../router";

export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastCard,
    TableEpisodes,
    Card,
    InfoDetailLayout
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>,
    onEpisodeSelected: {} as PropOptions<(episode: ViewModel.Episode) => void>
  }
});
</script>

<style module>
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
