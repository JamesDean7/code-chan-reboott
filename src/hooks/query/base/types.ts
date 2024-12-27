import { OmitByKey } from "@/types/utils";
import { StandardErrorFormat } from "@/utils/error/types";
import {
  InvalidateQueryFilters,
  UseMutationOptions,
  UseMutationResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export type UseBaseSuspenseQueryProps<DataType = unknown> =
  UseSuspenseQueryOptions<DataType, StandardErrorFormat>;

type UseBaseSuspenseQueryBasedFnParams<
  DataType = unknown,
  ApiPayload = undefined
> = ApiPayload extends undefined
  ? OmitByKey<UseBaseSuspenseQueryProps<DataType>, "queryKey" | "queryFn">
  : OmitByKey<UseBaseSuspenseQueryProps<DataType>, "queryKey" | "queryFn"> & {
      apiPayload?: ApiPayload;
    };

export type UseBaseSuspenseQueryBasedFn<
  DataType = unknown,
  ApiPayload = undefined
> = (
  params?: UseBaseSuspenseQueryBasedFnParams<DataType, ApiPayload>
) => UseSuspenseQueryResult<DataType, StandardErrorFormat>;

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
