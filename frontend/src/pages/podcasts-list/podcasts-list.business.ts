import { Podcast } from "./podcasts-list.model";

export const filterPodcasts = (
  podcasts: Podcast[],
  searchText: string
): Podcast[] =>
  podcasts.filter(
    podcast =>
      podcast.title.toUpperCase().includes(searchText.toUpperCase()) ||
      podcast.author.toUpperCase().includes(searchText.toUpperCase())
  );
