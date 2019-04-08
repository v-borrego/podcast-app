
<template>
  <card :class="$style.podcastInfo">
    <div :class="$style.header">
      <img :src="podcast.image" :class="$style.image">
    </div>
    <div :class="$style.divider"/>
    <p :class="$style.title">{{ podcast.title }}</p>
    <p :class="$style.author">by {{ podcast.author }}</p>
    <div :class="$style.divider"/>
    <div :class="$style.description" v-if="podcast.description">
      <div :class="$style.descriptionTitle">Description:</div>
      <div>{{ podcast.description.trim() }}</div>
    </div>
  </card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import * as ViewModel from "./podcast-card.model";
import Card from "./card.component.vue";

export default Vue.extend({
  name: "PodcastCard",
  components: {
    Card
  },
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>
  }
});
</script>

<style module>
.podcastInfo {
  text-align: left;
  padding: 1rem;
  overflow: hidden;
}
.divider {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.header {
  text-align: center;
}

.title {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.author {
  font-style: italic;
}

.image {
  margin: auto;
  width: 170px;
}

.description-title {
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.description {
  text-align: left;
  padding-top: 1rem;
}
</style>
