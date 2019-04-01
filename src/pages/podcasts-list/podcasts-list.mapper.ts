import { ApiModel } from "../../api";
import { ViewModel } from "./model";

const emptyImage = {
  label: "",
  attributes: {
    height: "0"
  }
};

export const mapPodcastApiModelToViewModel = (
  podcast: ApiModel.Podcast
): ViewModel.Podcast => ({
  id: parseInt(podcast.id.attributes["im:id"]),
  author: podcast["im:artist"].label,
  title: podcast["im:name"].label,
  image: podcast["im:image"].reduce(
    (img, current) =>
      parseInt(current.attributes.height) > parseInt(img.attributes.height)
        ? current
        : img,
    emptyImage
  ).label
});
