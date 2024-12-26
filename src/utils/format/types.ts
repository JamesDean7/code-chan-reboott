import { QueryKey } from "@tanstack/react-query";

type CreateQueryKeyParams = {
  queryKey: QueryKey;
  apiPayload?: unknown;
};

export type CreateQueryKeyFn = (params: CreateQueryKeyParams) => QueryKey;
