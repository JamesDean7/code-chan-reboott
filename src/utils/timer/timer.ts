export const applyDebounce = <Args extends unknown>(
  callback: (args: Args) => void,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};
