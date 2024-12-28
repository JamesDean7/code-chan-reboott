import type { QueryKey } from "@tanstack/react-query";

export type CreateQueryKeyParams = {
  queryKey: QueryKey;
  apiPayload?: unknown;
};
