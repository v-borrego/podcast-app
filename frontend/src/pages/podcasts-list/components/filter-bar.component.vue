<template>
  <div :class="$style.filterBar">
    <div :class="$style.resultsBadge">{{ resultsCount }}</div>
    <input
      :class="$style.searchTextInput"
      placeholder="Filter podcasts..."
      :value="searchText"
      @input="handleOnSearch"
    >
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
export default Vue.extend({
  name: "FilterBar",
  props: {
    searchText: {} as PropOptions<string>,
    resultsCount: {} as PropOptions<number>,
    onSearch: {} as PropOptions<(value: string) => void>
  },
  methods: {
    handleOnSearch: function(e) {
      this.onSearch(e.target.value);
    }
  }
});
</script>

<style module>
.filterBar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4rem;
}

.resultsBadge {
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: steelblue;
  color: white;
  margin-right: 1rem;
}

.searchTextInput {
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #999;
  outline: none;
  font-size: 100%;
}
</style>