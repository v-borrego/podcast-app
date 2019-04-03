
<template>
  <card :class="$style.podcast">
    <div v-on:click="$emit('click', $event)">
      <img :src="podcast.image" :class="$style.image">
      <p :class="$style.title">{{ podcast.title }}</p>
      <p :class="$style.author">Author: {{ podcast.author }}</p>
    </div>
  </card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "../model";
import Card from "../../../common/components/card.component.vue";

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
.podcast {
  text-align: center;
  margin: 1rem;
  width: 17rem;
  padding: 1rem;
  margin-bottom: 8rem;
  cursor: pointer;
}

.title {
  margin: 1rem;
  text-transform: uppercase;
}

.author {
  margin: 1rem;
  color: #999;
}

.image {
  border-radius: 50%;
  margin-top: -30%;
  width: 170px;
  height: 170px;
}
</style>
