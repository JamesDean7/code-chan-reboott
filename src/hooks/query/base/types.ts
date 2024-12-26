import { OmitByKey } from "@/types/utils";
import { StandardErrorFormat } from "@/utils/error/types";
import { UseSuspenseQueryOptions } from "@tanstack/react-query";

export type UseBaseSuspenseQueryProps<DataType = unknown> =
  UseSuspenseQueryOptions<DataType, StandardErrorFormat>;

export type UseBaseSuspenseQueryBasedFnParams<
  DataType = unknown,
  ApiPayload = unknown
> = OmitByKey<UseBaseSuspenseQueryProps<DataType>, "queryKey" | "queryFn"> & {
  apiPayload?: ApiPayload;
};
