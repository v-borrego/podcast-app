<template>
  <podcasts-list-component :list="list"/>
</template>

<script lang="ts">
import Vue from "vue";
import PodcastsListComponent from "./podcasts-list.component.vue";
import { getPodcastsList } from "./api-bridge";
import * as ViewModel from "./podcasts-list.model";
import { mapPodcastApiModelToViewModel } from "./podcasts-list.mapper";
import { store } from "../../main";

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
      store.commit("navigationCompleted");
    });
  }
});
</script>
