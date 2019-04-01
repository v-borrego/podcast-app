type MemoizedFunction<T> = () => Promise<T>;

interface Cache<T> {
  expires: number;
  data: T;
}

const CACHE_MINUTES_EXPIRE: number = 1440;

export const memoize = <T>(func: MemoizedFunction<T>): MemoizedFunction<T> => {
  let cache: Cache<T>;
  return () =>
    cache && cache.expires > Date.now()
      ? Promise.resolve(cache.data)
      : func()
          .then(
            data =>
              (cache = {
                expires: Date.now() + CACHE_MINUTES_EXPIRE * 60000,
                data
              })
          )
          .then(r => r.data);
};
