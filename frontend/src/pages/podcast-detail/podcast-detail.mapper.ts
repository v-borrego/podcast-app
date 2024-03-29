import { ApiModel } from "../../api";
import * as ViewModel from "./podcast-detail.model";

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.PodcastDetail
): ViewModel.Podcast => ({
  id: 0,
  author: podcast.author,
  title: podcast.title,
  description: podcast.description,
  image: podcast.image,
  episodes: podcast.episodes.map(mapEpisodeApiModelToViewModel)
});

const mapEpisodeApiModelToViewModel = (
  episode: ApiModel.Episode
): ViewModel.Episode => ({
  id: episode.id,
  title: episode.title,
  isoDate: episode.isoDate,
  duration: episode.duration
});
