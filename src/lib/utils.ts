/**
 * @param f callback
 * @param wait milliseconds
 * @param abortValue if has abortValue, promise will reject it if
 * @returns debounced: Promise, force: () => void
 */
export function debouncePromise<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
  abortValue: any = undefined
): {
  debounced: (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;
  force: () => void;
} {
  let cancel = () => {
    // do nothing
  };
  const force = {
    force: () => {
      // do nothing
    },
  };
  // type Awaited<T> = T extends PromiseLike<infer U> ? U : T
  type ReturnT = Awaited<ReturnType<T>>;
  const wrapFunc = (...args: Parameters<T>): Promise<ReturnT> => {
    cancel();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => resolve(fn(...args)), wait);
      cancel = () => {
        clearTimeout(timer);
        if (abortValue !== undefined) {
          reject(abortValue);
        }
      };
      force.force = () => {
        clearTimeout(timer);
        resolve(fn(...args));
      };
    });
  };

  return { debounced: wrapFunc, force: () => force.force() };
}
