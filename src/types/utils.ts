export type ExtractByKey<T, K extends T> = Extract<T, K>;

export type OmitByKey<T, K extends keyof T> = Omit<T, K>;
