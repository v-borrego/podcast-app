<template>
  <div :class="$style.flexContainer">
    <div :class="$style.podcastCard">
      <podcast-card :podcast="podcast"/>
    </div>
    <div :class="$style.podcastDetail">
      <card :class="$style.episodesCounterCard">Episodes: {{ podcast.episodes.length }}</card>
      <card :class="$style.episodesCard">
        <table-episodes :episodes="podcast.episodes"/>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "./model";
import PodcastCard from "./components/podcast-card.component.vue";
import TableEpisodes from "./components/table.component.vue";
import Card from "../../common/components/card.component.vue";

export default Vue.extend({
  name: "PodcastDetail",
  components: {
    PodcastCard,
    TableEpisodes,
    Card
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>
  }
});
</script>

<style module>
.flexContainer {
  display: flex;
  flex-direction: row;
}

.podcastCard {
  margin: 1rem;
  width: 19rem;
}

.podcastDetail {
  flex-grow: 1;
  min-width: 400px;
}

.episodes-counter-card {
  font-weight: bold;
  font-size: 150%;
  margin: 1rem;
  padding: 1rem;
}
.episodes-card {
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
}
</style>
