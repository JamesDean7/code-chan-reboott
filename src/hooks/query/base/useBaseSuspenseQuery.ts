import { UseBaseSuspenseQueryProps } from "@/hooks/query/base/types";
import { StandardErrorFormat } from "@/utils/error/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useBaseSuspenseQuery = <DataType>({
  ...rest
}: UseBaseSuspenseQueryProps<DataType>) => {
  const baseSuspenseQuery = useSuspenseQuery<DataType, StandardErrorFormat>({
    ...rest,
  });
  return baseSuspenseQuery;
};
