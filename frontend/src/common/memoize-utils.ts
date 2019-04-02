type MemoizedFunction<T> = () => Promise<T>;

interface Cache<T> {
  [propId: number]: CacheItem<T>;
}

interface CacheItem<T> {
  cacheId: number;
  expires: number;
  data: T;
}

const CACHE_MINUTES_EXPIRE: number = 1440;

export const memoize = (cacheId: number) => <T>(
  func: MemoizedFunction<T>
): MemoizedFunction<T> => {
  console.log("memoizando id ", cacheId);
  let cache: Cache<T>;
  return () =>
    cache && cache[cacheId] && cache[cacheId].expires > Date.now()
      ? Promise.resolve(cache[cacheId].data)
      : func()
          .then(
            data =>
              (cache = {
                [cacheId]: {
                  cacheId: cacheId,
                  expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000,
                  data
                }
              })
          )
          .then(r => {
            console.log(r);
            return r[cacheId].data;
          }); // r[cacheId].data);
};
