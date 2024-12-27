import { UseBaseSuspenseInfiniteQueryOptions } from "@/hooks/query/base/types";
import { StandardErrorFormat } from "@/utils/error/types";
import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useBaseSuspenseInfiniteQuery = <DataType, PageParam = number>(
  params: UseBaseSuspenseInfiniteQueryOptions<DataType, PageParam>
) => {
  return useSuspenseInfiniteQuery<
    DataType,
    StandardErrorFormat,
    InfiniteData<DataType, PageParam>
  >(params);
};
