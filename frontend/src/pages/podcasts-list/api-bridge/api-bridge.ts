import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcasts-list.mapper";

export const getPodcastsList = () =>
  Api.getPodcastsList().then(list =>
    list.map(podcast => mapPodcastApiModelToViewModel(podcast))
  );
