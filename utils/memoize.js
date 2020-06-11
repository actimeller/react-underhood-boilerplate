import performanceOwnReact from "./performanceOwnReact";

const memoize = fn => {
  const cache = {};
  let memoizeUsingCounter = 0;
  let cacheUsingCounter = 0;

  const updateCache = newValue => {
    console.info("set in cache!");
    cacheUsingCounter += 1;
    return fn(...newValue);
  };

  return (...args) => {
    memoizeUsingCounter += 1;
    performanceOwnReact.start(`Memoize`);
    const stringifiedArgs = JSON.stringify(args);
    // eslint-disable-next-line no-multi-assign
    const result = (cache[stringifiedArgs] =
      cache[stringifiedArgs] || updateCache(args));
    performanceOwnReact.end(`Memoize`);
    performanceOwnReact.measure(`Memoize`);
    performanceOwnReact.statistics.cacheUsingPercent =
      (cacheUsingCounter / memoizeUsingCounter) * 100;
    return result;
  };
};

export default memoize;
