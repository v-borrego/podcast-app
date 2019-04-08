import { ApiModel } from "../../api";
import * as ViewModel from "./podcasts-list.model";

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.Podcast
): ViewModel.Podcast => ({
  id: parseInt(podcast.id),
  author: podcast.author,
  title: podcast.title,
  image: podcast.images.reduce(
    (img, current) =>
      img
        ? parseInt(current.attributes.height) > parseInt(img.attributes.height)
          ? current
          : img
        : current,
    null
  ).label
});
