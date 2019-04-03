
<template>
  <card :class="$style.podcastInfo">
    <div :class="$style.header">
      <img :src="podcast.image" :class="$style.image">
    </div>
    <div :class="$style.divider"/>
    <p :class="$style.title">{{ podcast.title }}</p>
    <p :class="$style.author">by {{ podcast.author }}</p>
    <div :class="$style.divider"/>
    <div :class="$style.description">
      <span>Description:</span>
      <div>{{ podcast.description }}</div>
    </div>
  </card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "../model";
import Card from "../../../common/components/card.vue";

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
  margin: 1rem;
  width: 17rem;
  padding: 1rem;
  margin-bottom: 8rem;
  cursor: pointer;
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

.description {
  text-align: left;
}
</style>
