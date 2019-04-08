
<template>
  <div v-if="!loading && podcast !== {}">
    <podcast-detail-component :podcast="podcast" :onEpisodeSelected="onEpisodeSelected"/>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PodcastDetailComponent from "./podcast-detail.component.vue";
import { getPodcastDetail } from "./api-bridge";
import * as ViewModel from "./podcast-detail.model";
import { router, moduleRoutes } from "../../router";
import { store } from "../../main";
export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastDetailComponent
  },
  data: () => ({
    loading: false,
    podcast: {} as ViewModel.Podcast
  }),
  props: {
    id: {} as PropOptions<number>
  },
  methods: {
    onEpisodeSelected: function(episode: ViewModel.Episode) {
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
    this.loading = true;
    getPodcastDetail(this.id)
      .then(podcast => {
        this.loading = false;
        store.commit("navigationCompleted");
        this.podcast = podcast;
      })
      .catch(e => {
        store.commit("navigationCompleted");
        router.go(-1);
      });
  }
});
</script>
