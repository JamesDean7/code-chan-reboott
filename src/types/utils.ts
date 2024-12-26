export type ExtractByKey<T, K extends T> = Extract<T, K>;

export type OmitByKey<T, K extends keyof T> = Omit<T, K>;

export type SelectiveRequired<T, TargetKey extends keyof T> = Partial<
  Omit<T, TargetKey>
> &
  Required<Pick<T, TargetKey>>;

export type ExcludeFromType<T, E> = {
  [K in keyof T]: Exclude<T[K], E>;
};

export type MatchPropAndValueFromKeys<T extends string> = {
  [Prop in T]: `${string & Prop}`;
};
