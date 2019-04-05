import axios from "axios";
import { Podcast, PodcastDetail } from "./api.model";
import { globalCache, CACHE_MINUTES_EXPIRE } from "./cache";

const serverBase = "http://localhost:3050";

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

export const getPodcastsList = (): Promise<Podcast[]> => {
  return globalCache.list && globalCache.list.expires > Date.now()
    ? Promise.resolve(globalCache.list.data)
    : get<Podcast[]>(`${serverBase}/api/top-list`).then(data => {
        globalCache.list = {
          data,
          expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000
        };
        return data;
      });
};

export const getPodcastDetail = (id: number): Promise<PodcastDetail> => {
  return globalCache.podcasts &&
    globalCache.podcasts[id] &&
    globalCache.podcasts[id].expires > Date.now()
    ? Promise.resolve(globalCache.podcasts[id].data)
    : get<PodcastDetail>(`${serverBase}/api/podcast?id=${id}`).then(data => {
        globalCache.podcasts[id] = {
          data,
          expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000
        };

        return data;
      });
};
