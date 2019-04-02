import { ApiModel } from "../../api";
import { ViewModel } from "./model";

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.PodcastDetail
): ViewModel.Podcast => ({
  id: 0,
  author: podcast.author,
  title: podcast.title,
  description: podcast.description,
  image: podcast.image,
  episodes: podcast.episodes.map(episode => ({
    content: episode.content,
    contentSnippet: episode.contentSnippet,
    link: episode.link,
    title: episode.title,
    isoDate: episode.isoDate,
    enclosure: {
      url: episode.enclosure.url,
      type: episode.enclosure.type,
      length: episode.enclosure.length
    }
  }))
});
