import { ApiModel } from "../../api";
import * as ViewModel from "./podcasts-list.model";

const emptyImage = {
  label: "",
  attributes: {
    height: "0"
  }
};

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.Podcast
): ViewModel.Podcast => ({
  id: parseInt(podcast.id),
  author: podcast.author,
  title: podcast.title,
  image: podcast.images.reduce(
    (img, current) =>
      parseInt(current.attributes.height) > parseInt(img.attributes.height)
        ? current
        : img,
    emptyImage
  ).label
});
