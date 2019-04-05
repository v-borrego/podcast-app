<template>
  <info-detail-layout>
    <template v-slot:info>
      <podcast-card :podcast="podcast"/>
    </template>
    <template v-slot:detail>
      <card :class="$style.episodesCard">
        <h1>{{ episode.title }}</h1>
        <p v-html="episode.content"/>
        <p>
          <audio :src="episode.enclosure.url" controls autoplay loop>
            <p>Media not supported</p>
          </audio>
        </p>
      </card>
    </template>
  </info-detail-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import * as ViewModel from "./episode.model";
import PodcastCard from "../../common/components/podcast-card.component.vue";
import Card from "../../common/components/card.component.vue";
import { router, moduleRoutes } from "../../router";
import InfoDetailLayout from "../../layouts/info-detail.layout.vue";

export default Vue.extend({
  name: "Episode",
  components: {
    PodcastCard,
    Card,
    InfoDetailLayout
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>,
    episode: {} as PropOptions<ViewModel.Podcast>
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
  flex-grow: 1;
}
</style>
