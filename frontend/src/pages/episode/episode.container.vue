<template>
  <div>
    <div v-if="!loading">
      <episode-component :episode="episode" :podcast="podcast"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { getEpisode } from "./api-bridge";
import * as ViewModel from "./episode.model";
import { router } from "../../router";
import EpisodeComponent from "./episode.component.vue";
import { store } from "../../main";

export default Vue.extend({
  name: "EpisodeContainer",
  components: {
    EpisodeComponent
  },
  props: {
    podcastId: {} as PropOptions<number>,
    episodeId: {} as PropOptions<string>
  },
  data: function() {
    return {
      loading: false,
      episode: {} as ViewModel.Episode,
      podcast: {} as ViewModel.Podcast
    };
  },
  created() {
    this.loading = true;
    getEpisode(this.podcastId, this.episodeId)
      .then(podcast => {
        store.commit("navigationCompleted");
        this.loading = false;
        this.podcast = podcast;
        this.episode = podcast.episode;
      })
      .catch(e => {
        store.commit("navigationCompleted");
        router.go(-1);
      });
  }
});
</script>
