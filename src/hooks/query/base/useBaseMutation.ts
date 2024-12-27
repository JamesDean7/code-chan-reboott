import { UseBaseMutationProps } from "@/hooks/query/base/types";
import { StandardErrorFormat } from "@/utils/error/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useBaseMutation = <DataType, ApiPayload>({
  baseInvalidateQueries,
  ...rest
}: UseBaseMutationProps<DataType, ApiPayload> = {}) => {
  const queryClient = useQueryClient();
  const baseMutationQuery = useMutation<
    DataType,
    StandardErrorFormat,
    ApiPayload
  >({
    onSuccess: () => {
      console.log(" ::: base success ::: ");
      const test = { ...baseInvalidateQueries };
      console.log({ test });
      if (baseInvalidateQueries) {
        queryClient.invalidateQueries({
          ...baseInvalidateQueries,
        });
      }
    },
    ...rest,
  });

  return baseMutationQuery;
};

export default useBaseMutation;
