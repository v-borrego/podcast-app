import { FeedResponse, PodcastDetail } from "../api.model";

export interface Cache<T> {
  [propName: string]: CacheItem<T>;
}

export interface CacheItem<T> {
  expires: number;
  data: T;
}

export interface GlobalCache {
  list: CacheItem<FeedResponse>;
  podcasts: {
    [podcastKey: number]: CacheItem<PodcastDetail>;
  };
}
