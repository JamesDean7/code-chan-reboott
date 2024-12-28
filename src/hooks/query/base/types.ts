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

type UseBaseSuspenseQueryBasedFnParams<
  DataType = unknown,
  ApiPayload = undefined
> = ApiPayload extends undefined
  ? OmitByKey<UseBaseSuspenseQueryOptions<DataType>, "queryKey" | "queryFn">
  : OmitByKey<UseBaseSuspenseQueryOptions<DataType>, "queryKey" | "queryFn"> &
      Partial<QueryApiLPayload<ApiPayload>>;

export type UseBaseSuspenseQueryBasedFn<
  DataType = unknown,
  ApiPayload = undefined
> = (
  params?: UseBaseSuspenseQueryBasedFnParams<DataType, ApiPayload>
) => UseSuspenseQueryResult<DataType, StandardErrorFormat>;

/* ::: UseBaseInfiniteQuery ::: */

export type UseBaseSuspenseInfiniteQueryOptions<
  DataType = unknown,
  PageParam = number
> = UseSuspenseInfiniteQueryOptions<
  DataType,
  StandardErrorFormat,
  InfiniteData<DataType, PageParam>
>;

type UseBaseInfiniteQueryBasedFnParams<
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
      Partial<QueryApiLPayload<ApiPayload>>;

export type UseBaseInfiniteQueryBasedFn<
  DataType = unknown,
  PageParam = number,
  ApiPayload = undefined
> = (
  params?: UseBaseInfiniteQueryBasedFnParams<DataType, PageParam, ApiPayload>
) => UseSuspenseInfiniteQueryResult<
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

type UseBaseMutationBasedFnParams<DataType, ApiPayload> = OmitByKey<
  UseBaseMutationProps<DataType, ApiPayload>,
  "mutationFn"
>;

export type UseBaseMutationBasedFn<DataType, ApiPayload> = (
  params?: UseBaseMutationBasedFnParams<DataType, ApiPayload>
) => UseMutationResult<DataType, StandardErrorFormat, ApiPayload, unknown>;
