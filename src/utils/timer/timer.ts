export const applyDebounce = <Args>(
  callback: (args: Args) => void,
  delayMs: number
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delayMs);
  };
};
