
<template>
  <div :class="$style.card" v-on:click="$emit('click', $event)">
    <div :class="$style.cardHeader">
      <img :src="podcast.image" :class="$style.cardImage">
    </div>
    <p :class="$style.cardTitle">{{ podcast.title }}</p>
    <p :class="$style.cardAuthor">by {{ podcast.author }}</p>
    <div :class="$style.description">
      <span>Description:</span>
      <div>{{ podcast.description }}</div>
    </div>
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
  text-align: left;
  margin: 1rem;
  width: 17rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 5px 2px rgba(179, 179, 179, 1);
  margin-bottom: 8rem;
  cursor: pointer;
  overflow: hidden;
}

.cardHeader {
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.cardTitle {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.cardAuthor {
  font-style: italic;
  margin-bottom: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.cardImage {
  margin: auto;
  width: 170px;
}

.description {
  text-align: left;
}
</style>
