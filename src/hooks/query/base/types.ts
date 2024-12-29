import type { OmitByKey } from "@/types/utils";
import type { StandardErrorFormat } from "@/utils/error/types";
import type {
  InfiniteData,
  InvalidateQueryFilters,
  UseMutationOptions,
  UseMutationResult,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

type QueryApiLPayload<T> = {
  apiPayload: T;
};

/* ::: UseBaseSuspenseQuery ::: */

export type UseBaseSuspenseQueryOptions<DataType = unknown> =
  UseSuspenseQueryOptions<DataType, StandardErrorFormat>;

export type UseBaseSuspenseQueryBasedFnParams<
  DataType = unknown,
  ApiPayload = undefined
> = ApiPayload extends undefined
  ? OmitByKey<UseBaseSuspenseQueryOptions<DataType>, "queryKey" | "queryFn">
  : OmitByKey<UseBaseSuspenseQueryOptions<DataType>, "queryKey" | "queryFn"> &
      QueryApiLPayload<ApiPayload>;

export type UseBaseSuspenseQueryBasedFnReturn<DataType = unknown> =
  UseSuspenseQueryResult<DataType, StandardErrorFormat>;

/* ::: UseBaseInfiniteQuery ::: */

export type UseBaseSuspenseInfiniteQueryOptions<
  DataType = unknown,
  PageParam = number
> = UseSuspenseInfiniteQueryOptions<
  DataType,
  StandardErrorFormat,
  InfiniteData<DataType, PageParam>
>;

export type UseBaseInfiniteQueryBasedFnParams<
  DataType = unknown,
  PageParam = number,
  ApiPayload = undefined
> = ApiPayload extends undefined
  ? OmitByKey<
      UseBaseSuspenseInfiniteQueryOptions<DataType, PageParam>,
      "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
    >
  : OmitByKey<
      UseBaseSuspenseInfiniteQueryOptions<DataType, PageParam>,
      "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
    > &
      QueryApiLPayload<ApiPayload>;

export type UseBaseInfiniteQueryBasedFnReturn<
  DataType = unknown,
  PageParam = number
> = UseSuspenseInfiniteQueryResult<
  InfiniteData<DataType, PageParam>,
  StandardErrorFormat
>;

/* ::: UseBaseMutation ::: */

export type UseBaseMutationProps<DataType, ApiPayload> = UseMutationOptions<
  DataType,
  StandardErrorFormat,
  ApiPayload
> & {
  baseInvalidateQueries?: InvalidateQueryFilters;
};

export type UseBaseMutationBasedFnParams<DataType, ApiPayload> = OmitByKey<
  UseBaseMutationProps<DataType, ApiPayload>,
  "mutationFn"
>;

export type UseBaseMutationBasedFnReturn<DataType, ApiPayload> =
  UseMutationResult<DataType, StandardErrorFormat, ApiPayload, unknown>;
