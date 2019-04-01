<template>
  <podcasts-list-component :list="list"/>
</template>

<script lang="ts">
import Vue from "vue";
import PodcastsListComponent from "./podcasts-list.component.vue";
import { getPodcastsList } from "./api-bridge";
import { ViewModel } from "./model";
import { mapPodcastApiModelToViewModel } from "./podcasts-list.mapper";

export default Vue.extend({
  name: "PodcastsListContainer",
  components: {
    PodcastsListComponent
  },
  data: function() {
    return {
      list: new Array<ViewModel.Podcast>()
    };
  },
  created() {
    getPodcastsList().then(list => {
      this.list = list;
    });
  }
});
</script>
