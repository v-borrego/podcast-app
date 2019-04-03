<template>
  <tr>
    <td :class="$style.title">
      <span>{{episode.title}}</span>
    </td>
    <td :class="$style.date">
      <span>{{formatDate(episode.isoDate)}}</span>
    </td>
    <td :class="$style.duration">
      <span>{{episode.enclosure.length}}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ViewModel } from "../model";
export default Vue.extend({
  name: "RowComponent",
  props: {
    episode: {} as PropOptions<ViewModel.Episode>
  },
  methods: {
    formatDuration: function(milliseconds) {
      const seconds = milliseconds / 10000;
      const durationItems = [
        Math.floor(seconds / 60),
        seconds - Math.floor(seconds / 60) * 60
      ];
      return durationItems.join(":");
    },
    formatDate: function(stringDate: string) {
      const date = new Date(stringDate);
      const dateItems = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      ];
      return dateItems.reverse().join("/");
    }
  }
});
</script>

<style module>
.title {
  padding: 0.5rem;
  width: 25%;
  max-width: 40rem;
}

.title span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}

.date {
  padding: 0.4rem;
  max-width: 177px;
  text-align: end;
}

.duration {
  padding: 0.4rem;
  text-align: end;
}
</style>