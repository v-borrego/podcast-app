import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../episode.mapper";

export const getEpisode = (podcastId: number, episodeId: string) =>
  Api.getPodcastDetail(podcastId).then(podcast =>
    mapPodcastApiModelToViewModel(podcast, episodeId)
  );
