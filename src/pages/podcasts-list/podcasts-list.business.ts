import { ViewModel } from "./model";

export const filterPodcasts = (
  podcasts: ViewModel.Podcast[],
  searchText: string
): ViewModel.Podcast[] =>
  podcasts.filter(
    podcast =>
      podcast.title.toUpperCase().includes(searchText.toUpperCase()) ||
      podcast.author.toUpperCase().includes(searchText.toUpperCase())
  );
