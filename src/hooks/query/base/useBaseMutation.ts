import { UseBaseMutationProps } from "@/hooks/query/base/types";
import { StandardErrorFormat } from "@/utils/error/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useBaseMutation = <DataType, ApiPayload>({
  baseInvalidateQueries,
  ...rest
}: UseBaseMutationProps<DataType, ApiPayload> = {}) => {
  const queryClient = useQueryClient();
  return useMutation<DataType, StandardErrorFormat, ApiPayload>({
    onSuccess: baseInvalidateQueries
      ? () => {
          queryClient.invalidateQueries({
            ...baseInvalidateQueries,
          });
        }
      : undefined,
    ...rest,
  });
};

export default useBaseMutation;
