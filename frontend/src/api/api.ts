import axios from "axios";
import {
  FeedResponse,
  PodcastDetail,
  PodcastLookupResponse
} from "./api.model";
import { globalCache, CACHE_MINUTES_EXPIRE } from "./cache";
import { Podcast } from "../pages/podcasts-list/model/podcasts-list.model";

const baseUrl = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com";
const serverURL = "http://localhost:3050/api/podcast/";

const get = <T>(apiURL: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get<T>(apiURL)
        .then(res => res.data)
        .then(resolve);
    } catch (e) {
      console.log("api error", e);
      reject(e);
    }
  });
};

export const getPodcastsFeed = (): Promise<FeedResponse> => {
  return globalCache.list && globalCache.list.expires > Date.now()
    ? Promise.resolve(globalCache.list.data)
    : get<FeedResponse>(
        `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
      ).then(data => {
        globalCache.list = {
          data,
          expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000
        };
        return data;
      });
};

export const getPodcastDetail = (id: number): Promise<PodcastDetail> => {
  if (
    globalCache.podcasts &&
    globalCache.podcasts[id] &&
    globalCache.podcasts[id].expires > Date.now()
  ) {
    return Promise.resolve(globalCache.podcasts[id].data);
  } else {
    try {
      const data = lookupAndGetPodcastDetail(id);
      return Promise.resolve(data);
    } catch (e) {
      console.log("error!", e);
      return Promise.reject(e);
    }
  }
};

const lookupAndGetPodcastDetail = async (
  id: number
): Promise<PodcastDetail> => {
  const lookupPodcastResult = await lookupPodcast(id);
  const data = await getPodcastDetailResult(
    lookupPodcastResult.results[0].feedUrl
  );

  globalCache.podcasts[id] = {
    data,
    expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000
  };

  return data;
};

const lookupPodcast = async (id: number): Promise<PodcastLookupResponse> =>
  await get<PodcastLookupResponse>(`${baseUrl}/lookup?id=${id}`);

const getPodcastDetailResult = async (
  feedURL: string
): Promise<PodcastDetail> =>
  await get<PodcastDetail>(`${serverURL}?feedURL=${feedURL}`);
