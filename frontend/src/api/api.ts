import axios from "axios";
import {
  FeedResponse,
  PodcastDetail,
  PodcastDetailResponse,
  PodcastLookupResponse
} from "./api.model";

const baseUrl = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com";
const serverURL = "http://localhost:3050/api/podcast/";

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
  return get<FeedResponse>("/us/rss/toppodcasts/limit=100/genre=1310/json");
};

export const getPodcastDetail = async (id: number): Promise<PodcastDetail> => {
  try {
    const res = await axios.get<PodcastLookupResponse>(
      `${baseUrl}/lookup?id=${id}`
    );

    const feedURL = res.data.results[0].feedUrl;

    const detail = await axios.get<PodcastDetail>(
      `${serverURL}?feedURL=${feedURL}`
    );

    return Promise.resolve(detail.data);
  } catch (e) {
    console.log("error!", e);
    return Promise.reject(e);
  }
};
