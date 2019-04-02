import axios from "axios";
import {
  FeedResponse,
  PodcastDetail,
  PodcastDetailResponse
} from "./api.model";

const baseUrl = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/";

const get = <T>(endpoint: string): Promise<T> => {
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
  return get<FeedResponse>("us/rss/toppodcasts/limit=100/genre=1310/json");
};

export const getPodcastDetail = (id: number): Promise<PodcastDetail> => {
  return get<PodcastDetailResponse>(`lookup?id=${id}`).then(
    response => response.results[0]
  );
};
