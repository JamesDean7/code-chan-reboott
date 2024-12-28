import type { UseBaseSuspenseInfiniteQueryOptions } from "@/hooks/query/base/types";
import type { StandardErrorFormat } from "@/utils/error/types";
import type { InfiniteData} from "@tanstack/react-query";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useBaseSuspenseInfiniteQuery = <DataType, PageParam = number>(
  params: UseBaseSuspenseInfiniteQueryOptions<DataType, PageParam>
) => {
  return useSuspenseInfiniteQuery<
    DataType,
    StandardErrorFormat,
    InfiniteData<DataType, PageParam>
  >(params);
};
