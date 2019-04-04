import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcasts-list.mapper";

export const getPodcastsList = () =>
  Api.getPodcastsFeed().then(response =>
    response.feed.entry.map(podcast => mapPodcastApiModelToViewModel(podcast))
  );
