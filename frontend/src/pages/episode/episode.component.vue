<template>
  <div :class="$style.flexContainer">
    <div :class="$style.podcastCard">
      <podcast-card :podcast="podcast"/>
    </div>
    <div :class="$style.podcastDetail">
      <card :class="$style.episodesCard">
        <h1>{{ episode.title }}</h1>
        <p v-html="episode.content"/>
        <p>
          <audio :src="episode.enclosure.url" controls autoplay loop>
            <p>Media not supported</p>
          </audio>
        </p>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import * as ViewModel from "./episode.model";
import PodcastCard from "../../common/components/podcast-card.component.vue";

import Card from "../../common/components/card.component.vue";
import { router, moduleRoutes } from "../../router";

export default Vue.extend({
  name: "Episode",
  components: {
    PodcastCard,
    Card
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>,
    episode: {} as PropOptions<ViewModel.Podcast>
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
  flex-grow: 1;
}
</style>
