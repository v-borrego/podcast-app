<template>
  <div>
    <div v-if="loading">Loading...</div>
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
      episode: {} as ViewModel.Episode | undefined,
      podcast: {} as ViewModel.Podcast | undefined
    };
  },
  created() {
    this.loading = true;
    getEpisode(this.podcastId, this.episodeId)
      .then(podcast => {
        this.loading = false;
        this.podcast = podcast;
        this.episode = podcast.episode;
      })
      .catch(e => {
        console.log("podcast app error", e);
        router.go(-1);
      });
  }
});
</script>
