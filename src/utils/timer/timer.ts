export const applyDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delayMs: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delayMs);
  };
};
