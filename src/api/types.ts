import { StandardErrorFormat } from "@/utils/error/types";

type AsyncApiResponse<T> = Promise<T | StandardErrorFormat>;

export type AsyncApiRequestFn<R, P = unknown> = (
  params?: P
) => AsyncApiResponse<R>;
