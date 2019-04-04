<template>
  <table :class="$style.table">
    <header-component/>
    <tbody>
      <template v-for="episode in episodes">
        <row-component
          :key="episode.id"
          :episode="episode"
          v-on:click="onEpisodeSelected(episode)"
        />
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import HeaderComponent from "./table-header.component.vue";
import RowComponent from "./table-row.component.vue";
import * as ViewModel from "../podcast-detail.model";
import { router, moduleRoutes } from "../../../router";

export default Vue.extend({
  name: "TableComponent",
  components: { HeaderComponent, RowComponent },
  props: {
    episodes: {} as PropOptions<ViewModel.Episode[]>,
    onEpisodeSelected: {} as PropOptions<(episode: ViewModel.Episode) => void>
  }
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}
.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>