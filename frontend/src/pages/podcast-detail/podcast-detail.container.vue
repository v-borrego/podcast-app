
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <podcast-detail-component
      v-if="!loading && podcast !== {}"
      :podcast="podcast"
      :onEpisodeSelected="onEpisodeSelected"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PodcastDetailComponent from "./podcast-detail.component.vue";
import { getPodcastDetail } from "./api-bridge";
import * as ViewModel from "./podcast-detail.model";
import { router, moduleRoutes } from "../../router";
export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastDetailComponent
  },
  data: () => ({
    loading: true,
    podcast: {} as ViewModel.Podcast
  }),
  props: {
    id: {} as PropOptions<number>
  },
  methods: {
    onEpisodeSelected: function(episode: ViewModel.Episode) {
      console.log("onEpisodeSelected", episode);
      router.push({
        name: moduleRoutes.episode.name,
        params: {
          podcastId: this.id.toString(),
          episodeId: episode.id.toString()
        }
      });
    }
  },
  created() {
    getPodcastDetail(this.id)
      .then(podcast => {
        this.loading = false;
        this.podcast = podcast;
      })
      .catch(e => {
        router.go(-1);
      });
  }
});
</script>
