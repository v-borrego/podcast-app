import axios from "axios";
import { FeedResponse } from "./api.model";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/us/rss";

const get = <T>(endpoint: string, params?: any): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get<T>(`${baseUrl}${endpoint}`)
        .then(res => res.data)
        .then(resolve);
    } catch (e) {
      console.log("api error", e);
      reject(e);
    }
  });
};

export const getPodcastsFeed = (): Promise<FeedResponse> => {
  return get<FeedResponse>("/toppodcasts/limit=100/genre=1310/json");
};
