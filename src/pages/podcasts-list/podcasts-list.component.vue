
<template>
  <div>
    <filter-bar :searchText="searchText" :onSearch="onSearch" :resultsCount="filteredList.length"/>
    <div :class="$style.flexContainer">
      <podcast-card
        v-for="podcast in filteredList"
        v-bind:key="podcast.id"
        :podcast="podcast"
        v-on:click="onSelect(podcast)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FilterBar } from "./components";
import { PodcastCard } from "./components";

import { ViewModel } from "./model";
import { router } from "../../router";

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
        name: "Detail",
        params: { id: podcast.id.toString() }
      });
    }
  },
  computed: {
    filteredList: function() {
      return this.searchText
        ? this.list.filter(podcast =>
            podcast.title.toUpperCase().includes(this.searchText.toUpperCase())
          )
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
