
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <podcast-detail-component v-if="!loading && podcast !== {}" :podcast="podcast"/>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import PodcastDetailComponent from "./podcast-detail.component.vue";
import { getPodcastDetail } from "./api-bridge";
import { ViewModel } from "./model";
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
  created() {
    getPodcastDetail(this.id)().then(podcast => {
      this.loading = false;
      this.podcast = podcast;
    });
  }
});
</script>
