import { GlobalCache } from "./cache.model";

export const globalCache: GlobalCache = {
  list: null,
  podcasts: {}
};

export const CACHE_MINUTES_EXPIRE: number = 1440;
