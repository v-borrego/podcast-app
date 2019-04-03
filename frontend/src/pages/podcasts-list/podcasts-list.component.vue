
<template>
  <div>
    <filter-bar :searchText="searchText" :onSearch="onSearch" :resultsCount="filteredList.length"/>
    <div :class="$style.flexContainer">
      <template v-for="podcast in filteredList">
        <podcast-card v-bind:key="podcast.id" :podcast="podcast" v-on:click="onSelect(podcast)"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FilterBar } from "./components";
import { PodcastCard } from "./components";
import { ViewModel } from "./model";
import { router, moduleRoutes } from "../../router";
import { filterPodcasts } from "./podcasts-list.business";

export default Vue.extend({
  name: "PodcastsListComponent",
  components: {
    FilterBar,
    PodcastCard
  },
  data: () => ({ searchText: "" }),
  props: {
    list: {} as PropOptions<ViewModel.Podcast[]>
  },
  methods: {
    onSearch: function(value: string) {
      this.searchText = value;
    },
    onSelect: function(podcast: ViewModel.Podcast) {
      router.push({
        name: moduleRoutes.podcastDetail.name,
        params: { id: podcast.id.toString() }
      });
    }
  },
  computed: {
    filteredList: function() {
      return this.searchText
        ? filterPodcasts(this.list, this.searchText)
        : this.list;
    }
  }
});
</script>

<style module>
.flexContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
