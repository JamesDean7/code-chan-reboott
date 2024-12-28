import type { UseBaseSuspenseQueryOptions } from "@/hooks/query/base/types";
import type { StandardErrorFormat } from "@/utils/error/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useBaseSuspenseQuery = <DataType>(
  params: UseBaseSuspenseQueryOptions<DataType>
) => {
  return useSuspenseQuery<DataType, StandardErrorFormat>(params);
};
