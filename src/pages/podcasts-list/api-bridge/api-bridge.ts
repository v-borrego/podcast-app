import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcasts-list.mapper";
import { ViewModel } from "../model";

export const getPodcastsList = (): Promise<ViewModel.Podcast[]> =>
  Api.getPodcastsFeed().then(response =>
    response.feed.entry.map(podcast => mapPodcastApiModelToViewModel(podcast))
  );
