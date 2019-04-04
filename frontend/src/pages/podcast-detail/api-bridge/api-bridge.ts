import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcast-detail.mapper";

export const getPodcastDetail = (id: number) =>
  Api.getPodcastDetail(id).then(mapPodcastApiModelToViewModel);
