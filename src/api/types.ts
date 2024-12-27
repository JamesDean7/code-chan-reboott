export type AsyncApiRequestFn<R, P = undefined> = P extends undefined
  ? () => Promise<R>
  : (props: P) => Promise<R>;
