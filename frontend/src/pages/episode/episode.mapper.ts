import { ApiModel } from "../../api";
import * as ViewModel from "./episode.model";

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.PodcastDetail,
  episodeId: string
): ViewModel.Podcast => ({
  image: podcast.image,
  author: podcast.author,
  title: podcast.title,
  description: podcast.description,
  episode: podcast.episodes
    .map(mapEpisodeApiModelToViewModel)
    .find(episode => episode.id === episodeId)
});

const mapEpisodeApiModelToViewModel = (
  episode: ApiModel.Episode
): ViewModel.Episode => ({
  id: episode.id,
  content: episode.content,
  title: episode.title,
  isoDate: episode.isoDate,
  duration: episode.duration,
  enclosure: {
    url: episode.enclosure.url
  }
});
