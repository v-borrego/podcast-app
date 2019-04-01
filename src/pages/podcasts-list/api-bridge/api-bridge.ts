import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcasts-list.mapper";
import { memoize } from "../../../common/memoize-utils";

export const getPodcastsList = memoize(() =>
  Api.getPodcastsFeed().then(response =>
    response.feed.entry.map(podcast => mapPodcastApiModelToViewModel(podcast))
  )
);
