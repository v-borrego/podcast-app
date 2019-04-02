
<template>
  <podcast-detail-component v-if="podcast !== {}" :podcast="podcast"/>
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
    podcast: {} as ViewModel.Podcast
  }),
  props: {
    id: {} as PropOptions<number>
  },
  created() {    
    getPodcastDetail(this.id)().then(podcast => {      
      this.podcast = podcast;
    });
  }
});
</script>
