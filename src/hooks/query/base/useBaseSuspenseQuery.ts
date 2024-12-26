import { StandardErrorFormat } from "@/utils/error/types";
import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";

type UseBaseSuspenseQueryProps<DataType = unknown> = UseSuspenseQueryOptions<
  DataType,
  StandardErrorFormat
>;

export const useBaseSuspenseQuery = <DataType>({
  ...rest
}: UseBaseSuspenseQueryProps<DataType>) => {
  const baseSuspenseQuery = useSuspenseQuery<DataType, StandardErrorFormat>({
    ...rest,
  });
  return baseSuspenseQuery;
};
