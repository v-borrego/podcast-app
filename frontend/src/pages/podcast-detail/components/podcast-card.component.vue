
<template>
  <div :class="$style.card" v-on:click="$emit('click', $event)">
    <img :src="podcast.image" :class="$style.cardImage">
    <p :class="$style.cardTitle">{{ podcast.title }}</p>
    <p :class="$style.cardAuthor">Author: {{ podcast.author }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "../model";

export default Vue.extend({
  name: "PodcastCard",
  props: {
    podcast: {} as PropOptions<ViewModel.Podcast>
  }
});
</script>

<style module>
.card {
  text-align: center;
  margin: 1rem;
  width: 17rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  margin-bottom: 8rem;
  cursor: pointer;
}

.cardTitle {
  margin: 1rem;
  text-transform: uppercase;
}

.cardAuthor {
  margin: 1rem;
  color: #999;
}

.cardImage {
  border-radius: 50%;
  margin-top: -30%;
  width: 170px;
  height: 170px;
}
</style>
