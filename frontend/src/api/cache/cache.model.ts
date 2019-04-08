import { Podcast, PodcastDetail } from "../api.model";

export interface CacheItem<T> {
  expires: number;
  data: T;
}

export interface GlobalCache {
  list: CacheItem<Podcast[]>;
  podcasts: {
    [podcastKey: number]: CacheItem<PodcastDetail>;
  };
}
